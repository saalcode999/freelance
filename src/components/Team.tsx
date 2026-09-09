"use client";

import { useState } from "react";
import { team, type TeamMember } from "@/data/site";
import Photo from "./Photo";
import AttorneyModal from "./AttorneyModal";

export default function Team() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="max-w-xl">
        <p className="text-sm uppercase tracking-[0.16em] text-brass">
          Our Team
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
          Six attorneys, one approach
        </h2>
        <p className="mt-4 text-ink-soft">
          Every attorney at the firm works directly with clients from
          intake through resolution.
        </p>
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <button
            key={member.slug}
            type="button"
            onClick={() => setSelected(member)}
            className="group text-left"
            aria-haspopup="dialog"
          >
            <Photo src={member.photo} alt={member.name} ratio="portrait" />
            <h3 className="mt-4 font-display text-xl text-ink transition-colors group-hover:text-brass">
              {member.name}
            </h3>
            <p className="text-sm text-brass">{member.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {member.bio}
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-steel">
              {member.focus.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-steel transition-colors group-hover:text-brass">
              View full profile →
            </p>
          </button>
        ))}
      </div>

      <AttorneyModal member={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
