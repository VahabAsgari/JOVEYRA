import { AmbientBackground } from "@/components/ambient-background";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <main className="relative">
      <AmbientBackground />
      <div className="grain-overlay" aria-hidden />
      <SiteNav />

      <Hero />

      <Section id="manifesto" index="[01] — The Manifesto" title="The Manifesto" watermark="wave">
        Where conventional intuition faces structural complexity, systematic
        parameters provide clarity. We look beyond market sentiment, focusing
        entirely on verifiable patterns and empirical frameworks. By anchoring
        computational precision to strict operational discipline, Joveyra
        ensures that execution remains consistent and uncompromised.
      </Section>

      <Section id="architecture" index="[02] — Core Architecture" title="Core Architecture" watermark="polar">
        Our operational framework is built for systematic risk management and
        processing efficiency. We develop proprietary models designed to
        identify non-correlated structures within global markets. Backed by
        institutional infrastructure, our systems prioritize execution control
        and stability.
      </Section>

      <Section id="rigor" index="[03] — Empirical Rigor" title="Empirical Rigor" watermark="wave">
        Mathematical research guides our approach to market complexity.
        Continuous empirical testing allows our frameworks to adapt to evolving
        macro environments. This disciplined validation process ensures that
        data is systematically converted into structured investment strategies.
      </Section>

      <Section id="capital" index="[04] — Intellectual Capital" title="Intellectual Capital" watermark="polar">
        Strategic longevity depends entirely on intellectual exceptionalism.
        Joveyra provides a highly specialized environment for advanced
        scientific and mathematical minds. Exceptional talent is either
        systematically identified or naturally gravitates toward our
        infrastructure, where analytical potential is realized through rigorous
        collaboration.
      </Section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
