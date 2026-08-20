export const sections = [
  {
    id: "introduction",
    navigationLabel: "Introduction",
    eyebrow: "Fragmented Reality",
    title: "An introduction to fragmented habitats",
    theme: "dark",
    className: "intro-section"
  },
  {
    id: "perspective-shift",
    navigationLabel: "Perspective Shift",
    eyebrow: "Perspective Shift",
    title: "A landscape seen from another point of view",
    theme: "dark",
    className: "sequence-section"
  },
  {
    id: "route",
    navigationLabel: "The Route",
    eyebrow: "The Route",
    title: "Five stories of movement and interruption",
    theme: "light",
    className: "story-chapter-section"
  },
  {
    id: "fragmentation",
    navigationLabel: "Fragmentation",
    eyebrow: "Fragmentation",
    title: "The landscape does not end at the edge of the road.",
    theme: "dark",
    className: "interlude-section"
  },
  {
    id: "explore-data",
    navigationLabel: "Explore the Data",
    eyebrow: "Explore the Data",
    title: "Fragmentation across the landscape",
    theme: "light",
    className: "map-section"
  }
];

// Text for the "Explore the Data" experience: the reveal prompt inside the
// Fragmentation map chapter, and the standalone state-detail screen it links to.
export const exploreData = {
  prompt: {
    heading: "Explore the Data",
    bodyHtml: [
      "You may now explore the ranking<br /><br />and explore <strong>the unfragmented forests in your state.</strong>",
      "or finish the <strong>story</strong>"
    ],
    continueLabel: "Finish Story"
  },
  detail: {
    heading: "Explore the Data",
    introCopy: "Explore the \"good forests\" to the right.",
    continueLabel: "Finish the Story",
    loadingStatus: "Loading state data…",
    errorStatus: "Data for this state could not be loaded.",
    overviewCaptionSuffix: "The purple square shows the mesh size at this forest's scale.",
    cardLabels: {
      mesh_size: "Mesh size",
      walking_time: "Walking Time per Mesh patch",
      pct_unfragmented: "Unfragmented forests ≥50 km² ",
      unfragmented_km2: "Total unfragmented forest (km²)"
    },
    legend: {
      mesh: "Mesh size",
      patch: "Forest Patch (>50 km²)"
    }
  }
};

export const stories = [
  {
    title: "Forest",
    copy: "Introduce the first habitat story here.",
    facts: ["Fact one", "Fact two"]
  },
  {
    title: "Highway",
    copy: "Introduce the highway story here.",
    facts: ["Fact one", "Fact two"]
  },
  {
    title: "Canal and harbour",
    copy: "Introduce the canal and harbour story here.",
    facts: ["Fact one", "Fact two"]
  },
  {
    title: "Wildlife bridge",
    copy: "Introduce the wildlife bridge story here.",
    facts: ["Fact one", "Fact two"]
  },
  {
    title: "Final forest",
    copy: "Introduce the final forest story here.",
    facts: ["Fact one", "Fact two"]
  }
];
