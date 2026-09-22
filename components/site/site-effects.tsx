"use client";

import { useEffect } from "react";

export function SiteEffects() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );

    document
      .querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-children",
      )
      .forEach((el) => revealObserver.observe(el));

    const header = document.querySelector("header");
    const onScroll = () => {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add("shadow-[0_4px_20px_-2px_rgba(23,33,43,0.08)]");
      } else {
        header.classList.remove("shadow-[0_4px_20px_-2px_rgba(23,33,43,0.08)]");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        document
          .getElementById("mobileDrawer")
          ?.classList.add("translate-x-full");
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return null;
}
