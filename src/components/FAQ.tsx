import { faqs } from "@/content/faq";
import { site } from "@/config/site";
import { Eyebrow, btnPrimary } from "./ui";
import { PlusIcon } from "./icons";

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-faq py-[72px] lg:py-[120px]">
      <div className="mx-auto max-w-[1264px] px-5 lg:grid lg:grid-cols-[5fr_7fr] lg:gap-24 lg:px-12">
        <div className="mb-8 lg:mb-0">
          <Eyebrow className="mb-3.5 lg:mb-4">FAQ</Eyebrow>
          <h2 id="faq-title" className="m-0 mb-4 text-4xl font-light leading-[1.08] tracking-[-0.03em] lg:mb-5 lg:text-[52px] lg:leading-[1.06]">
            Straight answers about H006.
          </h2>
          <p className="m-0 mb-6 text-[15px] leading-[1.6] text-muted lg:text-base">
            Can&apos;t find what you need? Call us on{" "}
            <a href={site.contact.phoneTel} className="font-medium text-ink underline">{site.contact.phoneDisplay}</a>.
          </p>
          <a href="#enquire" className={`${btnPrimary} h-12 px-7 text-[15px]`}>Enquire Now</a>
        </div>
        <div className="border-t border-ink/[0.14]">
          {faqs.map((f, i) => (
            <details key={f.id} open={i === 0} className="group border-b border-ink/[0.14]">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[17px] font-medium lg:py-[26px] lg:text-[19px]">
                <h3 className="m-0 text-[inherit] font-[inherit]">{f.question}</h3>
                <PlusIcon size={20} className="flex-none transition-transform group-open:rotate-45" />
              </summary>
              <p className="m-0 max-w-[600px] pb-5 text-[15px] leading-[1.65] text-muted lg:pb-[26px] lg:text-base">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
