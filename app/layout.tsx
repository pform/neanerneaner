import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css"; // Global styles
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "neaner.com — Premium Domain for Sale & Neaner Surname Heritage Portal",
  description: "Acquire neaner.com: A ultra-rare, high-authority 6-letter .com domain. Perfect for the Neaner family registry, a digital estate, or personalized family business. Submit your offer securely.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-amber-50/20 text-slate-900 antialiased font-sans" suppressHydrationWarning>
        <div className="min-h-screen bg-[#FAF9F5] text-stone-900 selection:bg-amber-200 selection:text-stone-950 font-sans leading-relaxed flex flex-col justify-between relative overflow-x-hidden text-[15px] sm:text-[16px]">
          {/* Decorative ambient color spots */}
          <div className="absolute top-[-100px] left-1/4 w-[600px] h-[600px] bg-amber-200/15 rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute top-[300px] right-[-100px] w-[500px] h-[500px] bg-rose-200/10 rounded-full blur-[100px] pointer-events-none z-0" />
          <div className="absolute bottom-[200px] left-[-200px] w-[600px] h-[600px] bg-emerald-100/10 rounded-full blur-[130px] pointer-events-none z-0" />

          <Header />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

