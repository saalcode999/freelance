import { firm, contactFormNotice } from "@/data/site";
import ContactForm from "./ContactForm";
import Photo from "./Photo";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <p className="text-sm uppercase tracking-[0.16em] text-brass">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
            Schedule a consultation
          </h2>
          <p className="mt-4 text-ink-soft">
            Reach the office directly, or send a few details below and we&apos;ll
            follow up promptly.
          </p>

          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wide text-steel">
                Office
              </dt>
              <dd className="mt-1 text-ink">
                {firm.address.line1}
                <br />
                {firm.address.city}, {firm.address.stateAbbr}{" "}
                {firm.address.zip}
                <br />
                {firm.address.country}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-steel">
                Phone
              </dt>
              <dd className="mt-1">
                <a href={firm.phoneHref} className="text-ink hover:text-brass">
                  {firm.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-steel">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${firm.email}`}
                  className="text-ink hover:text-brass break-all"
                >
                  {firm.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-steel">
                Office Hours
              </dt>
              <dd className="mt-1 space-y-0.5 text-ink">
                {firm.hours.map((h) => (
                  <p key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span className="text-ink-soft">{h.time}</span>
                  </p>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-8">
            <Photo
              src="/map.png"
              alt="Map — 5000 Riverside Dr, Irving, TX"
              ratio="wide"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="border border-line bg-paper-dim p-6 md:p-10">
            <ContactForm />
            <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-steel">
              {contactFormNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
