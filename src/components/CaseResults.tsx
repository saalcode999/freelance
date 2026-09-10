import Link from "next/link";
import { caseResults } from "@/data/site";
import Reveal from "./Reveal";

export default function CaseResults() {
  return (
    <section id="case-results" className="border-y border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <Reveal className="max-w-xl">
          <p className="text-base uppercase tracking-[0.16em] text-brass">
            Case Results
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            Outcomes clients can point to
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            A sample of matters resolved for past clients. Every case is
            different, and no result is promised for a future matter.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseResults.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col border border-line bg-paper p-6 transition-shadow duration-300 hover:shadow-lg">
                <p className="text-sm uppercase tracking-[0.14em] text-brass">
                  {c.practiceArea}
                </p>
                <p className="mt-3 font-display text-3xl text-ink">
                  {c.amount}
                </p>
                <p className="mt-1 text-base font-medium text-ink">{c.title}</p>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {c.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-steel">
          Past results do not guarantee a similar outcome in your case. See
          our{" "}
          <Link href="/disclaimer" className="underline hover:text-brass">
            disclaimer
          </Link>{" "}
          for details.
        </p>
      </div>
    </section>
  );
}
