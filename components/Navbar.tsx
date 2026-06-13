"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Acquisition Hub" },
    { href: "/etymology/nerian-savior", label: "Nerian Savior" },
    { href: "/etymology/nearer-border", label: "Nearer Border" },
    { href: "/etymology/spelling-shifts", label: "Spelling Shifts" },
    { href: "/etymology/distribution-index", label: "Distribution Index" },
    { href: "/seo-rank-simulator", label: "SEO Simulator" },
    { href: "/other-assets", label: "Other Assets" },
  ];

  return (
    <div className="bg-stone-900 border-b border-stone-800 py-3 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-4">
        <span className="font-display font-extrabold text-amber-500 tracking-wider text-sm hidden lg:inline-block">
          SURNAME INDEX
        </span>
        
        <nav className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth w-full lg:w-auto justify-start lg:justify-end">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-amber-600 border-amber-500 text-stone-950 font-black shadow-xs"
                    : "bg-stone-800 border-stone-700 text-stone-200 hover:bg-amber-600 hover:text-stone-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
