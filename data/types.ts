export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  href?: string;
};

export type LensType = {
  number: string;
  title: string;
  tag: string;
  summary: string;
};

export type FittingStep = {
  number: string;
  title: string;
  body: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type FeatureCard = {
  eyebrow: string;
  title: string;
  body: string;
};

export type Brand = {
  name: string;
  tag: string;
  featured?: boolean;
};

export type Testimonial = {
  text: string;
  name: string;
  note?: string;
};

export type Doctor = {
  slug: string;
  name: string;
  credentials: string;
  role: string;
  oneLiner: string;
  bio: string[];
  photo: string;
};

export type StaffMember = {
  slug: string;
  name: string;
  role: string;
  oneLiner: string;
  photo: string | null;
};

export type ActivityFrame = {
  brand: string;
  model: string;
  image: string | null;
  isLead?: boolean;
  /** Activity-specific 'why this frame' line for the frames section. */
  note?: string;
};

export type ActivitySection = {
  heading: string;
  body: string;
};

export type ActivitySpec = {
  label: string;
  value: string;
};

export type RecommendedBrand = {
  name: string;
  /** Activity-specific subheadline; falls back to the brand's global tag. */
  note?: string;
};

export type Activity = {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  intro: string;
  sections: ActivitySection[];
  heroSpecs?: ActivitySpec[];
  recommendedBrands?: RecommendedBrand[];
  recommendedBrandsIntro?: string;
  heroImage: string | null;
  frames: ActivityFrame[];
  featured: boolean;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  url: string;
  bookingUrl: string;
  marloUrl: string;
  mapEmbedUrl: string;
  googleReviewsUrl: string;
  phone: { display: string; tel: string };
  fax: string;
  email: string;
  address: { line1: string; line2: string };
  hours: string[];
  social: { facebook: { handle: string; url: string } };
  founded: string;
};
