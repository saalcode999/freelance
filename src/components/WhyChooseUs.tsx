import { whyChooseUs } from "@/data/site";

export default function WhyChooseUs() {
  return (
    <section className="border-y border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <h2 className="max-w-md font-display text-3xl leading-tight text-ink">
          Why clients choose this firm
        </h2>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((reason, i) => (
            <div
              key={reason.title}
              className={
                i > 0 ? "border-t border-line pt-6 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0" : ""
              }
            >
              <h3 className="font-display text-lg text-ink">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
