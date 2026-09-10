import { firm, heroStats } from "@/data/site";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videoanim.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-ink/75" />

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:px-10 md:py-32">
        <Reveal>
          <p className="text-base uppercase tracking-[0.16em] text-brass-light">
            {firm.address.city}, {firm.address.stateAbbr} · Attorney at Law
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-5xl leading-[1.1] text-paper sm:text-6xl md:text-7xl">
            {firm.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
            <strong className="font-semibold text-paper">{firm.name}</strong>{" "}
            represents individuals, families, and business owners across
            North Texas, handling each case with the attention it deserves
            and the honesty to tell you where you stand.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={firm.phoneHref}
            className="border border-paper bg-paper px-6 py-3 text-base font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brass hover:bg-brass hover:text-paper"
          >
            Call {firm.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="border border-paper px-6 py-3 text-base font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-brass-light hover:text-brass-light"
          >
            Schedule a Consultation
          </a>
        </Reveal>

        <Reveal delay={300}>
          <dl className="mx-auto mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-paper/20 pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl text-paper">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-sm leading-snug text-paper/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
