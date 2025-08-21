# 🚀 PeopleTech Final Project

<div align="center">

<a href="https://peopletechfinalproject.netlify.app/" target="_blank">
  <img src="[https://drive.google.com/file/d/1GGAe1KzAm_ncI-ERrTqE9PrhSppATBHx/view?usp=sharing]" alt="PeopleTech Final Project – Screenshot" width="85%" style="border-radius:14px; box-shadow:0 10px 30px rgba(0,0,0,.15);" />
<iframe src="https://drive.google.com/file/d/1GGAe1KzAm_ncI-ERrTqE9PrhSppATBHx/preview" width="640" height="480" allow="autoplay"></iframe>
</a>

<br/>

<a href="https://peopletechfinalproject.netlify.app/" target="_blank"><img alt="Live Site" src="https://img.shields.io/badge/Live%20Demo-peopletechfinalproject.netlify.app-00C7B7?logo=netlify&logoColor=white"></a> <img alt="Status" src="https://img.shields.io/badge/status-live-success?style=flat"> <img alt="Made with" src="https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-1f6feb?logo=javascript&logoColor=white">

<p><strong>Beautiful, responsive, and fast.</strong> Built for the PeopleTech final submission and deployed on Netlify.</p>

</div>

---

## 🔎 Overview

A polished, production-ready front‑end demonstrating clean UI/UX, responsive layout techniques, and a streamlined Netlify deployment workflow.

**Highlights:** accessibility-first markup, scalable CSS architecture, and lightweight JavaScript interactions.

---

## 🧭 Quick Links

* **Live Demo:** [https://peopletechfinalproject.netlify.app/](https://peopletechfinalproject.netlify.app/)
* **Preview Image:** [https://peopletechfinalproject.netlify.app/screenshot.png](https://peopletechfinalproject.netlify.app/screenshot.png)
* **Issues / Feedback:** Open a GitHub Issue on this repo

---

## ✨ Features

* 🎯 **Responsive by default** – fluid grid, adaptive typography, and mobile‑first layout
* 🎨 **Modern UI** – cohesive color system, soft shadows, and smooth micro‑interactions
* ⚡ **Fast loads** – lean assets, optimized media, and cache‑friendly delivery
* 🔒 **Robust structure** – clear folders, reusable components, and self‑documented code
* 🚀 **1‑click deploy** – Netlify‑ready, with sensible production headers

---

## 🧰 Tech Stack

* **Frontend:** HTML • CSS • JavaScript
* **Hosting & CI/CD:** Netlify (Preview builds, Rollbacks)
* **Tooling (optional):** Prettier • ESLint

> If you used a framework (React/Vite/Next/etc.), add it here. This template works perfectly for vanilla or framework projects.

---

## 🖼️ Screenshots

<div align="center">
  <img src="https://peopletechfinalproject.netlify.app/screenshot.png" alt="Homepage Screenshot" width="85%" style="border-radius:12px; box-shadow:0 12px 28px rgba(0,0,0,.12);" />
  <p><em>Homepage – clean hero, clear call‑to‑action, and responsive grid.</em></p>
</div>

---

## 🛠️ Getting Started (Local)

```bash
# 1) Clone
git clone https://github.com/your-username/peopletech-final-project.git
cd peopletech-final-project

# 2) Install dependencies (if any)
# For plain HTML/CSS/JS you can skip. If using npm-based tooling:
# npm install

# 3) Run a local dev server (pick one)
# Simple Python server
python -m http.server 5173
# or VS Code Live Server extension
# or any static server like: npx serve .

# 4) Visit
http://localhost:5173
```

> Using a framework? Replace the steps above with your framework’s commands (e.g., `npm run dev` for Vite/Next).

---

## 📁 Project Structure (suggested)

```
peopletech-final-project/
├─ public/              # static assets (images, icons, fonts)
├─ src/                 # source files
│  ├─ styles/           # CSS (or SCSS) modules / utilities
│  ├─ scripts/          # JS modules
│  ├─ components/       # reusable UI
│  └─ index.html        # entry point
├─ netlify.toml         # Netlify config (headers/redirects)
├─ package.json         # scripts & tooling (optional)
└─ README.md
```

---

## 🧪 Quality & Conventions

* **Naming:** BEM/utility‑first hybrid CSS
* **Formatting:** Prettier for consistent code style
* **Linting:** ESLint for JavaScript best practices
* **Accessibility:** Semantic HTML, proper contrast, and labeled controls

> Run `npm run format` and `npm run lint` if you’ve configured them.

---

## 🚀 Deploying to Netlify

1. **Connect repository** on Netlify
2. **Build settings:**

   * *Build command:* `npm run build` (or leave empty for static sites)
   * *Publish directory:* `dist/` or project root for static HTML
3. **Environment variables:** Add any API keys if needed
4. **Preview deploys:** Automatic on each PR/commit

**Optional `netlify.toml`**

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## 📦 Scripts (examples)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint \"src/**/*.js\"",
    "format": "prettier --write ."
  }
}
```

> If you’re not using Vite or tooling, remove this section.

---

## 📈 Roadmap

* [ ] Add dark mode & theme switcher
* [ ] Add Lighthouse CI badge
* [ ] Expand components library
* [ ] Write end‑to‑end tests

---

## 🙌 Acknowledgements

* Netlify for buttery‑smooth deploys
* PeopleTech mentors and peers for feedback

---

## 📝 License

This project is licensed under your preferred license (MIT recommended). Add a `LICENSE` file at the repo root.

---

## 📨 Contact

Have feedback or ideas? Open an issue or reach me on **LinkedIn/GitHub**.

<div align="center">
  <sub>Made with ❤️ for the PeopleTech Final Submission.</sub>
</div>
