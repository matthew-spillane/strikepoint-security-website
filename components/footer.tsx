import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="section-wrap flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Strikepoint Security. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="link-focus hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="link-focus hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
