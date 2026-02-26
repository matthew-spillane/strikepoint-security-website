import { PageShell } from "@/components/page-shell";
import { CtaButton, SectionHeading } from "@/components/ui";
import { primaryCta } from "@/components/site-data";

export default function PricingPage() {
  return (
    <PageShell>
      <section className="section-wrap py-20">
        <SectionHeading title="Pricing" description="Simple usage tiers for security teams of any size. Annual billing available." />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Starter", "$199/mo", "Up to 10k URL analyses / month"],
            ["Growth", "$799/mo", "Up to 100k URL analyses / month"],
            ["Enterprise", "Contact us", "Custom volume, SSO, private tenancy" ]
          ].map(([name, price, detail]) => (
            <article key={name} className="card p-6">
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <p className="mt-2 text-3xl font-semibold text-white">{price}</p>
              <p className="mt-2 text-sm text-muted">{detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
        </div>
      </section>
    </PageShell>
  );
}
