"use client";

import { useEffect } from "react";
import type { TeamMember } from "@/data/site";
import Photo from "./Photo";

type AttorneyModalProps = {
  member: TeamMember | null;
  onClose: () => void;
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-line pt-5 first:border-t-0 first:pt-0">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-brass">
        {title}
      </p>
      <div className="mt-2 text-sm leading-relaxed text-ink-soft">
        {children}
      </div>
    </div>
  );
}

export default function AttorneyModal({ member, onClose }: AttorneyModalProps) {
  useEffect(() => {
    if (!member) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = overflow;
    };
  }, [member, onClose]);

  if (!member) return null;

  const yearsPracticing = new Date().getFullYear() - member.practicingSince;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="attorney-modal-name"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/70 px-4 py-8 backdrop-blur-sm md:items-center md:py-12"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl border border-line bg-paper shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center border border-line bg-paper text-ink transition-colors hover:border-brass hover:text-brass"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-4 w-4"
          >
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="grid gap-0 md:grid-cols-12">
          <div className="md:col-span-4">
            <Photo src={member.photo} alt={member.name} ratio="portrait" />
          </div>

          <div className="max-h-[70vh] overflow-y-auto p-6 md:col-span-8 md:max-h-[85vh] md:p-10">
            <p
              id="attorney-modal-name"
              className="font-display text-2xl text-ink md:text-3xl"
            >
              {member.name}
            </p>
            <p className="mt-1 text-sm text-brass">{member.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {member.bio}
            </p>

            <div className="mt-6 space-y-5">
              <Section title="Education">
                <ul className="space-y-1">
                  {member.education.map((entry) => (
                    <li key={`${entry.school}-${entry.year}`}>
                      {entry.degree}, {entry.school} ({entry.year})
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Bar Admissions">
                <ul className="space-y-1">
                  {member.barAdmissions.map((admission) => (
                    <li key={admission}>{admission}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Years of Practice">
                <p>
                  Practicing law since {member.practicingSince} — {yearsPracticing}
                  + years of experience.
                </p>
              </Section>

              <Section title="Practice Areas">
                <ul className="flex flex-wrap gap-x-2 gap-y-1">
                  {member.focus.map((area, i) => (
                    <li key={area}>
                      {area}
                      {i < member.focus.length - 1 ? " ·" : ""}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Professional Memberships">
                <ul className="space-y-1">
                  {member.memberships.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Awards & Recognition">
                <ul className="space-y-1">
                  {member.awards.map((award) => (
                    <li key={award}>{award}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Notable Experience">
                <ul className="list-disc space-y-1.5 pl-4">
                  {member.experience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Languages">
                <p>{member.languages.join(", ")}</p>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
