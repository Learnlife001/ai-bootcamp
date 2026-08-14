import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://cj.greglabs.nl/sitemap.xml",
    host: "https://cj.greglabs.nl",
  };
}
