import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-col w-full">
      {/* Top Header Bar */}
      <div className="border-b border-stone-200 bg-[#FAF9F5]/95 backdrop-blur-md">
        <div id="header-container" className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-1.5">
              <span className="font-display text-3xl font-extrabold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                neaner<span className="text-amber-600 font-sans text-xl font-bold">.com</span>
              </span>
            </Link>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-full uppercase ml-1 shadow-xs">
              Available
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://www.godaddy.com/domainsearch/find?domainToCheck=neaner.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-stone-600 hover:text-amber-700 transition-colors hidden sm:inline"
            >
              Verify Listing ↗
            </a>
            <a
              href="https://www.godaddy.com/domainsearch/find?domainToCheck=neaner.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-amber-600 hover:text-stone-950 text-stone-50 font-bold text-sm tracking-tight shadow-md hover:shadow-lg hover:shadow-amber-500/10 transition-all transform active:scale-95 duration-250"
            >
              Acquire Asset
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Embedded Navbar */}
      <Navbar />
    </header>
  );
}
