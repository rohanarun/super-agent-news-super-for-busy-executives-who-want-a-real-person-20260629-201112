/* Super landing page motion */

(function () {
  try {
    if (window.gsap) {
      gsap.from('.hero h1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.8, delay: 0.2 });
      gsap.from('.hero-actions', { y: 20, opacity: 0, duration: 0.8, delay: 0.4 });
    }
  } catch (e) {
    // graceful fallback
  }
})();