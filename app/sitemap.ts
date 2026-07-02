import type { MetadataRoute } from "next";
import { site } from "@/data/site";

type Route = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const PRODUCTION_ROUTES: Route[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/eye-exams", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contacts", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pediatric-family", priority: 0.9, changeFrequency: "monthly" },
  { path: "/specialty-lenses", priority: 0.9, changeFrequency: "monthly" },
  { path: "/frames", priority: 0.8, changeFrequency: "monthly" },
  { path: "/team", priority: 0.7, changeFrequency: "monthly" },
  { path: "/insurance", priority: 0.7, changeFrequency: "monthly" },
  { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PRODUCTION_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
