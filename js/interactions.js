/**
 * Terminal Interactions
 * Handles hover effects, typing simulations, and interactive terminal elements
 */

document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for elements with specific class
    // (CSS animation handles the main hero typing, but we can add JS enhancements here)
    
    // Add hover sounds or click sounds (optional, usually annoying, so maybe just visual)
    const interactiveElements = document.querySelectorAll('a, button, .terminal-card');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        // Visual cursor enhancement or highlight
        el.style.borderColor = '#00ff41';
      });
      
      el.addEventListener('mouseleave', () => {
        el.style.borderColor = ''; // Reverts to CSS default
      });
    });
  
    // Command prompt simulation (Easter egg)
    let keys = [];
    const secretCode = 'help';
    
    window.addEventListener('keydown', (e) => {
      keys.push(e.key);
      if (keys.length > secretCode.length) keys.shift();
      
      if (keys.join('') === secretCode) {
        alert('Commands available: [about, contact, github, linkedin]');
      }
    });
  });
