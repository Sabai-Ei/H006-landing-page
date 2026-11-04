import { footerColumns } from "@/content/navigation";
import { site } from "@/config/site";

function Column({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="m-0 mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/60">{title}</h2>
      <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[15px]">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <a href={l.href} className="text-white/90 hover:text-white hover:underline">{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const { merchant } = site;
  return (
    <footer className="bg-footer px-5 pb-7 pt-12 text-white lg:px-12 lg:pb-8 lg:pt-[72px]">
      <div className="mx-auto max-w-[1264px]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <p className="m-0 mb-2 text-[22px] font-medium tracking-[-0.01em]">{site.name}</p>
            <p className="m-0 text-sm leading-[1.6] text-white/70">
              {merchant.legalName}
              <br />
              UEN {merchant.uen}
            </p>
          </div>
          <div className="hidden lg:block"><Column title="Product" links={footerColumns.product} /></div>
          <Column title="Explore" links={footerColumns.explore} />
          <Column title="Contact" links={footerColumns.contact} />
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/20 pt-6 text-xs leading-[1.6] text-white/70 lg:mt-14 lg:flex-row lg:justify-between lg:gap-8">
          <p className="m-0 max-w-[720px]">
            H006 is a wellness product and is not intended to diagnose, treat, cure or prevent any disease.
          </p>
          <p className="m-0 whitespace-nowrap">Privacy policy · © WaterSource</p>
        </div>
      </div>
    </footer>
  );
}
