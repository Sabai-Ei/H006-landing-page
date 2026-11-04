import { buildStructuredData } from "@/lib/structured-data";

export function StructuredData() {
  const json = JSON.stringify(buildStructuredData()).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
