import { MMJ_STATES } from "@/lib/mmj-states";
import { MMJ_DOCTORS, type Doctor } from "@/lib/doctors";

export type DoctorLicense = {
  code: string;
  number?: string;
};

export type DoctorProfile = Doctor & {
  specialty: string;
  education: string[];
  licenses: DoctorLicense[];
  about: string;
  role: string;
  conditions: string[];
};

const EXTRA_STATE_NAMES: Record<string, string> = {
  DC: "Washington DC",
  GA: "Georgia",
  TX: "Texas",
  VA: "Virginia",
};

type DoctorProfileExtra = Omit<
  DoctorProfile,
  keyof Doctor | "licenses"
> & {
  npi?: string;
  licenses: DoctorLicense[];
};

const PROFILES: Record<string, DoctorProfileExtra> = {
  "anshi-thapliyal": {
    npi: "1962698324",
    specialty:
      "Hospice and palliative medicine, geriatrics, and internal medicine",
    education: [
      "King George's Medical College, Class of 1998",
      "Mercy Catholic Medical Center, Internal Medicine Residency, 2004 to 2007",
    ],
    licenses: [
      { code: "MO", number: "2023008643" },
      { code: "MT", number: "MED-PHYS-LIC-114850" },
      { code: "PA", number: "MD432098" },
      { code: "WV" },
    ],
    about:
      "Dr. Anshi Thapliyal spent more than 20 years in hospice, palliative care, geriatrics, and internal medicine. She trained at King George's Medical College and finished her internal medicine residency at Mercy Catholic Medical Center. Patients who see her tend to be dealing with serious, long-running symptoms, and she treats that history with care.",
    role: "On PCH Doctors visits, she reviews your records and what you are living with day to day, then decides whether a medical marijuana recommendation is appropriate in the state where you are licensed to be seen.",
    conditions: [
      "Cancer",
      "Chronic pain",
      "PTSD",
      "ALS",
      "Epilepsy",
      "Glaucoma",
      "HIV/AIDS",
      "Parkinson's disease",
    ],
  },
  "dana-de-los-santos": {
    npi: "1750815551",
    specialty: "Family nurse practitioner, medical cannabis evaluations",
    education: [
      "Wichita State University, 2002",
      "Simmons University, 2016",
    ],
    licenses: [{ code: "VA", number: "24174825" }],
    about:
      "Dana De Los Santos is a family nurse practitioner licensed in Virginia. She studied at Wichita State and later at Simmons University. She keeps the visit practical: what hurts, what you have already tried, and whether cannabis is a reasonable next step under Virginia rules.",
    role: "She sees Virginia patients on video. You do not have to go to a clinic. If the history supports a certification, she will issue one. If it does not, she will say so.",
    conditions: [
      "Anxiety disorders",
      "Chronic pain",
      "Depression",
      "Fibromyalgia",
      "Insomnia",
      "Migraines",
      "PTSD",
      "Neuropathy",
    ],
  },
  "jacqueline-rice-mckenzie": {
    npi: "1285662874",
    specialty: "Emergency medicine and medical cannabis evaluations",
    education: [
      "University of Alabama School of Medicine, Class of 2003",
      "Icahn School of Medicine at Mount Sinai, Emergency Medicine Residency, 2003 to 2006",
    ],
    licenses: [{ code: "TX", number: "M4474" }],
    about:
      "Dr. Jacqueline Rice-McKenzie is a board-certified emergency physician. She graduated from the University of Alabama School of Medicine in 2003 and completed emergency medicine residency at Mount Sinai. Nearly 20 years of ER work in Houston means she is used to getting a full picture quickly without skipping what matters.",
    role: "She evaluates Texas patients for medical cannabis on a private video call. The visit covers your history, current symptoms, and whether those facts line up with Texas qualifying rules.",
    conditions: [
      "Chronic pain",
      "PTSD",
      "Epilepsy",
      "Multiple sclerosis",
      "Seizure disorder",
      "Spasticity",
      "Terminal cancer",
      "Neurodegenerative disease",
    ],
  },
  "james-seymour": {
    npi: "1265965693",
    specialty: "General practice, orthopaedic surgery, medical cannabis evaluations",
    education: [
      "Lincoln Memorial University DeBusk College of Osteopathic Medicine, Class of 2017",
    ],
    licenses: [{ code: "NM", number: "DO2023-0052" }],
    about:
      "Dr. James Seymour is a Doctor of Osteopathic Medicine. He graduated from Lincoln Memorial University DeBusk College of Osteopathic Medicine in 2017 and has worked in general practice and orthopaedics. Chronic pain is familiar territory for him, and he still looks at the rest of the story.",
    role: "He sees New Mexico patients on a HIPAA-compliant video visit. He will go through your history, talk through symptoms, and decide eligibility under New Mexico guidelines.",
    conditions: [
      "Alzheimer's disease",
      "ALS",
      "Anxiety disorder",
      "Autism spectrum disorder",
      "Cancer",
      "Crohn's disease",
      "Epilepsy",
      "Glaucoma",
    ],
  },
  "joel-durinka": {
    npi: "1144541343",
    specialty: "Family medicine and medical cannabis evaluations",
    education: [
      "St. George's University School of Medicine, Class of 2010",
      "Einstein Medical Center Philadelphia, Internship, 2010 to 2011",
      "Jacobs School of Medicine at the University at Buffalo, Residency, 2015 to 2018",
    ],
    licenses: [
      { code: "DE", number: "C1-0026432" },
      { code: "IA", number: "MD-52880" },
      { code: "MN", number: "71480" },
      { code: "NY", number: "FD7912769" },
      { code: "OH", number: "35.146628CTR" },
      { code: "OK", number: "39713" },
      { code: "PA", number: "MT198242" },
      { code: "TX", number: "T5733" },
      { code: "WV", number: "PHY000110" },
    ],
    about:
      "Dr. Joel Durinka is a family medicine physician. He earned his M.D. at St. George's University in 2010, interned at Einstein Medical Center Philadelphia, and completed residency at the University at Buffalo. He has held an active NPI since 2010 and is licensed in nine states.",
    role: "He takes the extra minutes on each PCH Doctors visit. History, symptoms, and the rules in your state come first. A recommendation only follows if those pieces fit.",
    conditions: [
      "Chronic pain",
      "PTSD",
      "Seizures / epilepsy",
      "Cancer-related symptoms",
      "Muscle spasms",
      "Severe nausea",
      "Parkinson's disease",
      "Cachexia",
    ],
  },
  "johnathan-miller": {
    npi: "1235623372",
    specialty: "General practice physician, medical cannabis evaluations",
    education: [
      "University of Alabama at Birmingham, BA, 2009 to 2014",
      "Columbia University Vagelos College of Physicians and Surgeons, M.D., Class of 2018",
      "Washington University/B-JH/SLCH Consortium, Orthopaedic Surgery Residency, 2018 to 2020",
    ],
    licenses: [
      { code: "AZ", number: "70912" },
      { code: "AR", number: "E-15164" },
      { code: "CA", number: "A199605" },
      { code: "GA", number: "101074" },
      { code: "IL", number: "36156953" },
      { code: "IA", number: "MD-50615" },
      { code: "LA", number: "334502" },
      { code: "MD", number: "D91957" },
      { code: "MI", number: "4301508656" },
      { code: "MN", number: "75961" },
      { code: "MO", number: "2020035594" },
      { code: "MT", number: "MED-PHYS-LIC-116474" },
      { code: "NJ", number: "25MA11832200" },
      { code: "NY", number: "FM9801033" },
      { code: "OH", number: "35.141126CTR" },
      { code: "OK", number: "37701" },
      { code: "PA", number: "MD474783" },
      { code: "VA", number: "101277587" },
      { code: "WV", number: "31996" },
    ],
    about:
      "Dr. Johnathan Chance Miller is a general practice physician. He studied at UAB, earned his M.D. at Columbia in 2018, and began orthopaedic surgery training at Washington University. Since then he has seen patients in a long list of states and tends to explain his thinking in plain language.",
    role: "On PCH Doctors calls he goes through your history and symptoms, then tells you whether medical cannabis is a fit under the rules of the state where you are being seen.",
    conditions: [
      "Chronic pain",
      "Cancer",
      "PTSD",
      "Seizures",
      "Multiple sclerosis",
      "HIV / AIDS",
      "Severe nausea",
      "Cancer-related symptoms",
    ],
  },
  "kevin-kargman": {
    npi: "1407810302",
    specialty: "Pediatrics and medical cannabis evaluations",
    education: [
      "Kansas City University of Medicine and Biosciences College of Osteopathic Medicine",
      "Geisinger Health System, Pediatrics Residency, 1996 to 1999",
    ],
    licenses: [
      { code: "AZ", number: "009047" },
      { code: "GA", number: "89956" },
      { code: "MI", number: "5101025965" },
      { code: "MO", number: "2022027983" },
      { code: "NJ", number: "MB069151" },
      { code: "NY", number: "BK6415702" },
      { code: "OK", number: "8032" },
      { code: "OH", number: "34.015746CTR" },
      { code: "IL" },
      { code: "IA" },
      { code: "PA" },
      { code: "VT" },
      { code: "WV", number: "PHY000128" },
    ],
    about:
      "Dr. Kevin Kargman is a Doctor of Osteopathic Medicine and a pediatrician by training. He studied at Kansas City University of Medicine and Biosciences and completed pediatrics residency at Geisinger from 1996 to 1999. His NPI is listed in the federal registry, and he now evaluates adult patients in more than a dozen states.",
    role: "He reviews history, symptoms, and qualifying conditions on a private video visit. If the case does not meet the rules, he will not stretch them.",
    conditions: [
      "Chronic pain",
      "PTSD",
      "Anxiety disorders",
      "Cancer-related symptoms",
    ],
  },
  "krista-davis": {
    npi: "1316507718",
    specialty: "Acute care nurse practitioner, medical cannabis evaluations",
    education: ["Texas Tech University Health Sciences Center, Masters, 2014"],
    licenses: [{ code: "NM", number: "74977" }],
    about:
      "Krista Davis is an acute care nurse practitioner licensed in New Mexico. She completed her master's at Texas Tech University Health Sciences Center in 2014. She is used to patients who are managing more than one condition and does not rush the conversation.",
    role: "She sees New Mexico patients on video, reviews what is going on, and decides whether a medical cannabis certification is appropriate under state rules.",
    conditions: [
      "Alzheimer's disease",
      "ALS",
      "Anxiety disorder",
      "Autism spectrum disorder",
      "Cancer",
      "Crohn's disease",
      "Epilepsy",
      "Glaucoma",
    ],
  },
  "lewis-jassey": {
    npi: "1740343847",
    specialty: "Pediatrics, pharmacogenetics, and medical cannabis evaluations",
    education: [
      "NYIT College of Osteopathic Medicine, Class of 1994",
      "Nassau University Medical Center, Pediatrics Residency, 1994 to 1997",
    ],
    licenses: [
      { code: "ME" },
      { code: "MD" },
      { code: "OK", number: "6920" },
      { code: "DC" },
    ],
    about:
      "Dr. Lewis Jassey is a board-certified Doctor of Osteopathic Medicine. He graduated from NYIT College of Osteopathic Medicine in 1994 and completed pediatrics residency at Nassau University Medical Center. Close to 20 years of practice means he is comfortable with complicated medical and mental health histories.",
    role: "On PCH Doctors visits he reviews your history in detail and decides whether a recommendation is medically justified in a state where he is licensed.",
    conditions: [
      "Chronic pain",
      "PTSD",
      "Seizures / epilepsy",
      "Cancer-related symptoms",
      "Muscle spasms",
      "Severe nausea",
      "Parkinson's disease",
      "Cachexia",
    ],
  },
  "nancy-perroni": {
    npi: "1306025705",
    specialty: "Family and psychiatric mental health nurse practitioner",
    education: [
      "University of Massachusetts Boston, Masters, 2004 to 2007",
      "Liberty University, Post-Masters Certificate, 2020 to 2021",
    ],
    licenses: [{ code: "MA", number: "MP0698817I" }],
    about:
      "Nancy Perroni is a board-certified family and psychiatric mental health nurse practitioner licensed in Massachusetts. She earned her master's at UMass Boston and a post-master's certificate at Liberty University. Eighteen years in primary care, urgent care, addiction medicine, and psychiatry means anxiety, PTSD, and overlapping conditions are not new to her.",
    role: "She evaluates Massachusetts patients on a private video call, using both her family and psychiatric training to decide whether a certification is appropriate.",
    conditions: [
      "Cancer",
      "Glaucoma",
      "HIV/AIDS",
      "Multiple sclerosis",
      "ALS",
      "Crohn's disease",
      "Parkinson's disease",
      "PTSD",
    ],
  },
  "polina-bolotin": {
    npi: "1659919215",
    specialty: "Family nurse practitioner, medical cannabis evaluations",
    education: [
      "SUNY Downstate Medical Center College of Medicine, Masters, 2017 to 2019",
      "University Hospital at Downstate, Post-Masters Certificate, 2019",
    ],
    licenses: [{ code: "CT", number: "11566" }],
    about:
      "Polina Bolotin is a board-certified family nurse practitioner licensed in Connecticut. She completed her master's at SUNY Downstate and a post-master's certificate at University Hospital at Downstate. Her background is family medicine, primary care, and chronic disease, plus teaching other clinicians.",
    role: "She treats Connecticut visits like a regular clinic appointment on video: history, qualifying conditions, then a yes or no on certification.",
    conditions: [
      "Parkinson's disease",
      "Multiple sclerosis",
      "Epilepsy",
      "Cachexia",
      "Crohn's disease",
      "PTSD",
      "ALS",
      "Fibromyalgia",
    ],
  },
  "rachel-headings": {
    npi: "1740421304",
    specialty: "Family practice and adult health nurse practitioner",
    education: ["Viterbo University, Post-Masters Certificate, 2007"],
    licenses: [{ code: "IA", number: "A121735" }],
    about:
      "Rachel Headings is an advanced registered nurse practitioner in Iowa with dual training in family practice and adult health. She completed a post-master's certificate at Viterbo University in 2007 and has more than 15 years of clinical work behind her.",
    role: "She knows the Iowa program. On the call she reviews your history and tells you whether you actually meet the state's rules.",
    conditions: [
      "Chronic pain",
      "Cancer",
      "Multiple sclerosis",
      "Epilepsy",
      "Crohn's disease",
      "PTSD",
      "Parkinson's disease",
      "AIDS / HIV",
    ],
  },
  "rick-rieser": {
    npi: "1740735737",
    specialty: "Nuclear medicine physician, medical cannabis evaluations",
    education: [
      "University of Louisville School of Medicine, Class of 1983, MD",
      "American Board of Nuclear Medicine",
    ],
    licenses: [{ code: "CA", number: "G55156" }],
    about:
      "Dr. Rick Rieser is a nuclear medicine physician licensed in California. He earned his M.D. at the University of Louisville in 1983 and is board certified in nuclear medicine. He is methodical: history, symptoms, then a recommendation only if the facts hold up.",
    role: "California patients complete a short intake, then a video visit with him. A recommendation is issued only when he believes it is medically appropriate.",
    conditions: [
      "Chronic pain",
      "Anxiety disorders",
      "PTSD",
      "Arthritis",
      "Neurological discomfort",
      "Cancer",
      "Insomnia",
    ],
  },
};

export function stateLabel(code: string): string {
  const match = MMJ_STATES.find((state) => state.code === code);
  if (match) return match.name;
  return EXTRA_STATE_NAMES[code] ?? code;
}

export function getDoctorProfile(slug: string): DoctorProfile | undefined {
  const doctor = MMJ_DOCTORS.find((item) => item.slug === slug);
  const extra = PROFILES[slug];
  if (!doctor || !extra) return undefined;

  return {
    ...doctor,
    npi: extra.npi ?? doctor.npi,
    specialty: extra.specialty,
    education: extra.education,
    licenses: extra.licenses,
    about: extra.about,
    role: extra.role,
    conditions: extra.conditions,
  };
}

export function npiRegistryUrl(npi: string): string {
  return `https://npiregistry.cms.gov/provider-view/${npi}`;
}
