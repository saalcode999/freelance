import { firm } from "@/data/site";
import Photo from "./Photo";

const credentials = [
  { label: "Admitted", value: "State Bar of Texas" },
  { label: "Based in", value: `${firm.address.city}, ${firm.address.stateAbbr}` },
  { label: "Consultations", value: "In person, phone, or video" },
  { label: "Languages", value: "English, Spanish" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Photo
            src={firm.attorneyPhoto}
            alt={`${firm.attorneyName} in his office`}
            ratio="square"
          />
        </div>

        <div className="md:col-span-7">
          <p className="text-sm uppercase tracking-[0.16em] text-brass">
            About the Firm
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
            Meet {firm.attorneyName}
          </h2>
          <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
            <p>
              {firm.attorneyName} started this firm on a simple idea: clients
              deserve a lawyer who picks up the phone, explains their options
              honestly, and treats their case like it matters — because it
              does.
            </p>
            <p>
              Today the firm handles personal injury, family law, criminal
              defense, estate planning, business, and immigration matters for
              clients across Irving and the surrounding North Texas area,
              backed by a team of associate attorneys who share that same
              approach.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8">
            {credentials.map((c) => (
              <div key={c.label}>
                <dt className="text-xs uppercase tracking-wide text-steel">
                  {c.label}
                </dt>
                <dd className="mt-1 text-ink">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
