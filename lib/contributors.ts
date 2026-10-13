export type ContributorRole = "author" | "reviewer";

export type Contributor = {
  slug: string;
  name: string;
  displayName: string;
  credential?: string;
  credentials: string[];
  role: ContributorRole;
  roleLabel: string;
  background: string;
  expertise: string[];
  bio: string;
  summary: string;
  image?: string;
};

export const CONTRIBUTORS: Contributor[] = [
  {
    slug: "camille-cabas",
    name: "Camille Cabas",
    displayName: "Camille Cabas, PharmD",
    credential: "PharmD",
    credentials: ["PharmD"],
    role: "author",
    roleLabel: "Medical Author",
    image: "/images/contributors/profile-image-of-camille-cabas.webp",
    background:
      "Pharmacist and healthcare content writer with experience in community pharmacy practice, medication counseling, and drug safety.",
    expertise: [
      "Medication counseling",
      "Drug safety",
      "Evidence-based patient education",
    ],
    summary:
      "Pharmacist and medical author focused on medication counseling, drug safety, and clear patient education.",
    bio: "Camille Cabas is a pharmacist and healthcare content writer with a background in community pharmacy practice, medication counseling, and drug safety. She specializes in translating complex pharmaceutical and medical information into clear, evidence-based content that supports informed patient decisions.",
  },
  {
    slug: "octavia-wyche",
    name: "Octavia Wyche",
    displayName: "Octavia Wyche",
    credentials: [],
    role: "author",
    roleLabel: "Medical Author",
    image: "/images/contributors/profile-image-of-octavia-wyche.webp",
    background:
      "Technical writer and documentation specialist with a background in biology, healthcare communication, and regulatory documentation.",
    expertise: [
      "Scientific writing",
      "Healthcare communication",
      "Regulatory documentation",
    ],
    summary:
      "Technical writer who turns scientific and regulatory healthcare topics into clear patient-facing content.",
    bio: "Octavia Wyche is a technical writer and documentation specialist with a background in biology, healthcare communication, and regulatory documentation. Her experience in scientific writing and compliance-focused topics helps make complex healthcare information more accessible to patients.",
  },
  {
    slug: "daalon-b-echols",
    name: "Daalon B. Echols",
    displayName: "Daalon B. Echols, MD",
    credential: "MD",
    credentials: ["MD"],
    role: "reviewer",
    roleLabel: "Medical Reviewer",
    image: "/images/contributors/profile-image-of-daalon-echols.webp",
    background:
      "Physician with more than 21 years of clinical experience in neurology, neurophysiology, and internal medicine.",
    expertise: [
      "Neurology",
      "Neurophysiology",
      "Internal medicine",
      "Medical content review",
    ],
    summary:
      "Physician reviewer with more than 21 years in neurology, neurophysiology, and internal medicine.",
    bio: "Dr. Daalon B. Echols is a physician with more than 21 years of clinical experience in neurology, neurophysiology, and internal medicine. His clinical background supports the review of healthcare content for medical accuracy, clarity, and responsible patient education.",
  },
  {
    slug: "benjamin-h-krasne",
    name: "Benjamin H. Krasne",
    displayName: "Dr. Benjamin H. Krasne, MD",
    credential: "MD",
    credentials: ["MD"],
    role: "reviewer",
    roleLabel: "Medical Reviewer",
    image: "/images/contributors/dr-benjamin-krasne.jpg",
    background:
      "Physician with approximately 10 years of patient-care experience, including patient evaluation and clinician-guided weight management.",
    expertise: [
      "Patient evaluation",
      "Clinician-guided weight management",
      "Medical content review",
    ],
    summary:
      "Physician reviewer with about 10 years in patient care, including clinician-guided weight management.",
    bio: "Dr. Benjamin H. Krasne is a physician with approximately 10 years of patient-care experience. His background includes patient evaluation and clinician-guided weight management. He brings a practical, patient-focused perspective to medical content review.",
  },
];

export function getContributor(slug: string): Contributor | undefined {
  return CONTRIBUTORS.find((person) => person.slug === slug);
}

export function contributorsByRole(role: ContributorRole): Contributor[] {
  return CONTRIBUTORS.filter((person) => person.role === role);
}

export function contributorCredentials(person: Contributor): string {
  if (person.credentials.length > 0) {
    return person.credentials.join(", ");
  }
  return "Content specialist";
}

export function contributorBioCta(person: Contributor): string {
  const possessive = (name: string) =>
    name.endsWith("s") ? `${name}'` : `${name}'s`;

  if (person.role === "reviewer" && person.credential === "MD") {
    const last = person.name.split(/\s+/).filter(Boolean).at(-1) ?? person.name;
    return `View Dr. ${possessive(last)} Full Bio`;
  }
  const first = person.name.split(/\s+/)[0] ?? person.name;
  return `View ${possessive(first)} Full Bio`;
}
