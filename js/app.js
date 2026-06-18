/**
 * Jeyavinoth Jeyaratnam — portfolio
 * Vanilla JS: mobile menu, scroll-spy nav, research carousel.
 * Deep-linking, Back/forward and smooth scroll are handled natively
 * by anchor links + CSS scroll-behavior + scroll-margin-top.
 */
document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initMobileMenu();
  initScrollSpy();
  initResearchCarousel();
});

/** Footer year */
function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/** Mobile menu toggle */
function initMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  const close = () => {
    menu.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
  };
  const open = () => {
    menu.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Close menu');
  };

  btn.addEventListener('click', () => {
    menu.classList.contains('hidden') ? open() : close();
  });

  // Close after tapping a link
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  // Reset when resizing up to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) close();
  });
}

/** Scroll-spy: highlight the nav link for the section in view */
function initScrollSpy() {
  const links = Array.from(document.querySelectorAll('.nav-link'));
  if (!links.length || !('IntersectionObserver' in window)) return;

  // Map section id -> all nav links pointing at it (desktop + mobile)
  const linksFor = id => links.filter(l => l.getAttribute('href') === `#${id}`);
  const sections = links
    .map(l => document.getElementById(l.getAttribute('href').slice(1)))
    .filter((el, i, arr) => el && arr.indexOf(el) === i);

  const setActive = id => {
    links.forEach(l => l.removeAttribute('aria-current'));
    linksFor(id).forEach(l => l.setAttribute('aria-current', 'true'));
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

/** Research carousel */
function initResearchCarousel() {
  const slides = Array.from(document.querySelectorAll('.research-slide'));
  const thumbs = Array.from(document.querySelectorAll('.research-thumb'));
  const prev = document.getElementById('prev-slide');
  const next = document.getElementById('next-slide');
  if (!slides.length) return;

  let current = 0;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.classList.toggle('is-active', active);
      slide.toggleAttribute('hidden', !active);
    });
    thumbs.forEach((thumb, i) => thumb.classList.toggle('is-active', i === current));
  };

  prev && prev.addEventListener('click', () => show(current - 1));
  next && next.addEventListener('click', () => show(current + 1));
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => show(parseInt(thumb.dataset.index, 10)));
  });

  // Arrow keys when the research section is in the viewport
  const research = document.getElementById('research');
  document.addEventListener('keydown', (e) => {
    if (!research) return;
    const r = research.getBoundingClientRect();
    const inView = r.top < window.innerHeight && r.bottom > 0;
    if (!inView) return;
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  show(0);
}
