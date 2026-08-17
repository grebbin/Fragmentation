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
    title: "Six stories of movement and interruption",
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

export const stories = [
  {
    title: "Forest",
    copy: "Introduce the first habitat story here.",
    facts: ["Fact one", "Fact two"],
    // All stories use one small, fully preloadable WebM file.
    // The still image remains the fallback until the video is ready.
    image: "/media/story_placeholder.webp",
    animation: { src: "/media/story.webm", start: 0, end: 5 },
    loopSound: "",
    onceSound: "",
    scrollOffset: 0.55
  },
  {
    title: "Small Forest Patch",
    copy: "Introduce the small forest patch story here.",
    facts: ["Fact one", "Fact two"],
    image: "/media/story_placeholder.webp",
    animation: { src: "/media/story.webm", start: 5, end: 10 },
    loopSound: "",
    onceSound: "",
    scrollOffset: 0.55
  },
  {
    title: "Highway",
    copy: "Introduce the highway story here.",
    facts: ["Fact one", "Fact two"],
    image: "/media/story_placeholder.webp",
    animation: { src: "/media/story.webm", start: 10, end: 17 },
    loopSound: "",
    onceSound: "",
    scrollOffset: 0.55
  },
  {
    title: "Canal and harbour",
    copy: "Introduce the canal and harbour story here.",
    facts: ["Fact one", "Fact two"],
    image: "/media/story_placeholder.webp",
    animation: { src: "/media/story.webm", start: 17, end: 23 },
    loopSound: "",
    onceSound: "",
    scrollOffset: 0.55
  },
  {
    title: "Wildlife bridge",
    copy: "Introduce the wildlife bridge story here.",
    facts: ["Fact one", "Fact two"],
    image: "/media/story_placeholder.webp",
    animation: { src: "/media/story.webm", start: 23, end: 29 },
    loopSound: "",
    onceSound: "",
    scrollOffset: 0.55
  },
  {
    title: "Final forest",
    copy: "Introduce the final forest story here.",
    facts: ["Fact one", "Fact two"],
    image: "/media/story_placeholder.webp",
    animation: { src: "/media/story.webm", start: 29, end: 33 },
    loopSound: "",
    onceSound: "",
    scrollOffset: 0.55
  }
];
