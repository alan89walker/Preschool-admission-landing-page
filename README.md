# Preschool-admission-landing-page
A warm and welcoming preschool admission landing page designed to impress parents. It highlights a safe, joyful learning environment, caring teachers, and engaging activities. With a responsive design and clear call-to-action sections, parents can easily explore programs, book visits, and begin their child’s learning journey.
=======
# SpacECE India Foundation — Preschool Landing Page

> *"A space where every child shines and grows with confidence."*

A production-ready, fully responsive HTML/CSS/JS landing page for **SpacECE India Foundation** — a child-centered preschool in Dhayari, Pune, offering Toddler Program, Play Group, and Nursery programs inspired by the Reggio Emilia approach.

---

## 🌐 Live Preview

Once deployed, visit: [https://www.spacece.in/](https://www.spacece.in/)

---

## 📁 Folder Structure

```
spacECE-preschool/
│
├── index.html              # Main landing page (semantic HTML5)
│
├── css/
│   └── style.css           # All styles — variables, layout, responsive
│
├── js/
│   └── script.js           # Interactions, animations, form handling
│
├── assets/
│   ├── images/
│   │   ├── spaxeece_logo.jpg    # Brand logo
│   │   └── gallery/             # Gallery images (add as needed)
│   └── icons/                   # Custom SVG icons (add as needed)
│
└── README.md               # This file
```

---

## ✨ Features

- **Semantic HTML5** — Proper heading hierarchy, ARIA attributes, accessible markup
- **SEO Ready** — Meta description, keywords, Open Graph, Twitter Card tags
- **Fully Responsive** — Mobile-first, tested at 320px → 1440px+
- **CSS Variables** — Centralized color/spacing system, easy to retheme
- **Scroll Reveal** — IntersectionObserver-based animations on scroll
- **Counter Animation** — Stats animate from 0 on first view
- **Mobile Navigation** — Hamburger toggle with focus trap and ESC key close
- **Enrollment Form** — Client-side validation with toast notification
- **Back to Top** — Appears after 500px scroll, smooth return
- **Sticky Header** — Transparent → solid with shadow on scroll
- **Active Nav Highlighting** — Automatically highlights current section link
- **Card Tilt Effects** — Subtle 3D tilt on hover (desktop only)
- **Print-Friendly** — Hides interactive UI elements when printing

---

## 🎨 Brand Guidelines

| Token | Value | Usage |
|---|---|---|
| `--gold` | `#F4A300` | Primary CTAs, accents, highlights |
| `--gold-dark` | `#d48e00` | Hover states for gold elements |
| `--gold-pale` | `#fff7e0` | Backgrounds, tags, chips |
| `--black` | `#000000` | Text, dark sections |
| `--white` | `#ffffff` | Clean section backgrounds |
| `--off-white` | `#f8f8f4` | Alternate section backgrounds |

**Fonts:**
- Display/Headings: `Fraunces` (Google Fonts) — warm, editorial serif
- Body: `DM Sans` (Google Fonts) — clean, readable sans-serif

---

## 🚀 Setup Instructions

### Local Development

1. **Clone or download the repository:**
   ```bash
   git clone https://github.com/your-username/spaceece-preschool.git
   cd spaceece-preschool
   ```

2. **Ensure your logo is in place:**
   ```
   assets/images/spaxeece_logo.jpg
   ```

3. **Open in a browser:**
   - Simply open `index.html` in any modern browser
   - Or use a local server for best results:

   ```bash
   # Using Python
   python3 -m http.server 8000

   # Using Node.js (npx)
   npx serve .

   # Using VS Code Live Server extension
   # Right-click index.html → Open with Live Server
   ```

4. **Visit:** `http://localhost:8000`

---

## 📦 Deployment Guide

### Option 1: GitHub Pages (Free)

```bash
# 1. Push code to GitHub
git init
git add .
git commit -m "feat: initial landing page"
git remote add origin https://github.com/your-username/spaceece-preschool.git
git push -u origin main

# 2. Enable GitHub Pages
# → Go to repo Settings → Pages → Source: main branch → /root
# → Site will be live at: https://your-username.github.io/spaceece-preschool/
```

### Option 2: Netlify (Recommended)

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Deploy
netlify deploy --prod --dir=.

# Or drag-and-drop the folder at netlify.com/drop
```

### Option 3: Vercel

```bash
npm install -g vercel
vercel --prod
```

### Option 4: Traditional Web Hosting (cPanel/FTP)

Upload all files maintaining the same folder structure via FTP or File Manager. Ensure `index.html` is in the root directory.

---

## 📝 Git Commit Message Examples

```bash
git commit -m "feat: add hero section with animated illustration"
git commit -m "feat: add programs section with 3 program cards"
git commit -m "feat: implement mobile hamburger menu with a11y"
git commit -m "fix: correct scroll offset calculation for sticky header"
git commit -m "style: refine card hover effects and transitions"
git commit -m "chore: optimize logo image for web"
git commit -m "docs: update README with deployment instructions"
git commit -m "a11y: add aria-labels to all interactive elements"
git commit -m "feat: add counter animation to stats strip"
git commit -m "fix: enrollment form validation edge cases"
```

---

## ⚡ Performance Optimization Tips

### Images
- Convert all `.jpg`/`.png` to **WebP** format (50–70% smaller):
  ```bash
  # Using cwebp
  cwebp assets/images/spaxeece_logo.jpg -o assets/images/spaxeece_logo.webp
  ```
- Add `width` and `height` attributes to all `<img>` tags (already done!)
- Use `loading="lazy"` on below-fold images

### Fonts
- Fonts are loaded via Google Fonts with `display=swap` — already done
- Consider hosting fonts locally for fastest load:
  ```bash
  # Download via google-webfonts-helper
  # https://gwfh.mranftl.com/fonts
  ```

### CSS & JS
- Minify for production:
  ```bash
  npm install -g cssnano-cli uglify-js
  cssnano css/style.css css/style.min.css
  uglifyjs js/script.js -o js/script.min.js -m
  ```
- Update HTML to reference `.min.css` and `.min.js` in production

### General
- Enable **gzip/Brotli compression** on your web server
- Set appropriate **Cache-Control headers** for static assets
- Use a **CDN** for images if possible (Cloudflare, BunnyCDN)
- Check performance via [PageSpeed Insights](https://pagespeed.web.dev/)

### Accessibility Checklist
- ✅ All images have `alt` attributes
- ✅ Semantic HTML with proper heading hierarchy (h1 → h6)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation works (Tab, Enter, Escape)
- ✅ Sufficient color contrast (gold on black = AA pass)
- ✅ Focus styles visible for keyboard users

---

## 🔧 Customization

### Change Brand Colors
Edit `css/style.css`, section `CSS VARIABLES & RESET`:
```css
:root {
  --gold: #F4A300;       /* Change to your brand color */
  --black: #000000;      /* Change primary dark color */
}
```

### Update Contact Information
In `index.html`, search for "Raikar Nagar" and update the address block.

### Add Real Images
Replace the CSS-drawn placeholder gallery scenes with real photos:
```html
<!-- In the gallery section, replace: -->
<div class="gallery__placeholder gallery__placeholder--1">
<!-- With: -->
<img src="assets/images/gallery/nature-play.jpg" alt="Children exploring nature at SpacECE" />
```

---

## 📞 Contact

**SpacECE India Foundation – Udaan Center Foundation**  
Near Murli Veg Hotel, Bhagvat Bungalow  
Raikar Nagar, Dhayari, Pune

🌐 [https://www.spacece.in/](https://www.spacece.in/)

---

*Built with ❤️ for early childhood education. Crafted to help every child find their perfect beginning.*