import { practiceAreas } from "@/data/site";
import Reveal from "./Reveal";

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <Reveal className="max-w-xl">
          <p className="text-base uppercase tracking-[0.16em] text-brass-light">
            Practice Areas
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Where we help
          </h2>
          <p className="mt-4 text-lg text-paper/70">
            A full-service practice covering the matters that bring most
            people to a lawyer&apos;s office for the first time.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-paper/15 border-y border-paper/15">
          {practiceAreas.map((area, i) => (
            <Reveal key={area.slug} delay={i * 60}>
              <div className="group grid gap-4 py-8 transition-colors duration-300 md:grid-cols-12 md:gap-8 md:hover:bg-paper/5">
                <h3 className="font-display text-3xl transition-colors duration-300 md:col-span-3 group-hover:text-brass-light">
                  {area.name}
                </h3>
                <p className="text-lg text-paper/70 md:col-span-5">{area.summary}</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-base text-paper/60 md:col-span-4 md:justify-end">
                  {area.items.map((item) => (
                    <li key={item} className="whitespace-nowrap">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
