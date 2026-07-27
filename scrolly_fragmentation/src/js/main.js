import { createMainNavigation, createSideNavigation } from "./navigation.js";
import { createSections } from "./sections.js";
import {
  observeSections,
  refreshCurrentMapStep,
  registerPseudoreliefUpdater,
  setupScrollScenes
} from "./scrollytelling.js";

const app = document.querySelector("#app");
if (!app) throw new Error("App root not found");

const shell = document.createElement("div");
shell.className = "site-shell";
shell.dataset.theme = "dark";

const main = document.createElement("main");
main.id = "main-content";
main.append(...createSections());

shell.append(createMainNavigation(), createSideNavigation(), main);
app.append(shell);

document.querySelectorAll("video").forEach((video) => {
  video.muted = false;
});

observeSections(shell);
setupScrollScenes();

let visualizationsHaveLoaded = false;
const loadVisualizations = async () => {
  if (visualizationsHaveLoaded) return;
  visualizationsHaveLoaded = true;
  const [{ setupForestMap }, pseudorelief] = await Promise.all([
    import("./forest-map.js"),
    import("./pseudorelief-model.js")
  ]);
  registerPseudoreliefUpdater(pseudorelief.updatePseudorelief);
  pseudorelief.setupPseudoreliefModel();
  setupForestMap(refreshCurrentMapStep);
  refreshCurrentMapStep();
};

// Begin preparing the map and model immediately so deep zoom steps are ready on arrival.
void loadVisualizations();
