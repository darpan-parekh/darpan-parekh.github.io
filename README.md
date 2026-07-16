# Darpan Parekh — Professional Odoo Portfolio

This is a premium, static, dark-themed portfolio website highlighting the work, capabilities, and journey of Darpan Parekh, Senior Odoo Developer & Technical Lead.

## Folder Structure

The repository is organized with a clean separation of concerns:
```
darpan.github.io/
├── index.html              # Markup & Page Structure
├── style.css               # Vanilla CSS Custom Styles (Premium Glassmorphic Dark Layout)
├── script.js               # Interaction, Reveal Animations & Active Page Tracking
├── Darpan_Parekh_Resume.pdf # Downloadable Resume PDF
└── README.md               # Project Documentation
```

## Features

- **Premium Dark Design**: Fully custom slate/indigo styling inspired by high-stakes developer dashboard layouts.
- **Glassmorphic Navigation**: Smooth sticky navigation with automatic section highlights on scroll.
- **Migration Path Strip**: A signature visual showcase tracking Odoo migrations from `v11` through `v18`.
- **Interactive Work Cards**: Showcase cards illustrating technical scopes, modules, and achievements.
- **Fully Responsive**: Optimized fluid breakpoints for mobile, tablet, and widescreen layouts.
- **No Build Steps**: Pure semantic HTML5, Vanilla CSS, and native JavaScript.

## How to Run Locally

You can run the portfolio locally using any basic HTTP server. For example:

### Python 3
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Node.js (http-server)
```bash
npx http-server -p 8000
```

## GitHub Pages Deployment

To update your live site at `https://darpan-parekh.github.io`:

1. Commit and push your changes to your `main` branch:
   ```bash
   git add .
   git commit -m "Update portfolio structure and separate styling"
   git push origin main
   ```
2. Your GitHub Pages site will automatically build and update within 1–2 minutes.
