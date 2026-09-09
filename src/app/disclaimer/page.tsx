import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { firm } from "@/data/site";

export const metadata: Metadata = {
  title: `Disclaimer | ${firm.name}`,
  description: `Legal disclaimer for the ${firm.name} website.`,
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <p className="text-sm uppercase tracking-[0.16em] text-brass">Legal</p>
        <h1 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
          Disclaimer
        </h1>
        <p className="mt-4 text-sm text-steel">Last updated September 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-soft">
          <section>
            <h2 className="font-display text-xl text-ink">No Attorney-Client Relationship</h2>
            <p className="mt-2">
              Use of this website, including submitting the contact form or
              emailing {firm.name}, does not create an attorney-client
              relationship. An attorney-client relationship is formed only
              after the firm has confirmed representation in writing. Until
              that happens, please avoid sharing confidential or
              time-sensitive information through this site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Not Legal Advice</h2>
            <p className="mt-2">
              The content on this website, including attorney biographies,
              practice area descriptions, and blog or resource pages, is
              provided for general informational purposes only and does not
              constitute legal advice. Laws change, and the application of
              any law to your specific situation requires consultation with
              a licensed attorney.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Prior Results</h2>
            <p className="mt-2">
              Any results described on this website, including client
              testimonials, reflect the outcomes of specific matters. Prior
              results do not guarantee a similar outcome in your case, as
              each matter depends on its own facts and circumstances.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Attorney Advertising</h2>
            <p className="mt-2">
              This website may be considered attorney advertising under the
              rules of the State Bar of Texas. {firm.name} is licensed to
              practice in the State of Texas. The firm does not seek to
              represent anyone based solely upon viewing this website in a
              jurisdiction where doing so would violate applicable rules of
              professional conduct.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Contact</h2>
            <p className="mt-2">
              Questions about this disclaimer can be directed to {firm.name}{" "}
              at{" "}
              <a href={`mailto:${firm.email}`} className="text-ink hover:text-brass break-all">
                {firm.email}
              </a>{" "}
              or{" "}
              <a href={firm.phoneHref} className="text-ink hover:text-brass">
                {firm.phoneDisplay}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
