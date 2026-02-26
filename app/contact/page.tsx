import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/ui";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section-wrap py-20">
        <SectionHeading title="Contact Strikepoint Security" description="Tell us about your environment and we will follow up with the right deployment guidance." />
        <form className="card grid gap-4 p-6 sm:grid-cols-2" aria-label="Contact form">
          <label className="text-sm text-slate-200">Name<input className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2" type="text" required /></label>
          <label className="text-sm text-slate-200">Work Email<input className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2" type="email" required /></label>
          <label className="text-sm text-slate-200 sm:col-span-2">Company<input className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2" type="text" /></label>
          <label className="text-sm text-slate-200 sm:col-span-2">Message<textarea className="mt-1 h-32 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2" required /></label>
          <button className="link-focus rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow sm:col-span-2 sm:w-fit" type="submit">Send Message</button>
        </form>
      </section>
    </PageShell>
  );
}
