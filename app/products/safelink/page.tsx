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
        <SectionHeading eyebrow="Sample Report" title="Mock analyst output" />
        <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
          <div className="card p-6">
            <table className="w-full text-left text-sm">
              <thead className="text-muted">
                <tr>
                  <th className="pb-3">Signal</th>
                  <th className="pb-3">Observed Value</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-slate-200">
                <tr><td className="py-2">Final destination</td><td>secure-update-login[.]com</td><td className="text-red-400">Suspicious</td></tr>
                <tr><td className="py-2">Certificate issuer</td><td>Unknown DV authority</td><td className="text-amber-300">Review</td></tr>
                <tr><td className="py-2">Infrastructure age</td><td>12 days</td><td className="text-red-400">High risk</td></tr>
                <tr><td className="py-2">Visual similarity score</td><td>0.82 (brand impersonation)</td><td className="text-red-400">High risk</td></tr>
              </tbody>
            </table>
          </div>
          <aside className="card p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Verdict</p>
            <p className="mt-2 text-4xl font-semibold text-red-400">87 / 100</p>
            <p className="mt-2 text-sm text-slate-300">Likely phishing. Quarantine and notify affected users.</p>
          </aside>
        </div>
        <div className="mt-8">
          <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
        </div>
      </section>
    </PageShell>
  );
}
