import { MetadataRoute } from "next";
import { CITIES } from "@/constants/cities";

const BASE_URL = "https://www.nandbcleaning.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${BASE_URL}/areas/${city.slug}`,
    lastModified: new Date("2026-10-26"),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/#about`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#services`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#reviews`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/#contact`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/window`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gutter`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/fascias`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/commercial-window-cleaning`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...cityPages,
  ];
}
