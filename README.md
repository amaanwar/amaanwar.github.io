# Ama Anwar — Personal Website

A lightweight, responsive portfolio for GitHub Pages. No build tools, dependencies, or accounts required.

## How to edit

**Most changes only require editing `content.js`.**

- Change the typewriter line: `typingText`
- Change the intro and About section: `introduction` and `about`
- Add or edit research projects: the `projects` array
- Edit job titles and years: the `experiences` array
- Replace example email, LinkedIn and GitHub links: the `contacts` array
- Change colors or fonts: the variables at the top of `styles.css`
- Change page layout or headings: `index.html`

The site uses `script.js` for the typing effect and project pop-up windows. You generally won't need to edit it.

## Add your own project images

1. Copy your image into `assets/`, e.g. `assets/brain-mri.jpg`.
2. In `content.js`, find the matching project and set `image: "assets/brain-mri.jpg"`.
3. If no image is specified, an abstract color illustration appears automatically.

Only use research images you have permission to publish. Remove confidential or unpublished figures as needed.

## Preview locally

Open `index.html` in your browser. No local server is necessary.

## Publish on GitHub Pages

1. Create a public GitHub repository named `YOUR_USERNAME.github.io` (or use an existing Pages repository).
2. Upload the **contents** of this folder to the repository root (not the enclosing folder).
3. Go to Settings → Pages → Build and deployment → Deploy from a branch.
4. Select `main` and `/ (root)`; save.
5. Visit `https://YOUR_USERNAME.github.io/` after deployment.

For a normal project repository, the site URL is `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`.

## Files

- `index.html` — page structure
- `styles.css` — all visual styling and responsive layout
- `content.js` — **your editable content**
- `script.js` — interactivity and rendering
- `assets/` — your images (add files here)

## Before publishing

- Replace placeholder contact URLs and email.
- Verify all biographical and project descriptions and dates.
- Add approved research images when available.
