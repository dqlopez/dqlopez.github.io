// Tailwind CSS Configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        'primary-dark': '#005ECB',
        'primary-light': '#4DA3FF',
        accent: '#5AC8FA',
        background: '#F8F9FA',
        surface: '#FFFFFF',
        'text-secondary': '#6E6E73',
        'text-muted': '#8E8E93',
        border: '#D1D1D6'
      },
      fontFamily: {
        'roboto': ['Roboto', 'system-ui', 'Arial', 'sans-serif'],
        'space': ['Space Grotesk', 'system-ui', 'Arial', 'sans-serif']
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards'
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'professional': '0 4px 6px -1px rgba(0, 122, 255, 0.1), 0 2px 4px -1px rgba(0, 122, 255, 0.06)',
        'professional-lg': '0 10px 15px -3px rgba(0, 122, 255, 0.1), 0 4px 6px -2px rgba(0, 122, 255, 0.05)',
        'professional-xl': '0 20px 25px -5px rgba(0, 122, 255, 0.1), 0 10px 10px -5px rgba(0, 122, 255, 0.04)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    }
  },
  plugins: []
};