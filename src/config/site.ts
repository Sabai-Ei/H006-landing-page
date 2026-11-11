/**
 * Single source of truth for prices, contact details, offers and feature flags.
 * Nothing else in the codebase hard-codes these values.
 */

const envFlag = (value: string | undefined, fallback: boolean): boolean =>
  value === undefined || value === "" ? fallback : value.toLowerCase() === "true";

const isProd = process.env.NODE_ENV === "production";

export const site = {
  name: "WaterSource H006",
  brand: "WaterSource",
  productName: "WaterSource H006 4-in-1 Hydrogen Wellness Solution",
  productType: "4-in-1 Hydrogen Generation Bottle",
  headline: "4-in-1 Hydrogen Wellness Solution",
  tagline: "One bottle. Four ways to experience H006.",
  description:
    "One versatile hydrogen generation bottle for hydrogen-rich drinking water and three accessory functions.",
  locale: "en-SG",
  /** Empty until the production domain is confirmed. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, ""),
  merchant: {
    legalName: "Evergreen Health Pte Ltd",
    uen: "200910961G",
    website: "https://www.watersource.com.sg",
    country: "SG",
  },
  contact: {
    whatsappUrl: `https://wa.me/6588391764?text=${encodeURIComponent("Hi Water Source, I am interested in the H006 product.")}`,
    phoneDisplay: "+65 6933 8471",
    phoneTel: "tel:+6569338471",
    phoneE164: "+6569338471",
    note: "General WaterSource enquiries",
  },
  pricing: {
    currency: "SGD",
    symbol: "S$",
    usualPrice: 450,
    offers: [
      { sets: 1, price: 350 },
      { sets: 2, price: 590 },
      { sets: 3, price: 750 },
    ],
  },
  flags: {
    /**
     * Evergreen AI Precautions Health Check.
     * Public production default: HIDDEN. Controls the section, its FAQ entries,
     * the navigation/footer links and the related structured data.
     * Enable for internal review with SHOW_HEALTH_CHECK=true.
     */
    showHealthCheck: envFlag(process.env.SHOW_HEALTH_CHECK, !isProd),
    /** Demonstration video is not part of the approved layout. */
    showDemoVideo: envFlag(process.env.SHOW_DEMO_VIDEO, false),
  },
} as const;

export const money = (amount: number): string => `${site.pricing.symbol}${amount.toLocaleString("en-SG")}`;

export const setLabel = (sets: number): string => (sets === 1 ? "1 SET" : `${sets} SETS`);
