import type { Doctor } from "./types";

export const doctors: Doctor[] = [
  {
    slug: "ross-montgomery",
    name: "Ross Montgomery",
    credentials: "OD",
    role: "Owner & Optometrist",
    oneLiner:
      "Trained in ocular disease. Most days, that means catching the small things before they turn into big ones.",
    bio: [
      "Dr. Montgomery graduated Cum Laude from Valdosta State University with a BS in Biology, then earned his Doctor of Optometry from the PA College of Optometry in 2013. He went on to complete a residency at the Woolfson Eye Institute in Atlanta, working alongside ocular disease specialists.",
      "Outside the office he's married to Erica, raising two sons, and spends his time fishing, woodworking, cooking, and just about anything that gets him outdoors.",
    ],
    photo: "/images/ross-montgomery.jpg",
  },
  {
    slug: "taylor-williamson",
    name: "Taylor Williamson",
    credentials: "OD",
    role: "Optometrist",
    oneLiner:
      "Kids, families, contact lens fits — including the tricky ones.",
    bio: [
      "Dr. Williamson grew up in Bismarck, North Dakota, and graduated from Concordia College in Moorhead in 2015, where she was a member of the Tri-Beta Biological Honor Society. She earned her Doctor of Optometry from the Southern College of Optometry in Memphis in 2019, then moved to Georgia and has been practicing in the Peach State ever since.",
      "She met her husband in optometry school. They share a house with three energetic dogs and a steady rotation of creative projects — model railroading, crochet, writing, and just about anything else she can get her hands on.",
    ],
    photo: "/images/taylor-williamson.jpg",
  },
];
