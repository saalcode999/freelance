"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { firm, nav } from "@/data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3 leading-tight transition-opacity hover:opacity-80"
        >
          <Image
            src={firm.logo}
            alt={`${firm.shortName} logo`}
            width={48}
            height={48}
            className="h-11 w-11 object-contain md:h-12 md:w-12"
          />
          <span className="flex flex-col">
            <span className="font-display text-3xl text-ink md:text-4xl">
              {firm.shortName}
            </span>
            <span className="text-sm uppercase tracking-[0.16em] text-steel md:text-base">
              PLLC
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-base text-ink-soft transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brass after:transition-all after:duration-300 hover:text-brass hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#contact"
            className="rounded-none border border-ink bg-ink px-4 py-2.5 text-base font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-brass hover:bg-brass"
          >
            Schedule a Consultation
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-ink transition-colors hover:border-brass hover:text-brass lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-5 w-5"
          >
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-line bg-paper transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4 md:px-10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line/60 py-3 text-base text-ink-soft transition-colors last:border-b-0 hover:text-brass"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 border border-ink bg-ink px-4 py-2.5 text-center text-base font-medium text-paper transition-all duration-300 hover:border-brass hover:bg-brass"
          >
            Schedule a Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
