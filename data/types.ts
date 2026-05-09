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
  photo: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  url: string;
  bookingUrl: string;
  mapEmbedUrl: string;
  phone: { display: string; tel: string };
  fax: string;
  email: string;
  address: { line1: string; line2: string };
  hours: string[];
  social: { facebook: { handle: string; url: string } };
  founded: string;
};
