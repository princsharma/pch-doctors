import { Calendar, Video, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    icon: Calendar,
    number: "1",
    title: "Schedule a Free Visit",
    description:
      "Choose your preferred date and time, complete a brief intake form, and connect with our care team to discuss your treatment goals and appropriate FDA-approved or compounded options.",
    tag: "HIPAA-Compliant Platform",
  },
  {
    icon: Video,
    number: "2",
    title: "Connect With a Clinician",
    description:
      "A licensed clinician reviews your medical history, BMI, contraindications, current medications, and health goals to determine whether GLP-1 treatment is appropriate for you during a confidential video or audio call.",
    tag: "Licensed Medical Provider",
  },
  {
    icon: Package,
    number: "3",
    title: "Receive GLP-1 Prescription",
    description:
      "When deemed clinically appropriate, your provider may prescribe GLP-1 treatment and provide clear guidance on next steps, with a provider–patient relationship established prior to any prescription being issued.",
    tag: "Clinical Eligibility Required",
  },
];

export function Glp1Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-br from-[#0a2733] via-[#0d3f45] to-[#0a2733] py-20"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-[#0d6e74]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 size-96 rounded-full bg-[#f2a83c]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-white/70">
          <span className="size-2 rounded-full bg-[#f2a83c]" />
          OUR PROCESS
        </div>

        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-white sm:text-4xl">
            A Simple <span className="text-[#f2a83c]">3-Step</span> Process
          </h2>
          <p className="max-w-md text-sm text-white/60 lg:mb-1">
            Connect with our team, complete a clinician-led evaluation, and
            begin treatment if medically appropriate, supported by ongoing
            care.
          </p>
        </div>

        <div className="mt-6 h-px w-full bg-white/15" />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="flex min-h-72 flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.08]"
            >
              <p className="font-heading text-2xl font-medium text-white/90">
                {step.number}.
              </p>
              <h3 className="font-heading mt-1 text-xl font-medium text-white">
                {step.title}
              </h3>

              <div className="flex-1" />

              <p className="text-sm text-white/60">{step.description}</p>
              <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                <step.icon className="size-4 text-[#f2a83c]" />
                {step.tag}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:flex-row sm:justify-between">
          <p className="text-sm text-white/80">
            Once prescribed, you may fill your medication at a licensed
            pharmacy of your choice or opt for{" "}
            <span className="font-semibold text-white">
              coordinated home delivery
            </span>{" "}
            through a licensed pharmacy.
          </p>

          <Button className="group shrink-0 gap-3 rounded-full bg-white py-7 pl-2 pr-6 text-sm font-semibold text-[#0a2733] hover:bg-white/90">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#f2a83c] text-[#0a2733] transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="size-4.5" />
            </span>
            Schedule Medical Evaluation
          </Button>
        </div>
      </div>
    </section>
  );
}
