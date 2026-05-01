export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
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
