import Link from "next/link";
import { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}

export function CtaButton({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  const base = "link-focus inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition";
  const style =
    variant === "primary"
      ? "bg-accent text-white shadow-glow hover:bg-red-500"
      : "border border-slate-700 bg-slate-900/60 text-slate-200 hover:border-slate-500 hover:text-white";

  return (
    <Link href={href} className={`${base} ${style}`}>
      {children}
    </Link>
  );
}
