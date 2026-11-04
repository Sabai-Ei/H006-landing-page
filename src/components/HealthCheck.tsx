import { healthCheck } from "@/content/healthcheck";
import { site } from "@/config/site";
import { Deco, btnPrimary } from "./ui";
import { PlusIcon } from "./icons";

/** Rendered only when the single `showHealthCheck` flag is on. */
export function HealthCheck() {
  if (!site.flags.showHealthCheck) return null;
  const { contact } = site;
  return (
    <section id="healthcheck" aria-labelledby="hc-title" className="bg-white px-3 pb-[72px] lg:px-12 lg:pb-32">
      <div className="bg-mesh-panel relative mx-auto max-w-[1344px] overflow-hidden rounded-[28px] px-5 pb-8 pt-9 lg:rounded-[40px] lg:px-16 lg:py-[72px]">
        <Deco className="dot-grid absolute inset-0" />
        <div className="relative">
          <div className="lg:grid lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <span className="inline-flex min-h-[30px] items-center rounded-pill border border-primary bg-white px-3.5 py-1 text-xs font-medium">
                {healthCheck.pill}
              </span>
              <h2 id="hc-title" className="m-0 mt-5 text-[32px] font-light leading-[1.1] tracking-[-0.03em] lg:mt-6 lg:text-5xl">
                {healthCheck.title}
              </h2>
            </div>
            <p className="m-0 mt-3.5 text-[15px] leading-[1.6] text-muted lg:mt-0 lg:max-w-[520px] lg:text-[17px] lg:leading-[1.65]">
              {healthCheck.intro}
            </p>
          </div>

          {/* Desktop: cards */}
          <ul className="m-0 mt-12 hidden list-none grid-cols-4 gap-5 p-0 lg:grid">
            {healthCheck.categories.map((c, i) => (
              <li key={c.name} className="rounded-3xl bg-white px-6 pb-8 pt-7 shadow-card">
                <span
                  aria-hidden="true"
                  className="mb-5 flex size-10 items-center justify-center rounded-full border-[1.5px] border-primary text-[13px] font-medium"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 mb-2 text-[19px] font-medium leading-[1.25] tracking-[-0.01em]">{c.name}</h3>
                <p className="m-0 text-sm leading-[1.6] text-muted">{c.text}</p>
              </li>
            ))}
          </ul>

          {/* Mobile: accordion */}
          <div className="mt-7 border-t border-ink/[0.14] lg:hidden">
            {healthCheck.categories.map((c, i) => (
              <details key={c.name} className="group border-b border-ink/[0.14]">
                <summary className="flex min-h-14 cursor-pointer list-none items-center gap-3 py-2 text-base font-medium">
                  <span
                    aria-hidden="true"
                    className="flex size-8 flex-none items-center justify-center rounded-full bg-white text-xs font-medium"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{c.name}</span>
                  <PlusIcon size={18} className="flex-none transition-transform group-open:rotate-45" />
                </summary>
                <p className="m-0 mb-4 ml-11 text-sm leading-[1.6] text-muted">{c.text}</p>
              </details>
            ))}
          </div>

          <div className="mt-6 lg:mt-12 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <p className="m-0 mb-4 text-xs leading-normal text-muted lg:mb-0 lg:text-[13px]">
              {healthCheck.contact} <a href={contact.phoneTel} className="font-medium text-ink underline">{contact.phoneDisplay}</a>.
            </p>
            <a href={contact.phoneTel} className={`${btnPrimary} h-[54px] w-full px-8 text-[15px] lg:h-[52px] lg:w-auto`}>
              {healthCheck.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
