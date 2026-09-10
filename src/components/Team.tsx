"use client";

import { useState } from "react";
import { team, type TeamMember } from "@/data/site";
import Photo from "./Photo";
import AttorneyModal from "./AttorneyModal";
import Reveal from "./Reveal";

export default function Team() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <Reveal className="max-w-xl">
        <p className="text-base uppercase tracking-[0.16em] text-brass">
          Our Team
        </p>
        <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
          Six attorneys, one approach
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          Every attorney at the firm works directly with clients from
          intake through resolution.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <Reveal key={member.slug} delay={i * 80} className="h-full">
            <button
              type="button"
              onClick={() => setSelected(member)}
              className="group block w-full text-left"
              aria-haspopup="dialog"
            >
              <Photo
                src={member.photo}
                alt={member.name}
                ratio="portrait"
                imgClassName="transition-transform duration-500 ease-out group-hover:scale-105"
              >
                <div className="absolute inset-0 flex items-end bg-ink/0 p-4 transition-colors duration-300 group-hover:bg-ink/40">
                  <span className="translate-y-2 text-sm font-medium uppercase tracking-[0.14em] text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View Profile
                  </span>
                </div>
              </Photo>
              <h3 className="mt-4 font-display text-2xl text-ink transition-colors group-hover:text-brass">
                {member.name}
              </h3>
            </button>
          </Reveal>
        ))}
      </div>

      <AttorneyModal member={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
