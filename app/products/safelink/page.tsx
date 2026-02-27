import { PageShell } from "@/components/page-shell";
import { CtaButton, SectionHeading } from "@/components/ui";
import { primaryCta } from "@/components/site-data";

const items = [
  {
    title: "URL reputation analysis",
    description: "Cross-references every URL against VirusTotal and Google Safe Browsing to instantly surface known threats across 90+ security engines."
  },
  {
    title: "Redirect chain inspection",
    description: "Follows every hop a URL takes and maps the full redirect path, exposing hidden destinations and cross-domain deception tactics."
  },
  {
    title: "Domain/IP intelligence",
    description: "Reveals domain age, registrar data, IP geolocation, and hosting provider to identify newly registered domains or infrastructure commonly abused by threat actors."
  },
  {
    title: "TLS/SSL inspection",
    description: "Inspects SSL certificate validity, expiry, and issuer to detect self-signed certificates, expired credentials, and impersonation attempts."
  },
  {
    title: "Screenshot capture",
    description: "Captures a live screenshot of the destination page in an isolated sandbox so analysts can see exactly what victims would encounter."
  },
  {
    title: "Risk scoring & verdict",
    description: "Aggregates signals across all checks into a single 0\u2013100 risk score with a clear verdict\u00a0\u2014 Safe, Suspicious, Likely Phishing, or Phishing."
  }
];

export default function SafeLinkPage() {
  return (
    <PageShell>
      <section className="section-wrap py-16">
        <SectionHeading
          eyebrow="Product"
          title="SafeLink: fast, explainable phishing link analysis"
          description="SafeLink turns suspicious URLs into structured evidence with a clear risk verdict. Your analysts get context, not just a block/allow guess."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="card p-5">
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-16">
        <SectionHeading eyebrow="Sample Report" title="Mock analyst output" />
        <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
          <div className="card overflow-x-auto p-5">
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
                <tr><td className="py-2">Visual similarity score</td><td>0.82 (Microsoft brand impersonation)</td><td className="text-red-400">High risk</td></tr>
              </tbody>
            </table>
          </div>
          <aside className="card p-5">
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
