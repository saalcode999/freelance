import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { firm, disclaimer } from "@/data/site";

export const metadata: Metadata = {
  title: `Disclaimer | ${firm.name}`,
  description: `Legal disclaimer for ${firm.name}.`,
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <p className="text-sm uppercase tracking-[0.16em] text-brass">
          Legal
        </p>
        <h1 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
          Disclaimer
        </h1>
        <div className="mt-8 space-y-4 leading-relaxed text-ink-soft">
          <p>{disclaimer}</p>
          <p>
            No attorney-client relationship is formed by your use of this
            website or by submitting information through it. Please do not
            send confidential or time-sensitive information until an
            attorney-client relationship has been established.
          </p>
          <p>
            {firm.name} is licensed to practice in the State of Texas. This
            website is not intended to solicit clients for matters outside of
            Texas.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
