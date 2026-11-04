import Image from "next/image";
import { money, site } from "@/config/site";
import { functions } from "@/content/functions";
import { functionIcons, PhoneIcon } from "./icons";
import { btnPrimary, btnSecondary, Deco } from "./ui";

const calloutPos = [
  "left-0 top-[160px]",
  "left-0 top-[470px]",
  "left-[496px] top-[260px]",
  "left-[496px] top-[570px]",
] as const;

const badgePos = [
  "left-[46px] top-[50px]",
  "left-[298px] top-[50px]",
  "left-[46px] top-[262px]",
  "left-[298px] top-[262px]",
] as const;

// Mobile badge order on the ring: drink (top-left), inhale (top-right), ear (bottom-left), eyes (bottom-right)
const [usual, offer1] = [site.pricing.usualPrice, site.pricing.offers[0]!];

function PriceStrip() {
  return (
    <div className="mt-9 hidden flex-wrap items-baseline gap-3.5 border-t border-ink/[0.14] pt-[22px] hero:flex">
      <span className="text-[11px] uppercase tracking-[0.18em] text-muted">Special offer</span>
      <span className="text-[36px] font-light leading-none tracking-[-0.02em]">{money(offer1.price)}</span>
      <span className="text-[15px] text-muted line-through">{money(usual)}</span>
    </div>
  );
}

function PriceCard() {
  return (
    <div className="relative mx-5 mt-6 flex flex-wrap items-center justify-between gap-3 rounded-[20px] border border-primary/55 bg-white px-5 py-[18px] hero:hidden md:mx-auto md:max-w-[390px]">
      <div>
        <p className="mb-1.5 text-[10px] uppercase tracking-[0.18em] text-muted">Special offer</p>
        <p className="flex items-baseline gap-2.5">
          <span className="text-[34px] font-light leading-none tracking-[-0.02em]">{money(offer1.price)}</span>
          <span className="text-[15px] text-muted line-through">{money(usual)}</span>
        </p>
      </div>
      <a href={site.contact.phoneTel} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium">
        <PhoneIcon size={18} />
        {site.contact.phoneDisplay}
      </a>
    </div>
  );
}

export function Hero() {
  return (
    <section aria-label="WaterSource H006 hero" className="relative overflow-hidden bg-hero pb-14 pt-7 hero:p-0">
      <Deco className="hairline-grid pointer-events-none absolute inset-0 [--grid-x:80%] [--grid-y:20%] lg:[--grid-x:78%] lg:[--grid-y:30%]" />
      <div className="relative mx-auto max-w-[1440px] hero:h-[830px]">
        {/* Text column */}
        <div className="px-5 text-center md:mx-auto md:max-w-[680px] hero:absolute hero:inset-y-0 hero:left-[136px] hero:mx-0 hero:flex hero:w-[470px] hero:max-w-none hero:flex-col hero:justify-center hero:p-0 hero:pb-5 hero:text-left">
          <p className="mb-[18px] text-[10px] uppercase tracking-[0.2em] text-muted hero:mb-7 hero:text-xs hero:tracking-[0.26em]">
            WaterSource · H006 · Singapore
          </p>
          <h1 className="m-0 font-light tracking-[-0.04em]">
            <span className="block text-[40px] leading-[1.02] md:text-[56px] hero:text-[76px] hero:leading-none">WaterSource H006</span>
            <span className="mx-auto mt-3.5 block max-w-[300px] text-balance text-[22px] leading-[1.25] tracking-[-0.025em] md:max-w-[420px] md:text-[28px] hero:mx-0 hero:mt-[22px] hero:text-[34px] hero:leading-[1.12] hero:tracking-[-0.03em]">
              {site.headline}
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-[340px] text-balance text-base leading-[1.6] text-muted md:max-w-[460px] md:text-[17px] hero:mx-0 hero:mt-[26px] hero:max-w-[430px] hero:text-lg">
            {site.description}
          </p>
          <div className="mt-[18px] flex items-center justify-center gap-2.5 text-sm font-medium hero:mt-6 hero:justify-start hero:gap-3.5 hero:text-[15px]">
            <Deco className="h-0.5 w-5 rounded-sm bg-primary hero:w-7" />
            {site.tagline}
            <Deco className="h-0.5 w-5 rounded-sm bg-primary hero:hidden" />
          </div>
          <div className="mt-7 flex flex-col gap-3 md:flex-row md:justify-center hero:mt-9 hero:justify-start">
            <a href="#enquire" className={`${btnPrimary} h-[54px] text-base md:px-10 hero:h-14 hero:px-[38px]`}>
              Enquire Now
            </a>
            <a href="#modes" className={`${btnSecondary} h-[54px] text-base md:px-9 hero:h-14 hero:px-8`}>
              Explore Features
            </a>
          </div>
          <PriceStrip />
        </div>

        {/* Product stage */}
        <div className="stage-fit relative mx-auto mt-9 h-[436px] w-[390px] hero:absolute hero:right-14 hero:top-0 hero:mx-0 hero:mt-0 hero:h-[830px] hero:w-[744px]">
          <Deco className="absolute left-2 top-[-4px] size-[374px] rounded-full border border-primary/30 hero:left-0.5 hero:top-[-10px] hero:size-[740px]" />
          <Deco className="stage-disc absolute left-[30px] top-[18px] size-[330px] rounded-full hero:left-[72px] hero:top-[60px] hero:size-[600px]" />
          <Deco className="absolute hidden rounded-full hero:left-[142px] hero:top-[130px] hero:block hero:size-[460px] [background:radial-gradient(circle_at_50%_45%,#fff_0%,rgb(255_255_255/0.55)_55%,rgb(255_255_255/0)_72%)]" />
          <Deco className="glow-blue absolute left-[70px] top-[58px] size-[250px] rounded-full hero:left-[172px] hero:top-[150px] hero:size-[400px]" />
          <Deco className="absolute hidden size-[18px] rounded-full bg-primary hero:left-[602px] hero:top-[70px] hero:block" />
          <Deco className="floor-shadow absolute left-[125px] top-[338px] h-5 w-[140px] rounded-full hero:left-[222px] hero:top-[612px] hero:h-9 hero:w-[300px]" />
          <Image
            src="/images/h006-bottle-cutout.png"
            alt="WaterSource H006 hydrogen generation bottle with a rising stream of bubbles in the water chamber"
            width={362}
            height={1090}
            priority
            sizes="(min-width: 1360px) 186px, 110px"
            className="absolute left-[140px] top-7 block h-[331px] w-[110px] drop-shadow-[0_18px_18px_rgba(14,26,34,0.22)] hero:left-[279px] hero:top-[76px] hero:h-[560px] hero:w-[186px] hero:drop-shadow-[0_34px_34px_rgba(14,26,34,0.22)]"
          />

          {/* Desktop connector lines */}
          <svg aria-hidden="true" width="744" height="830" viewBox="0 0 744 830" fill="none" className="pointer-events-none absolute left-0 top-0 hidden hero:block">
            <g stroke="#05A5CD" strokeOpacity=".75" strokeWidth="1.2">
              <path d="M248 160H272" />
              <path d="M248 470H272" />
              <path d="M496 260H472" />
              <path d="M496 570H472" />
            </g>
            <g fill="#05A5CD">
              <circle cx="272" cy="160" r="3.5" />
              <circle cx="272" cy="470" r="3.5" />
              <circle cx="472" cy="260" r="3.5" />
              <circle cx="472" cy="570" r="3.5" />
            </g>
          </svg>

          {/* Mobile ring badges */}
          {functions.map((fn, i) => {
            const Icon = functionIcons[fn.id];
            return (
              <span
                key={fn.id}
                aria-hidden="true"
                className={`absolute flex size-[46px] items-center justify-center rounded-full border border-primary/60 bg-white text-ink shadow-[0_14px_26px_-14px_rgba(14,26,34,0.45)] hero:hidden ${badgePos[i]}`}
              >
                <Icon size={21} strokeWidth={1.5} />
              </span>
            );
          })}

          {/* Desktop callouts */}
          <ul className="m-0 hidden list-none p-0 hero:block">
            {functions.map((fn, i) => {
              const Icon = functionIcons[fn.id];
              return (
                <li
                  key={fn.id}
                  className={`absolute flex w-[248px] -translate-y-1/2 items-start gap-3 rounded-[22px] border border-ink/[0.08] bg-white px-4 py-3.5 shadow-chip ${calloutPos[i]}`}
                >
                  <span aria-hidden="true" className="flex size-9 flex-none items-center justify-center rounded-full border border-primary/60 bg-secondary text-ink">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-[10.5px] uppercase tracking-[0.16em] text-muted">
                      {fn.index} · {fn.label}
                    </span>
                    <span className="mt-[3px] block text-[14.5px] font-medium leading-[1.25]">{fn.title}</span>
                    <span className="mt-1 block text-[12.5px] leading-[1.4] text-muted">{fn.calloutText}</span>
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="absolute inset-x-0 top-[384px] m-0 text-center text-xs text-muted hero:top-[716px]">Images are for illustration only.</p>
        </div>

        {/* Mobile function highlights */}
        <ul className="relative m-0 mx-5 mt-2 grid list-none grid-cols-2 gap-2.5 p-0 md:mx-auto md:max-w-[720px] md:grid-cols-4 hero:hidden">
          {functions.map((fn) => {
            const Icon = functionIcons[fn.id];
            return (
              <li key={fn.id} className="rounded-[20px] border border-ink/[0.08] bg-white p-3.5 shadow-[0_20px_40px_-28px_rgba(14,26,34,0.4)]">
                <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-muted">
                  <Icon size={18} />
                  {fn.index} · {fn.label}
                </span>
                <span className="mt-2 block text-sm font-medium leading-[1.25]">{fn.title}</span>
                <span className="mt-1 block text-[12.5px] leading-[1.4] text-muted">{fn.calloutText}</span>
              </li>
            );
          })}
        </ul>
        <PriceCard />
      </div>
    </section>
  );
}
