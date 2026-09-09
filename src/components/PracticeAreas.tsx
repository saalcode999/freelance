import { practiceAreas } from "@/data/site";

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.16em] text-brass-light">
            Practice Areas
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            Where we help
          </h2>
          <p className="mt-4 text-paper/70">
            A full-service practice covering the matters that bring most
            people to a lawyer&apos;s office for the first time.
          </p>
        </div>

        <div className="mt-12 divide-y divide-paper/15 border-y border-paper/15">
          {practiceAreas.map((area) => (
            <div
              key={area.slug}
              className="grid gap-4 py-8 md:grid-cols-12 md:gap-8"
            >
              <h3 className="font-display text-2xl md:col-span-3">
                {area.name}
              </h3>
              <p className="text-paper/70 md:col-span-5">{area.summary}</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-paper/60 md:col-span-4 md:justify-end">
                {area.items.map((item) => (
                  <li key={item} className="whitespace-nowrap">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
