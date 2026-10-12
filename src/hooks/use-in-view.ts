import { useEffect, useRef, useState } from "react";

/** Options for {@link useInView}. */
export type UseInViewOptions = {
  /** Margin around the viewport; positive values trigger before the element is visible. */
  rootMargin?: string;
  /** Stop observing after the first intersection (default `true`). */
  once?: boolean;
};

/**
 * Tracks whether an element is inside (or near) the viewport using IntersectionObserver.
 *
 * @example
 * const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: "300px" });
 * return <div ref={ref}>{inView && <HeavyChart />}</div>;
 */
export function useInView<T extends Element>({
  rootMargin = "200px",
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, once]);

  return { ref, inView };
}
