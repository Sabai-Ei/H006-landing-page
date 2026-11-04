import { money, setLabel, site } from "@/config/site";
import { Deco, Eyebrow, btnPrimary } from "./ui";

export function PricingOffers() {
  const { pricing } = site;
  return (
    <section id="offer" aria-labelledby="offer-title" className="bg-mesh-panel relative overflow-hidden py-[72px] lg:py-[120px]">
      <Deco className="dot-grid edge-fade absolute inset-0" />
      <div className="relative mx-auto max-w-[1264px] px-5 lg:px-12">
        <header className="text-center">
          <Eyebrow className="mb-3.5 lg:mb-4">Special promotional offer</Eyebrow>
          <h2 id="offer-title" className="m-0 mb-3 text-4xl font-light leading-[1.08] tracking-[-0.03em] lg:mb-4 lg:text-[52px] lg:leading-[1.06]">
            Choose your H006 set.
          </h2>
          <p className="m-0 text-[15px] text-muted lg:text-base">
            Usual price <s>{money(pricing.usualPrice)}</s> per set.
          </p>
        </header>
        <ul className="m-0 mt-10 grid list-none gap-4 p-0 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {pricing.offers.map((o) => (
            <li key={o.sets} className="rounded-3xl border border-ink/[0.12] bg-white px-6 py-7 shadow-card lg:rounded-[28px] lg:px-9 lg:py-10">
              <p className="m-0 mb-3 text-xs font-medium tracking-[0.18em] text-muted">{setLabel(o.sets)}</p>
              <p className="m-0 mb-5 text-[52px] font-light leading-none tracking-[-0.03em] lg:mb-6 lg:text-[64px]">{money(o.price)}</p>
              <p className="m-0 mb-6 border-t border-ink/[0.12] pt-4 text-sm text-muted lg:min-h-12">
                {o.sets} × H006 4-in-1 Hydrogen Wellness Solution
              </p>
              <a href="#enquire" className={`${btnPrimary} h-[52px] w-full text-[15px]`}>
                Enquire Now
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
