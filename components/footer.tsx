import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="section-wrap">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="text-sm font-medium text-white">Products</p>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="https://safelink.strikepointsec.com" className="link-focus text-sm text-muted hover:text-white">
                  SafeLink
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div className="flex gap-4 text-sm text-muted">
              <Link href="/privacy" className="link-focus hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="link-focus hover:text-white">
                Terms
              </Link>
            </div>
            <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Strikepoint Security. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
