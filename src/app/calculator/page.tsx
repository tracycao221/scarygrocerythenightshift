import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { AdsterraToolAd } from "@/components/ads";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Checklist`,
  description: `Use the ${siteConfig.gameName} checklist to plan code checks, source checks, shift tasks, guide notes, and survival decisions.`,
  alternates: { canonical: `${siteConfig.domain}/calculator/` }
};

export default function CalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Checklist", href: "/calculator" }]} />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.calculator} />
      <Breadcrumbs items={[{ label: "Checklist", href: "/calculator" }]} />
      <PageIntro
        eyebrow="Primary tool"
        title={`${siteConfig.gameName} Checklist`}
        description="Use this starter tool as the first interactive surface. Replace generic inputs with verified store tasks, danger signs, endings, badges, and route choices as research matures."
      />
      <section className="mt-10">
        <CalculatorTool />
      </section>
      <AdsterraToolAd />
    </main>
  );
}
