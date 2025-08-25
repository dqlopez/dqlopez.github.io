/**
 * Interactive Effects and Touch Interactions
 * Handles mobile touch interactions, hover effects, and visual enhancements
 */

// Improved mobile touch interactions
if ('ontouchstart' in window) {
  document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.95)';
    });
    element.addEventListener('touchend', function() {
      this.style.transform = 'scale(1)';
    });
  });
}

// Add hover effect to cards
document.querySelectorAll('.group').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-12px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add ripple effect to buttons
document.querySelectorAll('button, a').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `;
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add CSS animation for ripple effect
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);