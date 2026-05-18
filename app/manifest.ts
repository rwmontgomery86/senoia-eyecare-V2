import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Senoia Eyecare",
    description:
      "Boutique optometry in Senoia, Georgia. Considered eyewear. Comprehensive care.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f2",
    theme_color: "#2c2724",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
