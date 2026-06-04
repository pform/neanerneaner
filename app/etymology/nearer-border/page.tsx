import React from "react";
import Link from "next/link";
import { Compass, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

export default function NearerBorderPage() {
  return (
    <>
      {/* Canonical Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Nearer Border: Anglo-Saxon Topographical Origins of the Neaner Surname",
            "url": "https://neaner.com/etymology/nearer-border",
            "description": "Linguistic mapping of the topographic surname Neaner, historically belonging to families residing near parish limits, lockgates, or border posts.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Registry Home", "item": "https://neaner.com/" },
                { "@type": "ListItem", "position": 2, "name": "Nearer Border", "item": "https://neaner.com/etymology/nearer-border" }
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
            Etymology Index — Theory B
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-955 leading-tight">
            Anglo-Saxon Topographical <span className="font-serif italic text-amber-600 font-medium">“Nearer”</span> Border Keepers
          </h1>
          <p className="text-stone-600 text-lg font-medium leading-relaxed">
            Uncovering the geographical and residency records behind family estates settled along defensive gates, toll bridges, and limits.
          </p>
        </div>

        {/* Core Content */}
        <div className="bg-white border-2 border-stone-200 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col gap-6">
          <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200/60 self-start text-amber-800 shadow-xs">
            <Compass className="w-6 h-6 stroke-[2.5]" />
          </div>

          <div className="prose prose-stone text-stone-755 font-medium leading-relaxed flex flex-col gap-5">
            <p className="text-base sm:text-lg text-stone-900 font-extrabold">
              How did geographical residency locations transform into the surname Neaner?
            </p>
            <p>
              An alternative, highly credible etymological path tracks back to North Sea Germanic dialects and early Anglo-Saxon topography. Surnames in this categorization were assigned fundamentally based on where a family established their physical dwelling, rather than their trade or father’s name.
            </p>
            <p>
              In these early dialects, the core component <span className="italic text-stone-950 font-bold">nean</span> or <span className="italic text-stone-950 font-bold">neah</span> simply translated to <strong>“near”</strong> or <strong>“nearer.”</strong> When combined with standard occupative agent suffixes like <span className="font-mono text-xs text-amber-900 bg-amber-100 px-1.5 py-0.5 rounded font-bold">“-er”</span>, the name denoted <strong>“those who live near”</strong> or <strong>“the near-dwellers.”</strong>
            </p>
            <p>
              Historically, these dwellers weren’t just random settlers. They usually occupied a highly strategic defensive position—tending lockgates on inland rivers, guarding border tollhouses, or acting as keepers of the outer limits of parish settlements. In times of local warning, the near-dwellers were the first line of defense, signaling incoming riders or travelers to the main castle gates.
            </p>
          </div>

          <div className="border-t border-stone-200 pt-6 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="bg-[#faf9f5] border border-stone-200 p-4 rounded-xl">
              <span className="block font-black text-[#92400e] mb-1">CANONICAL SEARCH KEYWORDS</span>
              <p className="text-stone-500 font-bold leading-relaxed">
                #neaner-origin-country #meaning-of-neaner #anglo-saxon-topography-surnames #nearer-gatekeeper #british-census-registry
              </p>
            </div>
            <div className="bg-[#faf9f5] border border-stone-200 p-4 rounded-xl">
              <span className="block font-black text-[#92400e] mb-1">REGIONAL LOCATIONAL DATA</span>
              <p className="text-stone-500 font-bold leading-relaxed">
                Anglo-Saxon Frontier Boundaries, River Rhine Gates (approx. 1250 AD)
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
            <h3 className="font-display font-extrabold text-stone-955 text-lg">Defensive Guard for your Digital Identity</h3>
            <p className="text-stone-750 text-sm leading-relaxed font-semibold">
              Sparsely populated borders require absolute security. In our modern grid of digital spaces, holding exclusive control of <span className="bg-white border border-amber-300 font-mono text-xs px-2 py-0.5 rounded font-black text-amber-950">neaner.com</span> is equivalent to possessing the central gatehouse. It safeguards your estate, isolates your communications from email spoofing, and secures your ancestral mark.
            </p>
          </div>
        </div>

        {/* Dynamic CTA */}
        <div className="bg-white border-2 border-stone-200 rounded-3xl p-8 text-center flex flex-col items-center gap-4">
          <p className="font-display font-bold text-stone-900 text-lg">Secure your geographical residency trademark securely on GoDaddy</p>
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
