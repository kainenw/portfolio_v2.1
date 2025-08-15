"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Corrected import for App Router

export default function usePageTracking() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: pathname,
        page_title: document.title,
      });
    }
  }, [pathname]); // Dependency updated to pathname
}
