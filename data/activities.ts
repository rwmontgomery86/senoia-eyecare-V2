import type { Activity } from "./types";

export const activities: Activity[] = [
  {
    slug: "cycling",
    title: "Cycling",
    headline: "Made for cycling.",
    summary:
      "Long rides demand more than dark lenses. Polarized optics cut glare off wet asphalt and chrome, while a wraparound fit shields against side wind and dust. The right pair stays put through climbs, descents, and the quick glance back over your shoulder.",
    intro:
      "Long rides ask more from glasses than glasses usually deliver. Light bouncing off wet asphalt, reflections off chrome, the slip of a frame loose on the bridge — these are small problems until mile thirty, when they become every problem. The right pair disappears.",
    sections: [
      {
        heading: "Polarization, specifically.",
        body: "Asphalt — especially wet asphalt — reflects light at a low, polarized angle. Standard sunglasses dim everything; polarized lenses cancel that one band of glare while leaving everything else legible. On a long descent through afternoon shade and sun, the difference is whether you can see the surface you're about to commit to.",
      },
      {
        heading: "Fit, before anything else.",
        body: "A wraparound shape closes the gap at your temples that lets in wind, dust, and grit. Grippy temples keep the frame steady through cadence changes and out-of-the-saddle efforts. We fit and adjust in the chair — every face is different, and the right curve, length, and tension is the difference between glasses you forget you're wearing and the ones you keep pushing back up.",
      },
    ],
    heroImage: "/images/activities/cycling/home-page-main.jpg",
    frames: [
      {
        brand: "Tifosi",
        model: "Rivit",
        image: "/images/activities/cycling/home-page-glasses.jpg",
        isLead: true,
        note: "The wraparound that disappears on a long descent.",
      },
      {
        brand: "Maui Jim",
        model: "Ho'okipa",
        image: "/images/activities/cycling/maui-jim-activity.jpg",
        note: "Rimless and featherlight, with polarized glass that calms the glare.",
      },
    ],
    heroSpecs: [
      { label: "Lens", value: "Polarized" },
      { label: "Fit", value: "Wraparound" },
      { label: "Lead frame", value: "Tifosi Rivit" },
    ],
    recommendedBrands: [
      { name: "Tifosi", note: "Sport fit that stays put on every climb and descent." },
      { name: "Maui Jim", note: "Polarized glass that cuts the glare off wet asphalt." },
    ],
    recommendedBrandsIntro:
      "Two makers we trust for the road — chosen less for the name than for how they hold up mile after mile.",
    featured: true,
  },
];
