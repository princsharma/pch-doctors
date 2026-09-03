import { GLP1_DOCTORS, type Doctor } from "@/lib/doctors";

export type Glp1DoctorProfile = Doctor & {
  specialty: string;
  education: string[];
  about: string;
  role: string;
  conditions: string[];
};

const PROFILES: Record<string, Omit<Glp1DoctorProfile, keyof Doctor>> = {
  "benjamin-krasne": {
    specialty: "Weight loss consultations and GLP-1 care",
    education: [
      "University of Florida, undergraduate studies",
      "University of Miami Miller School of Medicine, M.D.",
      "Jackson Memorial Hospital, residency",
    ],
    about:
      "Dr. Benjamin Krasne has spent about 10 years seeing patients. He went to the University of Florida, earned his M.D. at the University of Miami, and finished residency at Jackson Memorial Hospital. On a visit he is practical: what you have tried, what your labs say, and whether a GLP-1 medication is even the right next step.",
    role: "He evaluates patients in the Ongo weight loss program through PCH Doctors. A prescription is written only after that review, and only if it is medically appropriate.",
    conditions: [
      "Obesity and overweight",
      "Type 2 diabetes",
      "Metabolic dysfunction",
      "Weight-related health conditions",
    ],
  },
  "cheryl-bugailiskis": {
    specialty: "Metabolic health and GLP-1 evaluations",
    education: [
      "University of Illinois at Chicago",
      "Board certified, American Board of Pediatrics",
    ],
    about:
      "Dr. Cheryl Bugailiskis was one of the first physicians to see patients on the Ongo weight loss program. She trained at the University of Illinois at Chicago and is board certified in pediatrics. She still treats the visit like a real clinic appointment: history, metabolic picture, then a plan that fits that person.",
    role: "She reviews whether GLP-1 medication belongs in your plan. If it does not, she will say so and talk through what else might help.",
    conditions: [
      "Obesity and overweight",
      "Type 2 diabetes",
      "Metabolic dysfunction",
      "Cholesterol disorders",
      "Nutrition counseling",
    ],
  },
  "johnathan-miller": {
    specialty: "Weight loss and longevity consultations",
    education: [
      "University of Alabama at Birmingham, B.A., Spanish Language and Literature",
      "Columbia University Vagelos College of Physicians and Surgeons, M.D., Class of 2018",
      "Washington University in St. Louis, internship",
    ],
    about:
      "Dr. Johnathan Miller earned his M.D. at Columbia and interned at Washington University in St. Louis. He also holds a B.A. from UAB and speaks Spanish. Patients tend to like that he explains the plan in regular English, including when a GLP-1 is not the move.",
    role: "On Ongo weight loss visits through PCH Doctors, he reviews your history and goals, then decides whether medication, lifestyle work, or both belong in the plan.",
    conditions: [
      "Obesity and overweight",
      "Type 2 diabetes",
      "Metabolic dysfunction",
      "Cardiometabolic health",
      "Appetite and craving regulation",
    ],
  },
  "vanessa-niles": {
    specialty: "Evidence-based weight loss and women's health",
    education: [
      "Doctor of Medicine (M.D.)",
      "Registered Nurse (R.N.)",
      "Assistant Clinical Professor, Morehouse School of Medicine, Atlanta",
      "Assistant Clinical Professor, Pikeville College School of Medicine, Kentucky",
      "Board certified, American Board of Obstetrics and Gynecology",
    ],
    about:
      "Dr. Vanessa Niles has more than 30 years in practice. She is a licensed physician in California, Georgia, and South Carolina, board certified in obstetrics and gynecology, and has taught at Morehouse and Pikeville. She came up as a nurse before she became a physician, and it still shows in how she talks with people.",
    role: "She sees Ongo weight loss patients on a private video visit. Plans are built around your health history, not a one-size protocol.",
    conditions: [
      "Obesity and overweight",
      "Type 2 diabetes",
      "Prediabetes",
      "Weight-related hypertension",
      "PCOS",
      "Pregnancy-related weight changes",
    ],
  },
};

export function getGlp1DoctorProfile(
  slug: string
): Glp1DoctorProfile | undefined {
  const doctor = GLP1_DOCTORS.find((item) => item.slug === slug);
  const extra = PROFILES[slug];
  if (!doctor || !extra) return undefined;
  return { ...doctor, ...extra };
}
