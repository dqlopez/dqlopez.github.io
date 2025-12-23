// Tailwind CSS Configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Mapping existing color names to terminal theme to maintain some compatibility
        // but prioritizing the terminal aesthetic
        primary: '#00ff41', // Bright Terminal Green
        'primary-dark': '#008F11', // Dimmer Green
        'primary-light': '#39ff14', // Neon Green
        accent: '#39ff14',
        
        // Terminal specific palette
        'terminal-bg': '#0d1117',
        'terminal-black': '#0d1117',
        'terminal-green': '#00ff41',
        'terminal-dim': '#4d5b50', // Grayish green for dimmed text
        'terminal-alert': '#ff3333', // Red for errors/alerts
        
        background: '#0d1117',
        surface: '#161b22', // Slightly lighter for cards/sections
        'text-primary': '#00ff41',
        'text-secondary': '#a3b3bc', // Light blue-gray for secondary text
        'text-muted': '#6e7681',
        border: '#30363d'
      },
      fontFamily: {
        'mono': ['"Fira Code"', 'Consolas', 'Monaco', '"Andale Mono"', '"Ubuntu Mono"', 'monospace'],
        // Override sans to be mono for this theme
        'sans': ['"Fira Code"', 'Consolas', 'Monaco', 'monospace'],
        'roboto': ['"Fira Code"', 'monospace'], // Overriding existing font references
        'space': ['"Fira Code"', 'monospace']    // Overriding existing font references
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'fade-in': 'fadeIn 0.5s ease-in forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'terminal': '0 0 10px rgba(0, 255, 65, 0.2)',
        'terminal-lg': '0 0 20px rgba(0, 255, 65, 0.15)',
      }
    }
  },
  plugins: []
};