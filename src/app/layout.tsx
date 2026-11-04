import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/config/site";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#05A5CD" };

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url), alternates: { canonical: "/" } } : {}),
  title: "WaterSource H006 4-in-1 Hydrogen Generation Bottle Singapore",
  description:
    "WaterSource H006 by Evergreen Health Pte Ltd: one hydrogen generation bottle with hydrogen-rich water, nasal inhalation, ear and eye-mask accessories. Promotional prices from S$350 in Singapore.",
  openGraph: {
    type: "website",
    locale: "en_SG",
    siteName: "WaterSource",
    title: "WaterSource H006 4-in-1 Hydrogen Wellness Solution",
    description: "One bottle, four ways to use hydrogen. Promotional prices from S$350 in Singapore.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "WaterSource H006 hydrogen bottle" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-SG" className={inter.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-pill focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
