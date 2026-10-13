import Image from "next/image";
import Link from "next/link";
import { Leaf, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContributorPhoto } from "@/components/sections/contributors/photo";
import { ClinicianToggle } from "@/components/sections/contributors/clinician-toggle";
import {
  CONTRIBUTORS,
  contributorBioCta,
  contributorCredentials,
  type Contributor,
} from "@/lib/contributors";

function ContributorCard({ person }: { person: Contributor }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_22px_60px_rgb(21_76_53/0.1)] ring-1 ring-[var(--ds-border)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <ContributorPhoto
          person={person}
          className="transition-transform duration-700 group-hover:scale-[1.03]"
          initialsClassName="text-5xl"
          sizes="(min-width: 768px) 45vw, 90vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ds-brand-dark)]/70 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-white/80 uppercase">
            {person.roleLabel}
          </p>
          <h3 className="font-heading mt-1 text-lg font-medium text-white">
            {person.displayName}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-semibold text-[var(--ds-ink)]">Credentials</dt>
            <dd className="mt-0.5 text-neutral-600">
              {contributorCredentials(person)}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--ds-ink)]">
              Professional background
            </dt>
            <dd className="mt-0.5 leading-relaxed text-neutral-600">
              {person.background}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--ds-ink)]">Expertise</dt>
            <dd className="mt-1.5 flex flex-wrap gap-1.5">
              {person.expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[var(--ds-bg-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--ds-ink)] ring-1 ring-[var(--ds-border)]"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        </dl>
        <Button
          nativeButton={false}
          render={<Link href={`/our-contributors/${person.slug}`} />}
          className="mt-6 h-auto w-full rounded-full bg-[var(--ds-brand)] px-6 py-5 text-sm font-semibold text-white hover:bg-[var(--ds-brand-dark)]"
        >
          {contributorBioCta(person)}
        </Button>
      </div>
    </article>
  );
}

export function ContributorsListing() {
  return (
    <>
      <section className="grid lg:grid-cols-2">
        <div
          data-service="mmj"
          className="relative min-h-[280px] overflow-hidden lg:min-h-[34rem]"
        >
          <Image
            src="/images/contributors/Warm Telemedicine Consultation in a Plant-Filled Office.webp"
            alt="Licensed clinician on a medical marijuana telehealth visit in a plant-filled office"
            fill
            priority
            className="object-cover object-[center_18%]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(10_99_50/0.15)_0%,rgb(10_99_50/0.72)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white lg:p-10">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase">
              <Leaf className="size-3.5" aria-hidden />
              My MMJ Card
            </p>
            <p className="font-heading mt-3 max-w-md text-3xl font-medium">
              Medical marijuana content, reviewed for patients
            </p>
          </div>
        </div>
        <div
          data-service="glp1"
          className="relative min-h-[280px] overflow-hidden lg:min-h-[34rem]"
        >
          <Image
            src="/images/contributors/Warm Doctor-Patient Tablet Consultation.webp"
            alt="Clinician reviewing a GLP-1 weight management plan with a patient"
            fill
            priority
            className="object-cover object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(231_111_81/0.18)_0%,rgb(36_85_63/0.72)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white lg:p-10">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase">
              <Pill className="size-3.5" aria-hidden />
              Weight Loss
            </p>
            <p className="font-heading mt-3 max-w-md text-3xl font-medium">
              GLP-1 education with a clinician&apos;s eye
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[var(--ds-brand)]">
              Contributor Hub
            </p>
            <h1 className="font-heading mt-2 text-4xl font-medium tracking-tight text-[var(--ds-ink)] sm:text-5xl">
              Our Medical Content Team
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-700">
              Every article published by PCH Doctors is developed with a focus
              on accuracy, clarity, and patient education.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
              Our medical writers create accessible healthcare content, while
              qualified medical professionals review clinical information for
              accuracy before publication. That covers both My MMJ Card and
              clinician-guided weight loss. Review each contributor&apos;s
              credentials, background, and expertise, then open their full
              profile.
            </p>
            <nav
              aria-label="Contributor groups"
              className="mt-6 flex flex-wrap gap-3 text-sm font-semibold"
            >
              <a
                href="#medical-authors"
                className="text-[var(--ds-brand)] underline decoration-[var(--ds-brand)]/30 underline-offset-4 hover:decoration-[var(--ds-brand)]"
              >
                Medical authors
              </a>
              <a
                href="#medical-reviewers"
                className="text-[var(--ds-brand)] underline decoration-[var(--ds-brand)]/30 underline-offset-4 hover:decoration-[var(--ds-brand)]"
              >
                Medical reviewers
              </a>
            </nav>
          </div>

          <div className="mt-14">
            <div className="flex flex-wrap items-end gap-x-8 gap-y-2">
              <h2
                id="medical-authors"
                className="font-heading text-2xl font-medium text-[var(--ds-ink)] sm:text-3xl"
              >
                Medical authors
              </h2>
              <h2
                id="medical-reviewers"
                className="font-heading text-2xl font-medium text-[var(--ds-ink)] sm:text-3xl"
              >
                Medical reviewers
              </h2>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              {CONTRIBUTORS.map((person) => (
                <ContributorCard key={person.slug} person={person} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClinicianToggle />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[15px] leading-relaxed text-neutral-600">
            Want to know how we research, review, and update our content?{" "}
            <Link
              href="/editorial-policy"
              className="font-semibold text-[var(--ds-brand)] underline decoration-[var(--ds-brand)]/30 underline-offset-4 hover:decoration-[var(--ds-brand)]"
            >
              Read our Editorial Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
