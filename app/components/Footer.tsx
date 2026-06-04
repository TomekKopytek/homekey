import Image from "next/image";
import Link from "next/link";
import {
  footerBottomLinks,
  footerLinks,
  footerSocials,
} from "@/app/data/footerData";

export default function Footer() {
  return (
    <footer className="bg-neutral-200 py-8">
      <div className="mx-auto px-40">
        <div className="flex items-center justify-between">
          <nav aria-label="Nawigacja w stopce">
            <ul className="flex items-center gap-8">
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

          <div className="flex items-center gap-3">
            {footerSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="transition hover:scale-110"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-neutral-400">© Copyright 2026</p>

          <div className="flex items-center gap-8">
            {footerBottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-bold text-neutral-950 transition hover:text-orange-500"
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