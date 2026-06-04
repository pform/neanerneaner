"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Target,
  Lock,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

// Elite Domain Metrics
const DOMAIN_DNA = [
  { label: "TLD Authority", value: "Premium .com", desc: "The gold standard of digital presence, holding undisputed trust", icon: ShieldCheck },
  { label: "Memory Recall", value: "99% High", desc: "Perfect phone-short phonetics, spelling, and direct flow", icon: Cpu },
  { label: "Visual Weight", value: "6 Letters Only", desc: "Ideal brand length, beautifully balanced on the eye", icon: Target },
  { label: "Security Profile", value: "Zero Hyphens", desc: "Protects brand equity against email leakages and typos", icon: Lock },
];

const MARKET_COMPARABLES = [
  { domain: "neller.com", price: "$12,500", year: "2024", type: "Family Last Name" },
  { domain: "neaves.com", price: "$9,800", year: "2023", type: "Family Surname" },
  { domain: "nealon.com", price: "$15,000", year: "2025", type: "Corporate Heritage" },
  { domain: "nemer.com", price: "$18,500", year: "2024", type: "Premium Short Surname" },
];

export default function NeanerAcquisitionPage() {
  return (
    <>
      {/* Search Engine Optimization structured graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "neaner.com",
            "url": "https://neaner.com",
            "description": "Premium domain asset for sale and official central genealogy archive for the Neaner last name legacy.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://neaner.com/?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-10 sm:py-16 flex flex-col gap-16 relative z-10">
        
        {/* Beautiful Editorial Hero Section */}
        <section id="hero-sec" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-[13px] font-mono tracking-widest text-[#92400e] bg-amber-200/40 border border-amber-300 px-4 py-1.5 rounded-md uppercase font-bold self-start shadow-xs shadow-amber-500/5">
              Exclusive Digital Estate &amp; Registry
            </span>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-stone-955 leading-[1.08]">
              A pristine 6-letter legacy <span className="font-serif italic text-amber-600 bg-gradient-to-r from-amber-600 via-amber-500 to-rose-600 bg-clip-text text-transparent font-medium pb-2">for sale</span>.
            </h1>
            
            <p className="text-stone-750 text-lg sm:text-xl lg:text-[21px] lg:leading-relaxed leading-relaxed max-w-2xl font-medium">
              Domain names are unique, non-reproducible digital assets. For anyone carrying the <strong className="text-stone-950 font-extrabold underline decoration-amber-500/80 decoration-3 underline-offset-4">Neaner</strong> last name or building a family legacy, establishing <span className="bg-amber-100 border border-amber-300 text-amber-955 font-mono text-base px-2.5 py-0.5 rounded font-black shadow-inner">neaner.com</span> ensures timeless branding authority, protection against email leakages, and generational roots.
            </p>

            {/* Highly Polished Trust & Verification Seal Block */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-stretch mt-4 bg-stone-100/60 border border-stone-200/80 rounded-2xl p-4.5 shadow-xs">
              <div className="bg-white/80 border border-stone-200 rounded-xl p-3 flex flex-col gap-1.5 transition-colors hover:border-amber-400">
                <div className="flex items-center gap-1.5 text-amber-700">
                  <ShieldCheck className="w-4.5 h-4.5 stroke-[2.5]" />
                  <span className="text-[10px] uppercase font-black tracking-widest font-mono">TLD Standard</span>
                </div>
                <p className="text-stone-900 font-extrabold text-xs sm:text-[13px]">Premium .com Extension</p>
                <p className="text-stone-500 font-semibold text-[11px] leading-relaxed">Highly trusted, top-tier global routing authority.</p>
              </div>
              <div className="bg-white/80 border border-stone-200 rounded-xl p-3 flex flex-col gap-1.5 transition-colors hover:border-amber-400">
                <div className="flex items-center gap-1.5 text-amber-700">
                  <Lock className="w-4.5 h-4.5 stroke-[2.5]" />
                  <span className="text-[10px] uppercase font-black tracking-widest font-mono">Secured Buy</span>
                </div>
                <p className="text-stone-900 font-extrabold text-xs sm:text-[13px]">Escrow Guaranteed</p>
                <p className="text-stone-500 font-semibold text-[11px] leading-relaxed">Payments held safely by GoDaddy broker desk.</p>
              </div>
              <div className="bg-white/80 border border-stone-200 rounded-xl p-3 flex flex-col gap-1.5 transition-colors hover:border-amber-400">
                <div className="flex items-center gap-1.5 text-amber-700">
                  <CheckCircle className="w-4.5 h-4.5 stroke-[2.5]" />
                  <span className="text-[10px] uppercase font-black tracking-widest font-mono">Speed Delivery</span>
                </div>
                <p className="text-stone-900 font-extrabold text-xs sm:text-[13px]">&lt; 24h Push Transfer</p>
                <p className="text-stone-500 font-semibold text-[11px] leading-relaxed">Direct credentials delivered to your registrar.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-3">
              <button
                onClick={() => {
                  document.getElementById("acquisition-hub")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 rounded-full bg-stone-900 hover:bg-amber-500 hover:text-stone-955 text-white font-bold text-sm tracking-tight shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5 duration-200"
              >
                Acquire Domain Name
              </button>
            </div>
          </div>

          {/* Asset Details Column */}
          <div className="lg:col-span-12 xl:col-span-5 lg:order-last">
            <div className="p-8 sm:p-10 bg-white rounded-2xl border-2 border-stone-200/80 shadow-md flex flex-col gap-7 relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
              <div className="absolute top-0 right-0 w-36 h-36 bg-amber-200/20 rounded-full blur-3xl -mr-8 -mt-8 pointer-events-none"></div>
              
              <div className="flex items-center justify-between pb-3.5 border-b border-stone-200/80">
                <span className="text-xs font-mono tracking-wider font-bold text-stone-600 uppercase">Asset Profile</span>
                <span className="text-[11px] font-mono tracking-widest font-black text-amber-905 bg-amber-100 border border-amber-300 px-3.5 py-1 rounded">HIGH-TIER TLD</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-xs text-stone-500 uppercase font-black tracking-wider font-mono">Registry Domain</p>
                <p className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-amber-600 via-amber-700 to-rose-700 bg-clip-text text-transparent">neaner.com</p>
              </div>

              <hr className="border-stone-200/60" />

              <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-sm font-mono">
                <div>
                  <p className="text-stone-500 text-xs mb-0.5 uppercase font-bold">Asset Class</p>
                  <p className="text-stone-950 font-black text-lg">Premium Surname</p>
                </div>
                <div>
                  <p className="text-stone-500 text-xs mb-0.5 uppercase font-bold">Extension Authority</p>
                  <p className="text-stone-955 font-black text-lg">Dot-Com (.com)</p>
                </div>
                <div>
                  <p className="text-stone-500 text-xs mb-0.5 uppercase font-bold">Phonetic Weight</p>
                  <p className="text-stone-955 font-black text-lg">2 syllables (crisp)</p>
                </div>
                <div>
                  <p className="text-stone-500 text-xs mb-0.5 uppercase font-bold">Est. Transfer</p>
                  <p className="text-stone-955 font-black text-lg">&lt; 24 Hours</p>
                </div>
              </div>

              <div className="p-4.5 bg-amber-100/90 rounded-xl border border-amber-300 shadow-inner">
                <p className="text-sm sm:text-[14.5px] text-amber-955 font-extrabold flex items-center justify-center gap-2 animate-pulse">
                  <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0 stroke-[2.5]" />
                  <span>Transaction processed safely &amp; securely via GoDaddy Escrow services.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal DNA appraisal factors */}
        <section id="dna-factors" className="flex flex-col gap-10 border-t-2 border-stone-200/80 pt-14">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
              Tier-1 Valuation Benchmarks
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-lg mx-auto font-medium">
              The fundamental parameters determining why <span className="text-amber-700 font-bold">neaner.com</span> is an exceptional branding and SEO anchor position.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOMAIN_DNA.map((dna, idx) => {
              const Icon = dna.icon;
              return (
                <div key={idx} className="bg-white rounded-xl border-2 border-stone-200/60 p-6 flex flex-col gap-4.5 hover:border-amber-500 hover:shadow-md transition-all duration-200">
                  <div className="p-2.5 rounded-lg bg-amber-50 text-amber-900 self-start border border-amber-200/60 shadow-xs">
                    <Icon className="w-5 h-5 text-amber-700 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-black text-amber-850 tracking-wider uppercase block">{dna.label}</span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900 mt-1">{dna.value}</h3>
                    <p className="text-[13px] text-stone-650 mt-1.5 leading-relaxed">{dna.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Canonical Etymology & SEO Gateways Card Grid (The new clean architecture replacing old long scroll) */}
        <section className="border-t-2 border-stone-200/80 pt-14 flex flex-col gap-10">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3.5">
            <span className="text-xs font-mono tracking-widest text-[#92400e] bg-amber-100 border border-amber-300 px-3.5 py-1.5 rounded-full uppercase font-black self-center shadow-xs">
              Linguistic Gateway &amp; Database
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-stone-955 leading-tight">
              An Architectural Blueprint for the <span className="font-serif italic text-amber-600">Neaner</span> Surname
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-stone-650 max-w-xl mx-auto font-medium">
              We have compiled extensive, search-engine authorized records outlining the rich historical context of the Neaner lineage. Click any branch below to view its dedicated canonical research page:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-stone-200 hover:border-amber-500 rounded-2xl p-6 sm:p-8 flex flex-col gap-5 shadow-xs/5 transition-all group relative overflow-hidden">
              <span className="text-[10px] font-mono font-black text-amber-900 bg-amber-100 border border-amber-300 rounded px-2 py-0.5 self-start uppercase tracking-wider">Theory A</span>
              <h3 className="font-display text-xl font-bold text-stone-950">Medieval Germanic &quot;Nerian&quot; Savior Root</h3>
              <p className="text-stone-650 text-sm leading-relaxed">
                Deep investigations tracing the Neaner last name back to old Teutonic verbs representing protection, guarding, and community shelter.
              </p>
              <Link href="/etymology/nerian-savior" className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors group-hover:translate-x-1.5">
                Explore Research Page &rarr;
              </Link>
            </div>

            <div className="bg-white border-2 border-stone-200 hover:border-amber-500 rounded-2xl p-6 sm:p-8 flex flex-col gap-5 shadow-xs/5 transition-all group relative overflow-hidden">
              <span className="text-[10px] font-mono font-black text-amber-900 bg-amber-100 border border-amber-300 rounded px-2 py-0.5 self-start uppercase tracking-wider">Theory B</span>
              <h3 className="font-display text-xl font-bold text-stone-950">Anglo-Saxon Frontier Topographical Gatekeepers</h3>
              <p className="text-stone-650 text-sm leading-relaxed">
                Geographical residency analysis for branches settled adjacent to defensive locks, limits, or custom boundaries.
              </p>
              <Link href="/etymology/nearer-border" className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors group-hover:translate-x-1.5">
                Explore Research Page &rarr;
              </Link>
            </div>

            <div className="bg-white border-2 border-stone-200 hover:border-amber-500 rounded-2xl p-6 sm:p-8 flex flex-col gap-5 shadow-xs/5 transition-all group relative overflow-hidden">
              <span className="text-[10px] font-mono font-black text-amber-900 bg-amber-100 border border-amber-300 rounded px-2 py-0.5 self-start uppercase tracking-wider">Theory C</span>
              <h3 className="font-display text-xl font-bold text-stone-950">Scribal Spelling Shifts &amp; Parish Registers</h3>
              <p className="text-stone-650 text-sm leading-relaxed">
                Phonetic tracing of church scribbles across East Germany and East Prussia, centralizing spelling variants into modern form.
              </p>
              <Link href="/etymology/spelling-shifts" className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors group-hover:translate-x-1.5">
                Explore Research Page &rarr;
              </Link>
            </div>

            <div className="bg-white border-2 border-stone-200 hover:border-amber-500 rounded-2xl p-6 sm:p-8 flex flex-col gap-5 shadow-xs/5 transition-all group relative overflow-hidden">
              <span className="text-[10px] font-mono font-black text-amber-900 bg-amber-100 border border-amber-300 rounded px-2 py-0.5 self-start uppercase tracking-wider">Theory D</span>
              <h3 className="font-display text-xl font-bold text-stone-950">Global Distribution Analytics &amp; Rarity Score</h3>
              <p className="text-stone-650 text-sm leading-relaxed">
                Statistical frequency mappings proving why this specific brand holds absolute exclusivity over worldwide searches.
              </p>
              <Link href="/etymology/distribution-index" className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors group-hover:translate-x-1.5">
                Explore Research Page &rarr;
              </Link>
            </div>
          </div>

          {/* Interactive SEO Simulator Gateway Block */}
          <div className="bg-gradient-to-r from-stone-900 to-stone-950 border-2 border-stone-850 rounded-3xl p-8 text-neutral-200 flex flex-col md:flex-row gap-8 items-center justify-between shadow-md">
            <div className="flex flex-col gap-2.5 max-w-xl text-center md:text-left">
              <span className="text-[10px] text-amber-500 font-mono font-black tracking-widest uppercase bg-amber-400/10 px-3 py-1 rounded border border-amber-500/20 self-center md:self-start">Live Organic Preview</span>
              <h3 className="font-display text-2xl font-black text-white">Google Rank #1 SERP Search Engine Simulator</h3>
              <p className="text-stone-300 text-sm leading-relaxed font-semibold">
                Simulate standard query patterns live to see how search engines parse, match, and reward immediate Rank #1 authority back to neaner.com.
              </p>
            </div>
            <Link href="/seo-rank-simulator" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-amber-600 hover:bg-amber-500 text-stone-950 font-black text-sm tracking-tight transition-all duration-200 shrink-0 transform hover:-translate-y-0.5 shadow-sm hover:shadow-amber-500/10 active:scale-95 leading-none">
              Open Live Simulator
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
          </div>
        </section>

        {/* Domain Acquisition Hub */}
        <section id="acquisition-hub" className="border-t-2 border-stone-200/80 pt-14 flex flex-col gap-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Escrow & Acquisition Steps */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl border-2 border-stone-200 p-8 sm:p-12 flex flex-col gap-10 shadow-sm relative overflow-hidden">
                <div>
                  <span className="text-[13px] font-mono tracking-widest text-[#92400e] bg-amber-200/40 border border-amber-300 px-3.5 py-1.5 rounded font-black uppercase inline-block shadow-xs">
                    Transfer Portal
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-stone-955 mt-4 leading-tight">Direct Exchange Escrow</h3>
                  <p className="text-base sm:text-lg lg:text-[19px] text-stone-705 leading-relaxed mt-3.5 font-semibold">
                    GoDaddy provides complete buyer coverage, contract authorization, and payment holds. Transfer is automated for immediate release.
                  </p>
                </div>

                <div className="p-10 bg-amber-50/40 rounded-3xl border-2 border-amber-200/70 flex flex-col items-center text-center gap-6 relative shadow-inner">
                  <span className="text-[11px] font-mono text-emerald-800 tracking-wider uppercase font-black bg-emerald-100 border border-emerald-300 px-4 py-1 rounded-full shadow-xs">
                    Active Verified Listing
                  </span>
                  <h4 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-amber-600 tracking-tight bg-gradient-to-r from-amber-600 via-amber-700 to-rose-600 bg-clip-text text-transparent">neaner.com</h4>
                  <p className="text-sm sm:text-base text-stone-705 max-w-md font-bold leading-relaxed">
                    Secured through immediate checkout. Transfer code and ownership keys automatically populated within 1 business day.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <a
                    href="https://www.godaddy.com/domainsearch/find?domainToCheck=neaner.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4.5 px-10 rounded-full bg-stone-950 text-white hover:bg-amber-600 hover:text-stone-955 font-bold text-base sm:text-lg text-center tracking-tight shadow-md hover:shadow-xl transition-all transform active:scale-98 duration-200 cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    Acquire neaner.com on GoDaddy ↗
                  </a>
                  <p className="text-xs sm:text-sm text-stone-500 text-center leading-relaxed font-bold">
                    Prefer to place an alternative bid via our GoDaddy authorized registrar agent? 
                    <a
                      href="https://www.godaddy.com/domainsearch/find?domainToCheck=neaner.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-800 hover:text-amber-600 hover:underline font-extrabold ml-1.5 inline-flex items-center gap-0.5"
                    >
                      Request custom brokerage buy ↗
                    </a>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t-2 border-stone-150 pt-8 text-stone-700">
                  <div>
                    <h5 className="font-extrabold text-[#1c1917] font-display text-lg mb-2">Contract Authorization</h5>
                    <p className="text-xs sm:text-sm leading-relaxed text-stone-605 font-bold">GoDaddy verifies credentials instantly, ensuring clear ownership transfer validation.</p>
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#1c1917] font-display text-lg mb-2">Escrow Assurance</h5>
                    <p className="text-xs sm:text-sm leading-relaxed text-stone-605 font-bold">Payments are held secure in third-party escrow until registry validation completes.</p>
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#1c1917] font-display text-lg mb-2">DNS Configuration</h5>
                    <p className="text-xs sm:text-sm leading-relaxed text-stone-605 font-bold">Full authoritative delegation, DNSSEC validation keys, and custom setup options.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Baseline Indexes (Columns 9-12) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              
              {/* Comparable Sales */}
              <div className="bg-white rounded-2xl border-2 border-stone-200 p-6 sm:p-7 flex flex-col gap-5 shadow-sm">
                <div className="flex items-center gap-2.5 pb-3 border-b border-stone-200">
                  <TrendingUp className="w-5 h-5 text-amber-600 stroke-[2.5]" />
                  <h4 className="font-display font-extrabold text-stone-955 text-base">
                    Strategic Appraisals
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-605 leading-relaxed font-semibold">
                  Comparable market records for short, phonetic, 6-letter dot-com surname extensions:
                </p>

                <div className="flex flex-col gap-3 font-mono text-xs sm:text-sm">
                  {MARKET_COMPARABLES.map((comp, idx) => (
                    <div key={idx} className="p-3.5 bg-stone-50 rounded-xl border-2 border-stone-150 flex items-center justify-between">
                      <div>
                        <p className="font-extrabold text-stone-950 text-sm sm:text-base">{comp.domain}</p>
                        <p className="text-[10px] text-stone-500 uppercase font-black tracking-wider">{comp.type}</p>
                      </div>
                      <div className="text-right font-bold">
                        <p className="font-black text-amber-805 text-sm sm:text-base">{comp.price}</p>
                        <p className="text-[10px] text-stone-500">Closed: {comp.year}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-stone-400 font-medium italic leading-relaxed border-t border-stone-200 pt-3">
                  * Surname authority values fluctuate strictly based on exact syllable balance, spelling rarity indices, and developer request depth.
                </p>
              </div>

              {/* Escrow Partner Checklist */}
              <div className="bg-white rounded-2xl border-2 border-stone-200 p-6 sm:p-7 flex flex-col gap-5 shadow-sm">
                <div className="flex items-center gap-2.5 pb-3 border-b border-stone-200">
                  <ShieldCheck className="w-5 h-5 text-amber-600 stroke-[2.5]" />
                  <h4 className="font-display font-extrabold text-stone-955 text-base">
                    GoDaddy Escrow Brokerage
                  </h4>
                </div>

                <div className="flex flex-col gap-4 text-xs sm:text-sm text-stone-700">
                  <div className="flex gap-3 items-start">
                    <span className="w-5.5 h-5.5 rounded-full bg-amber-50 text-amber-955 font-black flex items-center justify-center shrink-0 border-2 border-amber-255 text-xs shadow-xs">1</span>
                    <p className="leading-relaxed text-xs sm:text-[13px] font-bold text-stone-850">
                      <strong>GoDaddy Secured Check:</strong> Contract and keys authorized securely under safe credit/wire escrow protection windows.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-5.5 h-5.5 rounded-full bg-amber-50 text-amber-955 font-black flex items-center justify-center shrink-0 border-2 border-amber-255 text-xs shadow-xs">2</span>
                    <p className="leading-relaxed text-xs sm:text-[13px] font-bold text-stone-850">
                      <strong>Validation Hold:</strong> Domain listing ownership officially verified with direct registry authority logs prior to transfer.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-5.5 h-5.5 rounded-full bg-amber-50 text-amber-955 font-black flex items-center justify-center shrink-0 border-2 border-amber-255 text-xs shadow-xs">3</span>
                    <p className="leading-relaxed text-xs sm:text-[13px] font-bold text-stone-850">
                      <strong>Keys Handover:</strong> Secure push coordinates credentials and registrar authorization auth-code keys under 1 business day.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Informative Frequently Asked Questions (Crawler optimized) */}
        <section id="faq-accordions" className="bg-white rounded-3xl border-2 border-stone-200 p-8 sm:p-12 shadow-sm flex flex-col gap-10">
          <div className="border-b border-stone-200 pb-5">
            <span className="text-xs font-mono tracking-widest text-[#92400e] bg-amber-100/60 border border-amber-250 px-3 py-1 rounded font-black uppercase">Search Crawl Registry</span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-950 mt-4">Information Archive &amp; Domain Rights</h3>
            <p className="text-sm sm:text-base text-stone-605 leading-relaxed mt-2 font-semibold">
              Public disclosure details regarding the premium appraisal baseline, authority locks, and transactional procedures of neaner.com.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 text-sm sm:text-base">
            <div className="flex flex-col gap-3">
              <h4 className="font-extrabold text-stone-955 font-display text-base sm:text-lg">Why is neaner.com considered a high-value domain asset?</h4>
              <p className="text-stone-705 leading-relaxed font-semibold text-xs sm:text-[13px]">
                In the digital economy, short single-word family domains are completely depleted. 6-letter .com domains are highly coveted because they are easy to spell, have clear phonetic value, and avoid branding dilution. Owning `neaner.com` ensures that emails are delivered securely without risk of typos.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-extrabold text-stone-955 font-display text-base sm:text-lg">Who is the target acquirer for this digital estate?</h4>
              <p className="text-stone-705 leading-relaxed font-semibold text-xs sm:text-[13px]">
                This asset is ideally suited for a high-net-worth individual, a family trust, a family-owned vineyard or enterprise with the surname Neaner, or an venture-backed technology incubator desiring a premium, brandable phonetic name.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-extrabold text-stone-955 font-display text-base sm:text-lg">How does the secure domain acquisition process operate?</h4>
              <p className="text-stone-705 leading-relaxed font-semibold text-xs sm:text-[13px]">
                We handle transactions safely and simply directly through GoDaddy. This ensures secure payment processing, full buyer protection, and immediate domain push to your own registrar account within 24 hours.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-extrabold text-stone-955 font-display text-base sm:text-lg">Is this domain brandable for international global enterprises?</h4>
              <p className="text-stone-705 leading-relaxed font-semibold text-xs sm:text-[13px]">
                Yes. With two crisp, memorable syllables &quot;nean-er&quot;, the name lends itself beautifully to modern software agencies, consumer goods, venture capitals, or personal identity hubs with memorable prestige.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
