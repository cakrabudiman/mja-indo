# PT. Matahari Jaya Abadi Website

Static corporate website built with HTML5, CSS3, and vanilla JavaScript.

## Project structure

```text
.
├── index.html              # Home page
├── pages/
│   ├── about.html
│   ├── business.html
│   ├── contact.html
│   ├── news.html
│   └── projects.html
├── product/
│   └── index.html          # Products page
├── assets/
│   ├── icons/
│   └── images/             # Images grouped by page or purpose
├── css/                    # Shared styles
└── js/
    ├── shared/             # JavaScript used across pages
    └── pages/              # Page-specific JavaScript
```

## Run locally

Open `index.html` directly in the browser or serve the folder with a local static server:

```bash
python -m http.server 8000
```

Then open http://localhost:8000

## Pages

- `index.html`
- `pages/about.html`
- `pages/business.html`
- `product/index.html`
- `pages/projects.html`
- `pages/news.html`
- `pages/contact.html`

## Notes

This project is intentionally static and framework-free, as required.
