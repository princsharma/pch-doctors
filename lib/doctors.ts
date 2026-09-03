export type DoctorService = "mmj" | "glp1";

export type Doctor = {
  slug: string;
  name: string;
  credential: string;
  bio: string;
  npi?: string;
  service: DoctorService;
  image?: string;
  licensed: string[];
  experienceYears?: number;
};

export const MMJ_DOCTORS: Doctor[] = [

  {
    slug: "anshi-thapliyal",
    name: "Anshi Thapliyal",
    credential: "MD",
    licensed: ["MO", "MT", "PA", "WV"],
    experienceYears: 20,
    bio: "Twenty years in internal medicine, hospice, and geriatrics. She listens first, then decides whether a recommendation makes sense in your state.",
    service: "mmj",
  },
  {
    slug: "dana-de-los-santos",
    name: "Dana De Los Santos",
    credential: "NP",
    licensed: ["VA"],
    experienceYears: 8,
    bio: "Family NP who sees patients in Virginia. The visit is simple: your history, your symptoms, then a clear yes or no.",
    service: "mmj",
  },
  {
    slug: "jacqueline-rice-mckenzie",
    name: "Jacqueline Rice-McKenzie",
    credential: "MD",
    licensed: ["TX"],
    experienceYears: 20,
    bio: "Emergency medicine physician from Houston. She brings that same focus to Texas cannabis evaluations.",
    service: "mmj",
  },
  {
    slug: "james-seymour",
    name: "James Seymour",
    credential: "DO",
    licensed: ["NM"],
    experienceYears: 9,
    bio: "Osteopathic physician in New Mexico. He has worked with chronic pain and looks at the whole picture, not just a checklist.",
    service: "mmj",
  },
  {
    slug: "joel-durinka",
    name: "Joel Durinka",
    credential: "MD",
    licensed: ["DE", "IA", "MN", "NY", "OH", "OK", "PA", "TX", "WV"],
    experienceYears: 16,
    bio: "Family medicine doctor licensed in nine states. He takes the extra minutes to go through history and symptoms before he signs anything.",
    service: "mmj",
  },
  {
    slug: "johnathan-miller",
    name: "Johnathan Miller",
    credential: "MD",
    licensed: [
      "AR",
      "AZ",
      "CA",
      "GA",
      "IA",
      "IL",
      "LA",
      "MD",
      "MI",
      "MN",
      "MO",
      "MT",
      "NJ",
      "NY",
      "OH",
      "OK",
      "PA",
      "VA",
      "WV",
    ],
    experienceYears: 8,
    bio: "General physician licensed across a long list of states. Patients tend to like that he talks like a person, not a form.",
    service: "mmj",
    npi: "1235623372",
  },
  {
    slug: "kevin-kargman",
    name: "Kevin Kargman",
    credential: "DO",
    licensed: [
      "AZ",
      "GA",
      "IA",
      "IL",
      "MI",
      "MO",
      "NJ",
      "NY",
      "OH",
      "OK",
      "PA",
      "VT",
      "WV",
    ],
    experienceYears: 19,
    bio: "Pediatrician by training, now evaluating adult patients in more than a dozen states. Careful with the rules, and careful with you.",
    service: "mmj",
  },
  {
    slug: "krista-davis",
    name: "Krista Davis",
    credential: "NP",
    licensed: ["NM"],
    experienceYears: 6,
    bio: "Acute care NP in New Mexico. Direct, thorough, and used to patients who are dealing with more than one condition at once.",
    service: "mmj",
  },
  {
    slug: "lewis-jassey",
    name: "Lewis Jassey",
    credential: "DO",
    licensed: ["DC", "MD", "ME", "OK"],
    experienceYears: 19,
    bio: "Osteopathic pediatrician with almost two decades in practice. He takes extra care with complex medical and mental health histories.",
    service: "mmj",
  },
  {
    slug: "nancy-perroni",
    name: "Nancy Perroni",
    credential: "NP",
    licensed: ["MA"],
    experienceYears: 18,
    bio: "Family and psych NP in Massachusetts. Eighteen years in primary care, urgent care, and mental health, so anxiety and PTSD cases are familiar ground.",
    service: "mmj",
  },
  {
    slug: "polina-bolotin",
    name: "Polina Bolotin",
    credential: "NP",
    licensed: ["CT"],
    experienceYears: 6,
    bio: "Connecticut NP with a family-medicine background. She treats the visit like a regular clinic appointment, just on video.",
    service: "mmj",
  },
  {
    slug: "rachel-headings",
    name: "Rachel Headings",
    credential: "ARNP",
    licensed: ["IA"],
    experienceYears: 17,
    bio: "Iowa ARNP who has been in family and adult health for years. She knows the Iowa program and will tell you if you actually fit it.",
    service: "mmj",
  },
  {
    slug: "rick-rieser",
    name: "Rick Rieser",
    credential: "MD",
    licensed: ["CA"],
    experienceYears: 10,
    bio: "California nuclear medicine physician. He is methodical: history, symptoms, then a recommendation only if it holds up.",
    service: "mmj",
  },
].map((doctor) => ({
  ...doctor,
  image: `/images/doctor/${doctor.slug}.webp`,
})).sort(compareDoctorsByName);

function compareDoctorsByName(a: Doctor, b: Doctor): number {
  return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
}

export const GLP1_DOCTORS: Doctor[] = [
  {
    slug: "benjamin-krasne",
    name: "Benjamin H. Krasne",
    credential: "MD",
    licensed: ["US"],
    experienceYears: 10,
    bio: "Ten years in practice. Miami-trained. He talks through GLP-1 options only if your history actually supports them.",
    npi: "1306189832",
    service: "glp1",
    image: "/images/doctor/benjamin-krasne.png",
  },
  {
    slug: "cheryl-bugailiskis",
    name: "Cheryl Bugailiskis",
    credential: "MD",
    licensed: [],
    bio: "One of the first physicians on the Ongo weight loss program. Board-certified in pediatrics, with a close eye on metabolic health.",
    service: "glp1",
    image: "/images/doctor/cheryl-bugailiskis.webp",
  },
  {
    slug: "johnathan-miller",
    name: "Johnathan Miller",
    credential: "MD",
    licensed: ["US"],
    experienceYears: 5,
    bio: "Columbia-trained physician. Weight loss visits in plain language, and a prescription only when it is the right tool.",
    npi: "1235623372",
    service: "glp1",
    image: "/images/doctor/johnathan-miller.webp",
  },
  {
    slug: "vanessa-niles",
    name: "Vanessa Niles",
    credential: "MD",
    licensed: ["CA", "GA", "SC"],
    experienceYears: 30,
    bio: "Thirty years in practice and board-certified in OB/GYN. She has taught other doctors, and she still does the visit herself.",
    service: "glp1",
    image: "/images/doctor/vanessa-niles.png",
  },
].sort(compareDoctorsByName);

export const DOCTORS: Doctor[] = [...MMJ_DOCTORS, ...GLP1_DOCTORS];

export const FEATURED_DOCTORS: Doctor[] = [
  MMJ_DOCTORS.find((doctor) => doctor.slug === "johnathan-miller")!,
  GLP1_DOCTORS.find((doctor) => doctor.slug === "benjamin-krasne")!,
];

export function doctorsByService(service: DoctorService): Doctor[] {
  return DOCTORS.filter((doctor) => doctor.service === service).sort(
    compareDoctorsByName
  );
}

export function doctorInitials(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return `${first}${last}`.toUpperCase();
}
