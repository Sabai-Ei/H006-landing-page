import Image from "next/image";
import { steps, wellness } from "@/content/functions";
import { gallery } from "@/content/gallery";
import { Deco, Eyebrow } from "./ui";
import { DropIcon, PlugIcon, PowerIcon } from "./icons";
import { VideoPlayer } from "./VideoPlayer";
import { site } from "@/config/site";

function StepChip({ className, index, label, Icon }: { className: string; index: string; label: string; Icon: typeof DropIcon }) {
  return (
    <div
      className={`absolute flex items-center gap-2 rounded-full border border-ink/[0.08] bg-white py-1.5 pl-1.5 pr-3.5 shadow-chip xl:gap-2.5 xl:py-2 xl:pl-2 xl:pr-[18px] ${className}`}
    >
      <span
        aria-hidden="true"
        className="flex size-[30px] flex-none items-center justify-center rounded-full border border-primary/60 bg-secondary text-ink xl:size-9"
      >
        <Icon size={15} className="xl:size-[18px]" />
      </span>
      <span className="flex flex-col leading-[1.2]">
        <span className="text-[10px] tracking-[0.16em] text-muted">{index}</span>
        <span className="text-[13px] font-medium text-ink xl:text-sm">{label}</span>
      </span>
    </div>
  );
}

function PhotoStage() {
  return (
    <figure className="relative m-0 mt-12 flex justify-center xl:mt-0">
      <Deco className="how-glow absolute left-1/2 top-[5px] -ml-[210px] size-[420px] rounded-full xl:top-1/2 xl:-ml-[360px] xl:-mt-[360px] xl:size-[720px]" />
      <div className="relative h-[436px] w-full max-w-[350px] xl:h-[640px] xl:w-[540px] xl:max-w-none">
        <Deco className="absolute left-1/2 top-6 -ml-[195px] size-[390px] rounded-full border border-primary/30 xl:-left-2.5 xl:top-[-10px] xl:ml-0 xl:size-[560px]" />
        <Deco className="absolute left-1/2 top-12 -ml-[126px] h-[350px] w-[280px] rounded-[140px_140px_24px_24px] border-[1.5px] border-primary xl:left-[62px] xl:top-[62px] xl:ml-0 xl:h-[540px] xl:w-[460px] xl:rounded-[230px_230px_32px_32px]" />
        <div className="absolute left-1/2 top-[34px] -ml-[140px] h-[350px] w-[280px] overflow-hidden rounded-[140px_140px_24px_24px] bg-secondary shadow-[0_30px_60px_-30px_rgba(14,26,34,0.55)] xl:left-10 xl:top-10 xl:ml-0 xl:h-[540px] xl:w-[460px] xl:rounded-[230px_230px_32px_32px] xl:shadow-[0_40px_80px_-36px_rgba(14,26,34,0.55)]">
          <Image
            src="/images/h006-silver-with-accessories.webp"
            alt="Woman wearing the nasal cannula and eye-mask accessory connected by tubing to the H006 unit on a marble ledge"
            fill
            sizes="(min-width: 1024px) 460px, 280px"
            className="object-cover [object-position:22%_50%] xl:[object-position:25%_50%]"
          />
          <Deco className="absolute inset-0 [background:linear-gradient(180deg,rgb(255_255_255/0)_62%,rgb(14_26_34/0.28)_100%)] xl:[background:linear-gradient(180deg,rgb(255_255_255/0)_66%,rgb(14_26_34/0.26)_100%)]" />
        </div>
        <Deco className="absolute left-2 top-[244px] size-3.5 rounded-full border-2 border-primary xl:left-1 xl:top-[500px] xl:size-4" />
        <Deco className="absolute right-2.5 top-7 size-[18px] rounded-full bg-primary xl:left-[468px] xl:right-auto xl:top-[22px] xl:size-[22px]" />
        <Deco className="absolute right-[34px] top-[68px] size-2 rounded-full border-[1.5px] border-primary xl:left-[506px] xl:right-auto xl:top-[84px] xl:size-2.5" />
        <Deco className="absolute hidden size-1.5 rounded-full bg-primary xl:left-[492px] xl:top-[128px] xl:block" />
        <StepChip className="left-0 top-24 xl:top-[150px]" index="01" label="Press" Icon={PowerIcon} />
        <StepChip className="right-0 top-[218px] xl:left-[376px] xl:right-auto xl:top-[350px]" index="02" label="Drink" Icon={DropIcon} />
        <StepChip className="left-1/2 top-[364px] -ml-[62px] xl:left-[150px] xl:top-[536px] xl:ml-0" index="03" label="Plug in" Icon={PlugIcon} />
      </div>
    </figure>
  );
}

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="relative overflow-x-clip bg-how py-[72px] lg:py-[120px]">
      <div className="relative mx-auto max-w-[1264px] px-5 lg:px-12">
        <div className="xl:grid xl:grid-cols-2 xl:items-center xl:gap-24">
          <div>
            <Eyebrow className="mb-3.5 lg:mb-4">How it works</Eyebrow>
            <h2 id="how-title" className="m-0 mb-8 text-4xl font-light leading-[1.08] tracking-[-0.03em] lg:mb-12 lg:text-[52px] lg:leading-[1.06]">
              Press, drink, plug in.
            </h2>
            <ol className="m-0 list-none p-0">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className={`flex gap-4 border-t border-ink/[0.12] py-[22px] lg:gap-6 lg:py-7 ${i === steps.length - 1 ? "border-b" : ""}`}
                >
                  <span
                    aria-hidden="true"
                    className="flex size-10 flex-none items-center justify-center rounded-full border-[1.5px] border-primary text-[13px] font-medium lg:size-12 lg:text-sm"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="m-0 mb-1.5 text-lg font-medium lg:mb-2 lg:text-[21px] lg:tracking-[-0.01em]">{step.title}</h3>
                    <p className="m-0 text-[15px] leading-[1.6] text-muted">{step.body}</p>
                    {"note" in step && step.note ? <p className="m-0 mt-2 text-xs text-muted">{step.note}</p> : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <PhotoStage />
        </div>

        {site.flags.showDemoVideo ? <VideoPlayer /> : null}

        {/* H006 in operation */}
        <div className="mt-14 lg:mt-24">
          <div className="mb-5 lg:mb-6 lg:flex lg:flex-wrap lg:items-baseline lg:justify-between lg:gap-6">
            <h3 className="m-0 mb-2 text-2xl font-light tracking-[-0.02em] lg:mb-0 lg:text-[28px]">H006 in operation</h3>
          </div>
          <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 lg:grid-cols-4 lg:gap-5">
            {gallery.map((img) => (
              <li key={img.src} className="relative aspect-[2/3] overflow-hidden rounded-[18px] bg-secondary lg:rounded-3xl">
                <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 296px, 50vw" className="object-cover" />
              </li>
            ))}
          </ul>
        </div>

        {/* Wellness information */}
        <div
          id="wellness"
          className="bg-wellness mt-14 rounded-3xl px-6 py-7 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-[72px] lg:rounded-[32px] lg:p-16"
        >
          <div>
            <span className="inline-flex min-h-[30px] items-center rounded-pill border border-primary bg-white px-3.5 py-1 text-xs font-medium">
              {wellness.pill}
            </span>
            <h3 className="m-0 mb-3 mt-5 text-[28px] font-light leading-[1.12] tracking-[-0.025em] lg:mb-4 lg:mt-6 lg:text-[40px] lg:leading-[1.1]">
              {wellness.title}
            </h3>
            <p className="m-0 mb-5 text-[15px] leading-[1.6] text-muted lg:mb-0 lg:text-base lg:leading-[1.65]">{wellness.intro}</p>
          </div>
          <div className="flex flex-col">
            {wellness.rows.map((row, i) => (
              <div
                key={row}
                className={`border-t border-ink/[0.14] py-5 first:py-5 lg:py-6 ${i === 0 ? "lg:border-t-0 lg:pt-0" : ""} ${i === wellness.rows.length - 1 ? "pb-0 lg:pb-0" : ""}`}
              >
                <p className="m-0 mb-1.5 text-[15px] leading-[1.6] lg:mb-2 lg:text-base">{row}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
