"use client";

import { FormEvent, useState } from "react";
import { Search } from "lucide-react";

/**
 * UI-only search field for the 410 page.
 * Does not call a backend — helps users self-navigate after a removed URL.
 */
export function GoneSearchField() {
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    // Soft navigation aid: send users to the HTML sitemap with a hint query.
    window.location.href = `/sitemap/?q=${encodeURIComponent(trimmed)}`;
  }

  return (
    <form
      role="search"
      aria-label="Search the site"
      onSubmit={handleSubmit}
      className="mt-8"
    >
      <label htmlFor="gone-search" className="sr-only">
        Search PCH Doctors
      </label>
      <div className="flex items-stretch overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-[var(--ds-brand)]/15 dark:bg-[var(--ds-ink)]/40 dark:ring-white/15">
        <div className="flex items-center pl-4 text-[var(--ds-ink-mid)] dark:text-white/60">
          <Search className="size-4" aria-hidden />
        </div>
        <input
          id="gone-search"
          name="q"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for services, states, or pages…"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-sm text-[var(--ds-ink)] outline-none placeholder:text-[var(--ds-ink-mid)] dark:text-white dark:placeholder:text-white/45"
        />
        <button
          type="submit"
          className="shrink-0 bg-[var(--ds-brand)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ds-brand-dark)] dark:bg-[var(--ds-brand-mid)] dark:hover:bg-[var(--ds-brand)]"
        >
          Search
        </button>
      </div>
      <p className="mt-2 text-xs text-[var(--ds-ink-mid)] dark:text-white/50">
        Search is a quick link to our sitemap. It does not restore removed pages.
      </p>
    </form>
  );
}
