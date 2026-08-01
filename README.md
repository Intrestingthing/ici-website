# Indian Computer Institute (ICI) — Website

A modern, responsive website for Indian Computer Institute built with **Next.js**, **React** and
**Tailwind CSS**. It showcases courses, distance learning, a gallery, testimonials and an
enquiry/admission form.

---

## 🚀 Running the website on your computer

You only need [Node.js](https://nodejs.org) installed (already done if you got this far).

```bash
npm install      # first time only — installs everything
npm run dev      # start the website locally
```

Then open **http://localhost:3000** in your browser. The site reloads automatically as you edit.

To build the final version for hosting:

```bash
npm run build    # create the optimized production build
npm start        # preview the production build
```

---

## ✏️ How to edit content (no coding needed)

All the content you'll normally change lives in **`src/data/`**. Open these files in any text
editor (or VS Code) and change the text between the quotes.

| What you want to change | File to edit |
|---|---|
| Phone, email, address, WhatsApp, social links, stats, Formspree | `src/data/site.js` |
| Courses (add / edit / remove) | `src/data/courses.js` |
| Student reviews / testimonials | `src/data/testimonials.js` |
| Menu links | `src/data/nav.js` |

### Adding a course
Open `src/data/courses.js`, copy an existing `{ ... }` block, paste it, and change the text.
Make sure each `slug` is unique (lowercase-with-dashes). Set `featured: true` to show it on the
home page, and `distance: true` if it's available via distance learning.

### Receiving enquiry form submissions by email
1. Create a free account at **https://formspree.io**
2. Create a new form and copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`)
3. Paste it into `formspreeEndpoint` in `src/data/site.js`

Until you do this, the enquiry form sends details via **WhatsApp** instead (using the number in
`site.js`), so it works out of the box.

---

## 🎨 Branding

- **Logo:** `public/logo.svg` (and `src/app/icon.svg` for the browser tab). Replace these with your
  real logo to update it everywhere.
- **Colours:** change the `--color-brand-*` and `--color-accent-*` values at the top of
  `src/app/globals.css` to re-skin the whole site.
- **Gallery photos:** replace the placeholder images in `public/images/` with your real photos and
  update the list in `src/app/gallery/page.js`.

---

## 🌐 Putting it online (free)

The easiest option is **Vercel** (the makers of Next.js):
1. Create a free account at https://vercel.com
2. Push this folder to GitHub (or use the Vercel CLI)
3. Import the project on Vercel — it deploys automatically.

---

## 📁 Project structure

```
src/
  app/          → the pages (home, courses, about, contact, etc.)
  components/   → reusable building blocks (navbar, footer, cards, form)
  data/         → ✏️ your editable content (site, courses, testimonials)
public/
  logo.svg      → your logo
  images/       → gallery & hero images
```
