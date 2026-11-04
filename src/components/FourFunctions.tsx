import { functions } from "@/content/functions";
import { functionIcons } from "./icons";
import { DrinkIllustration, EarIllustration, EyesIllustration, InhaleIllustration } from "./FunctionIllustrations";
import type { FunctionId } from "@/content/functions";

const illustrations: Record<FunctionId, (p: { label: string }) => React.JSX.Element> = {
  drink: DrinkIllustration,
  inhale: InhaleIllustration,
  ear: EarIllustration,
  eyes: EyesIllustration,
};

export function FourFunctions() {
  return (
    <>
      <ul className="m-0 mt-8 grid list-none grid-cols-2 gap-3 p-0 md:gap-5 lg:mt-[72px] lg:grid-cols-4">
        {functions.map((fn) => {
          const Icon = functionIcons[fn.id];
          const Illustration = illustrations[fn.id];
          return (
            <li key={fn.id} className="flex">
              <article className="flex w-full flex-col rounded-[22px] border border-ink/10 bg-white px-2 pb-[18px] pt-2 shadow-card lg:rounded-[28px] lg:px-3.5 lg:pb-8 lg:pt-3.5">
                <div className="overflow-hidden rounded-[15px] bg-secondary lg:rounded-[18px]">
                  <Illustration label={fn.illustrationLabel} />
                </div>
                <div className="px-1.5 pt-4 lg:px-3 lg:pt-6">
                  <div className="mb-3 flex items-center gap-2 lg:mb-[18px] lg:gap-3">
                    <span
                      aria-hidden="true"
                      className="flex size-8 flex-none items-center justify-center rounded-full border-[1.5px] border-primary text-ink lg:size-10"
                    >
                      <Icon size={16} className="lg:size-5" strokeWidth={1.5} />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-muted lg:text-[11px] lg:tracking-[0.18em]">
                      {fn.index} · {fn.label}
                    </span>
                  </div>
                  <h3 className="m-0 mb-2 text-base font-medium leading-[1.25] tracking-[-0.01em] lg:mb-2.5 lg:text-[22px] lg:leading-[1.2] lg:tracking-[-0.015em]">
                    {fn.title}
                  </h3>
                  <p className="m-0 text-[13px] leading-[1.5] text-muted lg:text-[15px] lg:leading-[1.6]">{fn.summary}</p>
                  <p className="m-0 mt-3 border-t border-ink/10 pt-3 text-xs leading-[1.55] text-muted lg:mt-3.5 lg:pt-3.5 lg:text-[13px]">
                    <span className="font-semibold text-ink">How to use: </span>
                    {fn.howTo}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
}
