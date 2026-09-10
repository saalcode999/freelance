import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { firm } from "@/data/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${firm.name}`,
  description: `How ${firm.name} collects, uses, and protects information submitted through this website.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <p className="text-base uppercase tracking-[0.16em] text-brass">Legal</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-base text-steel">Last updated September 2026</p>

        <div className="mt-10 space-y-8 text-lg leading-relaxed text-ink-soft">
          <section>
            <h2 className="font-display text-2xl text-ink">Information We Collect</h2>
            <p className="mt-2">
              When you submit the contact form on this website, we collect
              the information you provide, such as your name, email address,
              phone number, and the details of your legal matter. We also
              collect standard technical information, such as your browser
              type, device, and pages visited, through basic website
              analytics.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">How We Use Information</h2>
            <p className="mt-2">
              We use the information you submit to respond to your inquiry,
              evaluate whether we can assist with your matter, and, if you
              become a client, to provide legal services. We do not sell
              your information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Cookies</h2>
            <p className="mt-2">
              This website may use cookies or similar technologies to
              support basic site functionality and understand how visitors
              use the site. You can disable cookies through your browser
              settings; doing so may affect some site features.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Data Security</h2>
            <p className="mt-2">
              We take reasonable measures to protect information submitted
              through this website. No method of transmission over the
              internet is completely secure, so we cannot guarantee absolute
              security. Please avoid sending highly sensitive or
              confidential information until an attorney-client relationship
              has been confirmed in writing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Third-Party Links</h2>
            <p className="mt-2">
              This website may link to third-party sites, including social
              media platforms. We are not responsible for the privacy
              practices or content of those sites.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Your Choices</h2>
            <p className="mt-2">
              You may request that we delete information you have submitted
              through this website by contacting us using the information
              below, subject to any recordkeeping obligations the firm has
              under Texas law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Contact</h2>
            <p className="mt-2">
              Questions about this privacy policy can be directed to{" "}
              {firm.name} at{" "}
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
