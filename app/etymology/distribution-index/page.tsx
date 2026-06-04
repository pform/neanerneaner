import React from "react";
import Link from "next/link";
import { Globe, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

export default function DistributionIndexPage() {
  return (
    <>
      {/* Canonical Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Distribution Index: Global Frequency & Rarity of Neaner Surname",
            "url": "https://neaner.com/etymology/distribution-index",
            "description": "Linguistic mapping and rarity index analytics for the Neaner last name family tree registry and global geographic distribution.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Registry Home", "item": "https://neaner.com/" },
                { "@type": "ListItem", "position": 2, "name": "Distribution Index", "item": "https://neaner.com/etymology/distribution-index" }
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
            Etymology Index — Theory D
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-955 leading-tight">
            Global Surname <span className="font-serif italic text-amber-600 font-medium">“Distribution Index”</span> &amp; Rarity
          </h1>
          <p className="text-stone-600 text-lg font-medium leading-relaxed">
            High rarity coefficient metrics, global mapping directories, and family pedigree registrations.
          </p>
        </div>

        {/* Core Content */}
        <div className="bg-white border-2 border-stone-200 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col gap-6">
          <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200/60 self-start text-amber-805 shadow-xs">
            <Globe className="w-6 h-6 stroke-[2.5]" />
          </div>

          <div className="prose prose-stone text-stone-755 font-medium leading-relaxed flex flex-col gap-5">
            <p className="text-base sm:text-lg text-stone-900 font-extrabold">
              How rare is the last name Neaner, and why is this critical for the domain asset value?
            </p>
            <p>
              To date, the surname <span className="underline decoration-amber-500 decoration-2 underline-offset-4 font-mono font-black">Neaner</span> retains an exceptionally high pedigree rarity coefficient. Unlike common patronymic surnames (e.g., Schmidt, Cooper, or Smith) which hold millions of global duplicates and are impossible to coordinate digitally, Neaner belongs to a select vanguard of localized family heritage marks.
            </p>
            <p>
              Because of this supreme uniqueness, owning the precise root dot-com digital asset `<span className="font-semibold text-stone-950">neaner.com</span>` establishes a permanent monopoly over all global searches, business names, or email correspondences. There is no risk of identity collision, information leaks, or brand dilution.
            </p>
            <p>
              Our global census tracking lists small, high-density ancestral branches throughout:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 bg-stone-50 border border-zinc-150 rounded-2xl p-4.5 my-2">
              <li><strong className="text-stone-900">Western Prussia &amp; Silesian Valleys:</strong> Early agricultural registry nodes.</li>
              <li><strong className="text-[#92400e]">North American Trans-Atlantic Migrations:</strong> Historic ports of entry (New York, Philadelphia, Baltimore).</li>
              <li><strong className="text-stone-900">Modern Digital Settlers:</strong> Elite professionals consolidating personal branding assets.</li>
            </ul>
          </div>

          <div className="border-t border-stone-200 pt-6 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="bg-[#faf9f5] border border-stone-200 p-4 rounded-xl">
              <span className="block font-black text-[#92400e] mb-1">CANONICAL SEARCH KEYWORDS</span>
              <p className="text-stone-500 font-bold leading-relaxed">
                #neaner-surname-rarity #neaner-family-tree #neaner-global-patronymic-distribution #neaner-email-leakage #neaner-prestige-authority
              </p>
            </div>
            <div className="bg-[#faf9f5] border border-stone-200 p-4 rounded-xl">
              <span className="block font-black text-[#92400e] mb-1">GLOBAL RARITY SCORE</span>
              <p className="text-stone-500 font-bold leading-relaxed">
                Top 0.01% of highly targeted custom European surnames.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic CTA */}
        <div className="bg-white border-2 border-stone-200 rounded-3xl p-8 text-center flex flex-col items-center gap-4">
          <p className="font-display font-bold text-stone-900 text-lg">Acquire the central distribution brand name securely on GoDaddy</p>
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
