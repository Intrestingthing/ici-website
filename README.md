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

Once the website is connected to the **ICI Portal** (see below), edit content there instead:
**portal.iciedu.org → Staff › Website** (announcements, offer banner, courses, events, gallery,
testimonials, contact details). Changes appear on the website within seconds, and enquiries from
the form arrive in **Staff › Enquiries**.

The built-in content lives in **`src/data/`**. The website falls back to it if the portal can't be
reached, and it's what you edit if the portal isn't connected. Open these files in any text editor
(or VS Code) and change the text between the quotes.

| What you want to change | File to edit |
|---|---|
| Phone, email, address, WhatsApp, social links, stats | `src/data/site.js` |
| Courses (add / edit / remove) | `src/data/courses.js` |
| Student reviews / testimonials | `src/data/testimonials.js` |
| Menu links | `src/data/nav.js` |

### Adding a course
Open `src/data/courses.js`, copy an existing `{ ... }` block, paste it, and change the text.
Make sure each `slug` is unique (lowercase-with-dashes). Set `featured: true` to show it on the
home page, and `distance: true` if it's available via distance learning.

### Connecting to the ICI Portal
The website reads its content from the portal and sends enquiries to it when these three settings
are present (in `.env.local` on the server, or the server's environment):

```
NEXT_PUBLIC_PORTAL_URL=https://portal.iciedu.org
REVALIDATE_SECRET=<the same value as in the portal>
ENQUIRY_SECRET=<the same value as in the portal>
```

Never commit these values. After changing them, run `npm run build` again and restart the site.
Without them the site works exactly as before: built-in content, and the enquiry form sends the
details via **WhatsApp**.

---

## 🎨 Branding

- **Logo:** `public/logo.svg` (and `src/app/icon.svg` for the browser tab). Replace these with your
  real logo to update it everywhere.
- **Colours:** change the `--color-brand-*` and `--color-accent-*` values at the top of
  `src/app/globals.css` to re-skin the whole site.
- **Gallery photos:** replace the placeholder images in `public/images/` with your real photos and
  update the list in `src/app/gallery/page.js`.

---

## 🌐 Putting it online

iciedu.org currently runs on its own server with `next start`. To update it:

```bash
git pull origin main
npm ci
npm run build
# then restart the running site (however it is started on the server, e.g. pm2 restart …)
```

Run a single instance: the portal's instant refresh clears the cache of the instance it reaches.

Alternatively, **Vercel** (the makers of Next.js) can host it: push to GitHub, import the project
on Vercel, and add the three settings above in Project Settings → Environment Variables.

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
