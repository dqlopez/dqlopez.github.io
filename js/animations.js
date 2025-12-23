/**
 * Terminal Animations
 * Manages the sequencing of the "boot up" animations
 */

document.addEventListener('DOMContentLoaded', function() {
    // We rely mostly on CSS animations for performance and simplicity in this theme
    // but we can add staggered reveal logic here if complex sequencing is needed.
    
    // Example: Add a blinking cursor to the end of typed lines after they finish typing
    const typedElements = document.querySelectorAll('.animate-typing');
    
    typedElements.forEach(el => {
      el.addEventListener('animationend', () => {
        el.style.borderRightColor = 'transparent'; // Stop blinking the typing cursor
      });
    });
  });
