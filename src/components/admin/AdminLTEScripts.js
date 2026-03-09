"use client";

import Script from "next/script";

export default function DashboardScripts() {
  return (
    <>
      <Script
        src="/adminlte/vendor/overlayscrollbars.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/adminlte/vendor/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/adminlte/js/adminlte.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}

