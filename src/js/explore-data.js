import { geoIdentity, geoPath, json, select } from "d3";
import { feature } from "topojson-client";
import { exploreData as exploreDataContent } from "./content.js";

const DATA_ROOT = "/data/satellite/bayern";
const GERMANY_TOPOJSON_URL = "/data/wald_expo/deut.topojson";
const ACTIVE_STATE_AGS = "09";
const MAP_VIEW_SIZE = 760;
// Bayern renders at 60% of its original size (712px inner side at margin 24
// -> 427px), asymmetric so it sits near the top of the box (close to the
// legend above it) instead of centred with empty space on all sides. The
// SVG's own viewBox height is also trimmed to just past this box, so there's
// no leftover dead space below it for preserveAspectRatio to centre around.
const MAP_INNER_SIDE = 712 * 0.6;
const MAP_MARGIN_TOP = 20;
const MAP_MARGIN_X = (MAP_VIEW_SIZE - MAP_INNER_SIDE) / 2;
// The ranking view lives in the Fragmentation chapter (forest-map.js /
// scrollytelling.js); this is the step index its "Explore the Data" reveal
// sits at, used to scroll back up to it from the header's back control.
const RANKING_MAP_STEP = 14;

function formatKm2(value) {
  return `${value.toFixed(2).replace(".", ",")} km²`;
}

function formatPercent(value) {
  return `${value.toFixed(1).replace(".", ",")}%`;
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
  const status = root?.querySelector(".explore-data__status");
  if (!root || !svg) return;

  try {
    const [germanyTopology, stateStats, forestPatches] = await Promise.all([
      json(GERMANY_TOPOJSON_URL),
      json(`${DATA_ROOT}/state_stats.json`),
      json(`${DATA_ROOT}/forest_patches.geojson`)
    ]);

    const germany = feature(germanyTopology, germanyTopology.objects.data);
    const stateFeature = germany.features.find((f) => f.properties.AGS === ACTIVE_STATE_AGS);
    if (!stateFeature) throw new Error(`No boundary found for AGS ${ACTIVE_STATE_AGS}`);

    const projection = geoIdentity()
      .reflectY(true)
      .fitExtent([[MAP_MARGIN_X, MAP_MARGIN_TOP], [MAP_VIEW_SIZE - MAP_MARGIN_X, MAP_MARGIN_TOP + MAP_INNER_SIDE]], stateFeature);
    const path = geoPath(projection);

    renderCards(root, stateStats);
    const patchSelection = renderMap(svg, path, projection, stateFeature, forestPatches, stateStats.meff_km2);
    showRandomPatch(root, patchSelection);
    wireHeaderBack(root);
    wireFinishStory(root);
    wireScrollLock(root);
    window.addEventListener("resize", () => root._overviewRescale?.());

    status?.remove();
    root.classList.add("is-ready");
  } catch (error) {
    console.error("Unable to render the Explore the Data section", error);
    if (status) status.textContent = exploreDataContent.detail.errorStatus;
  }
}

// Picks one forest patch to show by default rather than a whole-state image.
function showRandomPatch(root, patchSelection) {
  const nodes = patchSelection.nodes();
  const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
  if (randomNode) showPatchInOverview(root, randomNode.__data__.properties, randomNode);
}

// The states ranking now lives in the Fragmentation chapter; "back" scrolls
// up to its "Explore the Data" reveal step rather than switching screens.
function wireHeaderBack(root) {
  root.querySelector(".explore-data__header-back")?.addEventListener("click", (event) => {
    const targetStep = document.querySelector(`.map-scroll-step[data-map-step="${RANKING_MAP_STEP}"]`);
    if (!targetStep) return;
    event.preventDefault();
    beginNavigatingAway();
    history.pushState(null, "", "#fragmentation");
    const stepTop = window.scrollY + targetStep.getBoundingClientRect().top;
    const fullyRevealedProgress = 0.82;
    const targetY = stepTop + targetStep.offsetHeight * fullyRevealedProgress - window.innerHeight * 0.5;
    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
    });
  });
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
// ---------------------------------------------------------------------------

const SCROLL_LOCK_THRESHOLD = 0.95;
// Long enough to cover the browser's default smooth-scroll duration for the
// header-back jump (the longest of the two escape routes).
const NAVIGATE_AWAY_SUPPRESS_MS = 1500;
const SCROLL_KEYS = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "]);
let scrollLockActive = false;
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

function lockScroll() {
  if (scrollLockActive) return;
  scrollLockActive = true;
  window.addEventListener("wheel", preventScrollEvent, { passive: false });
  window.addEventListener("touchmove", preventScrollEvent, { passive: false });
  window.addEventListener("keydown", preventScrollKey, { passive: false });
}

function unlockScroll() {
  if (!scrollLockActive) return;
  scrollLockActive = false;
  window.removeEventListener("wheel", preventScrollEvent);
  window.removeEventListener("touchmove", preventScrollEvent);
  window.removeEventListener("keydown", preventScrollKey);
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
      } else {
        unlockScroll();
      }
    },
    { threshold: [0, 0.5, SCROLL_LOCK_THRESHOLD, 1] }
  );
  observer.observe(root);
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

function renderMap(svg, path, projection, stateFeature, forestPatches, valueKm2) {
  const svgSel = select(svg);
  meshPattern(svgSel.select(".explore-data__mesh-defs"), "explore-data-mesh-pattern", valueKm2, projection.scale());

  svgSel.select(".explore-data__layer--boundary")
    .append("path")
    .datum(stateFeature)
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
// Detail screen: forest overview panel
// ---------------------------------------------------------------------------

// Scales the overview square so its side matches the mesh cell's real-world
// size at whatever real-world width the currently displayed image covers.
// The image sits in a fixed-aspect box via object-fit: contain, so its
// element box (width/height) no longer equals its visible content bounds —
// this derives the actual letterboxed content width from the two aspect
// ratios before converting metres to pixels.
function setOverviewScale(root, image, square, widthMetres, heightMetres, valueKm2) {
  const cellSideMetres = Math.sqrt(valueKm2 * 1e6);
  const applyScale = () => {
    const containerRect = image.getBoundingClientRect();
    if (!containerRect.width || !containerRect.height) return;
    const naturalAspect = widthMetres / heightMetres;
    const containerAspect = containerRect.width / containerRect.height;
    const contentWidthPx = naturalAspect > containerAspect
      ? containerRect.width
      : containerRect.height * naturalAspect;
    const pixelsPerMetre = contentWidthPx / widthMetres;
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
  const image = root.querySelector(".explore-data__overview-image");
  const square = root.querySelector(".explore-data__overview-square");
  const caption = root.querySelector(".explore-data__overview-caption");
  const valueKm2 = root.dataset.meshKm2 ? Number(root.dataset.meshKm2) : null;
  if (!image || !square || !valueKm2) return;

  image.src = `${DATA_ROOT}/forests/${patchProps.image}`;
  image.alt = `Satellite image of ${patchProps.id}`;
  if (caption) caption.textContent = `${patchProps.id}, ${(patchProps.area_ha / 100).toFixed(1)} km². ${exploreDataContent.detail.overviewCaptionSuffix}`;
  root.querySelectorAll(".explore-data__patch.is-selected").forEach((patch) => patch.classList.remove("is-selected"));
  patchEl?.classList.add("is-selected");

  setOverviewScale(root, image, square, patchProps.real_width_m, patchProps.real_height_m, valueKm2);
}
