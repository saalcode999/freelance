"use client";

import { useState, type FormEvent } from "react";

const inputClasses =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-steel/60 focus:border-brass focus:outline-none";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // NOTE for whoever wires this up: this currently just shows a confirmation
  // message. Point the fetch() call at your email service, form provider
  // (e.g. Formspree), or API route, then remove this comment.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-10 text-center">
        <p className="font-display text-xl text-ink">Message received.</p>
        <p className="mt-2 text-sm text-ink-soft">
          Someone from the office will follow up shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-xs uppercase tracking-wide text-steel">
            First name
          </label>
          <input id="firstName" name="firstName" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-xs uppercase tracking-wide text-steel">
            Last name
          </label>
          <input id="lastName" name="lastName" required className={inputClasses} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs uppercase tracking-wide text-steel">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-wide text-steel">
            Email
          </label>
          <input id="email" name="email" type="email" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-wide text-steel">
          How can we help?
        </label>
        <textarea id="message" name="message" rows={4} required className={inputClasses} />
      </div>

      <button
        type="submit"
        className="border border-ink bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-brass hover:bg-brass"
      >
        Send Message
      </button>
    </form>
  );
}
