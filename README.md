# dql@portfolio:~$

A deeply geeky, terminal-themed personal portfolio website. It presents professional full-stack engineering experience through an interactive command-line interface (CLI) aesthetic, featuring boot sequences, system logs, and directory listings.

## System Features

*   **CLI Aesthetic:** Authentic terminal feel with Fira Code fonts, blinking cursors, and a subtle CRT scanline overlay.
*   **Interactive Boot Sequence:** Animated "startup" logs and typing effects that introduce the user profile.
*   **System Status Bar:** A `tmux`-like status line displaying user context and a live clock.
*   **Responsive & Fast:** Fully responsive design that works on mobile (no keyboard required) and scores 95+ on performance metrics.
*   **Cache Smart:** Optimized caching strategy with versioning for instant updates.

## Tech Stack

*   **Core:** HTML5, Vanilla JavaScript (ES6+)
*   **Styling:** Tailwind CSS (via CDN) + Custom CSS variables
*   **Fonts:** Fira Code (Google Fonts)
*   **Hosting:** GitHub Pages

## Project Structure

```bash
/home/dql/portfolio
├── index.html           # Core system entry point
├── css/
│   ├── styles.css       # Terminal themes & scanline effects
│   └── tailwind.config.js # Custom color palette (#00ff41)
└── js/
    ├── navigation.js    # Smooth scrolling & focus handling
    ├── animations.js    # Typing & boot sequence logic
    └── interactions.js  # Easter eggs & interactive elements
```

## Local Initialization

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dqlopez/dqlopez.github.io.git
    cd dqlopez.github.io
    ```

2.  **Start a local server:**
    ```bash
    # Python 3
    python3 -m http.server 8000
    
    # Node.js
    npx serve .
    ```

3.  **Access:** Open `http://localhost:8000` in your browser.

## Browser Support

*   Chrome (latest)
*   Firefox (latest)
*   Safari (latest)
*   Edge (latest)

## License

This project is personal property. All rights reserved.
