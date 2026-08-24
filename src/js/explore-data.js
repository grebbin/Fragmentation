import { geoIdentity, geoPath, json, select, zoom, zoomIdentity } from "d3";
import { feature } from "topojson-client";
import { exploreData as exploreDataContent } from "./content.js";

const GERMANY_TOPOJSON_URL = "/data/wald_expo/deut.topojson";
const DEFAULT_STATE_AGS = "09";
const MAP_VIEW_SIZE = 760;
// Bayern renders at 60% of its original size (712px inner side at margin 24
// -> 427px), asymmetric so it sits near the top of the box (close to the
// legend above it) instead of centred with empty space on all sides. The
// SVG's own viewBox height is also trimmed to just past this box, so there's
// no leftover dead space below it for preserveAspectRatio to centre around.
const MAP_INNER_SIDE = 712 * 0.6;
const MAP_MARGIN_TOP = 20;
const MAP_MARGIN_X = (MAP_VIEW_SIZE - MAP_INNER_SIDE) / 2;
const MESH_CSV_URL = "/data/U06KG__2024.csv";
// Only used as a walking-time fallback for states missing state_stats.json.
const WALK_SPEED_KMH = 5;
// Height of the "all states" ranking canvas; width is derived from the
// states' own summed widths so the row can overflow into horizontal scroll.
// The SVG's rendered CSS height is fixed by its flex container regardless of
// this number, so shrinking the viewBox's height denominator (states' own
// size in viewBox units is unchanged) is what makes states render bigger -
// /1.1 here is a deliberate +10% render-size bump.
const RANKING_VIEW_HEIGHT = 700 / 1.1;
const RANKING_GAP = 24;
// Extra room past the last (smallest-mesh) state so it isn't flush against
// the edge of the scrollable area when scrolled all the way right.
const RANKING_TRAILING_SPACE = 60;
const RANKING_SCROLL_STEP = 360;
// Kept in sync with the transition duration on the detail/ranking elements
// in sections.css, so the display swap waits for the fade-out to finish.
const RANKING_FADE_MS = 220;
const MAP_ZOOM_MAX = 6;
const DETAIL_VIEW_SELECTOR = ".explore-data__header, .explore-data__cards, .explore-data__map-wrap, .explore-data__overview, .explore-data__overview-caption, .explore-data__overview-nav";
const RANKING_VIEW_SELECTOR = ".explore-data__ranking-scale, .explore-data__ranking-wrap";

// Every state's assets live under its own lower-cased folder name, e.g.
// "Nordrhein-Westfalen" -> /data/satellite/nordrhein-westfalen/. The state
// names here come from the CSV as precomposed Unicode (NFC: "ü" is one
// codepoint), but the folders on disk were created on macOS, which stores
// filenames decomposed (NFD: "u" + a combining diaeresis) - byte-identical
// on screen but different strings, so an un-normalized fetch 404s for any
// state with an accented letter (Baden-Württemberg, Thüringen). Normalizing
// to NFD here matches what's actually on disk (and in git, since it commits
// whatever bytes are there).
function dataRootFor(stateName) {
  return `/data/satellite/${stateName.toLowerCase().normalize("NFD")}`;
}

// Fits one state's boundary to the detail map's display box. Used both to
// actually position/size that state's own boundary and patches, and - once,
// for Bayern only - to derive a fixed reference scale for the mesh pattern
// (see loadStateDetail): reusing this same box means that reference is
// exactly what Bayern's own projection produces, so Bayern's appearance is
// unchanged by the fix.
function fitStateProjection(stateFeature) {
  return geoIdentity()
    .reflectY(true)
    .fitExtent([[MAP_MARGIN_X, MAP_MARGIN_TOP], [MAP_VIEW_SIZE - MAP_MARGIN_X, MAP_MARGIN_TOP + MAP_INNER_SIDE]], stateFeature);
}

function formatKm2(value) {
  return Number.isFinite(value) ? `${value.toFixed(2).replace(".", ",")} km²` : "—";
}

function formatPercent(value) {
  return Number.isFinite(value) ? `${value.toFixed(1).replace(".", ",")}%` : "—";
}

// U06KG__2024.csv uses German `;`-separated rows and comma decimals.
function parseMeshCsv(text) {
  return new Map(
    text
      .replace(/^﻿/, "")
      .split(/\r?\n/)
      .filter((line) => /^\d+;/.test(line.trim()))
      .map((line) => {
        const [, stateCode, stateName, rawValue] = line.split(";");
        return [stateCode, { stateName, valueKm2: Number(rawValue.replace(",", ".").trim()) }];
      })
  );
}

function meshPattern(defsSelection, id, valueKm2, projectionScale) {
  const cellSideMetres = Math.sqrt(valueKm2 * 1e6);
  const cellSidePixels = cellSideMetres * projectionScale;
  const pattern = defsSelection.append("pattern")
    .attr("id", id)
    .attr("patternUnits", "userSpaceOnUse")
    .attr("width", cellSidePixels)
    .attr("height", cellSidePixels);
  pattern.append("path")
    .attr("d", `M ${cellSidePixels} 0 L 0 0 0 ${cellSidePixels}`)
    .attr("class", "explore-data__mesh-line");
  return cellSidePixels;
}

export async function setupExploreData() {
  const root = document.querySelector(".explore-data");
  const svg = root?.querySelector(".explore-data__map-svg");
  const rankingSvg = root?.querySelector(".explore-data__ranking-svg");
  const status = root?.querySelector(".explore-data__status");
  if (!root || !svg || !rankingSvg) return;

  try {
    const [germanyTopology, meshCsvText] = await Promise.all([
      json(GERMANY_TOPOJSON_URL),
      fetch(MESH_CSV_URL).then((response) => response.text())
    ]);

    const germany = feature(germanyTopology, germanyTopology.objects.data);
    const meshValues = parseMeshCsv(meshCsvText);

    // Each state's boundary is fit to the same pixel box, so a tiny state
    // (e.g. Berlin) ends up zoomed in far more than a huge one (e.g.
    // Nordrhein-Westfalen) just to fill it. Sizing the mesh pattern off that
    // per-state zoom (projection.scale()) would make cell size reflect the
    // state's physical size rather than its actual mesh value - a smaller,
    // more zoomed-in state could show a coarser grid than a state with a
    // genuinely bigger mesh. Fixing the pattern's scale to Bayern's own
    // (used as the default/reference state) keeps it comparable across
    // every state, at the cost of very small or very large states showing a
    // correspondingly sparse or dense grid relative to their own outline -
    // which is the accurate picture, not a bug.
    const bayernFeature = germany.features.find((f) => f.properties.AGS === DEFAULT_STATE_AGS);
    const meshReferenceScale = fitStateProjection(bayernFeature).scale();

    // The ranking thumbnails show the same mesh-grid + forest-patches picture
    // as the detail view, so every state's forest_patches.geojson needs to be
    // on hand up front rather than only fetched on selection.
    const forestPatchesByState = new Map(
      await Promise.all(
        Array.from(meshValues, async ([stateCode, entry]) => {
          const patches = await json(`${dataRootFor(entry.stateName)}/forest_patches.geojson`).catch(() => null);
          return [stateCode, patches];
        })
      )
    );

    // The forest overview photo used to just fill its box (object-fit:
    // contain), so every patch - regardless of real size - rendered at the
    // same on-screen size. To make it genuinely true-to-scale instead, every
    // photo shares one fixed metres-per-pixel ratio, calibrated here to the
    // *median* patch dimension across all states - a typical-sized patch
    // fills the box closely, smaller ones show with some empty space around
    // them, and only the largest handful (up to ~2.6x the median) end up
    // cropped, zoomed in on the box rather than shrunk to fit.
    const patchDimensionsM = [];
    forestPatchesByState.forEach((collection) => {
      collection?.features?.forEach(({ properties }) => {
        patchDimensionsM.push(properties.real_width_m, properties.real_height_m);
      });
    });
    patchDimensionsM.sort((a, b) => a - b);
    const mid = Math.floor(patchDimensionsM.length / 2);
    root._patchScaleReferenceM = patchDimensionsM.length % 2 === 0
      ? (patchDimensionsM[mid - 1] + patchDimensionsM[mid]) / 2
      : patchDimensionsM[mid];

    const selectState = (ags) => loadStateDetail(root, svg, rankingSvg, germany, meshValues, ags, meshReferenceScale);

    renderRanking(rankingSvg, germany, meshValues, forestPatchesByState, (ags) => {
      switchExploreDataView(root, false);
      void selectState(ags);
    });
    wireAllStatesToggle(root);
    wireRankingDrag(root);
    wireMapZoom(root, svg);
    wireOverviewNav(root);
    wireFinishStory(root);
    wireScrollLock(root);
    window.addEventListener("resize", () => root._overviewRescale?.());

    await selectState(DEFAULT_STATE_AGS);

    status?.remove();
    root.classList.add("is-ready");
  } catch (error) {
    console.error("Unable to render the Explore the Data section", error);
    if (status) status.textContent = exploreDataContent.detail.errorStatus;
  }
}

// Loads and renders one state's detail view (cards, map, forest overview).
// Called once up front for the default state, then again on every ranking
// click - each call fully replaces the previous state's content in place.
async function loadStateDetail(root, svg, rankingSvg, germany, meshValues, ags, meshReferenceScale) {
  const stateFeature = germany.features.find((f) => f.properties.AGS === ags);
  const meshEntry = meshValues.get(ags);
  if (!stateFeature || !meshEntry) throw new Error(`No boundary or mesh value found for AGS ${ags}`);
  const dataRoot = dataRootFor(meshEntry.stateName);

  const [stateStats, forestPatches] = await Promise.all([
    fetchStateStats(dataRoot, meshEntry),
    json(`${dataRoot}/forest_patches.geojson`).catch(() => null)
  ]);

  const projection = fitStateProjection(stateFeature);
  const path = geoPath(projection);

  root.dataset.dataRoot = dataRoot;
  renderCards(root, stateStats);
  const patchSelection = renderMap(svg, path, stateFeature, forestPatches, stateStats.meff_km2, meshReferenceScale);
  showRandomPatch(root, patchSelection);
  setActiveRankingState(rankingSvg, ags);
  root._resetMapZoom?.();
}

// state_stats.json isn't complete for every state yet (Mecklenburg-
// Vorpommern, at least, is missing meff_km2/walking_time_min while still
// having real unfragmented-forest figures) - fill in just the missing
// fields from the mesh-size CSV (which does cover all 16) rather than
// discarding the rest of a state's real published stats whenever any one
// field is absent. Fields with no CSV equivalent (unfragmented-forest
// share/area) stay unset if genuinely missing, rather than guessing.
async function fetchStateStats(dataRoot, meshEntry) {
  const cellSideMetres = Math.sqrt(meshEntry.valueKm2 * 1e6);
  const diagonalMetres = cellSideMetres * Math.SQRT2;
  const fallback = {
    state: meshEntry.stateName,
    meff_km2: meshEntry.valueKm2,
    walking_time_min: (diagonalMetres / 1000 / WALK_SPEED_KMH) * 60,
    unfragmented_forest_pct: null,
    unfragmented_forest_km2: null
  };
  try {
    const stats = await json(`${dataRoot}/state_stats.json`);
    return { ...fallback, ...stats };
  } catch {
    return fallback;
  }
}

// Picks one forest patch to show by default rather than a whole-state image.
// Also stashes the full patch list on root so the overview's prev/next
// buttons (see wireOverviewNav) can step through them without needing their
// own reference to the current state's patchSelection.
function showRandomPatch(root, patchSelection) {
  const nodes = patchSelection.nodes();
  root._patchNodes = nodes;
  const nav = root.querySelector(".explore-data__overview-nav");
  if (!nodes.length) {
    root._patchIndex = -1;
    if (nav) nav.style.display = "none";
    clearOverview(root);
    return;
  }
  if (nav) nav.style.display = "";
  const index = Math.floor(Math.random() * nodes.length);
  root._patchIndex = index;
  showPatchInOverview(root, nodes[index].__data__.properties, nodes[index]);
}

// A handful of states (Berlin, Bremen, Hamburg, Saarland, Schleswig-
// Holstein) genuinely have zero forest patches over the 50 km² threshold -
// clear any previous state's leftover image rather than show it stale.
function clearOverview(root) {
  const overview = root.querySelector(".explore-data__overview");
  const image = root.querySelector(".explore-data__overview-image");
  const square = root.querySelector(".explore-data__overview-square");
  const caption = root.querySelector(".explore-data__overview-caption");
  if (overview) overview.style.display = "none";
  if (image) { image.removeAttribute("src"); image.alt = ""; }
  if (square) { square.style.width = "0"; square.style.height = "0"; }
  if (caption) caption.textContent = exploreDataContent.detail.noForestCopy;
  root.querySelectorAll(".explore-data__patch.is-selected").forEach((patch) => patch.classList.remove("is-selected"));
  root._overviewRescale = undefined;
}

// Steps the overview to the previous/next forest patch, wrapping around at
// either end. Shares state with showRandomPatch/showPatchInOverview via
// root._patchNodes/_patchIndex, so it stays in sync whichever way a patch
// was last selected (random default, clicking the map, or these buttons).
function wireOverviewNav(root) {
  const step = (delta) => {
    const nodes = root._patchNodes;
    if (!nodes || !nodes.length) return;
    root._patchIndex = (root._patchIndex + delta + nodes.length) % nodes.length;
    const node = nodes[root._patchIndex];
    showPatchInOverview(root, node.__data__.properties, node);
  };
  root.querySelector(".explore-data__overview-prev")?.addEventListener("click", () => step(-1));
  root.querySelector(".explore-data__overview-next")?.addEventListener("click", () => step(1));
}

// Crossfades the media panel between the Bayern detail view and the ranked
// overview: fade the current view out, swap which is in the document flow
// once it's invisible, then fade the new one in. Avoids the two views ever
// being stacked on top of each other mid-transition.
function switchExploreDataView(root, toAllStates) {
  if (root.classList.contains("is-all-states") === toAllStates) return;
  const outgoing = root.querySelectorAll(toAllStates ? DETAIL_VIEW_SELECTOR : RANKING_VIEW_SELECTOR);
  const incoming = root.querySelectorAll(toAllStates ? RANKING_VIEW_SELECTOR : DETAIL_VIEW_SELECTOR);
  const introCopy = root.querySelector(".explore-data__intro-copy");

  outgoing.forEach((el) => { el.style.opacity = "0"; });
  window.setTimeout(() => {
    root.classList.toggle("is-all-states", toAllStates);
    if (introCopy) introCopy.innerHTML = toAllStates ? exploreDataContent.detail.introCopyRanking : exploreDataContent.detail.introCopy;
    incoming.forEach((el) => { el.style.opacity = "0"; });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        incoming.forEach((el) => { el.style.opacity = "1"; });
      });
    });
  }, RANKING_FADE_MS);
}

// "All States" swaps the media panel between the Bayern detail view and the
// ranked overview in place - no navigation, no scroll, same screen.
function wireAllStatesToggle(root) {
  root.querySelector(".explore-data__header-back")?.addEventListener("click", () => {
    switchExploreDataView(root, true);
  });
  root.querySelector(".explore-data__ranking-prev")?.addEventListener("click", () => {
    root.querySelector(".explore-data__ranking-scroll")?.scrollBy({ left: -RANKING_SCROLL_STEP, behavior: "smooth" });
  });
  root.querySelector(".explore-data__ranking-next")?.addEventListener("click", () => {
    root.querySelector(".explore-data__ranking-scroll")?.scrollBy({ left: RANKING_SCROLL_STEP, behavior: "smooth" });
  });
}

// Click-and-drag panning for the ranking row. Pointer capture is deferred
// until real movement is seen, so a plain click on Bayern's shape still
// reaches its own handler instead of being swallowed as a zero-distance drag.
function wireRankingDrag(root) {
  const scrollEl = root.querySelector(".explore-data__ranking-scroll");
  if (!scrollEl) return;
  let isDown = false;
  let dragMoved = false;
  let startX = 0;
  let startScrollLeft = 0;
  let pointerId = null;

  scrollEl.addEventListener("pointerdown", (event) => {
    isDown = true;
    dragMoved = false;
    startX = event.clientX;
    startScrollLeft = scrollEl.scrollLeft;
    pointerId = event.pointerId;
  });
  scrollEl.addEventListener("pointermove", (event) => {
    if (!isDown) return;
    const deltaX = event.clientX - startX;
    if (!dragMoved && Math.abs(deltaX) > 6) {
      dragMoved = true;
      scrollEl.setPointerCapture(pointerId);
      scrollEl.classList.add("is-dragging");
    }
    if (dragMoved) {
      scrollEl.scrollLeft = startScrollLeft - deltaX;
      event.preventDefault();
    }
  });
  const endDrag = () => {
    isDown = false;
    scrollEl.classList.remove("is-dragging");
  };
  scrollEl.addEventListener("pointerup", endDrag);
  scrollEl.addEventListener("pointercancel", endDrag);
  scrollEl.addEventListener("click", (event) => {
    if (dragMoved) event.stopPropagation();
  }, true);
}

// Lets the user zoom into the detail map (wheel/pinch/drag-to-pan), but
// scaleExtent's floor of 1 means "zooming out" only ever returns to the
// natural framing - it can never shrink past it. The transform is applied as
// a CSS transform on the <svg> element itself (not an inner viewBox-space
// <g>), so it's in the same CSS-pixel coordinate system d3-zoom's pointer
// tracking already uses - no viewBox-vs-screen-pixel unit conversion needed.
function wireMapZoom(root, svg) {
  const wrap = svg.closest(".explore-data__map-wrap");
  if (!wrap) return;
  svg.style.transformOrigin = "0 0";
  const zoomBehavior = zoom()
    .scaleExtent([1, MAP_ZOOM_MAX])
    .on("zoom", (event) => {
      svg.style.transform = `translate(${event.transform.x}px, ${event.transform.y}px) scale(${event.transform.k})`;
      wrap.classList.toggle("is-zoomed", event.transform.k > 1);
    });
  const applyExtent = () => {
    const rect = wrap.getBoundingClientRect();
    zoomBehavior.extent([[0, 0], [rect.width, rect.height]]).translateExtent([[0, 0], [rect.width, rect.height]]);
  };
  applyExtent();
  window.addEventListener("resize", applyExtent);
  select(wrap).call(zoomBehavior);
  root._resetMapZoom = () => select(wrap).call(zoomBehavior.transform, zoomIdentity);
}

// Plain anchor by default; just make sure the lock releases before it jumps.
function wireFinishStory(root) {
  root.querySelector(".explore-data__continue")?.addEventListener("click", () => {
    beginNavigatingAway();
  });
}

// ---------------------------------------------------------------------------
// Scroll lock: once this screen is fully in view, wheel/touch/keyboard
// scrolling is blocked so the only way on or off it is the header's back
// control or the Finish Story link. Both explicitly unlock before they
// trigger their own programmatic scroll (which isn't affected by the
// lock - it only blocks user-initiated scroll input).
//
// Blocking wheel/touchmove/keydown covers the common input paths, but not
// every way a page can scroll - dragging the browser's own scrollbar thumb,
// for one, is a native mousedown/mousemove sequence that never dispatches
// any of those three event types, so it slipped straight through. Rather
// than trying to enumerate every possible input, preventScrollDrift adds a
// second layer that just enforces the *result*: while locked, a "scroll"
// event (fired for literally any reason - scrollbar drag included) snaps
// the page straight back to the locked position. Belt and suspenders.
// ---------------------------------------------------------------------------

const SCROLL_LOCK_THRESHOLD = 0.95;
// Long enough to cover the browser's default smooth-scroll duration for the
// header-back jump (the longest of the two escape routes).
const NAVIGATE_AWAY_SUPPRESS_MS = 1500;
const SCROLL_KEYS = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "]);
let scrollLockActive = false;
let lockedScrollY = 0;
// While true, the observer won't re-snap/re-lock. This can't be driven by
// intersection ratio: the panel is shorter than the viewport, so "no longer
// >= 95% visible" isn't reliably true until well after the escape scroll has
// settled - checking it mid-animation just snaps straight back and cancels
// the navigation the user clicked to start. A fixed cooldown sidesteps that.
let isNavigatingAway = false;
let navigatingAwayTimer = null;

function preventScrollEvent(event) {
  event.preventDefault();
}

function preventScrollKey(event) {
  if (SCROLL_KEYS.has(event.key)) event.preventDefault();
}

function preventScrollDrift() {
  if (window.scrollY !== lockedScrollY) {
    window.scrollTo({ top: lockedScrollY, left: window.scrollX, behavior: "instant" });
  }
}

function lockScroll() {
  lockedScrollY = window.scrollY;
  if (scrollLockActive) return;
  scrollLockActive = true;
  window.addEventListener("wheel", preventScrollEvent, { passive: false });
  window.addEventListener("touchmove", preventScrollEvent, { passive: false });
  window.addEventListener("keydown", preventScrollKey, { passive: false });
  window.addEventListener("scroll", preventScrollDrift, { passive: true });
}

function unlockScroll() {
  if (!scrollLockActive) return;
  scrollLockActive = false;
  window.removeEventListener("wheel", preventScrollEvent);
  window.removeEventListener("touchmove", preventScrollEvent);
  window.removeEventListener("keydown", preventScrollKey);
  window.removeEventListener("scroll", preventScrollDrift);
}

function beginNavigatingAway() {
  isNavigatingAway = true;
  unlockScroll();
  clearTimeout(navigatingAwayTimer);
  navigatingAwayTimer = setTimeout(() => { isNavigatingAway = false; }, NAVIGATE_AWAY_SUPPRESS_MS);
}

function wireScrollLock(root) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (isNavigatingAway) return;
      const entry = entries[0];
      if (entry.isIntersecting && entry.intersectionRatio >= SCROLL_LOCK_THRESHOLD) {
        root.scrollIntoView({ behavior: "instant", block: "start" });
        lockScroll();
        forceExploreDataNav();
      } else {
        unlockScroll();
      }
    },
    { threshold: [0, 0.5, SCROLL_LOCK_THRESHOLD, 1] }
  );
  observer.observe(root);
  // Any other same-page link (side navigation, logo, etc.) that jumps
  // straight to a different section also needs to release the lock first,
  // the same way the back control and Finish Story link already do -
  // otherwise their jump gets treated as drift and snapped straight back.
  window.addEventListener("explore-data:leave", beginNavigatingAway);
}

// The Fragmentation chapter's own pinned scroll-jacking (applyMapStep in
// scrollytelling.js) writes nav-link highlighting directly on every scroll
// tick while it's active, and can occasionally race with this section's own
// arrival right at the handoff boundary, leaving "4 Fragmentation"
// highlighted a moment after the user has genuinely landed here. Once this
// section is confirmed locked-in (see wireScrollLock above), assert
// "5 Explore the Data" as the definitive answer rather than trusting
// whichever system happened to write last.
function forceExploreDataNav() {
  document.querySelectorAll("[data-section-link]").forEach((link) => {
    const isActive = link.dataset.sectionLink === "explore-data";
    link.classList.toggle("is-active", isActive);
    link.setAttribute("aria-current", isActive ? "location" : "false");
  });
}

// ---------------------------------------------------------------------------
// Detail screen: info cards
// ---------------------------------------------------------------------------

function renderCards(root, stateStats) {
  setCard(root, "mesh_size", formatKm2(stateStats.meff_km2));
  setCard(root, "walking_time", `${Math.round(stateStats.walking_time_min)} min`);
  setCard(root, "pct_unfragmented", formatPercent(stateStats.unfragmented_forest_pct));
  setCard(root, "unfragmented_km2", formatKm2(stateStats.unfragmented_forest_km2));
  root.querySelector('.explore-data__state-name').textContent = stateStats.state;
  root.dataset.meshKm2 = String(stateStats.meff_km2);
}

function setCard(root, key, value) {
  const valueEl = root.querySelector(`[data-card="${key}"] .explore-data__card-value`);
  if (valueEl) valueEl.textContent = value;
}

// ---------------------------------------------------------------------------
// Detail screen: map
// ---------------------------------------------------------------------------

// Called once per selected state, so any previous state's defs/boundary are
// cleared first rather than left piling up underneath the new ones. Takes
// path (the current state's own fit-to-box projection, for shape/position)
// and meshReferenceScale (a fixed, state-independent scale - see
// setupExploreData) separately, so the mesh pattern's cell size reflects
// the real mesh value consistently across states rather than each state's
// own zoom level.
function renderMap(svg, path, stateFeature, forestPatches, valueKm2, meshReferenceScale) {
  const svgSel = select(svg);
  const defs = svgSel.select(".explore-data__mesh-defs");
  defs.selectAll("*").remove();
  meshPattern(defs, "explore-data-mesh-pattern", valueKm2, meshReferenceScale);

  svgSel.select(".explore-data__layer--boundary")
    .selectAll("path")
    .data([stateFeature])
    .join("path")
    .attr("class", "explore-data__boundary")
    .attr("fill", "url(#explore-data-mesh-pattern)")
    .attr("d", path);

  const patches = forestPatches?.features ?? [];
  const patchSelection = svgSel.select(".explore-data__layer--patches")
    .selectAll("path")
    .data(patches)
    .join("path")
    .attr("class", "explore-data__patch")
    .attr("d", path)
    .attr("tabindex", 0)
    .attr("role", "button")
    .attr("aria-label", (d) => `${d.properties.id}, ${d.properties.area_ha.toFixed(0)} hectares`)
    .on("click", function (event, d) { showPatchInOverview(svg.closest(".explore-data"), d.properties, this); })
    .on("pointerenter", function (event, d) { showPatchInOverview(svg.closest(".explore-data"), d.properties, this); })
    .on("focus", function (event, d) { showPatchInOverview(svg.closest(".explore-data"), d.properties, this); })
    .on("keydown", function (event, d) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showPatchInOverview(svg.closest(".explore-data"), d.properties, this);
      }
    });

  return patchSelection;
}

// ---------------------------------------------------------------------------
// "All States" ranking overview
// ---------------------------------------------------------------------------

// Lays every mesh-value state out in one row, ranked highest to lowest, and
// renders it as a static (non-scroll-driven) SVG the "All States" toggle
// reveals in place. Every state is clickable - onSelectState(stateCode) is
// called with the clicked state's AGS code, and the currently-selected one
// is kept highlighted via setActiveRankingState(). Each state shows the same
// mesh-grid + forest-patches picture as the detail view, via
// forestPatchesByState (stateCode -> forest_patches.geojson, fetched
// up front in setupExploreData).
function renderRanking(svg, germany, meshValues, forestPatchesByState, onSelectState) {
  const projection = geoIdentity().reflectY(true).fitExtent([[34, 34], [966, 966]], germany);
  const path = geoPath(projection);
  const svgSel = select(svg);
  const defs = svgSel.select(".explore-data__ranking-mesh-defs");

  const stateFeatureGroups = new Map();
  germany.features.forEach((featureItem) => {
    const stateCode = featureItem.properties.AGS;
    if (!meshValues.has(stateCode)) return;
    if (!stateFeatureGroups.has(stateCode)) stateFeatureGroups.set(stateCode, []);
    stateFeatureGroups.get(stateCode).push(featureItem);
  });

  meshValues.forEach(({ valueKm2 }, stateCode) => {
    meshPattern(defs, `explore-data-ranking-mesh-${stateCode}`, valueKm2, projection.scale());
  });

  const rankedStates = Array.from(stateFeatureGroups, ([stateCode, features]) => {
    const { stateName, valueKm2 } = meshValues.get(stateCode);
    const stateCollection = { type: "FeatureCollection", features };
    const [[x0, y0], [x1, y1]] = path.bounds(stateCollection);
    return { stateCode, stateName, valueKm2, stateCollection, width: x1 - x0, height: y1 - y0, x0, y0 };
  }).sort((a, b) => b.valueKm2 - a.valueKm2);

  const rowY = RANKING_VIEW_HEIGHT / 2 - Math.max(...rankedStates.map((item) => item.height)) / 2;
  const labelY = rowY + Math.max(...rankedStates.map((item) => item.height)) + 40;
  let cursor = 0;
  const rankingItems = rankedStates.map((item) => {
    const dx = cursor - item.x0;
    const dy = rowY - item.y0;
    const targetX = cursor + item.width / 2;
    cursor += item.width + RANKING_GAP;
    return { ...item, dx, dy, targetX };
  });
  svg.setAttribute("viewBox", `0 0 ${Math.max(cursor - RANKING_GAP + RANKING_TRAILING_SPACE, 1)} ${RANKING_VIEW_HEIGHT}`);

  const statesLayer = svgSel.select(".explore-data__ranking-states");
  const stateGroups = statesLayer.selectAll("g")
    .data(rankingItems)
    .join("g")
    .attr("class", "explore-data__ranking-item")
    .attr("data-state-code", ({ stateCode }) => stateCode);

  stateGroups.append("path")
    .attr("class", "explore-data__ranking-state")
    .attr("data-state-code", ({ stateCode }) => stateCode)
    .attr("d", ({ stateCollection }) => path(stateCollection))
    .attr("fill", ({ stateCode }) => `url(#explore-data-ranking-mesh-${stateCode})`)
    .style("--ranking-dx", ({ dx }) => `${dx}px`)
    .style("--ranking-dy", ({ dy }) => `${dy}px`)
    .attr("tabindex", 0)
    .attr("role", "button")
    .attr("aria-label", ({ stateName }) => `Show ${stateName}`);

  // Forest patches sit on top of the mesh-filled boundary, sharing its
  // translate via the same --ranking-dx/--ranking-dy custom properties.
  // pointer-events: none (see CSS) keeps clicks/hover landing on the
  // boundary path underneath rather than getting swallowed here.
  stateGroups.each(function (d) {
    const patches = forestPatchesByState.get(d.stateCode)?.features ?? [];
    select(this).selectAll(".explore-data__ranking-patch")
      .data(patches)
      .join("path")
      .attr("class", "explore-data__ranking-patch")
      .attr("d", path)
      .style("--ranking-dx", `${d.dx}px`)
      .style("--ranking-dy", `${d.dy}px`);
  });

  stateGroups.append("line")
    .attr("class", "explore-data__ranking-leader")
    .attr("x1", ({ targetX }) => targetX)
    .attr("y1", rowY + Math.max(...rankedStates.map((item) => item.height)) + 6)
    .attr("x2", ({ targetX }) => targetX)
    .attr("y2", labelY - 24);

  const labels = stateGroups.append("text")
    .attr("class", "explore-data__ranking-label")
    .attr("data-state-code", ({ stateCode }) => stateCode)
    .attr("x", ({ targetX }) => targetX)
    .attr("y", labelY)
    .attr("tabindex", 0)
    .attr("role", "button");
  labels.append("tspan")
    .attr("x", ({ targetX }) => targetX)
    .text(({ stateName }) => stateName);
  labels.append("tspan")
    .attr("class", "explore-data__ranking-label-value")
    .attr("x", ({ targetX }) => targetX)
    .attr("dy", 18)
    .text(({ valueKm2 }) => `${valueKm2.toFixed(2)} km²`);

  const selectFromEvent = (event) => {
    const stateCode = event.currentTarget.dataset.stateCode;
    if (stateCode) onSelectState(stateCode);
  };
  svgSel.selectAll(".explore-data__ranking-state, .explore-data__ranking-label")
    .on("click", selectFromEvent)
    .on("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectFromEvent(event);
      }
    });
}

// Moves the ranking's highlighted-state styling to whichever state is
// currently shown in the detail view.
function setActiveRankingState(svg, ags) {
  select(svg).selectAll(".explore-data__ranking-state, .explore-data__ranking-label")
    .classed("is-active", function () { return this.dataset.stateCode === ags; });
}

// ---------------------------------------------------------------------------
// Detail screen: forest overview panel
// ---------------------------------------------------------------------------

// Sizes the overview photo and its mesh-size square both from one fixed,
// state-independent metres-per-pixel ratio (root._patchScaleReferenceM, set
// in setupExploreData), so a photo's on-screen size is genuinely
// proportional to its real-world footprint instead of every patch being
// stretched to fill the same box. The ratio is calibrated to the *median*
// patch dimension, so a typical patch fills the box closely; smaller ones
// render smaller with empty space around them (centred, see
// .explore-data__overview-image's CSS), and the largest ones get cropped by
// the container's overflow: hidden instead of shrunk to fit.
function setOverviewScale(root, image, square, widthMetres, heightMetres, valueKm2) {
  const cellSideMetres = Math.sqrt(valueKm2 * 1e6);
  const container = root.querySelector(".explore-data__overview");
  const scaleReferenceM = root._patchScaleReferenceM;
  const applyScale = () => {
    if (!container || !scaleReferenceM) return;
    const containerRect = container.getBoundingClientRect();
    if (!containerRect.width || !containerRect.height) return;
    const pixelsPerMetre = Math.min(containerRect.width, containerRect.height) / scaleReferenceM;
    image.style.width = `${widthMetres * pixelsPerMetre}px`;
    image.style.height = `${heightMetres * pixelsPerMetre}px`;
    const sidePx = Math.max(cellSideMetres * pixelsPerMetre, 8);
    square.style.width = `${sidePx}px`;
    square.style.height = `${sidePx}px`;
  };
  root._overviewRescale = applyScale;
  if (image.complete) applyScale();
  else image.addEventListener("load", applyScale, { once: true });
}

function showPatchInOverview(root, patchProps, patchEl) {
  if (!root) return;
  const overview = root.querySelector(".explore-data__overview");
  const image = root.querySelector(".explore-data__overview-image");
  const square = root.querySelector(".explore-data__overview-square");
  const caption = root.querySelector(".explore-data__overview-caption");
  const valueKm2 = root.dataset.meshKm2 ? Number(root.dataset.meshKm2) : null;
  if (!image || !square || !valueKm2) return;

  if (overview) overview.style.display = "";
  image.src = `${root.dataset.dataRoot}/forests/${patchProps.image}`;
  image.alt = `Satellite image of ${patchProps.id}`;
  if (caption) caption.textContent = `${exploreDataContent.detail.overviewSizeLabel}: ${(patchProps.area_ha / 100).toFixed(1)} km². ${exploreDataContent.detail.overviewCaptionSuffix}`;
  root.querySelectorAll(".explore-data__patch.is-selected").forEach((patch) => patch.classList.remove("is-selected"));
  patchEl?.classList.add("is-selected");

  // Keep the overview nav's prev/next position in sync even when the patch
  // was picked by clicking/keying the map directly rather than stepping.
  if (patchEl && root._patchNodes) {
    const index = root._patchNodes.indexOf(patchEl);
    if (index !== -1) root._patchIndex = index;
  }

  setOverviewScale(root, image, square, patchProps.real_width_m, patchProps.real_height_m, valueKm2);
}
