# OneOkRock Fan Page

A static fan-run hub for **OneOkRock** — news, tour dates, discography, photo gallery, and community. Built with plain HTML, CSS, and vanilla JS — no build step, no dependencies.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| About / Band | `about.html` |
| Discography | `discography.html` |
| Tour Dates | `tour.html` |
| Gallery | `gallery.html` |
| Contact | `contact.html` |

## Project structure

```
oneokrock-fanpage/
├── index.html
├── about.html
├── discography.html
├── tour.html
├── gallery.html
├── contact.html
├── assets/
│   ├── css/styles.css     # Theme + components
│   └── js/main.js         # Mobile nav, lightbox, tour filter, contact form
└── README.md
```

## Local preview

The site is fully static. Any of these work:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then open <http://localhost:8000>.

## Deploy

Drop the folder onto any static host:

- **GitHub Pages** — push to `main`, enable Pages on `/` (or `/docs`).
- **Netlify** — drag-and-drop the folder at <https://app.netlify.com/drop>.
- **Vercel** — `vercel deploy` from the project root.
- **Cloudflare Pages** — connect the repo, no build command needed.

## Features

- **Responsive layout** — mobile-first grid that collapses cleanly at 720px.
- **Accessible nav** — toggle button with `aria-expanded`, keyboard-friendly links.
- **Gallery lightbox** — click any photo to enlarge; closes on overlay click or `Esc`.
- **Tour region filter** — chips filter the dates table by region.
- **Contact form** — front-end validation with mailto fallback for the static deployment.

## Design system

| Token | Value |
|---|---|
| Background | `#0b0d12` |
| Surface | `#161a23` |
| Accent | `#ff2a3c` (signal red) |
| Highlight | `#ffb84a` |
| Text | `#eef1f8` |
| Muted | `#98a0b3` |
| Radius | `14px` |
| Max width | `1140px` |

Album art is rendered with CSS gradients keyed off `data-color="1..6"` so the site looks complete even before real photos are added.

## Notes

- This is an **unofficial fan project**, not affiliated with OneOkRock or their label.
- Tour dates are fan-compiled — always verify with the venue and the band's official channels before traveling.
- To add real album art and tour dates, drop images into `assets/img/` and update the markup / table.

## License

Content under fair use for fan commentary. Code: MIT.
