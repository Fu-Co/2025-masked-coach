(function() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    const header = document.querySelector('.site-header');
    if (header) {
      let lastY = window.scrollY;
      window.addEventListener('scroll', () => {
        const y = window.scrollY;
        header.style.boxShadow = y > 4 ? '0 2px 20px rgba(0,0,0,0.25)' : 'none';
        lastY = y;
      }, { passive: true });
    }
  }
})();



