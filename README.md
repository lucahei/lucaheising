
# Luca Heising — Website (GitHub Pages)

A fast, accessible, mobile-friendly academic website you can deploy on **GitHub Pages** in minutes.

## Quick start

1. **Create a repo** on GitHub (public). Name it anything (e.g., `website`).
2. **Upload these files** (or push via Git):
   ```bash
   git init && git add . && git commit -m "Initial site" && git branch -M main && git remote add origin <your-repo-url> && git push -u origin main
   ```
3. **Enable Pages** (two options):
   - **Using Actions (recommended):** Go to **Settings → Pages**, set **Source** to **GitHub Actions**. The included workflow will publish automatically on push.
   - **Deploy from a branch:** In **Settings → Pages**, choose **Branch: `main`**, **Folder: `/ (root)`**. (You may delete `.github/workflows/pages.yml` if you choose this.)
4. Your site will be live at `https://<your-username>.github.io/<repo>/` (or `https://<your-username>.github.io` if you name the repo `<username>.github.io`).

## Customize

- Update text in `index.html`, `research.html`, `publications.html`, `teaching.html`, `contact.html`.
- Replace `/assets/img/profile-placeholder.svg` with your own photo (same filename) and update social links.
- Colors: adjust CSS variables at the top of `assets/css/style.css`.
- Add a custom domain: create a `CNAME` file in the repo root containing your domain (e.g., `lucaheising.com`) and set a DNS **CNAME** to `<username>.github.io`.
- Prevent Jekyll processing: `/.nojekyll` file is included so folders starting with `_` serve correctly.

## Structure

```
assets/
  css/style.css
  js/main.js
  img/
.github/workflows/pages.yml
index.html
research.html
publications.html
teaching.html
contact.html
.nojekyll
```

## Tips
- Keep file names lowercase and use hyphens.
- For analytics without cookies, consider Plausible or similar.
- Use alt text on images; keep contrast high for accessibility.

---
Made with ♥︎
