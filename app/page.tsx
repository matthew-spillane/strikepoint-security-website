import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { CtaButton, SectionHeading } from "@/components/ui";
import { primaryCta } from "@/components/site-data";

const features = [
  "Real-time URL reputation checks",
  "Redirect chain decomposition",
  "Domain and hosting intelligence",
  "TLS certificate and issuer validation",
  "Rendered page screenshot capture",
  "Normalized risk scoring with verdicts"
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="bg-hero-radial py-24 sm:py-28">
        <div className="section-wrap">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">Threat Intelligence for Every Click</p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">Stop phishing campaigns before users ever open the page.</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            SafeLink analyzes suspicious URLs in seconds so analysts can move from uncertainty to decision. Inspect reputation, infrastructure, redirects, and rendered behavior in one workflow.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
            <CtaButton href="/contact" variant="secondary">
              Contact
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-wrap">
          <SectionHeading eyebrow="Capabilities" title="Focused phishing analysis to support faster security decisions" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature} className="card p-6 text-sm text-slate-200">
                <h3 className="font-medium text-white">{feature}</h3>
                <p className="mt-2 text-muted">Evidence-driven telemetry helps teams escalate with confidence and clear rationale.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-wrap">
          <SectionHeading eyebrow="How it works" title="Three steps from link intake to analyst verdict" />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["1. Submit", "Paste suspicious URLs from email, chat, or ticketing tools."],
              ["2. Analyze", "SafeLink resolves redirects, inspects infrastructure, and captures the destination page."],
              ["3. Act", "Receive a risk score, machine verdict, and evidence packet for rapid triage."]
            ].map(([title, body]) => (
              <article key={title} className="card p-6">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="section-wrap pb-20">
        <div className="card border-red-900/40 bg-red-950/20 p-6">
          <h2 className="text-xl font-semibold text-white">Security and ethical use</h2>
          <p className="mt-3 text-sm text-slate-300">
            SafeLink is designed for defensive security operations. We do not support unauthorized scanning or offensive misuse. Customers are responsible for operating within legal and policy boundaries.
          </p>
        </div>
      </section>

      <section className="section-wrap pb-24">
        <div className="card bg-gradient-to-r from-panel to-slate-900 p-8 text-center shadow-glow">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Ready to accelerate phishing triage?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">Deploy SafeLink as your first pass for suspicious links and free analysts to focus on confirmed threats.</p>
          <div className="mt-6 flex justify-center gap-4">
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
