// Refined Editorial - Scroll Effects
// Adds sophisticated scroll-based interactions

(function() {
  'use strict';

  // Navbar scroll effect
  function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const scrollThreshold = 50;
    
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Staggered fade-in for elements
  function initStaggeredAnimations() {
    const elements = document.querySelectorAll('.stagger-fade');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)';
      observer.observe(el);
    });
  }

  // Add hover effects to cards
  function enhanceCards() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)';
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll(); // Initial check

    // Smooth scrolling
    initSmoothScroll();

    // Staggered animations
    if ('IntersectionObserver' in window) {
      initStaggeredAnimations();
    }

    // Enhanced cards
    enhanceCards();

    // Add loaded class to body for CSS transitions
    document.body.classList.add('page-loaded');
  }

})();
