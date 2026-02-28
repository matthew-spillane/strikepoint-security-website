import { PageShell } from "@/components/page-shell";
import { CtaButton, SectionHeading } from "@/components/ui";
import { primaryCta } from "@/components/site-data";

const items = [
  "URL reputation analysis",
  "Redirect chain inspection",
  "Domain/IP intelligence",
  "TLS/SSL inspection",
  "Screenshot capture",
  "Risk scoring & verdict"
];

export default function SafeLinkPage() {
  return (
    <PageShell>
      <section className="section-wrap py-20">
        <SectionHeading
          eyebrow="Product"
          title="SafeLink: fast, explainable phishing link analysis"
          description="SafeLink turns suspicious URLs into structured evidence with a clear risk verdict. Your analysts get context, not just a block/allow guess."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item} className="card p-6">
              <h3 className="font-semibold text-white">{item}</h3>
              <p className="mt-2 text-sm text-muted">Correlated telemetry feeds a normalized model that balances speed and precision.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-20">
        <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
      </section>
    </PageShell>
  );
}
