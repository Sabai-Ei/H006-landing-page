import { overview } from "@/content/functions";
import { Deco, Eyebrow } from "./ui";
import { FourFunctions } from "./FourFunctions";

/** Section #modes: product overview + the four functions. */
export function ProductOverview() {
  return (
    <section id="modes" aria-labelledby="modes-title" className="relative overflow-hidden bg-modes py-[72px] lg:pb-32 lg:pt-[88px]">
      <Deco className="hairline-grid pointer-events-none absolute inset-0 [--grid-x:50%] [--grid-y:100%]" />
      <div className="relative mx-auto max-w-[1264px] px-5 lg:px-12">
        <div className="lg:grid lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="lg:flex lg:items-end lg:gap-8">
            <span
              aria-hidden="true"
              className="hidden select-none text-[200px] font-extralight leading-[0.8] text-transparent [-webkit-text-stroke:1.5px_#05A5CD] lg:block"
            >
              4
            </span>
            <div>
              <Eyebrow className="mb-3.5 lg:mb-4">{overview.eyebrow}</Eyebrow>
              <h2 id="modes-title" className="m-0 text-4xl font-light leading-[1.08] tracking-[-0.03em] lg:text-[52px] lg:leading-[1.06]">
                {overview.title}
              </h2>
            </div>
          </div>
          <div>
            <p className="m-0 mt-4 text-base leading-[1.6] text-muted lg:mt-0 lg:max-w-[520px] lg:text-[17px]">{overview.body}</p>
            <p className="m-0 mt-3.5 text-base font-medium leading-[1.5] lg:mt-5 lg:max-w-[520px] lg:text-[17px]">{overview.positioning}</p>
          </div>
        </div>
        <FourFunctions />
      </div>
    </section>
  );
}
