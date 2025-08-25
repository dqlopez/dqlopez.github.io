/**
 * Navigation and Scroll Functionality
 * Handles smooth scrolling, navigation state, and scroll progress
 */

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navigation active state and background on scroll
window.addEventListener('scroll', function() {
  const nav = document.getElementById('nav');
  const scrollProgress = document.getElementById('scroll-progress');
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  // Update scroll progress indicator
  scrollProgress.style.width = Math.min(scrollPercent, 100) + '%';
  
  // Add background to nav on scroll
  if (scrollTop > 50) {
    nav.classList.add('bg-white/95', 'border-border');
    nav.classList.remove('bg-white/80', 'border-transparent');
  } else {
    nav.classList.add('bg-white/80', 'border-transparent');
    nav.classList.remove('bg-white/95', 'border-border');
  }

  // Update active navigation link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollTop >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-primary');
    link.classList.add('text-text-secondary');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('text-primary');
      link.classList.remove('text-text-secondary');
    }
  });
});

// Mobile navigation toggle
const mobileToggle = document.getElementById('nav-mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

mobileToggle.addEventListener('click', function() {
  isMenuOpen = !isMenuOpen;
  
  if (isMenuOpen) {
    mobileMenu.classList.remove('-translate-y-full', 'opacity-0');
    mobileMenu.classList.add('translate-y-0', 'opacity-100');
    
    // Animate hamburger to X
    const spans = mobileToggle.querySelectorAll('span');
    spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
  } else {
    mobileMenu.classList.add('-translate-y-full', 'opacity-0');
    mobileMenu.classList.remove('translate-y-0', 'opacity-100');
    
    // Reset hamburger
    const spans = mobileToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
  }
});

// Close mobile menu when clicking on links
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', function() {
    isMenuOpen = false;
    mobileMenu.classList.add('-translate-y-full', 'opacity-0');
    mobileMenu.classList.remove('translate-y-0', 'opacity-100');
    
    const spans = mobileToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
  });
});