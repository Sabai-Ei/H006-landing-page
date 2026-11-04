import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductOverview } from "@/components/ProductOverview";
import { HowItWorks } from "@/components/HowItWorks";
import { HealthCheck } from "@/components/HealthCheck";
import { PricingOffers } from "@/components/PricingOffers";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

export default function Page() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main">
        <Hero />
        <ProductOverview />
        <HowItWorks />
        <HealthCheck />
        <PricingOffers />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
