import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://neaner.com";
  
  // Date of latest update dynamically kept highly fresh to satisfy search content freshness rankings
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}`,      // English global targeting
          de: `${baseUrl}`,      // German/Teutonic roots targeting
          fr: `${baseUrl}`,      // European distribution targeting
          es: `${baseUrl}`,      // Spanish/Hispanic linguistic targeting
        }
      }
    },
    {
      url: `${baseUrl}/other-assets`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: {
        languages: {
          en: `${baseUrl}/other-assets`,
          de: `${baseUrl}/other-assets`,
        }
      }
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
      alternates: {
        languages: {
          en: `${baseUrl}/etymology/nerian-savior`,
          de: `${baseUrl}/etymology/nerian-savior`,
        }
      }
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
    {
      url: `${baseUrl}/feelize`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}

