import React from "react";
import Link from "next/link";
import { Layers, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

export default function SpellingShiftsPage() {
  return (
    <>
      {/* Canonical Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Spelling Shifts: Scribal & Orthographical Mutations of Neaner Surname",
            "url": "https://neaner.com/etymology/spelling-shifts",
            "description": "Historical census ledger tracing phonetic spelling shifts including Nehner, Nener, Nänner, and Neaner across Prussian parish registers.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Registry Home", "item": "https://neaner.com/" },
                { "@type": "ListItem", "position": 2, "name": "Spelling Shifts", "item": "https://neaner.com/etymology/spelling-shifts" }
              ]
            }
          }),
        }}
      />

      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12 sm:py-20 flex flex-col gap-10 relative z-10">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-500 hover:text-amber-700 transition-colors self-start">
          <ArrowLeft className="w-4 h-4" />
          Back to Acquisition Hub
        </Link>

        {/* Title Block */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-mono tracking-widest text-[#92400e] bg-amber-100 border border-amber-300 px-3 py-1 rounded uppercase font-black self-start shadow-xs">
            Etymology Index — Theory C
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-955 leading-tight">
            Silesian &amp; Prussian <span className="font-serif italic text-amber-600 font-medium">“Spelling Shifts”</span> &amp; Records
          </h1>
          <p className="text-stone-600 text-lg font-medium leading-relaxed">
            Mapping orthographical spelling migrations, local dialect shifts, and scribal modifications over five centuries.
          </p>
        </div>

        {/* Core Content */}
        <div className="bg-white border-2 border-stone-200 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col gap-6">
          <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200/60 self-start text-amber-805 shadow-xs">
            <Layers className="w-6 h-6 stroke-[2.5]" />
          </div>

          <div className="prose prose-stone text-stone-755 font-medium leading-relaxed flex flex-col gap-5">
            <p className="text-base sm:text-lg text-stone-900 font-extrabold">
              Why do historical records contain multiple spelling varieties for the same family?
            </p>
            <p>
              Throughout medieval Europe and early modern German territories, phonetic orthography was entirely non-standardized. Most index registers were managed by regional parish scribes, church recordkeepers, or military census-takers who transcribed families based purely on how they pronounced their names under localized high-Prussian accents.
            </p>
            <p>
              As a result, a single unified family settlement in Silesia, Hesse, or Silesian-Prussian frontiers could be cataloged under an array of phonetic variants:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 bg-stone-50 border border-zinc-150 rounded-2xl p-4.5 my-2">
              <li><strong className="text-stone-900">Nehner:</strong> Often popular in Silesian and East German record hubs.</li>
              <li><strong className="text-stone-900">Nener:</strong> Streamlined phonetic variation appearing in Central German registers.</li>
              <li><strong className="text-stone-900">Nänner:</strong> Standard Bavarian mutation incorporating old-world vowel shifts.</li>
              <li><strong className="text-stone-900">Neahner:</strong> West-Germanic records.</li>
              <li><strong className="text-stone-900">Neaner:</strong> The refined, globally optimized modern 6-letter phonetic standard.</li>
            </ul>
            <p>
              Over generations, these disparate spelling pathways slowly crystallized toward the streamlined, balanced design of the modern 6-letter structure, which now is encapsulated in `<span className="bg-amber-50 text-amber-955 font-mono font-black text-xs px-2 py-0.5 rounded border border-amber-200">neaner.com</span>`.
            </p>
          </div>

          <div className="border-t border-stone-200 pt-6 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="bg-[#faf9f5] border border-stone-200 p-4 rounded-xl">
              <span className="block font-black text-[#92400e] mb-1">CANONICAL SEARCH KEYWORDS</span>
              <p className="text-stone-500 font-bold leading-relaxed">
                #nehner-genealogy #nener-last-name #german-phonetic-census-records #neaner-spelling-varieties #old-prussia-parish-registers
              </p>
            </div>
            <div className="bg-[#faf9f5] border border-stone-200 p-4 rounded-xl">
              <span className="block font-black text-[#92400e] mb-1">HISTORICAL REGISTER REFERENCE</span>
              <p className="text-stone-500 font-bold leading-relaxed">
                Prussian Royal Census Registry, Silesian Parish Birth Ledgers (approx. 1480 AD)
              </p>
            </div>
          </div>
        </div>

        {/* Branding Legacy Block */}
        <div className="bg-amber-100 border border-amber-300 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start shadow-inner">
          <div className="p-3 rounded-2xl bg-amber-200 text-amber-955 border border-amber-350 shrink-0">
            <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-display font-extrabold text-stone-955 text-lg">Consolidating Family Identity Under One Core Hub</h3>
            <p className="text-stone-755 text-sm leading-relaxed font-semibold">
              Because of various orthographical spelling migrations, modern branches of the family may spell their names with minor variations. Owning `<span className="bg-white border border-amber-300 font-mono text-xs px-2 py-0.5 rounded font-black text-amber-950">neaner.com</span>` acts as the grand umbrella. It reunites branches of your pedigree, offering a unified registry home and clear routing control for all family emails and sites.
            </p>
          </div>
        </div>

        {/* Dynamic CTA */}
        <div className="bg-white border-2 border-stone-200 rounded-3xl p-8 text-center flex flex-col items-center gap-4">
          <p className="font-display font-bold text-stone-900 text-lg">Acquire the central spelling ledger asset safely through GoDaddy</p>
          <a
            href="https://www.godaddy.com/domainsearch/find?domainToCheck=neaner.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-amber-600 hover:text-stone-955 text-stone-50 font-bold text-sm tracking-tight transition-all"
          >
            Go To GoDaddy Exchange
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </main>
    </>
  );
}
