/**
 * Optimized vanilla JavaScript for portfolio website
 * Replaces jQuery with modern ES6+ code
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Hide preloader when page loads
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }
  });

  // Page Navigation
  initNavigation();

  // Accordion sections (About & Work pages)
  initAccordions();

  // Research carousel
  initResearchCarousel();

  // Project selector
  initProjectSelector();
});

/**
 * Initialize SPA-style navigation
 */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');

  // Show home page by default
  showPage('home');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = link.dataset.page;
      showPage(pageId);

      // Update active state
      navLinks.forEach(l => l.classList.remove('text-accent'));
      // Update all links with same page target
      document.querySelectorAll(`[data-page="${pageId}"]`).forEach(l => {
        l.classList.add('text-accent');
      });
    });
  });

  function showPage(pageId) {
    pages.forEach(page => {
      if (page.id === pageId) {
        page.classList.remove('hidden');
        page.style.opacity = '0';
        requestAnimationFrame(() => {
          page.style.transition = 'opacity 0.3s ease';
          page.style.opacity = '1';
        });
      } else {
        page.classList.add('hidden');
      }
    });

    // Update nav link colors
    navLinks.forEach(link => {
      link.classList.remove('text-accent');
      if (link.dataset.page === pageId) {
        link.classList.add('text-accent');
      }
    });
  }
}

/**
 * Initialize accordion sections for About and Work pages
 */
function initAccordions() {
  // About page accordions
  const accordionHeaders = document.querySelectorAll('[data-toggle]');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const targetId = header.dataset.toggle;
      const content = document.getElementById(targetId);

      if (content) {
        content.classList.toggle('hidden');
      }
    });

    // Hover effect for showing content
    header.addEventListener('mouseenter', () => {
      const targetId = header.dataset.toggle;
      const content = document.getElementById(targetId);
      if (content && content.classList.contains('hidden')) {
        content.classList.add('hover-show');
        content.classList.remove('hidden');
      }
    });

    header.addEventListener('mouseleave', () => {
      const targetId = header.dataset.toggle;
      const content = document.getElementById(targetId);
      if (content && content.classList.contains('hover-show')) {
        content.classList.remove('hover-show');
        content.classList.add('hidden');
      }
    });
  });

  // Work page item toggles
  const workItems = document.querySelectorAll('.work-item h2[data-toggle]');
  workItems.forEach(header => {
    header.addEventListener('click', () => {
      const targetId = header.dataset.toggle;
      const content = document.getElementById(targetId);
      if (content) {
        content.classList.toggle('hidden');
      }
    });
  });
}

/**
 * Initialize research carousel
 */
function initResearchCarousel() {
  const slides = document.querySelectorAll('.research-slide');
  const thumbs = document.querySelectorAll('.research-thumb');
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');

  if (slides.length === 0) return;

  let currentIndex = 0;

  function showSlide(index) {
    // Normalize index
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    // Update slides
    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.remove('hidden');
        slide.style.opacity = '0';
        requestAnimationFrame(() => {
          slide.style.transition = 'opacity 0.3s ease';
          slide.style.opacity = '1';
        });
      } else {
        slide.classList.add('hidden');
      }
    });

    // Update thumbnails
    thumbs.forEach((thumb, i) => {
      if (i === currentIndex) {
        thumb.classList.remove('opacity-50', 'border-primary/50');
        thumb.classList.add('opacity-100', 'border-accent');
      } else {
        thumb.classList.add('opacity-50', 'border-primary/50');
        thumb.classList.remove('opacity-100', 'border-accent');
      }
    });
  }

  // Button handlers
  if (prevBtn) {
    prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
  }

  // Thumbnail click handlers
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const index = parseInt(thumb.dataset.index, 10);
      showSlide(index);
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const researchPage = document.getElementById('research');
    if (researchPage && !researchPage.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft') showSlide(currentIndex - 1);
      if (e.key === 'ArrowRight') showSlide(currentIndex + 1);
    }
  });
}

/**
 * Initialize project selector
 */
function initProjectSelector() {
  const projectLinks = document.querySelectorAll('.project-link');
  const projectDetails = document.querySelectorAll('.project-detail');

  projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const projectIndex = link.dataset.project;

      projectDetails.forEach(detail => {
        if (detail.dataset.project === projectIndex) {
          detail.classList.remove('hidden');
          detail.style.opacity = '0';
          requestAnimationFrame(() => {
            detail.style.transition = 'opacity 0.3s ease';
            detail.style.opacity = '1';
          });
        } else {
          detail.classList.add('hidden');
        }
      });
    });
  });
}
