import { firm, heroStats } from "@/data/site";
import Photo from "./Photo";

export default function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-12 md:gap-8 md:px-10 md:py-24">
        <div className="md:col-span-7">
          <p className="text-sm uppercase tracking-[0.16em] text-brass">
            {firm.address.city}, {firm.address.stateAbbr} · Attorney at Law
          </p>
          <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.1] text-ink sm:text-5xl md:text-6xl">
            {firm.tagline}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            {firm.attorneyName} represents individuals, families, and business
            owners across North Texas, handling each case with the attention
            it deserves and the honesty to tell you where you stand.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={firm.phoneHref}
              className="border border-ink bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-brass hover:bg-brass"
            >
              Call {firm.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-brass hover:text-brass"
            >
              Schedule a Consultation
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl text-ink">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs leading-snug text-steel">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:col-span-5">
          <div className="relative">
            <Photo
              src={firm.attorneyPhoto}
              alt={`${firm.attorneyName}, ${firm.title}`}
              ratio="portrait"
            />
            <div className="border border-t-0 border-line bg-paper p-6">
              <p className="font-display text-lg text-ink">
                {firm.attorneyName}
              </p>
              <p className="text-sm text-steel">Founding {firm.title}</p>
              <div className="mt-4 space-y-1 text-sm text-ink-soft">
                <p>{firm.address.line1}</p>
                <p>
                  {firm.address.city}, {firm.address.stateAbbr}{" "}
                  {firm.address.zip}
                </p>
                <p>{firm.address.country}</p>
              </div>
              <div className="mt-4 space-y-1 border-t border-line pt-4 text-sm">
                <p>
                  <a href={firm.phoneHref} className="text-ink hover:text-brass">
                    {firm.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${firm.email}`}
                    className="text-ink hover:text-brass break-all"
                  >
                    {firm.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
