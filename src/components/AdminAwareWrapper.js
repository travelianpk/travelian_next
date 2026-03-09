"use client";

import { usePathname } from "next/navigation";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function AdminAwareWrapper() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/agent");

  if (isAdmin) return null;

  return (
    <>
      <ScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}
