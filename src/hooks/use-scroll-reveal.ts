import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-up, .reveal-left, .reveal-right, .stagger-card",
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el, i) => {
      if (el.classList.contains("stagger-card")) {
        el.style.transitionDelay = `${Math.min(i * 90, 450)}ms`;
      }
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
}
