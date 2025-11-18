// safe DOM-ready script
document.addEventListener('DOMContentLoaded', () => {

  /* Page fade-in */
  try {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity .45s ease';
  } catch (e) { /* ignore */ }

  /* Nav link hover micro-animation */
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(a => {
    a.addEventListener('mouseenter', () => {
      a.style.transform = 'translateY(-3px) scale(1.02)';
      a.style.transition = 'transform .18s ease';
    });
    a.addEventListener('mouseleave', () => {
      a.style.transform = 'none';
    });
  });

  /* Mobile menu toggle button */
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav-links');

  function openMenu(){
    if (!nav) return;
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'flex-end';
    nav.style.gap = '8px';
    nav.style.padding = '12px';
  }
  function closeMenu(){
    if (!nav) return;
    nav.style.display = 'none';
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      if (!nav) return;
      const shown = getComputedStyle(nav).display !== 'none';
      if (shown) closeMenu(); else openMenu();
    });
  }

  /* Accessibility: close mobile menu on click outside */
  document.addEventListener('click', (e) => {
    const withinNav = e.target.closest('.nav-links') || e.target.closest('.mobile-toggle');
    if (!withinNav && window.innerWidth <= 768) {
      if (nav) nav.style.display = 'none';
    }
  });

});
