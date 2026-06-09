import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Rank Simulator — Organic Google Visibility & SERP Mockup",
  description: "Experience the simulated Google Search Engine Results Page (SERP) performance for the premium neaner.com asset. Live rankings simulator.",
  alternates: {
    canonical: "/seo-rank-simulator",
  },
};

export default function SEORankSimulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
