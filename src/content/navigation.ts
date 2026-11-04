import { site } from "@/config/site";

export interface NavItem {
  label: string;
  href: string;
}

/** Primary navigation. The Health Check link exists only while the flag is on. */
export const primaryNav: readonly NavItem[] = [
  { label: "4 modes", href: "#modes" },
  { label: "How it works", href: "#how" },
  { label: "Wellness", href: "#wellness" },
  ...(site.flags.showHealthCheck ? [{ label: "Health Check", href: "#healthcheck" }] : []),
  { label: "Offers", href: "#offer" },
  { label: "FAQ", href: "#faq" },
];

export const footerColumns = {
  product: [
    { label: "Four modes", href: "#modes" },
    { label: "How it works", href: "#how" },
    { label: "Wellness", href: "#wellness" },
    ...(site.flags.showHealthCheck ? [{ label: "Health Check", href: "#healthcheck" }] : []),
  ],
  explore: [
    { label: "Offers", href: "#offer" },
    { label: "FAQ", href: "#faq" },
    { label: "watersource.com.sg", href: site.merchant.website },
  ],
  contact: [
    { label: site.contact.phoneDisplay, href: site.contact.phoneTel },
    { label: "Enquire online", href: "#enquire" },
  ],
} as const;
