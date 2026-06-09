import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Assets — Listing Partner Premium Domain Portfolios",
  description: "Browse the curated ledger of short brandable LLLL, SaaS technology, e-healthcare, and high-frequency domain list assets held by direct registry brokers.",
  alternates: {
    canonical: "/other-assets",
  },
};

export default function OtherAssetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
