"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Lock, ShieldCheck, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

export default function SEORankSimulatorPage() {
  const [activeQuery, setActiveQuery] = useState("neaner meaning");

  return (
    <>
      {/* Canonical Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SEO Rank Simulator: Organic Google Visibility Mockup",
            "url": "https://neaner.com/seo-rank-simulator",
            "description": "Interactive Google SEO Rank #1 Search Engine Results Page (SERP) simulator demonstrating organic prominence of neaner.com.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Registry Home", "item": "https://neaner.com/" },
                { "@type": "ListItem", "position": 2, "name": "SEO Rank Simulator", "item": "https://neaner.com/seo-rank-simulator" }
              ]
            }
          }),
        }}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 sm:py-20 flex flex-col gap-10 relative z-10">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-500 hover:text-amber-700 transition-colors self-start">
          <ArrowLeft className="w-4 h-4" />
          Back to Acquisition Hub
        </Link>

        {/* Title Block */}
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-[#92400e] bg-amber-100 border border-amber-300 px-3 py-1 rounded-full uppercase font-black self-center shadow-xs">
            Interactive SEO Visibility Simulator
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-955 leading-tight">
            Instant Google Search Dominance &amp; Authority
          </h1>
          <p className="text-stone-600 text-base font-medium leading-relaxed">
            See what happens live when search crawlers index the specialized etymology data structured inside <strong className="text-amber-800">neaner.com</strong>. Switch queries below to preview the Rank #1 organic mock result instantly.
          </p>
        </div>

        {/* Graphic Simulator Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          {/* Toggle Board and SEO Visual metrics (Columns: 1 to 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-3xl border-2 border-stone-200 p-6 sm:p-8 flex flex-col gap-4 shadow-sm h-full justify-between">
              <div>
                <h3 className="font-display text-lg font-extrabold text-stone-950 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  Interactive Organic Search Keywords
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-550 leading-relaxed font-bold mb-4">
                  Click a targeted search phrase to simulate Google queries and see the graphical SERP mock result instantly adapt:
                </p>

                <div className="flex flex-col gap-2.5">
                  {[
                    { key: "neaner meaning", label: "🔍 What does Neaner mean?", text: "neaner meaning" },
                    { key: "neaner surname origin", label: "🗺️ Neaner surname origin & tree", text: "neaner surname origin" },
                    { key: "neaner family history", label: "🌳 Neaner family history & lineage", text: "neaner family history" },
                  ].map((queryObj) => (
                    <button
                      key={queryObj.key}
                      onClick={() => setActiveQuery(queryObj.key)}
                      className={`text-left px-4 py-3.5 rounded-xl border-2 transition-all font-bold text-xs sm:text-sm cursor-pointer flex items-center justify-between ${
                        activeQuery === queryObj.key
                          ? "bg-amber-600 border-amber-600 text-stone-950 shadow-md transform translate-x-1"
                          : "bg-stone-50 border-stone-150 text-stone-700 hover:bg-stone-100 hover:border-stone-300"
                      }`}
                    >
                      <span>{queryObj.label}</span>
                      {activeQuery === queryObj.key && <CheckCircle className="w-4 h-4 text-stone-950" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-stone-150 pt-5 mt-5">
                <span className="text-[10px] font-mono font-black text-stone-400 uppercase tracking-widest block mb-3">Google Rank Flow Metrics</span>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-amber-50/55 rounded-xl p-3 border border-amber-200/50 text-center">
                    <p className="text-stone-500 text-[10px] font-mono uppercase font-bold">Base Position</p>
                    <p className="text-xl sm:text-2xl font-black text-stone-955 font-display mt-0.5">#1</p>
                  </div>
                  <div className="bg-[#ecfdf5] rounded-xl p-3 border border-[#a7f3d0] text-center">
                    <p className="text-[#047857] text-[10px] font-mono uppercase font-bold">CTR Surge</p>
                    <p className="text-[#065f46] text-xl sm:text-2xl font-black font-display mt-0.5">+148%</p>
                  </div>
                  <div className="bg-[#f5f3ff] rounded-xl p-3 border border-[#ddd6fe] text-center">
                    <p className="text-[#6d28d9] text-[10px] font-mono uppercase font-bold">Risk Guard</p>
                    <p className="text-[#5b21b6] text-xl sm:text-2xl font-black font-display mt-0.5">100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simulated Live Google Page Output (Columns: 6 to 12) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border-2 border-stone-200 shadow-sm overflow-hidden h-full flex flex-col">
              {/* Google Browser Bar Mockup */}
              <div className="bg-[#f1f3f4] border-b border-stone-200 px-4 py-3.5 flex items-center gap-3">
                <div className="flex gap-1.5 shrink-0">
                  <span className="w-3 h-3 rounded-full bg-[#f28b82]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#fbbc04]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#34a853]"></span>
                </div>
                {/* Mock Address Bar */}
                <div className="bg-white px-3.5 py-1.5 rounded-full border border-stone-200 text-[11px] sm:text-xs text-stone-500 font-mono w-full flex items-center justify-between shadow-xs">
                  <span className="truncate">https://google.com/search?q={encodeURIComponent(activeQuery)}</span>
                  <Lock className="w-3 h-3 text-[#34a853]" />
                </div>
              </div>

              {/* Simulated Google Search Results */}
              <div className="p-6 sm:p-8 flex flex-col gap-6 flex-1 bg-white">
                {/* Search Stat info */}
                <div className="text-xs sm:text-sm text-stone-400 font-medium font-sans flex items-center gap-2">
                  <span className="font-extrabold text-stone-700">Google Search Results</span>
                  <span>• About 42,900 results (0.28 seconds)</span>
                </div>

                {/* Rich Snippet Rank #1: neaner.com */}
                <div className="border-2 border-amber-300 bg-amber-50/10 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative">
                  <span className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-955 font-mono text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full border border-amber-300 uppercase shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3 animate-spin text-stone-955" />
                    Rank #1 Authority Search Snippet
                  </span>

                  <div className="flex flex-col gap-1">
                    {/* Breadcrumb URL */}
                    <div className="flex items-center gap-1.5 text-xs text-[#202124] shrink-0 font-sans font-medium">
                      <span className="bg-[#f1f3f4] w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-stone-750">N</span>
                      <div className="truncate text-stone-700">
                        https://neaner.com <span className="text-stone-400 font-bold">›</span> <span className="font-semibold text-stone-900">etymology-wiki</span>
                      </div>
                    </div>

                    {/* Header Blue Link */}
                    <span className="text-sm sm:text-xl font-bold font-sans text-[#1a0dab] hover:underline cursor-pointer leading-tight mt-1">
                      {activeQuery === "neaner meaning" && "The Etymology of Neaner: Meaning, Origins & Lineage"}
                      {activeQuery === "neaner surname origin" && "Neaner Surname Origin: Traditional Germanic & Anglo-Saxon Records"}
                      {activeQuery === "neaner family history" && "Neaner Family History: Registry Records & Spellings Ledger"}
                    </span>
                  </div>

                  {/* Rich description snippet snippet */}
                  <p className="text-stone-605 text-xs sm:text-[13.5px] leading-relaxed mt-2.5 font-sans font-medium">
                    {activeQuery === "neaner meaning" && "What is the true translation and meaning of the surname Neaner? Rooted in ancient Germanic 'Nerian' (Nähren) which signifies 'to save, nourish, or protect...', or North Sea Anglo-Saxon..."}
                    {activeQuery === "neaner surname origin" && "The historical geography, origin, and census mapping behind Neaner last names. Cataloging rare Bavarian, Silesian, and early Anglo-Saxon frontier coordinates..."}
                    {activeQuery === "neaner family history" && "Secure genealogy mappings for the precious Neaner bloodline. Explore our complete etymology directory, regional spelling mutations index, and GoDaddy asset escrow parameters..."}
                  </p>

                  {/* Rich Sitelink extensions - Highly graphical */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-stone-200/80 pt-4.5 mt-4 text-[12px] sm:text-xs">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#1a0dab] font-bold hover:underline cursor-pointer">⚔️ Nerian Savior Root</span>
                      <span className="text-stone-450 truncate max-w-xs">Derived from &apos;Nerian&apos; - to deliver.</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#1a0dab] font-bold hover:underline cursor-pointer">🏞️ Nearer Gatekeepers</span>
                      <span className="text-stone-450 truncate max-w-xs">Topographical Anglo-Saxon frontier boundaries.</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#1a0dab] font-bold hover:underline cursor-pointer">📜 Spelling Shifts Index</span>
                      <span className="text-stone-450 truncate max-w-xs">Bavarian parish shifts to Neaner.</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#1a0dab] font-bold hover:underline cursor-pointer">🌐 Distribution Analytics</span>
                      <span className="text-stone-450 truncate max-w-xs">High rarity coefficient global registry mapping.</span>
                    </div>
                  </div>
                </div>

                {/* Standard Rank #2 results to contrast */}
                <div className="opacity-50 p-3 bg-stone-50 border border-stone-150 rounded-xl text-stone-400 text-xs sm:text-[13px]">
                  <div className="text-stone-500 font-mono text-[10px] uppercase font-bold mb-1">Rank #2 Competition URL</div>
                  <span className="font-semibold text-stone-605">https://another-domain.info › legacy-records</span>
                  <p className="mt-1">Generic unrelated historical census files, spelling matches, and other common lists...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
