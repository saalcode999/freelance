import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <p className="text-sm uppercase tracking-[0.16em] text-brass-light">
          Testimonials
        </p>
        <h2 className="mt-3 max-w-md font-display text-3xl leading-tight md:text-4xl">
          What clients say
        </h2>

        <div className="mt-12 grid gap-10 border-t border-paper/15 pt-10 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col">
              <blockquote className="font-display text-lg leading-snug text-paper/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-paper/60">
                {t.name} · {t.context}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
