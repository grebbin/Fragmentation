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

// Text for the "Explore the Data" standalone state-detail screen, reached by
// scrolling straight through from the Fragmentation map chapter.
export const exploreData = {
  detail: {
    heading: "Explore the Data",
    introCopy: "Explore your state's unfragmented forests by interacting with them on the right.",
    introCopyRanking: "You may now explore the ranking and explore <strong><em>the unfragmented forests.</em></strong><br /><br />or finish the <strong><em>story</em></strong>",
    continueLabel: "Finish the Story",
    backLabel: "All States",
    loadingStatus: "Loading state data…",
    errorStatus: "Data for this state could not be loaded.",
    overviewSizeLabel: "Forest size",
    overviewCaptionSuffix: "The purple square shows the mesh size at this forest's scale.",
    noForestCopy: "This state has no unfragmented forest patches larger than 50 km².",
    overviewPrevLabel: "Show the previous forest patch",
    overviewNextLabel: "Show the next forest patch",
    walkingTimeTooltip: "The mesh walking time is based on the mesh size for this state, converted to a square patch and measured corner to corner (the longest way across), assuming a walking speed of 5 km/h.",
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
  },
  ranking: {
    scaleHigh: "High Mesh Size",
    scaleLow: "Low Mesh Size",
    prevLabel: "Show the previous states",
    nextLabel: "Show the next states"
  }
};

// Text for the standalone "About" screen, reached via the side navigation.
// Edit any of these strings to update the page — HTML tags (like <a>) are
// allowed since they are inserted as-is.
export const about = {
  aboutHeading: "About the project",
  aboutParagraphs: [
    "This data visualization project was created during the summer semester of 2026 as part of the seminar “Visualizing Sustainability Models” supervised by Prof. Francesca Morini and Erik Weiss, at the University of Applied Sciences Potsdam.",
    "A project by Gregor Fiedler, Jenny Lermander, Natalia Pawlik.",
    "Published in one of the hottest summer – 2026."
  ],
  creditsHeading: "Credits",
  creditsCopy: "Thanks to Tobias Krüger at Leibniz Institute of Ecological Urban and Regional Development for providing the data and for helpful conversations and input.",
  learnMoreHeading: "Would you like to learn more?",
  learnMoreLinks: [
    { label: "Leibniz Institute of Ecological Urban and Regional Development", url: "" },
    { label: "IÖR Monitor", url: "https://monitor.ioer.de/" }
  ],
  legalLinks: [
    { label: "Datenschutzhinweis", url: "" },
    { label: "Impressum", url: "" }
  ]
};

// Numbered citation list for the "References" screen. Each entry may contain
// HTML (e.g. an <a href="..."> around the URL) since it is inserted as-is.
export const references = {
  heading: "References",
  items: [
    "Märtz, J., & Brieger, F. (2025, October 23). When the road contributes to the hunting bag. Waldwissen.net. <a href=\"https://www.waldwissen.net/en/forest-ecology/forest-and-game/game-management/documentation-of-wildlife-accidents#c122747\" target=\"_blank\" rel=\"noreferrer\">https://www.waldwissen.net/en/forest-ecology/forest-and-game/game-management/documentation-of-wildlife-accidents#c122747</a>",
    "Tierpark Hellabrunn. (n.d.). Eurasian lynx. Retrieved June 14, 2026, from <a href=\"https://www.hellabrunn.de/en/animals/europe/eurasian-lynx\" target=\"_blank\" rel=\"noreferrer\">https://www.hellabrunn.de/en/animals/europe/eurasian-lynx</a>",
    "Duquette, C. A., Loss, S. R., & Hovick, T. J. (2021). A meta-analysis of the influence of anthropogenic noise on terrestrial wildlife communication strategies. Journal of Applied Ecology, 58(6), 1112–1121. <a href=\"https://doi.org/10.1111/1365-2664.13880\" target=\"_blank\" rel=\"noreferrer\">https://doi.org/10.1111/1365-2664.13880</a>",
    "Kok, A. C. M., Berkhout, B. W., Carlson, N. V., Evans, N. P., Khan, N., Potvin, D. A., et al. (2023). How chronic anthropogenic noise can affect wildlife communities. Frontiers in Ecology and Evolution, 11, Article 1130075. <a href=\"https://doi.org/10.3389/fevo.2023.1130075\" target=\"_blank\" rel=\"noreferrer\">https://doi.org/10.3389/fevo.2023.1130075</a>",
    "Zheltuchin, A. (1992). Distribution and numbers of lynx in the Soviet Union. In Council of Europe (Ed.), The situation, conservation needs and reintroduction of lynx in Europe (Environmental Encounters No. 11, pp. 19–29). Council of Europe Press.",
    "Walz, U., Schumacher, U., & Krüger, T. (2023). Landschaftszerschneidung und Waldfragmentierung in Deutschland—Ergebnisse aus einem Monitoring im Kontext von Schutzgebieten und Hemerobie. Naturschutz und Landschaftsplanung. <a href=\"https://doi.org/10.19217/NUL2022-02-04\" target=\"_blank\" rel=\"noreferrer\">https://doi.org/10.19217/NUL2022-02-04</a>",
    "Gräfe, A. (2023). GIS-gestützte Erfassung von Grünbrücken in Deutschland [Master's thesis, Hochschule für Technik und Wirtschaft Dresden]."
  ]
};

// Unnumbered citation list for the "Sources" screen (the underlying datasets).
// Each entry may contain HTML (e.g. an <a href="..."> around the URL).
export const sources = {
  heading: "Data Sources",
  items: [
    "Bund für Umwelt und Naturschutz Deutschland (BUND). (n.d.) Gefahren für den Luchs: Verkehr, Jagd, Krankheit. <a href=\"https://www.bund.net/themen/tiere-pflanzen/luchs/gefahren/\" target=\"_blank\" rel=\"noreferrer\">https://www.bund.net/themen/tiere-pflanzen/luchs/gefahren/</a>",
    "Bund für Umwelt und Naturschutz Deutschland (BUND). (2018, 8. März). Schon wieder zwei Luchse im Bayerischen Wald überfahren. <a href=\"https://www.bund.net/themen/aktuelles/detail-aktuelles/news/schon-wieder-zwei-luchse-im-bayerischen-wald-ueberfahren/\" target=\"_blank\" rel=\"noreferrer\">https://www.bund.net/themen/aktuelles/detail-aktuelles/news/schon-wieder-zwei-luchse-im-bayerischen-wald-ueberfahren/</a>",
    "Leibniz-Institut für ökologische Raumentwicklung (IÖR). (2024). Monitor der Siedlungs- und Freiraumentwicklung (IÖR-Monitor) [Interaktive Karte]. <a href=\"https://monitor.ioer.de/\" target=\"_blank\" rel=\"noreferrer\">https://monitor.ioer.de/</a>",
    "Walz, U., Krüger, T., & Schumacher, U. (2011). Landschaftszerschneidung und Waldfragmentierung – Neue Indikatoren des IÖR-Monitors. In G. Meinel & U. Schumacher (Hrsg.), Flächennutzungsmonitoring III: Erhebung – Analyse – Bewertung (IÖR Schriften 58, S. 163–170). Rhombos.",
    "Walz, U., Krüger, T., & Schumacher, U. (2013). Fragmentierung von Wäldern in Deutschland—Neue Indikatoren zur Flächennutzung. 0028-0615, 88(3), 118–127. <a href=\"https://doi.org/10.17433/3.2013.50153211.118-127\" target=\"_blank\" rel=\"noreferrer\">https://doi.org/10.17433/3.2013.50153211.118-127</a>",
    "Walz, U., Krüger, T., & Schumacher, U. (2021). Landschaftszerschneidung und Waldfragmentierung in Deutschland: Analyseergebnisse aus dem IÖR-Monitor (pp. 127–137). Rhombos-Verlag, Berlin. <a href=\"https://doi.org/10.26084/13DFNS-P012\" target=\"_blank\" rel=\"noreferrer\">https://doi.org/10.26084/13DFNS-P012</a>"
  ]
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
