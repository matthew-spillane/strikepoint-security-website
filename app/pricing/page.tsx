import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { CtaButton, SectionHeading } from "@/components/ui";
import { primaryCta } from "@/components/site-data";

export default function PricingPage() {
  return (
    <PageShell>
      <section className="section-wrap py-16">
        <SectionHeading title="Pricing" description="Simple usage tiers for security teams of any size. Annual billing available." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Free tier */}
          <article className="card border-accent/30 p-5">
            <h3 className="text-lg font-semibold text-white">Free</h3>
            <p className="mt-2 text-3xl font-semibold text-white">$0<span className="text-base font-normal text-muted">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Up to 20 URL analyses per day</li>
              <li>No account required</li>
            </ul>
            <div className="mt-5">
              <a
                href="https://safelink.strikepointsec.com"
                className="link-focus inline-flex w-full items-center justify-center rounded-full border border-accent bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent/20"
              >
                Try SafeLink
              </a>
            </div>
          </article>

          {/* Starter tier */}
          <article className="card p-5">
            <h3 className="text-lg font-semibold text-white">Starter</h3>
            <p className="mt-2 text-3xl font-semibold text-white">$199<span className="text-base font-normal text-muted">/mo</span></p>
            <p className="mt-4 text-sm text-slate-300">Up to 10k URL analyses / month</p>
            <div className="mt-5">
              <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
            </div>
          </article>

          {/* Growth tier */}
          <article className="card p-5">
            <h3 className="text-lg font-semibold text-white">Growth</h3>
            <p className="mt-2 text-3xl font-semibold text-white">$799<span className="text-base font-normal text-muted">/mo</span></p>
            <p className="mt-4 text-sm text-slate-300">Up to 100k URL analyses / month</p>
            <div className="mt-5">
              <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
            </div>
          </article>

          {/* Enterprise tier */}
          <article className="card p-5">
            <h3 className="text-lg font-semibold text-white">Enterprise</h3>
            <p className="mt-2 text-3xl font-semibold text-white">Contact us</p>
            <p className="mt-4 text-sm text-slate-300">Custom volume, SSO, private tenancy</p>
            <div className="mt-5">
              <Link
                href="/contact"
                className="link-focus inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                Contact Sales
              </Link>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
