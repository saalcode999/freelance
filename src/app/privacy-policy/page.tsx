import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { firm } from "@/data/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${firm.name}`,
  description: `Privacy policy for ${firm.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <p className="text-sm uppercase tracking-[0.16em] text-brass">
          Legal
        </p>
        <h1 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 leading-relaxed text-ink-soft">
          <p>
            {firm.name} respects your privacy. This policy explains what
            information we collect through this website and how it is used.
          </p>

          <section>
            <h2 className="font-display text-xl text-ink">
              Information we collect
            </h2>
            <p className="mt-2">
              When you submit our contact form, we collect the name, contact
              details, and case information you choose to provide. We do not
              collect sensitive information beyond what you submit.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">
              How we use your information
            </h2>
            <p className="mt-2">
              Information submitted through this site is used solely to
              respond to your inquiry and evaluate a potential attorney-client
              relationship. We do not sell or share your information with
              third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Contact us</h2>
            <p className="mt-2">
              Questions about this policy can be directed to{" "}
              <a
                href={`mailto:${firm.email}`}
                className="text-brass hover:text-brass-light"
              >
                {firm.email}
              </a>{" "}
              or {firm.phoneDisplay}.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
