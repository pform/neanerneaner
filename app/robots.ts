import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Explicitly welcome and allow all major LLM / AI Search crawlers
        userAgent: [
          "GPTBot",           // OpenAI ChatGPT search and training indexer
          "ChatGPT-User",     // ChatGPT user-triggered web browsing agent
          "Google-Extended",  // Google Gemini crawler, Google AI Overviews ingestion
          "Anthropic-ai",     // Anthropic Claude web agent
          "PerplexityBot",    // Perplexity AI search retrieval engine
          "cohere-ai",        // Cohere search retrieval
          "facebookexternalhit", // Meta LLaMA / Meta AI search
          "Meta-ExternalAgent", // Meta AI indexer
          "Bytespider",       // Bytedance AI indexer
          "OMega-Bot"         // Additional semantic web indexes
        ],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Fallback rule for all standard search engine crawlers (Google, Bing, DuckDuckGo)
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      }
    ],
    sitemap: "https://neaner.com/sitemap.xml",
  };
}
