import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f3ec] text-stone-800 border-t border-stone-300 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
        
        {/* Detailed, Multi-column SEO Sitemap */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10 border-b border-stone-250 text-xs text-stone-600">
          <div className="flex flex-col gap-3.5">
            <h5 className="font-mono text-[11px] font-black text-amber-800 uppercase tracking-widest">Etymology Index</h5>
            <ul className="flex flex-col gap-2.5 font-semibold text-stone-700">
              <li>
                <Link href="/etymology/nerian-savior" className="hover:text-amber-800 hover:underline block text-left text-stone-650">
                  Germanic &quot;Nerian&quot; Savior Theory
                </Link>
              </li>
              <li>
                <Link href="/etymology/nearer-border" className="hover:text-amber-800 hover:underline block text-left text-stone-650">
                  Topographic &quot;Nearer&quot; Gatekeeper Theory
                </Link>
              </li>
              <li>
                <Link href="/etymology/spelling-shifts" className="hover:text-amber-800 hover:underline block text-left text-stone-650">
                  Scribal Orthographical Spelling Shifts
                </Link>
              </li>
              <li>
                <Link href="/etymology/distribution-index" className="hover:text-amber-800 hover:underline block text-left text-stone-650">
                  Global Frequency &amp; Distribution Index
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3.5">
            <h5 className="font-mono text-[11px] font-black text-amber-800 uppercase tracking-widest">Genealogy Ledger</h5>
            <ul className="flex flex-col gap-2.5 font-semibold text-stone-700">
              <li>
                <Link href="/etymology/distribution-index" className="hover:text-amber-800 hover:underline block text-left text-stone-650">
                  Neaner Last Name Database Mappings
                </Link>
              </li>
              <li>
                <Link href="/etymology/spelling-shifts" className="hover:text-amber-800 hover:underline block text-left text-stone-650">
                  Silesian &amp; Prussian Census Records Ledger
                </Link>
              </li>
              <li>
                <Link href="/etymology/nerian-savior" className="hover:text-amber-800 hover:underline block text-left text-stone-650">
                  Historic Family Heritage Mark Registry
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-amber-800 hover:underline block text-left text-stone-650">
                  Email Protection &amp; Identity Trust Hub
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3.5">
            <h5 className="font-mono text-[11px] font-black text-amber-800 uppercase tracking-widest">Domain Portal</h5>
            <ul className="flex flex-col gap-2.5 font-semibold text-stone-700">
              <li>
                <Link href="/" className="hover:text-amber-800 hover:underline block text-left text-stone-650">
                  GoDaddy Direct Broker Exchange Escrow
                </Link>
              </li>
              <li>
                <Link href="/seo-rank-simulator" className="hover:text-amber-800 hover:underline block text-left text-stone-650">
                  SEO Search Engine Visibility Dashboard
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-amber-800 hover:underline block text-left text-stone-650">
                  Direct Home Acquisition Panel
                </Link>
              </li>
              <li>
                <Link href="/feelize" className="hover:text-amber-800 hover:underline block text-left text-[#92400e]/90 font-extrabold">
                  Generated via Feelize AI Platform
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=neaner.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-900 hover:underline block text-left font-black text-amber-700"
                >
                  Request Custom Brokerage Buy ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Related Portfolio Crosslinking (SEO Goldmine) pointing to inner page instead of listing individual domains */}
        <div className="border-b border-stone-250 pb-10 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-[#FAF9F5] border border-stone-250 p-6 sm:p-8 rounded-3xl">
            <div className="flex-1 flex flex-col gap-2">
              <h4 className="text-xs bg-amber-100 text-amber-900 border border-amber-200/60 tracking-widest font-mono font-black uppercase px-4 py-1.5 rounded-lg inline-block self-start">
                Listing Partner Premium Portfolios
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed mt-2 font-semibold">
                Explore our curated registries of high-value digital assets, brandable names, and premium dot-com legacy portfolios across technology, media, and premium industry verticals.
              </p>
            </div>
            <Link href="/other-assets" className="text-sm font-display font-black text-white bg-amber-700 hover:bg-amber-800 px-6 py-3.5 rounded-full transition-all shrink-0 inline-flex items-center gap-2 shadow-md">
              Explore Partner Portfolios
              <span className="font-mono text-base font-black">➔</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-xs sm:text-sm text-stone-500">
          <div>
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <span className="font-display text-stone-900 text-lg font-black tracking-wider">neaner.com</span>
              <span className="text-[10px] font-mono font-black text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded">© 2026</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-center md:text-left text-stone-600 font-semibold max-w-xl">
              The premium, official digital asset registry, domain broker and ancestry database for neaner.com. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 font-mono text-xs font-bold text-stone-605 bg-[#FAF9F5] border border-stone-200 px-4 py-2.5 rounded-xl">
            <span>Powered by Gemini 3.5 AI Appraisals</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            <span>GoDaddy Listing Partner</span>
          </div>
        </div>

        <div className="border-t border-stone-250 pt-8 flex justify-center text-center">
          <p className="text-stone-500 text-[10px] sm:text-xs uppercase font-mono tracking-wider font-semibold">
            WEBSITE GENERATED WITH <Link href="/feelize" className="text-amber-700 hover:text-amber-900 underline decoration-amber-700/30 hover:decoration-amber-900/80 transition-all font-black">FEELIZE</Link> AI
          </p>
        </div>
      </div>
    </footer>
  );
}
