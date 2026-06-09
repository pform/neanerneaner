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

      <main id="other-assets-main" className="flex-1 max-w-6xl w-full mx-auto px-6 py-10 sm:py-16 flex flex-col gap-10 sm:gap-14 bg-transparent z-10 relative">
        
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
        <div id="assets-cards-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
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
              >
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
