import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white border-t-4 border-amber-500 py-16 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">
        
        {/* Detailed, Multi-column SEO Sitemap */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10 border-b border-stone-900 text-xs text-stone-400">
          <div className="flex flex-col gap-3.5">
            <h5 className="font-mono text-[11px] font-black text-amber-500 uppercase tracking-widest">Etymology Index</h5>
            <ul className="flex flex-col gap-2.5 font-semibold text-stone-405">
              <li>
                <Link href="/etymology/nerian-savior" className="hover:text-amber-400 hover:underline block text-left">
                  Germanic &quot;Nerian&quot; Savior Theory
                </Link>
              </li>
              <li>
                <Link href="/etymology/nearer-border" className="hover:text-amber-400 hover:underline block text-left">
                  Topographic &quot;Nearer&quot; Gatekeeper Theory
                </Link>
              </li>
              <li>
                <Link href="/etymology/spelling-shifts" className="hover:text-amber-400 hover:underline block text-left">
                  Scribal Orthographical Spelling Shifts
                </Link>
              </li>
              <li>
                <Link href="/etymology/distribution-index" className="hover:text-amber-400 hover:underline block text-left">
                  Global Frequency &amp; Distribution Index
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3.5">
            <h5 className="font-mono text-[11px] font-black text-amber-500 uppercase tracking-widest">Genealogy Ledger</h5>
            <ul className="flex flex-col gap-2.5 font-semibold text-stone-405">
              <li>
                <Link href="/etymology/distribution-index" className="hover:text-amber-400 hover:underline block text-left">
                  Neaner Last Name Database Mappings
                </Link>
              </li>
              <li>
                <Link href="/etymology/spelling-shifts" className="hover:text-amber-400 hover:underline block text-left">
                  Silesian &amp; Prussian Census Records Ledger
                </Link>
              </li>
              <li>
                <Link href="/etymology/nerian-savior" className="hover:text-amber-400 hover:underline block text-left">
                  Historic Family Heritage Mark Registry
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-amber-400 hover:underline block text-left">
                  Email Protection &amp; Identity Trust Hub
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3.5">
            <h5 className="font-mono text-[11px] font-black text-amber-500 uppercase tracking-widest">Domain Portal</h5>
            <ul className="flex flex-col gap-2.5 font-semibold text-stone-405">
              <li>
                <Link href="/" className="hover:text-amber-400 hover:underline block text-left">
                  GoDaddy Direct Broker Exchange Escrow
                </Link>
              </li>
              <li>
                <Link href="/seo-rank-simulator" className="hover:text-amber-400 hover:underline block text-left">
                  SEO Search Engine Visibility Dashboard
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-amber-400 hover:underline block text-left">
                  Direct Home Acquisition Panel
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=neaner.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 hover:underline block text-left animate-pulse font-bold text-amber-500"
                >
                  Request Custom Brokerage Buy ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Related Portfolio Crosslinking (SEO Goldmine) directly targeting actual domains */}
        <div className="border-b border-stone-900 pb-10">
          <h4 className="text-xs bg-stone-900 text-amber-400 border border-stone-800 tracking-widest font-mono font-black uppercase mb-6 px-4 py-1.5 rounded-lg inline-block">
            Listing Partner Premium Portfolios
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-xs sm:text-sm font-mono">
            <a 
              href="https://boobclub.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-stone-900 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/50 border border-stone-800 text-stone-250 transition-all text-center font-bold shadow-md hover:shadow-amber-500/5"
            >
              boobclub.com ↗
            </a>
            <a 
              href="https://kataf.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-stone-900 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/50 border border-stone-800 text-stone-250 transition-all text-center font-bold shadow-md hover:shadow-amber-500/5"
            >
              kataf.com ↗
            </a>
            <a 
              href="https://jalh.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-stone-900 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/50 border border-stone-800 text-stone-250 transition-all text-center font-bold shadow-md hover:shadow-amber-500/5"
            >
              jalh.com ↗
            </a>
            <a 
              href="https://subhauler.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-stone-900 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/50 border border-stone-800 text-stone-250 transition-all text-center font-bold shadow-md hover:shadow-amber-500/5"
            >
              subhauler.com ↗
            </a>
            <a 
              href="https://fockstate.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-stone-900 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/50 border border-stone-800 text-stone-250 transition-all text-center font-bold shadow-md hover:shadow-amber-500/5"
            >
              fockstate.com ↗
            </a>
            <a 
              href="https://linkwhore.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-stone-900 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/50 border border-stone-800 text-stone-250 transition-all text-center font-bold shadow-md hover:shadow-amber-500/5"
            >
              linkwhore.com ↗
            </a>
            <a 
              href="https://beamspread.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-stone-900 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/50 border border-stone-800 text-stone-250 transition-all text-center font-bold shadow-md hover:shadow-amber-500/5"
            >
              beamspread.com ↗
            </a>
            <a 
              href="https://medizer.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-stone-900 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/50 border border-stone-800 text-stone-250 transition-all text-center font-bold shadow-md hover:shadow-amber-500/5"
            >
              medizer.com ↗
            </a>
            <a 
              href="https://omachines.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-stone-900 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/50 border border-stone-800 text-stone-250 transition-all text-center font-bold shadow-md hover:shadow-amber-500/5"
            >
              omachines.com ↗
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-xs sm:text-sm text-stone-500">
          <div>
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <span className="font-display text-white text-lg font-black tracking-wider">neaner.com</span>
              <span className="text-[10px] font-mono font-black text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded">© 2026</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-center md:text-left text-stone-400 font-semibold max-w-xl">
              The premium, official digital asset registry, domain broker and ancestry database for neaner.com. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 font-mono text-xs font-bold text-stone-400 bg-stone-900 border border-stone-850 px-4 py-2.5 rounded-xl">
            <span>Powered by Gemini 3.5 AI Appraisals</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span>GoDaddy Listing Partner</span>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex justify-center text-center">
          <p className="text-stone-500 text-[10px] sm:text-xs uppercase font-mono tracking-wider font-semibold">
            WEBSITE GENERATED WITH <a href="https://www.feelize.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline decoration-amber-400/30 hover:decoration-amber-300/80 transition-all font-black">FEELIZE</a> AI
          </p>
        </div>
      </div>
    </footer>
  );
}
