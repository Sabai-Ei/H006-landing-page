import { site } from "@/config/site";
import { faqs } from "@/content/faq";

/** All values mirror visible content. No ratings, reviews, SKUs, stock or warranty are invented. */
export function buildStructuredData() {
  const { merchant, pricing, contact } = site;
  const base = site.url;
  const orgId = `${base}/#organization`;
  const productId = `${base}/#product`;
  const image = base ? `${base}/images/h006-bottle-cutout.png` : "/images/h006-bottle-cutout.png";

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: merchant.legalName,
      url: merchant.website,
      brand: { "@id": `${base}/#brand` },
      contactPoint: [{ "@type": "ContactPoint", telephone: contact.phoneE164, contactType: "customer service", areaServed: "SG" }],
    },
    { "@type": "Brand", "@id": `${base}/#brand`, name: site.brand },
    {
      "@type": "Product",
      "@id": productId,
      name: site.productName,
      description: site.description,
      image,
      brand: { "@id": `${base}/#brand` },
      manufacturer: { "@id": orgId },
      offers: pricing.offers.map((o) => ({
        "@type": "Offer",
        name: `${o.sets} × H006`,
        price: o.price,
        priceCurrency: pricing.currency,
        seller: { "@id": orgId },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "WaterSource H006", item: base || "/" }],
    },
  ];

  if (faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
