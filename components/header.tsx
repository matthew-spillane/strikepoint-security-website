"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, primaryCta } from "@/components/site-data";
import { CtaButton } from "@/components/ui";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/90 bg-surface/80 backdrop-blur">
      <div className="section-wrap flex h-14 items-center justify-between">
        <Link href="/" className="link-focus flex items-center gap-2.5">
          <Image src="/logo.png" alt="Strikepoint Security logo" width={32} height={32} className="h-8 w-8 sm:h-9 sm:w-9" priority />
          <span className="text-base font-semibold tracking-wide text-white">Strikepoint Security</span>
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="link-focus text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
        </div>
        <button
          type="button"
          className="link-focus md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {mobileOpen && (
        <nav className="border-t border-slate-800/60 bg-surface/95 backdrop-blur md:hidden">
          <div className="section-wrap flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="link-focus rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800/50 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 px-3">
              <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
