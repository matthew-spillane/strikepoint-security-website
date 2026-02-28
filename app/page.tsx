import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { CtaButton, SectionHeading } from "@/components/ui";
import { primaryCta } from "@/components/site-data";

const features = [
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

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero-bg relative overflow-hidden py-20 sm:py-24">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="section-wrap relative z-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Threat Intelligence for Every Click</p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">Stop phishing campaigns before users ever open the page.</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            SafeLink analyzes suspicious URLs in seconds so analysts can move from uncertainty to decision. Inspect reputation, infrastructure, redirects, and rendered behavior in one workflow.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
            <CtaButton href="/contact" variant="secondary">
              Contact
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-wrap">
          <SectionHeading eyebrow="Capabilities" title="Purpose-built phishing analysis for SOC and trust teams" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="card p-5 text-sm text-slate-200">
                <h3 className="font-medium text-white">{feature.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered Analysis */}
      <section className="py-16">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="Artificial Intelligence"
            title="Every scan reviewed by an AI threat analyst"
            description="Beyond automated checks, SafeLink uses Claude AI to holistically evaluate each URL and deliver a plain-English verdict — even when reputation databases return clean results. Zero-day phishing doesn't stand a chance."
          />
          <div className="grid gap-4 lg:grid-cols-[1fr,1fr]">
            {/* Mock AI verdict card */}
            <div className="card border-red-900/40 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_6px_rgba(248,113,113,0.6)]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">AI Verdict</span>
                </div>
                <span className="rounded-full bg-red-950/60 px-3 py-0.5 text-xs font-medium text-red-300">Confidence: High</span>
              </div>
              <p className="text-2xl font-semibold text-red-400">Likely Phishing</p>
              <div className="mt-4 rounded-xl border border-slate-800/60 bg-surface/60 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">Explanation</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  This domain combines login keywords with a Microsoft brand reference on a non-Microsoft TLD — a classic impersonation pattern. The domain is 11 days old and hosted on infrastructure commonly associated with phishing campaigns.
                </p>
              </div>
            </div>
            {/* Supporting context */}
            <div className="flex flex-col gap-4">
              <div className="card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why AI matters</p>
                <h3 className="mt-2 font-semibold text-white">Catches what signatures miss</h3>
                <p className="mt-2 text-sm text-muted">Traditional blocklists rely on known indicators. AI analysis evaluates the full context — domain naming patterns, page structure, hosting signals — to flag threats before they appear in any feed.</p>
              </div>
              <div className="card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Plain-English output</p>
                <h3 className="mt-2 font-semibold text-white">Verdicts your team can act on</h3>
                <p className="mt-2 text-sm text-muted">No more deciphering cryptic scores. Every AI verdict includes a human-readable explanation that analysts can paste directly into tickets and escalations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-wrap">
          <SectionHeading eyebrow="How it works" title="Three steps from link intake to analyst verdict" />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["1. Submit", "Paste suspicious URLs from email, chat, or ticketing tools."],
              ["2. Analyze", "SafeLink resolves redirects, inspects infrastructure, and captures the destination page."],
              ["3. Act", "Receive a risk score, machine verdict, and evidence packet for rapid triage."]
            ].map(([title, body]) => (
              <article key={title} className="card border-l-2 border-l-accent p-5">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="section-wrap pb-16">
        <div className="card border-red-900/40 bg-red-950/20 p-5">
          <h2 className="text-xl font-semibold text-white">Security and ethical use</h2>
          <p className="mt-2 text-sm text-slate-300">
            SafeLink is designed for defensive security operations. We do not support unauthorized scanning or offensive misuse. Customers are responsible for operating within legal and policy boundaries.
          </p>
        </div>
      </section>

      <section className="section-wrap pb-20">
        <div className="card bg-gradient-to-r from-panel to-slate-900 p-8 text-center shadow-glow">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Ready to accelerate phishing triage?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">Deploy SafeLink as your first pass for suspicious links and free analysts to focus on confirmed threats.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
            <Link href="/pricing" className="link-focus rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
