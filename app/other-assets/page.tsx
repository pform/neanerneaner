"use client";

import React, { useState } from "react";
import { 
  Search, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Heart, 
  Compass,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Portfolio domain assets data structure
interface DomainAsset {
  domain: string;
  category: "LLLL/Short" | "SaaS/Tech" | "Adult/Lifestyle" | "Medical/Health" | "Creative/Tech";
  badge: string;
  description: string;
  estValue: string;
  characters: number;
  tld: string;
  useCases: string[];
}

const PARTNER_DOMAINS: DomainAsset[] = [
  {
    domain: "ambeth.com",
    category: "Creative/Tech",
    badge: "Phonetic Multi-Syllable",
    description: "An elegant, premium brandable. Combines a soft phonetic structure with dynamic versatility, perfect for luxury lifestyle labels, high-end design agencies, or secure digital banking solutions.",
    estValue: "$4,800+",
    characters: 6,
    tld: ".com (Registry Standard)",
    useCases: ["Luxury Design Label", "Digital Banking App", "Premium Lifestyle", "Corporate Identity"]
  },
  {
    domain: "appliancecraft.com",
    category: "Creative/Tech",
    badge: "Highly Descriptive Brand",
    description: "The definitive authority domain for premium household appliance repairs, high-end culinary device hardware, smart home integrations, and automated appliance servicing frameworks.",
    estValue: "$3,400+",
    characters: 14,
    tld: ".com (Registry Standard)",
    useCases: ["Smart Home App", "Appliance Maintenance Portal", "IoT Device Systems", "E-commerce Depot"]
  },
  {
    domain: "aquaves.com",
    category: "Medical/Health",
    badge: "Organic Biotech Brand",
    description: "A fluid, natural wellness and moisture-focused terminology blend. Excellent fit for sustainable hydration technology, cellular skincare therapeutics, or premium bio-water filtration systems.",
    estValue: "$5,250+",
    characters: 7,
    tld: ".com (Registry Standard)",
    useCases: ["Skincare Therapeutics", "Hydration Science SaaS", "Clean Water Filtration", "Eco Wellness Portal"]
  },
  {
    domain: "arkba.com",
    category: "LLLL/Short",
    badge: "Rare 5-Letter Asset",
    description: "Rare, ultra-short 5-letter brand identifier. Its military-grade structural strength is ideal for secure data vaults, decentralized blockchain registers, or global security architectures.",
    estValue: "$8,200+",
    characters: 5,
    tld: ".com (Registry Standard)",
    useCases: ["Cryptographic Data Vault", "Asset Custody Platform", "Secure Blockchain Ledger", "Financial Risk Control"]
  },
  {
    domain: "armycore.com",
    category: "SaaS/Tech",
    badge: "High Authority Label",
    description: "An incredibly authoritative, high-impact legacy keyword combination. Built for high-reliability software, physical tactical security applications, developer networks, or heavy industrial training suites.",
    estValue: "$6,900+",
    characters: 8,
    tld: ".com (Registry Standard)",
    useCases: ["Tactical Logistics App", "Military Grade Software", "DevOps Command Portal", "Physical Defense Registry"]
  },
  {
    domain: "arogram.com",
    category: "Creative/Tech",
    badge: "Geometric Tech Native",
    description: "A modern, highly geometric phonetic prefix blend. A natural match for modern analytical telemetry diagrams, automated workflow graph systems, or design illustration APIs.",
    estValue: "$4,500+",
    characters: 7,
    tld: ".com (Registry Standard)",
    useCases: ["Workflow Index Software", "Developer API Services", "Data Analytics Graphics", "Process Automation"]
  },
  {
    domain: "awesomedom.com",
    category: "Creative/Tech",
    badge: "Marketing Powerhouse",
    description: "The ultimate marketing-centric showcase domain. Engineered specifically for custom web builder portfolios, domain registrar directories, web hosting portals, or active developer landing zones.",
    estValue: "$3,800+",
    characters: 10,
    tld: ".com (Registry Standard)",
    useCases: ["Web Hosting Hub", "Domain Listing Matrix", "Custom Landing Architect", "Creator Page Studio"]
  },
  {
    domain: "babeport.com",
    category: "Adult/Lifestyle",
    badge: "High Organic Volume",
    description: "A premium, high-converting entertainment gateway and brandable lifestyle hub. Offers immense visual memorability, organic index potential, and market authority in viral community platforms.",
    estValue: "$7,200+",
    characters: 8,
    tld: ".com (Registry Standard)",
    useCases: ["Social Creator Hub", "Adult Lifestyle Portal", "Premium Media Network", "Affiliate Redirect Vault"]
  },
  {
    domain: "bakelet.com",
    category: "Creative/Tech",
    badge: "Warm Consumer Brand",
    description: "Delightfully short, warm, and highly brandable culinary or hardware suffix. Perfectly suited for automated kitchen software, gourmet subscription services, or localized craft bakery registers.",
    estValue: "$4,100+",
    characters: 7,
    tld: ".com (Registry Standard)",
    useCases: ["Culinary Appliance App", "Gourmet Subscription", "Smart Kitchen Recipe Hub", "Bakery Point of Sale"]
  },
  {
    domain: "battistas.com",
    category: "Creative/Tech",
    badge: "Heritage Surname",
    description: "A legendary, premium Italian heritage surname domain holding immense prestige. Exceptional candidacy for a premium dining franchise, artisanal coffee importer, or family estate registry.",
    estValue: "$6,500+",
    characters: 9,
    tld: ".com (Registry Standard)",
    useCases: ["Artisan Import Label", "Premium Hospitality Hub", "Fine Dining Directory", "Family Estate Portal"]
  },
  {
    domain: "beamspread.com",
    category: "Creative/Tech",
    badge: "Descriptive Precision",
    description: "Superior physical and architectural terminology mapping direct light diffusion. Ideal for engineering, architectural lighting firms, advanced projection systems, or signal mapping telemetry software.",
    estValue: "$5,400+",
    characters: 10,
    tld: ".com (Registry Standard)",
    useCases: ["Architectural Lighting SaaS", "Optics Manufacturing", "Data Signal Mapping", "Laser and Sensor Arrays"]
  },
  {
    domain: "bluntgasm.com",
    category: "Adult/Lifestyle",
    badge: "Edgy Culture Label",
    description: "A highly provocative, trend-focused lifestyle and high-impact culture indicator. Tailored directly for the rapidly growing premium cannabis lounge networks, legal herbal dispensaries, or lifestyle publication logs.",
    estValue: "$5,800+",
    characters: 9,
    tld: ".com (Registry Standard)",
    useCases: ["Cannabis Lifestyle Hub", "Herbal Wellness Portal", "Vape E-commerce Store", "Cultural Discussion Board"]
  },
  {
    domain: "boobclub.com",
    category: "Adult/Lifestyle",
    badge: "High-Traffic Authority",
    description: "Highly viral, tier-one premium brandable domain perfectly suited for an absolute market-standard community portal, global entertainment hub, or premium wellness club.",
    estValue: "$12,500+",
    characters: 8,
    tld: ".com (Registry Standard)",
    useCases: ["Adult Community Forum", "Luxury Wellness Club", "Viral Social Hub", "Subscription Platform"]
  },
  {
    domain: "caviz.com",
    category: "LLLL/Short",
    badge: "Elite 5-Letter Brand",
    description: "An exquisite, modern 5-letter brand name. Offers crisp phonetic balance, conveying precision and speed. The ultimate asset for software compilers, visual search engines, or AI-powered computer vision platforms.",
    estValue: "$9,200+",
    characters: 5,
    tld: ".com (Registry Standard)",
    useCases: ["Computer Vision AI", "Visual Search Engine", "Creative Design Agency", "Agile Software Suite"]
  },
  {
    domain: "cellbeep.com",
    category: "SaaS/Tech",
    badge: "Mobile Infrastructure",
    description: "An ultra-distinctive legacy alert and communications label. Perfectly matched for real-time mobile push infrastructure, server alerts, telecommunication APIs, or dispatch notification dashboards.",
    estValue: "$5,500+",
    characters: 8,
    tld: ".com (Registry Standard)",
    useCases: ["Real-time Push Server", "Mobile Dispatch App", "Emergency Notification System", "Developer SMS API"]
  },
  {
    domain: "chosenspot.com",
    category: "Creative/Tech",
    badge: "Location Authority",
    description: "A prime location, tourism, and ranking indicator. Excellent branding authority for localized travel software engines, real estate selector hubs, or digital mapping systems.",
    estValue: "$4,200+",
    characters: 10,
    tld: ".com (Registry Standard)",
    useCases: ["Premium Travel App", "Real Estate Selector", "Local Food Guide Portal", "Interactive Maps Tool"]
  },
  {
    domain: "fockstate.com",
    category: "SaaS/Tech",
    badge: "Advanced Tech Native",
    description: "Highly technical quantum physics nomenclature referring to multi-particle states. An unrivaled branding fit for quantum computing frameworks, high-performance computing, or modern developer systems.",
    estValue: "$6,200+",
    characters: 9,
    tld: ".com (Registry Standard)",
    useCases: ["Quantum Computing Dev Tools", "Scientific Research Portal", "High-Performance Cloud Infrastructure", "Engineering Simulation"]
  },
  {
    domain: "halfstash.com",
    category: "SaaS/Tech",
    badge: "Playful Tech Storage",
    description: "A clever, highly memorable storage-focused nomenclature. Perfect fit for secured client backup systems, developer code-snippet libraries, or automated cloud assets repository solutions.",
    estValue: "$4,600+",
    characters: 9,
    tld: ".com (Registry Standard)",
    useCases: ["Developer Snippet Hub", "Cloud Backup Software", "Collaborative Asset Drawer", "File Transfer Portal"]
  },
  {
    domain: "houseofterra.com",
    category: "Creative/Tech",
    badge: "Sustainable Premium",
    description: "An sophisticated, eco-conscious brandable masterpiece. Captures the growing consumer preference for organic architecture, sustainable design houses, clean-energy developments, or natural ceramics.",
    estValue: "$7,800+",
    characters: 12,
    tld: ".com (Registry Standard)",
    useCases: ["Eco-friendly Architecture", "Organic Interior Design", "Sustainable Real Estate", "Fine Stoneware Boutique"]
  },
  {
    domain: "jalh.com",
    category: "LLLL/Short",
    badge: "Ultra-Rare LLLL Acronym",
    description: "An ultra-scarce 4-letter (LLLL) .com domain asset. Short domains are rapidly appreciating assets, providing immense prestige, instant visual memory retention, and absolute acronym security.",
    estValue: "$14,000+",
    characters: 4,
    tld: ".com (Registry Standard)",
    useCases: ["Technology Incubator", "Private Capital Fund", "B2B Venture Hub", "Premium Acronym Rebrand"]
  },
  {
    domain: "kataf.com",
    category: "LLLL/Short",
    badge: "Rare 5-Letter Brand",
    description: "Extremely memorable, phonetic 5-letter brand identifier. Its clean pronunciation makes it an elite candidate for a modern global logistics firm, financial index, or AI SaaS infrastructure.",
    estValue: "$9,800+",
    characters: 5,
    tld: ".com (Registry Standard)",
    useCases: ["International Logistics", "AI/SaaS Infrastructure", "Global Fintech Group", "Freight Intelligence"]
  },
  {
    domain: "linkwhore.com",
    category: "Adult/Lifestyle",
    badge: "Descriptive Powerhouse",
    description: "A highly provocative, battle-tested marketing powerhouse. Delivers instant recall and immense organic click-through rates, serving as a goldmine for premium affiliate frameworks or high-volume indexing.",
    estValue: "$8,500+",
    characters: 9,
    tld: ".com (Registry Standard)",
    useCases: ["Affiliate Advertising Network", "Viral Retargeting Ledger", "Social Media Bio Optimizers", "Redirect Registry Matrix"]
  },
  {
    domain: "medizer.com",
    category: "Medical/Health",
    badge: "Healthcare Premium",
    description: "Ultra-polished, clean medical prefix blend. Conveys trust, longevity, and clinical precision. Engineered specifically for dynamic physical-digital clinics, modern pharmaceuticals, or patient diagnostics portals.",
    estValue: "$11,500+",
    characters: 7,
    tld: ".com (Registry Standard)",
    useCases: ["Telehealth Provider Suite", "Pharmaceutical Brand", "Medical Diagnostics AI", "Symptom Tracking Platform"]
  },
  {
    domain: "omachines.com",
    category: "SaaS/Tech",
    badge: "Industrial Automation",
    description: "A profound fusion of physical machinery and algorithmic control. Perfect brand anchor for robotic manufacturing plants, next-generation machine learning interfaces, or hardware automation platforms.",
    estValue: "$8,900+",
    characters: 9,
    tld: ".com (Registry Standard)",
    useCases: ["Robotic Orchestration App", "Industrial Automation Systems", "Machine Learning Compiler", "Smart Factory IoT Hub"]
  },
  {
    domain: "palmheld.com",
    category: "SaaS/Tech",
    badge: "Mobile Hardware Brand",
    description: "A premium legacy mobile device terminology pairing. Immensely relevant for responsive touch systems, hand-held telemetry equipment, mobile-first SaaS tools, or gaming hardware consoles.",
    estValue: "$6,300+",
    characters: 8,
    tld: ".com (Registry Standard)",
    useCases: ["Mobile-first CRM Portal", "Developer Touch UI Framework", "Handheld IoT Systems", "Gaming Consoles Store"]
  },
  {
    domain: "releafcanna.com",
    category: "Medical/Health",
    badge: "Certified Herbal Authority",
    description: "Superlative, trusted medical herbal wellness pairing. Conveys natural relief, organic medicine, and high product compliance. Designed for state-certified dispensaries, holistic therapy clinics, or botanical tracking software.",
    estValue: "$8,500+",
    characters: 11,
    tld: ".com (Registry Standard)",
    useCases: ["State-Certified Dispensary", "Holistic Relief Clinic", "Botanical Tracking Software", "Wellness Infusion Shop"]
  },
  {
    domain: "snackcore.com",
    category: "Creative/Tech",
    badge: "Trendy Consumer Asset",
    description: "An incredibly relevant, modern consumer-packaged snack label. Captures subculture internet design trends, perfectly suited for subscription boxes, high-velocity protein products, or dynamic food reviewer networks.",
    estValue: "$5,100+",
    characters: 9,
    tld: ".com (Registry Standard)",
    useCases: ["Snack Subscription Box", "Gourmet Protein Brand", "Snack Review System", "Modern E-commerce App"]
  },
  {
    domain: "subhauler.com",
    category: "SaaS/Tech",
    badge: "Commercial Authority",
    description: "High-authority descriptive commercial asset. The definition commands search engine prominence, designed specifically for massive cargo brokers, sub-hauling logistics platforms, or supply chain APIs.",
    estValue: "$7,500+",
    characters: 9,
    tld: ".com (Registry Standard)",
    useCases: ["Freight Dispatching Platform", "Supply Chain Software", "Local Hauling Logistics", "Fleet Management App"]
  },
  {
    domain: "surfmatic.com",
    category: "SaaS/Tech",
    badge: "Fluid Automation",
    description: "A beautiful fusion of fluid oceanic agility and automated programmatic rules. Perfect name for visual web scrapers, dynamic website browser emulators, or high-speed wave energy generators.",
    estValue: "$5,900+",
    characters: 9,
    tld: ".com (Registry Standard)",
    useCases: ["Automated Web Scraper", "Browser Emulator API", "Oceanic Energy Tech", "Dynamic Surfing Analytics"]
  },
  {
    domain: "taijan.com",
    category: "LLLL/Short",
    badge: "Elite 6-Letter Brand",
    description: "An elite, clean, highly-pronounceable 6-letter dot-com domain name. Excellent candidates for international joint ventures, high-tech engineering consulting groups, or premium manufacturing hubs.",
    estValue: "$8,700+",
    characters: 6,
    tld: ".com (Registry Standard)",
    useCases: ["International Consultance", "Advanced Semiconductor Tech", "Private Equity Hub", "Clean Energy Group"]
  },
  {
    domain: "thrillport.com",
    category: "Creative/Tech",
    badge: "Adventure Tourism",
    description: "An explosive, highly engaging experiential booking and tour portal. Engineered directly for adrenaline excursions, extreme sport listings, customized travel vouchers, or adventure simulation parks.",
    estValue: "$5,200+",
    characters: 10,
    tld: ".com (Registry Standard)",
    useCases: ["Extreme Sports Directory", "Adrenaline Tour Booking", "Immersive Experience App", "Travel Voucher Market"]
  },
  {
    domain: "vegginess.com",
    category: "Medical/Health",
    badge: "Clean Eating Domain",
    description: "The ultimate fresh, organic plant-based diet descriptor. Unrivaled candidacy for nationwide vegan product manufacturers, premium dynamic meal planners, or sustainable agricultural catalogs.",
    estValue: "$7,500+",
    characters: 9,
    tld: ".com (Registry Standard)",
    useCases: ["Plant-Based Recipe Suite", "Organic Vegan Delivery", "Sustainable Farming Index", "Nutritional Coaching App"]
  },
  {
    domain: "vehicraft.com",
    category: "SaaS/Tech",
    badge: "Advanced Transportation",
    description: "An absolute master-standard transportation and telemetry pairing. Engineered for autonomous vehicle management fleets, heavy machinery assembly software, or flight dynamics telemetry systems.",
    estValue: "$6,900+",
    characters: 9,
    tld: ".com (Registry Standard)",
    useCases: ["Fleet Management Platform", "Autonomous Vehicle software", "Machinery Dispatch API", "Custom Aviation Registry"]
  },
  {
    domain: "wikisonic.com",
    category: "SaaS/Tech",
    badge: "Sonic Audio Asset",
    description: "An exceptional, database-heavy audio and sonic documentation index brand. Ideal for crowdsourced sound-effect platforms, audiophile dictionary networks, or developer synthesizer software databases.",
    estValue: "$6,100+",
    characters: 9,
    tld: ".com (Registry Standard)",
    useCases: ["Sound Effect Database", "Audiophile Community Wiki", "Developer Synthesizer API", "Crowdsourced Music Index"]
  },
  {
    domain: "wimsic.com",
    category: "Creative/Tech",
    badge: "Creative Delight",
    description: "A beautifully compact, highly phonetic brand name inspired by whimsical ideas. Perfectly scaled for interactive kids' applications, luxury creative agencies, or premium toy marketplaces.",
    estValue: "$5,400+",
    characters: 6,
    tld: ".com (Registry Standard)",
    useCases: ["Interactive Kids App", "Design and Branding Firm", "Artisanal Toy Market", "Playful Social Network"]
  },
  {
    domain: "zpewand.com",
    category: "Creative/Tech",
    badge: "Quantum Magic Brand",
    description: "A highly innovative, futuristic energy or magical-tech developer label. Designed for advanced quantum physics simulations, interactive web games, or creative designer utility software.",
    estValue: "$4,600+",
    characters: 7,
    tld: ".com (Registry Standard)",
    useCases: ["Interactive Web Games", "Physics Simulation API", "Digital Designer Utility", "Futuristic Tech Label"]
  }
];

export default function OtherAssetsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedDomain, setCopiedDomain] = useState<string | null>(null);

  const categories = ["All", "LLLL/Short", "SaaS/Tech", "Adult/Lifestyle", "Medical/Health", "Creative/Tech"];

  const filteredDomains = PARTNER_DOMAINS.filter((item) => {
    const matchesSearch = item.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.useCases.some(uc => uc.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCopy = (domain: string) => {
    navigator.clipboard.writeText(domain);
    setCopiedDomain(domain);
    setTimeout(() => {
      setCopiedDomain(null);
    }, 2000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "LLLL/Short":
        return <Layers className="w-4 h-4 text-amber-500" />;
      case "SaaS/Tech":
        return <Cpu className="w-4 h-4 text-emerald-500" />;
      case "Adult/Lifestyle":
        return <Heart className="w-4 h-4 text-rose-500" />;
      case "Medical/Health":
        return <Zap className="w-4 h-4 text-blue-500" />;
      case "Creative/Tech":
        return <Compass className="w-4 h-4 text-indigo-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <>
      {/* Search Engine Optimization structured graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Listing Partner Premium Portfolios - neaner.com",
            "url": "https://neaner.com/other-assets",
            "description": "Secure, curate, and review elite brandable digital assets and premium domains held inside the neaner.com broker sitemap partnerships.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Registry Home", "item": "https://neaner.com/" },
                { "@type": "ListItem", "position": 2, "name": "Other Assets", "item": "https://neaner.com/other-assets" }
              ]
            }
          }),
        }}
      />

      <main id="other-assets-main" className="flex-1 max-w-7xl w-full mx-auto px-6 lg:px-8 py-10 sm:py-16 flex flex-col gap-10 sm:gap-14 bg-transparent z-10 relative">
        
        {/* Page Hero Section */}
        <div id="assets-hero" className="flex flex-col gap-4 text-left border-b border-stone-200 pb-10">
          <span className="text-xs font-mono tracking-widest text-[#92400e] bg-amber-100 border border-amber-300 px-3 py-1 rounded uppercase font-black self-start shadow-xs">
            Direct Brokerage Network
          </span>
          <h1 id="assets-title" className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
            Listing Partner <span className="font-serif italic text-amber-600 font-medium">Premium</span> Portfolios
          </h1>
          <p id="assets-desc" className="text-stone-600 text-base sm:text-lg max-w-3xl leading-relaxed font-semibold">
            In partnership with authorized GoDaddy Listing desks and registries, we offer a vetted directory of elite digital coordinate endpoints. Review domain dna, character metrics, and acquire assets securely.
          </p>
        </div>

        {/* Database Search & Filters Board */}
        <div id="assets-interactive-board" className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col gap-6">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-stone-500 pointer-events-none">
                <Search className="w-4 h-4 text-stone-400" />
              </span>
              <input
                id="domain-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search premium domains, use cases, or tags..."
                className="w-full pl-11 pr-4 py-3 bg-stone-950/80 border border-stone-800 focus:border-amber-500 outline-hidden rounded-2xl text-stone-200 text-sm font-semibold transition-all duration-200 shadow-inner"
              />
            </div>

            {/* Total Indicator */}
            <div className="text-stone-400 font-mono text-xs flex items-center gap-2 bg-stone-950 px-3 py-1.5 rounded-lg border border-stone-850 self-end md:self-auto uppercase">
              <span className="font-black text-amber-500">{filteredDomains.length}</span> Assets Matching View
            </div>
          </div>

          {/* Filtering Categories Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-1 border-b border-stone-800/80">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`cat-filter-${cat.toLowerCase().replace('/', '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border shrink-0 uppercase tracking-wider cursor-pointer flex items-center gap-2 ${
                  selectedCategory === cat
                    ? "bg-amber-600 border-amber-500 text-stone-950 font-black shadow-lg shadow-amber-500/10"
                    : "bg-stone-950 border-stone-850 text-stone-300 hover:border-stone-700 hover:bg-stone-900"
                }`}
              >
                {cat !== "All" && getCategoryIcon(cat)}
                {cat}
              </button>
            ))}
          </div>

          {/* Verification Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 text-stone-300 text-xs font-mono font-semibold">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
              <p>All items on this ledger are guaranteed direct-transfer enabled via certified GoDaddy Broker Escrow mechanisms.</p>
            </div>
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest bg-amber-500/15 py-1 px-2 rounded-md shrink-0 border border-amber-500/20">Ownership Verified</span>
          </div>
        </div>

        {/* Directory Grid */}
        <div id="assets-cards-grid" itemScope itemType="https://schema.org/ItemList" className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <AnimatePresence mode="popLayout">
            {filteredDomains.map((asset) => (
              <motion.div
                key={asset.domain}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white border-2 border-stone-200 hover:border-stone-300 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 transition-all duration-300 group shadow-sm hover:shadow-md"
                {...({
                  itemScope: true,
                  itemType: "https://schema.org/Product",
                  itemProp: "itemListElement"
                } as any)}
              >
                {/* Invisible LLM Search Crawler metadata injected into EACH div block for AI Search engine retrieval optimization */}
                <div className="sr-only" aria-hidden="true" data-ai-context={`domain-asset-${asset.domain}`}>
                  <span itemProp="name">{asset.domain} Premium Domain Name</span>
                  <span itemProp="description">{asset.description}</span>
                  <span itemProp="category">{asset.category} category asset ({asset.badge})</span>
                  <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="price">{asset.estValue.replace("$", "").replace("+", "").replace(",", "")}</span>
                    <span itemProp="priceCurrency">USD</span>
                    <span itemProp="availability">https://schema.org/InStock</span>
                    <span itemProp="url">{`https://www.godaddy.com/domainsearch/find?domainToCheck=${asset.domain}`}</span>
                  </div>
                  <p>
                    Target Keyword: Buy {asset.domain}. Appraisal worth estimation: {asset.estValue}. Category and vertical brand targeting: {asset.category}, use cases for development solutions: {asset.useCases.join(", ")}. Safe checkout facilitated via external GoDaddy registrars.
                  </p>
                </div>

                {/* Card Top Row */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-stone-50 border border-stone-100 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                      {getCategoryIcon(asset.category)}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-500">
                      {asset.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-[#92400e] bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full uppercase font-bold">
                    {asset.badge}
                  </span>
                </div>

                {/* Domain Visualizer Headline */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`https://${asset.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 hover:text-amber-600 transition-colors"
                    >
                      {asset.domain}
                    </a>

                    {/* Copy Control Button */}
                    <button
                      type="button"
                      id={`copy-${asset.domain.replace('.', '-')}`}
                      onClick={() => handleCopy(asset.domain)}
                      className="p-2 rounded-lg hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors shrink-0 cursor-pointer"
                      title="Copy domain name to clipboard"
                    >
                      {copiedDomain === asset.domain ? (
                        <Check className="w-4.5 h-4.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-4.5 h-4.5" />
                      )}
                    </button>
                  </div>
                  
                  <p className="text-stone-600 font-medium text-xs sm:text-sm leading-relaxed min-h-[50px]">
                    {asset.description}
                  </p>
                </div>

                {/* DNA Stats Specs Panel */}
                <div className="bg-[#FAF9F5] border border-stone-200/80 rounded-2xl p-4 flex flex-col gap-2.5 text-xs font-mono text-stone-500 font-semibold">
                  <div className="flex justify-between border-b border-stone-200/50 pb-2">
                    <span>DOM DNA length</span>
                    <span className="font-bold text-stone-950 uppercase">{asset.characters} Symbols</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200/50 pb-2">
                    <span>TLD registry tier</span>
                    <span className="font-bold text-stone-950 uppercase">{asset.tld}</span>
                  </div>
                  <div className="flex justify-between pt-0.5">
                    <span>Est. Market baseline</span>
                    <span className="font-bold text-amber-708">{asset.estValue}</span>
                  </div>
                </div>

                {/* Recommended Use Cases tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {asset.useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="text-[10px] font-sans font-bold text-stone-600 bg-stone-100 px-2 py-1 rounded"
                    >
                      #{useCase.toLowerCase().replace(/\s+/g, '-')}
                    </span>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div className="mt-auto pt-4 flex gap-3">
                  <a
                    href={`https://${asset.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-950 hover:bg-amber-600 hover:text-stone-950 text-stone-50 font-bold text-xs tracking-tight transition-all duration-250 border border-transparent shadow-md hover:shadow-lg hover:shadow-amber-500/10 active:scale-95 duration-250 cursor-pointer text-center"
                  >
                    Acquire Portfolio Asset
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredDomains.length === 0 && (
            <div className="col-span-1 md:col-span-2 text-center py-16 px-6 bg-stone-900 rounded-3xl border border-stone-800 flex flex-col items-center gap-3">
              <Search className="w-12 h-12 text-stone-500 animate-pulse stroke-1" />
              <p className="font-display font-bold text-stone-200 text-lg">No domain assets found</p>
              <p className="text-stone-500 text-xs font-semibold max-w-sm">No assets match your current search terms or selected category. Clean or reset filters to begin again.</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-2 px-4 py-2 bg-stone-800 hover:bg-amber-650 hover:text-stone-950 rounded-xl text-stone-200 hover:text-stone-950 text-xs font-bold transition-all cursor-pointer border border-stone-700"
              >
                Reset Filter Ledger
              </button>
            </div>
          )}
        </div>

        {/* Global Registry Acquisition Alert */}
        <div id="assets-direct-cta" className="bg-amber-100 border border-amber-300 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-inner">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="font-display font-extrabold text-stone-955 text-xl">Looking to list your portfolio in our high-authority directory?</h3>
            <p className="text-stone-750 text-sm leading-relaxed max-w-2xl font-semibold">
              The neaner.com network partners directly with elite registrar operators, premium domain broker desks, and investment conglomerates. To propose a premium listing placement, please coordinate with your GoDaddy relationship supervisor.
            </p>
          </div>
          <a
            href="https://www.godaddy.com/domainsearch/find?domainToCheck=neaner.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-amber-600 hover:text-stone-950 text-stone-50 hover:border-amber-500 font-bold text-sm tracking-tight transition-all shadow-md shrink-0 cursor-pointer"
          >
            Go To Broker Desk
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </main>
    </>
  );
}
