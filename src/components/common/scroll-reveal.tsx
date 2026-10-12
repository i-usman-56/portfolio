"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Elements reveal once their top edge passes this share of the viewport height. */
const TRIGGER = 0.9;

/**
 * Plays the `.reveal` animation (see `globals.css`) every time an element scrolls into view
 * going down the page. An element resets only after dropping back below the viewport, so
 * scrolling up never re-animates what you are reading. Renders nothing; mount it once in
 * the root layout. Without JavaScript, or with reduced motion, content is simply visible.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const show = (el: Element, visible: boolean) => el.toggleAttribute("data-visible", visible);

    // Whatever is already on screen (or scrolled past) starts visible, so nothing flashes.
    elements.forEach((el) => show(el, el.getBoundingClientRect().top < innerHeight));
    document.documentElement.setAttribute("data-reveal-ready", "");

    // Reveal when the element crosses the trigger line on the way down…
    const revealer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && show(entry.target, true)),
      { rootMargin: `0px 0px -${Math.round((1 - TRIGGER) * 100)}% 0px` },
    );
    // …and reset it once it is fully below the viewport again, ready to replay.
    const resetter = new IntersectionObserver((entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top >= innerHeight) {
          show(entry.target, false);
        }
      }),
    );

    elements.forEach((el) => {
      revealer.observe(el);
      resetter.observe(el);
    });
    return () => {
      revealer.disconnect();
      resetter.disconnect();
    };
  }, [pathname]);

  return null;
}
