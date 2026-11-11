import Image from "next/image";
import { site } from "@/config/site";
import { primaryNav } from "@/content/navigation";
import { btnPrimary } from "./ui";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="relative z-40 mx-auto flex max-w-[1264px] items-center justify-between gap-3 px-5 py-3 lg:gap-6 lg:px-12 lg:py-5">
      <a href="#top" aria-label="WaterSource – home" className="block">
        <Image
          src="/images/watersource-logo.png"
          alt="WaterSource 水源 – Bliss in every drop"
          width={1180}
          height={550}
          priority
          className="block h-10 w-auto lg:h-[52px]"
        />
      </a>
      <nav aria-label="Primary" className="hidden gap-9 text-sm font-normal lg:flex">
        {primaryNav.map((item) => (
          <a key={item.href} href={item.href} className="transition-colors hover:text-primary">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <a href={site.contact.whatsappUrl} className={`${btnPrimary} h-11 px-5 text-sm !font-medium lg:px-6`}>
          Enquire Now
        </a>
        <MobileMenu items={primaryNav} phoneTel={site.contact.phoneTel} phoneDisplay={site.contact.phoneDisplay} />
      </div>
    </header>
  );
}
