import { money, site } from "@/config/site";
import { Deco, Eyebrow, btnPrimary, btnSecondary } from "./ui";

export function FinalCTA() {
  const { contact, pricing } = site;
  const [o1, o2, o3] = pricing.offers;
  return (
    <section id="enquire" aria-labelledby="enquire-title" className="bg-enquire relative overflow-hidden px-6 py-20 text-center lg:py-32">
      <Deco className="hairline-grid top-fade absolute inset-0" />
      <div className="relative mx-auto max-w-[760px]">
        <Eyebrow className="mb-4">Enquire about H006</Eyebrow>
        <h2 id="enquire-title" className="m-0 mb-5 text-[38px] font-light leading-[1.06] tracking-[-0.03em] lg:text-[60px]">
          Ready to bring H006 home?
        </h2>
        <p className="m-0 mb-8 text-base leading-[1.6] text-muted lg:text-lg">
          Ask about availability, delivery and warranty. 1 set {money(o1!.price)}, 2 sets {money(o2!.price)}, 3 sets {money(o3!.price)}.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={contact.phoneTel} className={`${btnPrimary} h-[54px] w-full px-9 text-base sm:w-auto`}>Enquire Now</a>
          <a href={contact.phoneTel} className={`${btnSecondary} h-[54px] w-full px-9 text-base sm:w-auto`}>Call {contact.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
