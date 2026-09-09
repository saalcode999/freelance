// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything here.
// This file is the single source of truth for the website's text and data.
// Changing a value here updates it everywhere it appears on the site.
// No coding knowledge needed beyond editing the text between quotes.
// ─────────────────────────────────────────────────────────────────────────

export const firm = {
  name: "Harvey Clifford Law, PLLC",
  shortName: "Harvey Clifford Law",
  attorneyName: "Harvey Clifford",
  attorneyPhoto: "/Harvey.png",
  logo: "/logo.png",
  title: "Attorney",
  tagline: "Straight answers. Serious advocacy.",
  founded: 2011,
  phoneDisplay: "(954) 662-7679",
  phoneHref: "tel:+19546627679",
  email: "chatharvey_wt@hotmail.com",
  address: {
    line1: "5000 Riverside Dr",
    city: "Irving",
    state: "Texas",
    stateAbbr: "TX",
    zip: "75039",
    country: "United States",
  },
  hours: [
    { days: "Monday – Friday", time: "8:30 AM – 5:30 PM" },
    { days: "Saturday", time: "By appointment" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "15+", label: "Years practicing Texas law" },
  { value: "1,200+", label: "Clients represented" },
  { value: "24/7", label: "Line for active cases" },
];

export const practiceAreas = [
  {
    slug: "personal-injury",
    name: "Personal Injury",
    summary:
      "Representation for people hurt by someone else's negligence, from car wrecks to workplace injuries.",
    items: ["Auto & truck accidents", "Workplace injuries", "Premises liability", "Wrongful death"],
  },
  {
    slug: "family-law",
    name: "Family Law",
    summary:
      "Steady guidance through divorce, custody, and the other legal turns a family can face.",
    items: ["Divorce", "Child custody & support", "Property division", "Adoption"],
  },
  {
    slug: "criminal-defense",
    name: "Criminal Defense",
    summary:
      "A firm defense for clients facing state or federal charges in North Texas.",
    items: ["DWI defense", "Drug charges", "Theft & fraud", "Federal crimes"],
  },
  {
    slug: "estate-planning",
    name: "Estate Planning & Probate",
    summary:
      "Plans that protect what you've built and guardianship of it after you're gone.",
    items: ["Wills", "Trusts", "Probate administration", "Power of attorney"],
  },
  {
    slug: "business-law",
    name: "Business Law",
    summary:
      "Formation, contracts, and disputes handled for owners who need a lawyer who returns calls.",
    items: ["Business formation", "Contract drafting & disputes", "Partnership agreements"],
  },
  {
    slug: "immigration",
    name: "Immigration",
    summary:
      "Family- and employment-based immigration matters handled with care and clear timelines.",
    items: ["Visas & green cards", "Naturalization", "Family-based petitions", "Deportation defense"],
  },
];

export const whyChooseUs = [
  {
    title: "Direct access to your attorney",
    body: "You work with Harvey and the associate assigned to your case — not a rotating call center.",
  },
  {
    title: "Plain-language advice",
    body: "Every option is explained in terms you can act on, with the trade-offs stated up front.",
  },
  {
    title: "Local knowledge",
    body: "Based in Irving and familiar with the courts, clerks, and opposing counsel across North Texas.",
  },
  {
    title: "Transparent fees",
    body: "You'll know how billing works before you sign anything — no surprises on the invoice.",
  },
];

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  focus: string[];
  initials: string;
  photo: string;
};

export const team: TeamMember[] = [
  {
    slug: "harvey-clifford",
    name: "Harvey Clifford",
    role: "Founding Attorney",
    bio: "Harvey founded the firm to give clients in North Texas the kind of attention larger firms can't offer — direct communication and a plan built around your goals, not a docket.",
    focus: ["Personal Injury", "Criminal Defense", "Business Law"],
    initials: "HC",
    photo: "/Harvey.png",
  },
  {
    slug: "jennifer-cross",
    name: "Jennifer Cross",
    role: "Associate Attorney — Family Law",
    bio: "Jennifer guides clients through divorce and custody matters with a calm, organized approach to a difficult process.",
    focus: ["Divorce", "Child Custody", "Adoption"],
    initials: "JC",
    photo: "/Jennifer.png",
  },
  {
    slug: "thomas-reyes",
    name: "Thomas Reyes",
    role: "Associate Attorney — Business Law",
    bio: "Thomas works with small business owners on formation, contracts, and the disputes that come with running a company.",
    focus: ["Contracts", "Business Formation", "Partnership Disputes"],
    initials: "TR",
    photo: "/Thomas.png",
  },
  {
    slug: "rachel-kim",
    name: "Rachel Kim",
    role: "Associate Attorney — Immigration",
    bio: "Rachel handles family- and employment-based immigration cases, keeping clients informed at every stage of a long process.",
    focus: ["Visas", "Green Cards", "Naturalization"],
    initials: "RK",
    photo: "/Rachel.png",
  },
  {
    slug: "michael-hastings",
    name: "Michael Hastings",
    role: "Associate Attorney — Criminal Defense",
    bio: "Michael builds defense strategy for clients facing state and federal charges, from arraignment through trial.",
    focus: ["DWI Defense", "Drug Charges", "Federal Crimes"],
    initials: "MH",
    photo: "/Michael.png",
  },
  {
    slug: "david-carter",
    name: "David Carter",
    role: "Associate Attorney — Estate Planning",
    bio: "David drafts wills, trusts, and probate filings that hold up when a family needs them most.",
    focus: ["Wills & Trusts", "Probate", "Power of Attorney"],
    initials: "DC",
    photo: "/David.png",
  },
];

export const testimonials = [
  {
    quote:
      "Harvey walked me through every step of my case and never made me feel like just another file. I always knew what was happening and why.",
    name: "R. Alvarez",
    context: "Personal Injury client",
  },
  {
    quote:
      "Jennifer was patient with me through a custody case that could have gone very badly. She fought hard and kept me calm the whole way through.",
    name: "K. Simmons",
    context: "Family Law client",
  },
  {
    quote:
      "Thomas set up our LLC and caught two issues in a supplier contract that would have cost us later. Worth every dollar.",
    name: "T. Whitmore",
    context: "Business Law client",
  },
];

export const contactFormNotice =
  "Submitting this form does not create an attorney-client relationship. Please avoid sharing confidential details until we've confirmed representation.";

export const disclaimer =
  "The information on this website is for general informational purposes only and is not legal advice. Prior results do not guarantee a similar outcome. Contacting the firm through this website does not create an attorney-client relationship.";
