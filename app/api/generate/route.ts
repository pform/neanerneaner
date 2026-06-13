import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, input, option, proposedUse } = body;

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY environment variable is required on the server." },
        { status: 500 }
      );
    }

    // 1. SURNAME GEOLOGY & HERITAGE SEARCH ACTION
    if (action === "heritage") {
      const targetName = (input || "Neaner").trim();
      const prompt = `You are a professional genealogist, etymologist, and family archivist studying the rare surname "${targetName}".
Generate a detailed historical report for this surname. Present your report in raw JSON format with the exact keys below. 

Make the content incredibly rich, informative, engaging, and professional. This text is heavily targeted for SEO crawlers indexing "Neaner" and "Neaner surname origin".

JSON Structure:
{
  "searchQuery": "${targetName}",
  "originCountry": "<The geographic origin coordinates or likely primary countries of origin, e.g. Central European, Anglo-Saxon, Germanic or spelling variation regions>",
  "historicalEra": "<Likely historical centuries or era when spellings became standardized, e.g. 17th Century>",
  "rarityScore": <Estimated relative rarity scale, integer out of 100 where 100 is ultra-unique>,
  "meaningSummary": "<A cohesive, 2-3 sentence paragraph detailing the linguistic roots, spelling variations like Nener, Neener, Nehner, and historical professional meanings>",
  "migratoryPatterns": "<A paragraph describing likely historical migrations, e.g. arrivals in the United States, United Kingdom, or Canada during historical passenger lists periods>",
  "seoKeywords": ["${targetName} history", "${targetName} family tree", "${targetName} record genealogy", "meaning of ${targetName}"]
}

Do NOT wrap the output in markdown code blocks. Return ONLY the raw JSON string.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const responseText = response.text || "{}";
      const data = JSON.parse(responseText.trim());
      return NextResponse.json(data);
    } 

    // 2. BRAND DECK GENERATOR ACTION
    else if (action === "brand_pitch") {
      const conceptInput = (input || "General Investment").trim();
      const industryType = (option || "Digital Identity").trim();

      const prompt = `You are a domain name portfolio manager and rebranding strategist at neaner.com.
A prospective buyer is interested in acquiring the premium domain "neaner.com" for their project idea: "${conceptInput}" (Industry category: ${industryType}).
Generate an elegant, high-impact Brand Pitch deck divided into 4 key slides. Include custom business slogans, positioning benefits, subdomain architectures, and strategic advantages.

JSON Structure:
{
  "brandName": "Neaner",
  "recommendedNiche": "<Craft an elite agency, office, or startup name based on ${conceptInput}, like Neaner Capital or Neaner Labs>",
  "primarySlogan": "<A short high-conversion slogan, e.g. 'Innovating Heritage' or 'The Digital Identity Built to Last'>",
  "whyPremiumCom": "<Exquisite explanation of why holding a 6-letter dot-com domain with natural phonetic spelling guarantees customer trust, zero email leakage, and instant premium status>",
  "slides": [
    {
      "slideNumber": 1,
      "title": "Aesthetic Positioning & Identity",
      "bullets": [
        "Highly memorable, short 6-letter name that has immediate phonetic recall.",
        "Single-word, premium .com TLD provides unparalleled authority over long hyphenated alternatives."
      ]
    },
    {
      "slideNumber": 2,
      "title": "Digital Subdomain Architecture",
      "bullets": [
        "Create trusted gateways: cloud.neaner.com, portal.neaner.com, or secure.neaner.com",
        "Enable dedicated family or executive logins: members.neaner.com or office.neaner.com"
      ]
    },
    {
      "slideNumber": 3,
      "title": "Marketing & Ad Capital Efficiency",
      "bullets": [
        "Zero brand dilution. Customers find you directly without intermediary search engine ads.",
        "Highest organic branding recall in offline brochures, signage, and executive business cards."
      ]
    }
  ],
  "potentialSlogans": [
    "<Slogan alternate 1>",
    "<Slogan alternate 2>",
    "<Slogan alternate 3>"
  ]
}

Ensure the pitch is highly persuasive, professional, and treats "neaner.com" as an ultra-premium $12,500+ asset class. 
Do NOT wrap the output in markdown code blocks. Return ONLY the raw JSON string.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.8,
        },
      });

      const responseText = response.text || "{}";
      const data = JSON.parse(responseText.trim());
      return NextResponse.json(data);
    }

    // 3. SECURE APPRAISAL / LEAD BROKER LOGIC
    else {
      const offerAmount = Number(input) || 0;
      const plannedUse = (proposedUse || "General Private Acquisition").trim();

      const prompt = `You are a senior digital asset appraiser and corporate broker representing neaner.com.
A prospective client has submitted a private acquisition inquiry with an offer of $${offerAmount} USD. 
Their planned business or private usage is: "${plannedUse}".

Generate a professional broker review in JSON. Analyze the offer based on standard domain market conditions:
- 6-letter dot-coms are high-value, highly sought assets.
- Typical baseline valuations for rare, organic pronounceable last name domains range between $5,000 and $25,000+.
- If their offer is below $8,399, explain politely but firmly that the actual buy-it-now listing price is $8,399, but we will register their offer.
- If their offer is $8,399 or higher, recommend immediate purchase/transfer via GoDaddy, indicating next broker steps.

JSON Structure:
{
  "offerReceived": ${offerAmount},
  "marketStatus": "<e.g. Standard Entry Level Offer, High-Value Priority Bid, or Under Reserve Valuation>",
  "estimatedMarketWorth": "$8,399 USD",
  "appraisalRating": "<A narrative paragraph giving the professional reasoning for this evaluation, mentioning spelling, syllable flow, and SEO weight>",
  "brokerNextStep": "<Explicit, professional instructions on how to finalize the deal securely using GoDaddy (GoDaddy Auctions / GoDaddy Brokerage) as our exclusive transaction and transfer partner>",
  "isLikelyAccepted": ${offerAmount >= 8399}
}

Do NOT wrap the output in markdown code blocks. Return ONLY the raw JSON string.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.75,
        },
      });

      const responseText = response.text || "{}";
      const data = JSON.parse(responseText.trim());
      return NextResponse.json(data);
    }
  } catch (error: any) {
    console.error("Gemini Domain API Error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal appraisal systems could not run. Please retry." },
      { status: 500 }
    );
  }
}
