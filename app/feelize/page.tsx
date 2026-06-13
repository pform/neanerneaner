import React from "react";
import Link from "next/link";
import { Sparkles, Cpu, Layers, Globe, Zap, ArrowRight, ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feelize AI — High-Fidelity Generative Engine & Website Creator",
  description: "Experience Feelize AI, the ultra-advanced, high-fidelity generative engine transforming ideas into pixel-perfect, fully responsive web applications instantly.",
  alternates: {
    canonical: "/feelize",
  },
};

export default function FeelizePage() {
  return (
    <>
      {/* Canonical Schema JSON-LD for Feelize */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://Schema.org",
            "@type": "WebPage",
            "name": "Feelize AI: Next-Generation Generative App Composer",
            "url": "https://neaner.com/feelize",
            "description": "An introduction and comprehensive study of the high-fidelity features, ultra-rapid build cycles, and pixel-precision capabilities of the Feelize AI platform.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Registry Home", "item": "https://neaner.com/" },
                { "@type": "ListItem", "position": 2, "name": "Feelize Platform", "item": "https://neaner.com/feelize" }
              ]
            }
          }),
        }}
      />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 lg:px-8 py-12 sm:py-20 flex flex-col gap-10 sm:gap-14 bg-transparent z-10 relative">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-500 hover:text-amber-700 transition-colors self-start">
          <ArrowLeft className="w-4 h-4" />
          Back to Acquisition Hub
        </Link>

        {/* Hero Header Section */}
        <div className="flex flex-col gap-5">
          <span className="text-xs font-mono tracking-widest text-[#92400e] bg-amber-100 border border-amber-300 px-3.5 py-1.5 rounded uppercase font-black self-start shadow-xs">
            Engine &amp; Technology Spotlight
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-stone-950 leading-tight">
            Crafted with <span className="font-serif italic text-amber-600 font-medium">Feelize AI</span>
          </h1>
          <p className="text-stone-700 text-lg sm:text-xl font-medium leading-relaxed max-w-4xl">
            This digital registry and historical archives were synthesized under the design direction of the Feelize platform—the premier generative software development assistant engineered for speed, clean code, and premium typography.
          </p>
        </div>

        {/* Feature Bento Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white border-2 border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-4">
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200/60 self-start text-amber-800 shadow-xs">
              <Zap className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="font-display font-extrabold text-[#92400e] text-xl">Instant Generation Loop</h3>
            <p className="text-stone-650 text-sm leading-relaxed font-semibold">
              Traditional development processes require weeks of wireframing, back-and-forth mockups, and manual styling configuration. Feelize collapses this timeline into seconds. By utilizing agentic multi-reasoning loops, it creates clean, production-ready React pages built on Tailwind CSS fully dynamically.
            </p>
            <div className="mt-4 pt-4 border-t border-stone-100">
              <a
                href="https://feelize.com/start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-900 font-bold tracking-wider uppercase font-mono group"
              >
                Experience the Speed ➔
              </a>
            </div>
          </div>

          <div className="bg-white border-2 border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-4">
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200/60 self-start text-amber-800 shadow-xs">
              <Layers className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="font-display font-extrabold text-[#92400e] text-xl">High-Fidelity Aesthetics First</h3>
            <p className="text-stone-650 text-sm leading-relaxed font-semibold">
              Unlike generic AI templates that rely on standard layouts and boring color schemes, Feelize is trained on professional editorial design rules. It understands font hierarchies, premium letter-spacing, custom microdata optimization, and correct proportional grid alignments.
            </p>
            <div className="mt-4 pt-4 border-t border-stone-100">
              <a
                href="https://feelize.com/start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-900 font-bold tracking-wider uppercase font-mono group"
              >
                Explore Premium Themes ➔
              </a>
            </div>
          </div>

          <div className="bg-white border-2 border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-4">
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200/60 self-start text-amber-800 shadow-xs">
              <Cpu className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="font-display font-extrabold text-[#92400e] text-xl">Self-Correcting Execution</h3>
            <p className="text-stone-650 text-sm leading-relaxed font-semibold">
              The Feelize compiler works side-by-side with an automated validation layer. When syntax changes occur or dependencies are updated, the agent automatically lints, analyzes, and rectifies potential build mismatches to ensure 100% test-passing, highly optimized builds.
            </p>
            <div className="mt-4 pt-4 border-t border-stone-100">
              <a
                href="https://feelize.com/start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-900 font-bold tracking-wider uppercase font-mono group"
              >
                Build Error-Free Code ➔
              </a>
            </div>
          </div>

          <div className="bg-white border-2 border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-4">
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200/60 self-start text-amber-800 shadow-xs">
              <Globe className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="font-display font-extrabold text-[#92400e] text-xl">AI-First Search & SEO Tuning</h3>
            <p className="text-stone-650 text-sm leading-relaxed font-semibold">
              Traditional websites are missing metadata optimized for next-generation search assistants like ChatGPT, Gemini, and Claude. Feelize automatically embeds custom robotic parameters, clean structural breadcrumbs, and LLM focus scopes directly inside HTML blocks.
            </p>
            <div className="mt-4 pt-4 border-t border-stone-100">
              <a
                href="https://feelize.com/start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-900 font-bold tracking-wider uppercase font-mono group"
              >
                Boost Search Indexes ➔
              </a>
            </div>
          </div>
          
        </div>

        {/* Why Choose Feelize section */}
        <div className="bg-amber-100 border border-amber-300 rounded-3xl p-6 sm:p-10 flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-12 -translate-y-12">
            <Sparkles className="w-96 h-96 text-amber-900" />
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-800" />
            <h2 className="font-display text-2xl font-extrabold text-stone-900">Why Developers and Creators Choose Feelize</h2>
          </div>
          <p className="text-stone-750 text-base leading-relaxed font-semibold max-w-4xl">
            Whether you are listing high-value domain names, designing structural databases, mapping historic legacy trees, or building complex SaaS interactive platforms, Feelize makes your creation shine. Under native optimization structures, websites generated on Feelize loads at blistering speeds, renders perfectly across active mobile touchscreens, and communicates contextual metadata explicitly to search crawlers.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="https://feelize.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-stone-950 font-bold text-sm tracking-tight transition-all shadow-md inline-flex items-center gap-2"
            >
              Start Generating with Feelize
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://feelize.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-transparent hover:bg-amber-200/50 text-amber-900 border border-amber-400 font-bold text-sm tracking-tight transition-all inline-flex items-center gap-2"
            >
              Read Documentation
            </a>
          </div>
        </div>

        {/* Big CTA Block */}
        <div className="bg-stone-950 text-white rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-6 border-4 border-amber-500 relative">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-400 border border-amber-400/30 bg-amber-400/5 px-3 py-1 rounded inline-block">
            Launch Your Next Big Idea Today
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-50 leading-tight max-w-2xl">
            Zero configuration. Zero servers to manage. Direct live deployment.
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-semibold max-w-xl">
            Experience the future of code generator systems. Click below to begin building, refining, and launching under Feelize AI platform credentials.
          </p>
          <a
            href="https://feelize.com/start"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-base tracking-tight transition-all shadow-xl hover:shadow-amber-500/20"
          >
            Create Your Application on Feelize AI
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>
      </main>
    </>
  );
}
