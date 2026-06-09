import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://neaner.com";
  
  // Date of latest update (June 2026)
  const lastModified = new Date("2026-06-09");

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/other-assets`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/seo-rank-simulator`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.80,
    },
    {
      url: `${baseUrl}/etymology/nerian-savior`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/etymology/nearer-border`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/etymology/spelling-shifts`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/etymology/distribution-index`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];
}
