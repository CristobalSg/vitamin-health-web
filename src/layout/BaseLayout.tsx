import type { ReactNode } from "react";

import FloatingChat from "@/components/FloatingChat";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="min-h-screen bg-vh-gray text-vh-ink">
      <Header />
      <main>{children}</main>
      <FloatingChat />
      <Footer />
    </div>
  );
}
