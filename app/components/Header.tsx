"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/app/data/homeData";
import { cn } from "@/app/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="relative z-50 w-full bg-white">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:h-24 lg:px-20">
        <Link href="/" aria-label="Strona główna" onClick={closeMenu}>
          <Image
            src="/images/logohomekeyrealty.png"
            alt="Logo Homekey Realty"
            width={90}
            height={60}
            priority
            className="h-auto w-[90px] lg:w-[110px]"
          />
        </Link>

        <nav className="hidden md:block" aria-label="Główna nawigacja">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base font-semibold text-text-main transition hover:text-brand-hover"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((currentState) => !currentState)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden hover:cursor-pointer hover:"
        >
          <span
            className={cn(
              "h-0.5 w-7 bg-neutral-950 transition",
              isOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-7 bg-neutral-950 transition",
              isOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-7 bg-neutral-950 transition",
              isOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "absolute left-0 top-20 w-full bg-white px-6 py-6 shadow-lg transition duration-300 md:hidden",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        )}
      >
        <nav aria-label="Menu mobilne">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-lg font-semibold text-text-main transition hover:text-brand-hover"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}