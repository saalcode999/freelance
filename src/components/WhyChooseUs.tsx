import { whyChooseUs } from "@/data/site";
import Reveal from "./Reveal";

export default function WhyChooseUs() {
  return (
    <section className="border-y border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <h2 className="max-w-md font-display text-4xl leading-tight text-ink">
            Why clients choose this firm
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 100}>
              <div
                className={
                  i > 0 ? "border-t border-line pt-6 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0" : ""
                }
              >
                <h3 className="font-display text-xl text-ink">{reason.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-soft">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
