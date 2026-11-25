# Lumé Beauty Studio website

A static website for Lumé Beauty Studio (Papakura, Auckland), built from the
"Lumé Website and Booking Kit" doc. No build step: open `index.html` in a browser.

## Pages
| File | Page |
|---|---|
| `index.html` | Home (hero, about, gallery, why Lumé) |
| `services.html` | Services & looks, good to know, how to prepare |
| `prices.html` | Studio and on-location prices |
| `how-to-book.html` | 6-step booking process and 30/20/50 payment schedule |
| `availability.html` | Studio hours + free/busy calendar |
| `booking-terms.html` | Booking agreement |

## Before you go live
1. **Links** – edit the `LUME` block at the top of `js/main.js`:
   - `enquiryForm`: your Google Form link (every "Enquire now" button uses it)
   - `calendarEmbed`: your "Lumé bookings" Google Calendar embed URL (free/busy only)
   - `instagram`, `email`
2. **Photos** – put your work in `images/` and swap the placeholder tiles in the
   gallery on `index.html` (and the hero arch) for `<img>` tags; comments in the
   HTML show where.
3. **Intro banner** – hides automatically from 1 December 2026 (`introBannerUntil`).
4. Confirm on-location fees, studio hours and bridal quotes (see the kit's
   "Things to confirm" list).

## Hosting
Any static host works, e.g. GitHub Pages (Settings → Pages → deploy from this
branch), Netlify or Cloudflare Pages. Point your own domain (such as
lumebeautystudio.co.nz) at it when ready.
