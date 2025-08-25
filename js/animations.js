/**
 * Scroll Animations and Intersection Observer
 * Handles scroll-triggered animations and visual effects
 */

// Intersection Observer for scroll-triggered animations
const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
  // Set initial state for scroll-triggered elements
  const scrollElements = document.querySelectorAll('.scroll-animate');
  scrollElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`;
    observer.observe(el);
  });
});