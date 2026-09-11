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
  founded: 2013,
  phoneDisplay: "(214) 493-2802",
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
  { label: "Case Results", href: "#case-results" },
  { label: "Our Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "13+", label: "Years practicing Texas law" },
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

export type EducationEntry = {
  degree: string;
  school: string;
  year: number;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  focus: string[];
  initials: string;
  photo: string;
  education: EducationEntry[];
  barAdmissions: string[];
  practicingSince: number;
  memberships: string[];
  awards: string[];
  experience: string[];
  languages: string[];
};

export const team: TeamMember[] = [
  {
    slug: "harvey-clifford",
    name: "Harvey Clifford",
    role: "Attorney — Estate Planning & Probate",
    bio: "Harvey founded the firm to give clients in North Texas the kind of attention larger firms can't offer — direct communication and a plan built around your goals, not a docket.",
    focus: ["Personal Injury", "Criminal Defense", "Business Law"],
    initials: "HC",
    photo: "/Harvey.png",
    education: [
      { degree: "J.D.", school: "SMU Dedman School of Law", year: 2008 },
      {
        degree: "B.A., Political Science",
        school: "University of Texas at Austin",
        year: 2005,
      },
    ],
    barAdmissions: [
      "State Bar of Texas",
      "U.S. District Court, Northern District of Texas",
      "U.S. Court of Appeals, Fifth Circuit",
    ],
    practicingSince: 2009,
    memberships: [
      "State Bar of Texas",
      "Texas Trial Lawyers Association",
      "Dallas Bar Association",
      "American Bar Association",
    ],
    awards: [
      "Texas Super Lawyers, 2019–2025",
      "Best Lawyers in America — Personal Injury Litigation, 2022–2025",
      "AV Preeminent Rating, Martindale-Hubbell",
    ],
    experience: [
      "Founded the firm in 2013 after four years litigating personal injury and criminal defense cases at a Dallas trial firm",
      "Has tried cases to verdict in state and federal court across North Texas",
      "Regularly lectures on trial advocacy for continuing legal education seminars",
    ],
    languages: ["English", "Spanish (conversational)"],
  },
  {
    slug: "jennifer-cross",
    name: "Jennifer Cross",
    role: "Attorney — Family Law",
    bio: "Jennifer guides clients through divorce and custody matters with a calm, organized approach to a difficult process.",
    focus: ["Divorce", "Child Custody", "Adoption"],
    initials: "JC",
    photo: "/Jennifer.png",
    education: [
      { degree: "J.D.", school: "University of Texas School of Law", year: 2013 },
      {
        degree: "B.A., Psychology",
        school: "Texas Christian University",
        year: 2010,
      },
    ],
    barAdmissions: ["State Bar of Texas"],
    practicingSince: 2014,
    memberships: [
      "State Bar of Texas — Family Law Section",
      "Texas Academy of Family Law Specialists",
      "Collin County Bar Association",
    ],
    awards: [
      "Texas Rising Stars, 2018–2023",
      "Board Certified, Family Law — Texas Board of Legal Specialization",
    ],
    experience: [
      "Practiced family law at a Plano boutique firm before joining Harvey Clifford Law in 2017",
      "Trained mediator for contested custody and property division disputes",
      "Handles cases from uncontested divorce through complex custody litigation",
    ],
    languages: ["English"],
  },
  {
    slug: "thomas-reyes",
    name: "Thomas Reyes",
    role: "Attorney — Business Law",
    bio: "Thomas works with small business owners on formation, contracts, and the disputes that come with running a company.",
    focus: ["Contracts", "Business Formation", "Partnership Disputes"],
    initials: "TR",
    photo: "/Thomas.png",
    education: [
      { degree: "J.D.", school: "Texas A&M University School of Law", year: 2012 },
      {
        degree: "B.B.A., Finance",
        school: "University of Houston",
        year: 2009,
      },
    ],
    barAdmissions: ["State Bar of Texas"],
    practicingSince: 2013,
    memberships: [
      "State Bar of Texas — Business Law Section",
      "Irving-Las Colinas Chamber of Commerce",
      "Hispanic National Bar Association",
    ],
    awards: ["Texas Rising Stars, 2020–2024"],
    experience: [
      "Spent four years in-house counsel for a Dallas-area logistics company before returning to private practice",
      "Has formed and advised more than 200 Texas small businesses and LLCs",
      "Represents clients in contract and partnership disputes through arbitration and trial",
    ],
    languages: ["English", "Spanish"],
  },
  {
    slug: "rachel-kim",
    name: "Rachel Kim",
    role: "Attorney — Immigration",
    bio: "Rachel handles family- and employment-based immigration cases, keeping clients informed at every stage of a long process.",
    focus: ["Visas", "Green Cards", "Naturalization"],
    initials: "RK",
    photo: "/Rachel.png",
    education: [
      { degree: "J.D.", school: "University of Houston Law Center", year: 2015 },
      {
        degree: "B.A., International Relations",
        school: "University of Texas at Dallas",
        year: 2012,
      },
    ],
    barAdmissions: ["State Bar of Texas"],
    practicingSince: 2016,
    memberships: [
      "American Immigration Lawyers Association (AILA)",
      "State Bar of Texas — Immigration & Nationality Law Section",
    ],
    awards: ["Texas Rising Stars, 2021–2024"],
    experience: [
      "Began her career at a Houston immigration firm handling employment-based petitions",
      "Has guided clients through more than 500 family and employment immigration matters",
      "Regularly represents clients before USCIS and in immigration court",
    ],
    languages: ["English", "Korean", "Spanish (conversational)"],
  },
  {
    slug: "michael-hastings",
    name: "Michael Hastings",
    role: "Attorney — Criminal Defense",
    bio: "Michael builds defense strategy for clients facing state and federal charges, from arraignment through trial.",
    focus: ["DWI Defense", "Drug Charges", "Federal Crimes"],
    initials: "MH",
    photo: "/Michael.png",
    education: [
      { degree: "J.D.", school: "Baylor University School of Law", year: 2011 },
      {
        degree: "B.A., Criminal Justice",
        school: "Sam Houston State University",
        year: 2008,
      },
    ],
    barAdmissions: [
      "State Bar of Texas",
      "U.S. District Court, Northern District of Texas",
    ],
    practicingSince: 2012,
    memberships: [
      "Texas Criminal Defense Lawyers Association (TCDLA)",
      "Dallas Criminal Defense Lawyers Association",
    ],
    awards: [
      "Board Certified, Criminal Law — Texas Board of Legal Specialization",
      "Texas Super Lawyers, 2021–2025",
    ],
    experience: [
      "Former Dallas County prosecutor with five years handling felony caseloads before moving to defense work",
      "Has taken more than 40 criminal cases to jury trial",
      "Handles state and federal charges from arraignment through appeal",
    ],
    languages: ["English"],
  },
  {
    slug: "david-carter",
    name: "David Carter",
    role: "Attorney — Estate Planning",
    bio: "David drafts wills, trusts, and probate filings that hold up when a family needs them most.",
    focus: ["Wills & Trusts", "Probate", "Power of Attorney"],
    initials: "DC",
    photo: "/David.png",
    education: [
      {
        degree: "J.D.",
        school: "South Texas College of Law Houston",
        year: 2014,
      },
      {
        degree: "B.S., Accounting",
        school: "Texas State University",
        year: 2011,
      },
    ],
    barAdmissions: ["State Bar of Texas"],
    practicingSince: 2015,
    memberships: [
      "State Bar of Texas — Real Estate, Probate and Trust Law Section",
      "Texas Society of Certified Public Accountants (affiliate)",
    ],
    awards: ["Texas Rising Stars, 2022–2024"],
    experience: [
      "Began his career drafting estate plans and administering probate matters at a Fort Worth trusts and estates firm",
      "Has prepared estate plans for more than 300 North Texas families",
      "Handles probate administration and guardianship matters in Dallas and Tarrant counties",
    ],
    languages: ["English"],
  },
];

export const reviewStats = {
  average: 4.9,
  count: 187,
  source: "Google Reviews",
};

export const reviews = [
  {
    quote:
      "Harvey walked me through every step of my case and never made me feel like just another file. I always knew what was happening and why.",
    name: "R. Alvarez",
    context: "Personal Injury client",
    rating: 5,
  },
  {
    quote:
      "Jennifer was patient with me through a custody case that could have gone very badly. She fought hard and kept me calm the whole way through.",
    name: "K. Simmons",
    context: "Family Law client",
    rating: 5,
  },
  {
    quote:
      "Thomas set up our LLC and caught two issues in a supplier contract that would have cost us later. Worth every dollar.",
    name: "T. Whitmore",
    context: "Business Law client",
    rating: 5,
  },
];

export type CaseResult = {
  amount: string;
  title: string;
  summary: string;
  practiceArea: string;
};

export const caseResults: CaseResult[] = [
  {
    amount: "$1.4M",
    title: "Auto Accident Settlement",
    summary:
      "Recovered for a client injured by a distracted driver on I-635, after the insurer's initial offer covered less than a third of medical costs.",
    practiceArea: "Personal Injury",
  },
  {
    amount: "Not Guilty",
    title: "DWI Jury Trial",
    summary:
      "Secured a full acquittal at trial after challenging the reliability of the arresting officer's field sobriety testing.",
    practiceArea: "Criminal Defense",
  },
  {
    amount: "$850K",
    title: "Workplace Injury Settlement",
    summary:
      "Negotiated a settlement for a warehouse worker injured by unsafe equipment, covering lost wages and ongoing care.",
    practiceArea: "Personal Injury",
  },
  {
    amount: "Case Dismissed",
    title: "Federal Drug Charges",
    summary:
      "Won a motion to suppress evidence from an unlawful search, leading the U.S. Attorney's office to dismiss the case.",
    practiceArea: "Criminal Defense",
  },
  {
    amount: "$600K",
    title: "Premises Liability Settlement",
    summary:
      "Resolved a slip-and-fall claim against a commercial property owner who failed to address a known hazard.",
    practiceArea: "Personal Injury",
  },
  {
    amount: "Full Custody Awarded",
    title: "Contested Custody Trial",
    summary:
      "Secured sole managing conservatorship for a client after a contested trial involving the other parent's history of instability.",
    practiceArea: "Family Law",
  },
];

export const contactFormNotice =
  "Submitting this form does not create an attorney-client relationship. Please avoid sharing confidential details until we've confirmed representation.";

export const disclaimer =
  "The information on this website is for general informational purposes only and is not legal advice. Prior results do not guarantee a similar outcome. Contacting the firm through this website does not create an attorney-client relationship.";
