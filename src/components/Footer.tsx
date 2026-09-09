import Link from "next/link";
import { firm, nav, disclaimer } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-display text-lg">{firm.attorneyName}</p>
            <p className="mt-1 text-sm text-paper/60">{firm.title} at Law</p>
            <div className="mt-4 space-y-0.5 text-sm text-paper/70">
              <p>{firm.address.line1}</p>
              <p>
                {firm.address.city}, {firm.address.stateAbbr} {firm.address.zip}
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-wide text-paper/50">
              Navigate
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-paper/70 hover:text-brass-light">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-wide text-paper/50">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={firm.phoneHref} className="text-paper/70 hover:text-brass-light">
                  {firm.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${firm.email}`}
                  className="break-all text-paper/70 hover:text-brass-light"
                >
                  {firm.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-wide text-paper/50">
              Follow
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={firm.social.facebook} className="text-paper/70 hover:text-brass-light">
                  Facebook
                </a>
              </li>
              <li>
                <a href={firm.social.linkedin} className="text-paper/70 hover:text-brass-light">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={firm.social.instagram} className="text-paper/70 hover:text-brass-light">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/15 pt-6 text-xs leading-relaxed text-paper/50">
          <p>{disclaimer}</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p>
              © {year} {firm.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/disclaimer" className="hover:text-brass-light">
                Disclaimer
              </Link>
              <Link href="/privacy-policy" className="hover:text-brass-light">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
