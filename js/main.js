/**
 * Software Quality Assurance (QA) Engineer Portfolio - JavaScript
 * Pure Vanilla JS (Accessible, Zero Frameworks, Modular & Lightweight)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initActiveNavSpy();
  initProjectFilters();
  initEmailCopy();
  initContactForm();
  initBackToTop();
  initScrollAnimations();
  
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

/* --------------------------------------------------------------------------
   1. Theme Management (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('qa-portfolio-theme');

  // Default to saved theme, or dark mode
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark');
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('qa-portfolio-theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    const isDark = theme === 'dark';
    themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggleBtn.innerHTML = isDark
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
  }
}

/* --------------------------------------------------------------------------
   2. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburgerBtn || !navMenu) return;

  const toggleMenu = (forceClose = false) => {
    const isOpen = forceClose ? false : !navMenu.classList.contains('open');
    navMenu.classList.toggle('open', isOpen);
    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  hamburgerBtn.addEventListener('click', () => toggleMenu());

  // Close when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      toggleMenu(true);
    }
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleMenu(true);
    }
  });
}

/* --------------------------------------------------------------------------
   3. Active Navigation Spy (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   4. Project Category Filtering
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Email Copy to Clipboard & Toast
   -------------------------------------------------------------------------- */
function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const emailToCopy = copyBtn.getAttribute('data-email') || '[your.email@example.com]';
    
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        // Fallback for non-https/unsupported environments
        const textArea = document.createElement('textarea');
        textArea.value = emailToCopy;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      showToast('Email copied to clipboard!');
    } catch (err) {
      showToast('Failed to copy email');
    }
  });
}

function showToast(message) {
  let toast = document.getElementById('toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-msg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* --------------------------------------------------------------------------
   6. Contact Form Validation & Simulated Submission
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status-msg');

  if (!contactForm || !statusMsg) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const subject = document.getElementById('form-subject')?.value.trim();
    const message = document.getElementById('form-message')?.value.trim();

    // Basic client-side validation
    if (!name || !email || !subject || !message) {
      displayFormStatus('Please complete all required fields.', 'error');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      displayFormStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate sending state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      Sending...
    `;

    setTimeout(() => {
      displayFormStatus('Thank you! Your message has been received (simulated submission).', 'success');
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 900);
  });

  function displayFormStatus(msg, type) {
    statusMsg.className = `form-status-msg ${type}`;
    const icon = type === 'success'
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    statusMsg.innerHTML = `${icon} <span>${msg}</span>`;
  }
}

/* --------------------------------------------------------------------------
   7. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   8. Scroll Reveal Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
}
