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
    title: "",
    copy: "You start your journey from the Bavarian forest and reach a small road. Traffic is light, but you still wait before crossing. One wrong decision could end your journey before it begins.",
    facts: ["Roads may seem like minor barriers, but they pose a significant mortality risk. The German Hunting Association estimates around 1 million wildlife-vehicle collisions go unrecorded every year, while some researchers estimate that road traffic kills up to 3 million wild animals annually in Germany."],
    // All stories use one small, fully preloadable WebM file.
    // The still image remains the fallback until the video is ready.
    image: "/media/story_placeholder.webp",
    animation: { src: "/media/story.webm", start: 0, end: 5 },
    audio: { src: "/media/story_sound.aac", start: 0, end: 30, loopStart: 5 },
    scrollOffset: 0.55
  },
  {
    title: "",
    copy: "Back under the trees, you should feel safe. Instead, long before the highway comes into view, you can already hear it. You search for signs of another lynx, but the forest feels empty and frightening.",
    facts: ["The black tufts on a lynx’s ears help collect and amplify sound.<sup>2</sup> Anthropogenic noise can affect entire ecosystems.<sup>3,4</sup> This forest has also been heavily altered. In areas where approximately 80 % of the forest was clear-cut, lynx signs were found about 15 times less frequently than in forests with much higher mature forest cover.<sup>5</sup>",""],
    image: "/media/story_placeholder.webp",
    animation: { src: "/media/story.webm", start: 5, end: 10 },
    audio: { src: "/media/story_sound.aac", start: 30, end: 60, loopStart: 35 },
    scrollOffset: 0.55
  },
  {
    title: "",
    copy: "You move on. A multi-lane highway stretches across the landscape. Beside it stands a fenced solar park. Together they leave almost no safe route forward.",
    facts: ["Highways are among the strongest barriers for terrestrial wildlife. Fencing, traffic, noise, and artificial light all reduce landscape connectivity. Renewable energy infrastructure is essential for climate goals, but can add to habitat fragmentation and restrict wildlife movement.", ""],
    image: "/media/story_placeholder.webp",
    animation: { src: "/media/story.webm", start: 10, end: 17 },
    audio: { src: "/media/story_sound.aac", start: 60, end: 90, loopStart: 65 },
    scrollOffset: 0.55
  },
  {
    title: "",
    copy: "A canal blocks your path. Ships move through the water while harbor lights reflect across the surface. You begin to swim. The reflections blind you on your course.",
    facts: ["A Eurasian lynx’s eyes are approximately six times more sensitive than human eyes, allowing excellent night vision.<sup>2</sup> However, artificial lighting can disrupt natural darkness. Light pollution around ports, roads, and settlements alters habitats and can affect the behaviour of many nocturnal species.", ""],
    image: "/media/story_placeholder.webp",
    animation: { src: "/media/story.webm", start: 17, end: 23 },
    audio: { src: "/media/story_sound.aac", start: 90, end: 120, loopStart: 95 },
    scrollOffset: 0.55
  },
  {
    title: "",
    copy: "Just when the barriers seems impossible to cross, you find a wildlife bridge. Trees and shrubs cover the structure, making it feel like part of the forest. You cross safely above the traffic still roaring underneath you.",
    facts: ["Wildlife crossings reconnect habitats separated by infrastructure and reduce wildlife-vehicle collisions. Germany has constructed more than 100 wildlife crossings, helping animals to move between fragmented habitats.<sup>7</sup>", ""],
    image: "/media/story_placeholder.webp",
    animation: { src: "/media/story.webm", start: 23, end: 29 },
    audio: { src: "/media/story_sound.aac", start: 120, end: 150, loopStart: 125 },
    scrollOffset: 0.55
  },
  {
    title: "",
    copy: "The air smells different here. The scent of traffic fades, replaced by damp soil, trees, and moss. For the first time, finding another lynx seems possible.",
    facts: ["", ""],
    image: "/media/story_placeholder.webp",
    animation: { src: "/media/story.webm", start: 29, end: 33 },
    audio: { src: "/media/story_sound.aac", start: 150, end: 180, loopStart: null },
    scrollOffset: 0.55
  }
];
