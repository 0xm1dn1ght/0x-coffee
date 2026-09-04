/**
 * Scroll-reveal: adds `.is-visible` to `[data-reveal]` elements as they enter
 * the viewport. Runs on first load and after every client-side navigation
 * (Astro view transitions fire `astro:page-load`).
 */
function initReveal(): void {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)');
  if (els.length === 0) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 },
  );

  els.forEach((el) => io.observe(el));
}

// Run now (this module is deferred, so the DOM is already parsed) so content
// still appears even if the view-transitions runtime is slow or blocked, then
// re-run after each client-side navigation.
initReveal();
document.addEventListener('astro:page-load', initReveal);
