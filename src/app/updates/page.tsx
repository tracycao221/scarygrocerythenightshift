import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Updates`,
  description: `${siteConfig.gameName} update status, source-watch notes, last checked guidance, and safe ways to verify Roblox patch or code claims.`,
  alternates: { canonical: `${siteConfig.domain}/updates/` },
  openGraph: {
    title: `${siteConfig.gameName} Updates`,
    description: `${siteConfig.gameName} update status, source-watch notes, and safe verification guidance.`,
    url: `${siteConfig.domain}/updates/`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Updates`,
    description: `${siteConfig.gameName} update status, source-watch notes, and safe verification guidance.`,
    images: ["/opengraph-image"]
  }
};

const sourceChecks = [
  "Check the official Roblox page first for title, creator, availability, icon, cover, and visible description changes.",
  "Use creator-owned Discord, Trello, YouTube, or group posts only after the link is verified from a trusted source.",
  "Treat copied code screenshots, patch lists, and update rumors as unverified until the exact source is visible.",
  "Move confirmed mechanics into the wiki or guide pages only after the route, item, ending, or monster detail is source-backed."
];

export default function UpdatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Updates", href: "/updates" }]} />
      <Breadcrumbs items={[{ label: "Updates", href: "/updates" }]} />
      <PageIntro
        eyebrow="Source watch"
        title={`${siteConfig.gameName} Updates`}
        description="Track update-source status without inventing patch notes, rewards, codes, monsters, endings, or official community links."
      />
      <AdsterraArticleTop />

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Last checked</span>
          <h2 className="mt-3 text-xl font-bold text-white">July 12, 2026</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">This route is for update verification status, not invented patch notes.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Current policy</span>
          <h2 className="mt-3 text-xl font-bold text-white">No fake update claims</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Only source-backed changes should become guide, wiki, or code-page facts.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Primary source</span>
          <h2 className="mt-3 text-xl font-bold text-white">Roblox first</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">The official Roblox page wins when community pages disagree.</p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Verification"
          title="How to confirm Scary Grocery updates"
          copy="Use this checklist before turning update rumors into page copy."
        />
        <ol className="mt-6 grid gap-3">
          {sourceChecks.map((item, index) => (
            <li key={item} className="content-card">
              <span className="mini-label">Check {index + 1}</span>
              <p className="mt-2 text-sm leading-6 text-white/66">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/codes" className="content-card">
          <span className="mini-label">Codes</span>
          <h2 className="mt-3 text-xl font-bold text-white">Check code status</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the codes page only for verified or clearly labelled code claims.</p>
        </Link>
        <Link href="/guides" className="content-card">
          <span className="mini-label">Guides</span>
          <h2 className="mt-3 text-xl font-bold text-white">Read route notes</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use guides for source-backed walkthrough and survival details.</p>
        </Link>
        <Link href="/wiki" className="content-card">
          <span className="mini-label">Wiki</span>
          <h2 className="mt-3 text-xl font-bold text-white">Track verified facts</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the wiki for confirmed items, areas, endings, and systems.</p>
        </Link>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
