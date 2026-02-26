import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/ui";

export default function HowItWorksPage() {
  return (
    <PageShell>
      <section className="section-wrap py-20">
        <SectionHeading
          title="How SafeLink works"
          description="SafeLink combines enrichment, dynamic analysis, and policy-driven scoring to generate actionable verdicts quickly."
        />
        <div className="space-y-4">
          {[
            ["Input and normalization", "URLs are sanitized, canonicalized, and deduplicated to eliminate obfuscation tricks."],
            ["Multilayer analysis", "We evaluate reputation feeds, DNS/WHOIS posture, TLS metadata, redirect chains, and rendered content artifacts."],
            ["Verdict and response", "SafeLink issues a risk score with evidence highlights and recommended response actions for analysts."]
          ].map(([title, description]) => (
            <article key={title} className="card p-6">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
