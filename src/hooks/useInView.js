import { useState, useEffect } from 'react';

export function useInView(ref, { threshold = 0, once = true, rootMargin = '0px 0px -8% 0px' } = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    const fallback = setTimeout(() => setInView(true), 800);
    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, [ref, threshold, once, rootMargin]);

  return inView;
}
