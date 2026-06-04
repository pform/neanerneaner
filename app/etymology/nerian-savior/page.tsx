import React from "react";
import Link from "next/link";
import { BookOpen, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

export default function NerianSaviorPage() {
  return (
    <>
      {/* Canonical Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Nerian Savior: Medieval Germanic Roots of the Neaner Surname",
            "url": "https://neaner.com/etymology/nerian-savior",
            "description": "Linguistic analysis of the Neaner last name stemming from the ancient Germanic verb nerian, signifying shelter, protection, and nourishment.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Registry Home", "item": "https://neaner.com/" },
                { "@type": "ListItem", "position": 2, "name": "Nerian Savior", "item": "https://neaner.com/etymology/nerian-savior" }
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
            Etymology Index — Theory A
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-950 leading-tight">
            Medieval Germanic <span className="font-serif italic text-amber-600 font-medium">“Nerian”</span> (Nähren) Savior Root
          </h1>
          <p className="text-stone-600 text-lg font-medium leading-relaxed">
            A comprehensive linguistic investigation into the ancestral caretaker, healer, and protector origins of the Neaner lineage.
          </p>
        </div>

        {/* Core Content */}
        <div className="bg-white border-2 border-stone-200 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col gap-6">
          <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200/60 self-start text-amber-800 shadow-xs">
            <BookOpen className="w-6 h-6 stroke-[2.5]" />
          </div>

          <div className="prose prose-stone text-stone-755 font-medium leading-relaxed flex flex-col gap-5">
            <p className="text-base sm:text-lg text-stone-900 font-extrabold">
              What does the word <span className="underline decoration-amber-500 decoration-2 underline-offset-4 font-mono font-black">Neaner</span> translate to in old Germanic history?
            </p>
            <p>
              Under the preeminent linguistic hypothesis, the surname is a direct, evolutionary variant of the ancient Germanic verb <span className="italic text-amber-700 font-bold">nerian</span> (comparable to spelling mutations like the Middle High German <span className="font-mono text-zinc-950">nerien</span> or modern German <span className="font-mono text-zinc-950">nähren</span>). Taken together, the verb compiles to mean <strong>“to save, rescue, deliver, protect, or nourish.”</strong>
            </p>
            <p>
              During severe medieval winters, floods, or territorial conflicts, families depended heavily upon caretakers who held the vital keys to survival. The designation was typically bestowed upon chosen family patriarchs, woodland guardians, localized herbalists, or keepers of the parish storehouses. To be a <span className="font-semibold text-stone-950">Neaner</span> was to hold a highly respected seat of security and honor within old Bavarian and Silesian settlements.
            </p>
            <p>
              As families migrated throughout Hesse-Kassel and Prussian provinces, the name shifted phonetically. Yet the historic lineage retained its fundamental association with survival, protection, and nourishment.
            </p>
          </div>

          <div className="border-t border-stone-200 pt-6 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="bg-[#faf9f5] border border-stone-200 p-4 rounded-xl">
              <span className="block font-black text-[#92400e] mb-1">CANONICAL SEARCH KEYWORDS</span>
              <p className="text-stone-500 font-bold leading-relaxed">
                #neaner-meaning #etymology-of-neaner #germanic-surname-savior #nerian-derivation #nehren-family-ancestry
              </p>
            </div>
            <div className="bg-[#faf9f5] border border-stone-200 p-4 rounded-xl">
              <span className="block font-black text-[#92400e] mb-1">HISTORIC MAP COORDINATES</span>
              <p className="text-stone-500 font-bold leading-relaxed">
                Upper Bavaria, Silesia, Swabia Border Marks (approx. 1140 AD – 1380 AD)
              </p>
            </div>
          </div>
        </div>

        {/* Why the domain matches this root */}
        <div className="bg-amber-100 border border-amber-300 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start shadow-inner">
          <div className="p-3 rounded-2xl bg-amber-200 text-amber-955 border border-amber-350 shrink-0">
            <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-display font-extrabold text-stone-955 text-lg">Branding Legitimacy & Protection for the Neaner Family</h3>
            <p className="text-stone-750 text-sm leading-relaxed font-semibold">
              If your family carries this historic last name, establishing your headquarters on <span className="bg-white border border-amber-300 font-mono text-xs px-2 py-0.5 rounded font-black text-amber-950">neaner.com</span> is the ultimate modern act of shelter and protection. It anchors your generational digital estate, preserves your family tree, and guarantees that security starts right at your domain address.
            </p>
          </div>
        </div>

        {/* Dynamic CTA */}
        <div className="bg-white border-2 border-stone-200 rounded-3xl p-8 text-center flex flex-col items-center gap-4">
          <p className="font-display font-bold text-stone-900 text-lg">Secure your generational roots on GoDaddy broker desk</p>
          <a
            href="https://www.godaddy.com/domainsearch/find?domainToCheck=neaner.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-amber-600 hover:text-stone-950 text-stone-50 font-bold text-sm tracking-tight transition-all"
          >
            Go To GoDaddy Exchange
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </main>
    </>
  );
}
