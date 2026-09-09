import Image from "next/image";
import Link from "next/link";
import { firm, nav } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3 leading-tight">
          <Image
            src={firm.logo}
            alt={`${firm.shortName} logo`}
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="flex flex-col">
            <span className="font-display text-lg text-ink md:text-xl">
              {firm.attorneyName}
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.16em] text-steel">
              {firm.title} at Law
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-brass"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="rounded-none border border-ink bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:border-brass hover:bg-brass"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
