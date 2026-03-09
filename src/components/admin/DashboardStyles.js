"use client";

import { useEffect } from "react";

const STYLES = [
  { id: "dashboard-bootstrap", href: "/adminlte/vendor/bootstrap.min.css" },
  { id: "dashboard-adminlte", href: "/adminlte/css/adminlte.min.css" },
  { id: "dashboard-overlay", href: "/adminlte/vendor/overlayscrollbars.min.css" },
  {
    id: "dashboard-icons",
    href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css",
  },
];

export default function DashboardStyles() {
  useEffect(() => {
    STYLES.forEach(({ id, href }) => {
      if (document.getElementById(id)) return;
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    });
    return () => {
      STYLES.forEach(({ id }) => document.getElementById(id)?.remove());
    };
  }, []);

  return null;
}
