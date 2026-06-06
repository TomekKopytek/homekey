import Image from "next/image";
import Link from "next/link";
import {
  footerBottomLinks,
  footerLinks,
  footerSocials,
} from "@/app/data/footerData";

export default function Footer() {
  return (
    <footer className="bg-neutral-200 py-10 md:py-8">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Nawigacja w stopce">
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-neutral-950 transition hover:text-orange-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-center gap-4">
            {footerSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="transition duration-200 hover:scale-110 active:scale-95"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-8 text-center md:mt-8 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-sm text-neutral-400">© Copyright 2026</p>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {footerBottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-bold text-text-main transition duration-200 hover:text-brand-hover"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}