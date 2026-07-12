import type { Metadata } from "next";
import Link from "next/link";
import { guideClusters, siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guides`,
  description: `Beginner, progression, and advanced strategy guides for ${siteConfig.gameName}.`,
  alternates: { canonical: `${siteConfig.domain}/guides/` }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <PageIntro
        eyebrow="Guide hub"
        title={`${siteConfig.gameName} Guides`}
        description="Use this hub for first-shift help, survival habits, store-task routes, event notes, endings, badges, and advanced walkthrough checks."
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Recommended guides"
          title="Start with pages that match real player questions"
          copy="Pick the guide that matches your current problem, then check codes, rankings, calculator notes, or wiki details before spending rare resources."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guideClusters.map((guide) => (
            <Link key={guide.title} href={guide.href} className="content-card">
              <span className="mini-label">{guide.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Link href="/updates" className="content-card">
          <span className="mini-label">Source watch</span>
          <h2 className="mt-3 text-xl font-bold text-white">Check update status</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the updates page for source-watch notes before trusting copied patch or code claims.</p>
        </Link>
        <Link href="/wiki" className="content-card">
          <span className="mini-label">Wiki</span>
          <h2 className="mt-3 text-xl font-bold text-white">Avoid template leftovers</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use wiki and guide pages for verified store, item, and survival notes instead of unrelated planner routes.</p>
        </Link>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
