import { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
