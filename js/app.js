/**
 * Jeyavinoth Jeyaratnam — portfolio.
 * Deep links, smooth scroll and the sticky-header offset are handled natively
 * by anchor links + CSS (scroll-behavior + scroll-margin-top). JS only adds
 * scroll-spy nav highlighting and the footer year.
 */
document.addEventListener('DOMContentLoaded', () => {
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  const links = Array.from(document.querySelectorAll('nav a'));
  if (!links.length || !('IntersectionObserver' in window)) return;

  const sections = links
    .map(l => document.getElementById(l.getAttribute('href').slice(1)))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
});
