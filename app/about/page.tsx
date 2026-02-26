import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/ui";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section-wrap py-16">
        <SectionHeading
          title="About Strikepoint Security"
          description="Strikepoint Security builds practical detection tooling that helps defenders move quickly and make sound, evidence-based decisions."
        />
        <div className="card p-5 text-muted">
          <p>
            Our team combines threat research, detection engineering, and platform design to address one of the highest-volume attack vectors: phishing. SafeLink reflects our philosophy that security tools should be fast, transparent, and built for real operational workflows.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
