import Link from "next/link";
import { navLinks, primaryCta } from "@/components/site-data";
import { CtaButton } from "@/components/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/90 bg-surface/80 backdrop-blur">
      <div className="section-wrap flex h-16 items-center justify-between">
        <Link href="/" className="link-focus flex items-center gap-3">
          <span className="text-base font-semibold tracking-wide text-white">Strikepoint Security</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="link-focus text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
        </div>
      </div>
    </header>
  );
}
