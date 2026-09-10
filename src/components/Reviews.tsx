import { reviews, reviewStats } from "@/data/site";
import Reveal from "./Reveal";
import StarRating from "./StarRating";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <Reveal className="max-w-md">
          <p className="text-base uppercase tracking-[0.16em] text-brass-light">
            Reviews
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            What clients say
          </h2>
          <div className="mt-5 flex items-center gap-3">
            <StarRating rating={reviewStats.average} />
            <p className="text-base text-paper/70">
              {reviewStats.average.toFixed(1)} out of 5 · {reviewStats.count}+{" "}
              {reviewStats.source}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 border-t border-paper/15 pt-10 md:grid-cols-3 md:gap-8">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100} className="h-full">
              <figure className="flex h-full flex-col">
                <StarRating rating={r.rating} size="sm" />
                <blockquote className="mt-3 font-display text-xl leading-snug text-paper/90">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-base text-paper/60">
                  {r.name} · {r.context}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
