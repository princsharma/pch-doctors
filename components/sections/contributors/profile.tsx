import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Leaf, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContributorPhoto } from "@/components/sections/contributors/photo";
import {
  contributorCredentials,
  getContributor,
} from "@/lib/contributors";

export function ContributorProfile({ slug }: { slug: string }) {
  const person = getContributor(slug);
  if (!person) return null;

  return (
    <div className="bg-white">
      <section className="bg-[#f6f3ee]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:py-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[1.75rem] bg-[var(--ds-brand-light)] shadow-lg">
            <ContributorPhoto
              person={person}
              sizes="(min-width: 1024px) 30vw, 80vw"
              priority
            />
          </div>
          <div>
            <Link
              href="/our-contributors"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ds-brand)] hover:text-[var(--ds-brand-dark)]"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Medical Content Team
            </Link>
            <p className="mt-6 text-sm text-[var(--ds-ink-mid)]">
              {person.roleLabel}
            </p>
            <h1 className="font-heading mt-2 text-3xl font-medium tracking-tight text-[var(--ds-ink)] sm:text-4xl lg:text-[2.75rem]">
              {person.displayName}
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-700">
              {person.bio}
            </p>
            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold tracking-wide text-[var(--ds-ink-mid)] uppercase">
                  Credentials
                </dt>
                <dd className="mt-1 text-[15px] text-[var(--ds-ink)]">
                  {contributorCredentials(person)}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-[var(--ds-ink-mid)] uppercase">
                  Role
                </dt>
                <dd className="mt-1 text-[15px] text-[var(--ds-ink)]">
                  {person.roleLabel}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold tracking-wide text-[var(--ds-ink-mid)] uppercase">
                  Professional background
                </dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-neutral-700">
                  {person.background}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold tracking-wide text-[var(--ds-ink-mid)] uppercase">
                  Expertise
                </dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {person.expertise.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-[var(--ds-ink)] ring-1 ring-[var(--ds-border)]"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-heading text-2xl font-medium text-[var(--ds-ink)]">
          Meet the clinicians
        </h2>
        <p className="mt-2 max-w-2xl text-[15px] text-neutral-600">
          Writers and reviewers are not the doctors who run visits. Pick a
          service to see that roster.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Link
            href="/our-doctors"
            data-service="mmj"
            className="group overflow-hidden rounded-[1.75rem] bg-[var(--service-section-bg)] ring-1 ring-[var(--service-border)]"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/hero-section.webp"
                alt="MMJ clinician on a telehealth visit"
                fill
                className="object-cover object-[center_20%]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="p-6">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[var(--service-brand)] uppercase">
                <Leaf className="size-3.5" aria-hidden />
                My MMJ Card
              </p>
              <p className="font-heading mt-2 text-xl font-medium text-[var(--ds-ink)]">
                See MMJ doctors
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--service-brand)]">
                Open roster
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </div>
          </Link>
          <Link
            href="/weight-loss-doctors"
            data-service="glp1"
            className="group overflow-hidden rounded-[1.75rem] bg-[var(--service-section-bg)] ring-1 ring-[var(--service-border)]"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/glp1-weight-management.webp"
                alt="Clinician reviewing a GLP-1 weight management plan"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="p-6">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[var(--service-accent)] uppercase">
                <Pill className="size-3.5" aria-hidden />
                Weight Loss
              </p>
              <p className="font-heading mt-2 text-xl font-medium text-[var(--ds-ink)]">
                See weight loss doctors
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--service-accent)]">
                Open roster
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </div>
          </Link>
        </div>

        <Button
          nativeButton={false}
          render={<Link href="/editorial-policy" />}
          className="mt-10 h-auto rounded-full bg-[var(--ds-brand)] px-7 py-5 text-sm font-semibold text-white hover:bg-[var(--ds-brand-dark)]"
        >
          Read our Editorial Policy
        </Button>
      </section>
    </div>
  );
}
