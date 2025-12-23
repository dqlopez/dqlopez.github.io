/**
 * Terminal Navigation
 * Smooth scrolling for anchor links
 */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Add a visual flash to the target section to simulate 'focus'
        target.classList.add('text-glow');
        setTimeout(() => target.classList.remove('text-glow'), 1000);
      }
    });
  });
