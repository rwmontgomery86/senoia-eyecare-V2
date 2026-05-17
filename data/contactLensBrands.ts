export type ContactLensBrand = {
  name: string;
  /** Short DNA line — used in V3 only */
  dna: string;
  /** Signature product series we fit */
  series: string[];
  /** Patient-need profiles this brand suits */
  needs: string[];
};

export const contactLensBrands: ContactLensBrand[] = [
  {
    name: "Acuvue",
    dna: "The category-defining hydration tech — comfort that holds through the workday.",
    series: ["Acuvue Oasys", "Acuvue 1 Day Max", "Acuvue Moist"],
    needs: ["Dry eye", "Astigmatism", "Presbyopia", "Cosmetic"],
  },
  {
    name: "CooperVision",
    dna: "Pioneered silicone-hydrogel dailies and built the broadest toric / multifocal range.",
    series: ["Biofinity", "MyDay", "Clariti"],
    needs: ["Dry eye", "Astigmatism", "Presbyopia"],
  },
  {
    name: "Alcon",
    dna: "Water-gradient surface chemistry — premium comfort for sensitive wearers.",
    series: ["Total1", "Precision1", "Precision7", "Total30"],
    needs: ["Dry eye", "Comfort", "Extended wear"],
  },
  {
    name: "Bausch + Lomb",
    dna: "Naturally inspired chemistry — tear-film-matched lenses across cadences.",
    series: ["Biotrue ONEday", "Ultra", "INFUSE"],
    needs: ["Dry eye", "Astigmatism", "Presbyopia"],
  },
];

export const contactLensNeeds = [
  "Dry eye",
  "Astigmatism",
  "Presbyopia",
  "Sport & active",
];
