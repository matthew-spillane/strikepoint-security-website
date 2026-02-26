import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.strikepointsec.com"),
  title: {
    default: "Strikepoint Security | SafeLink Phishing Link Analyzer",
    template: "%s | Strikepoint Security"
  },
  description:
    "Strikepoint Security helps teams analyze suspicious links with SafeLink. Fast phishing detection, redirect mapping, and actionable risk verdicts.",
  openGraph: {
    title: "Strikepoint Security",
    description: "Enterprise-grade phishing link analysis with SafeLink.",
    url: "https://www.strikepointsec.com",
    siteName: "Strikepoint Security",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Strikepoint Security",
    description: "Analyze suspicious links quickly with SafeLink."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
