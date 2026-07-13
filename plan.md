# Real Estate Landing Page — Next.js Full-Stack App

## Context

Build a real estate landing page as a Next.js full-stack app in this folder (currently empty — greenfield).

- **Features:** lead capture form + featured property listings
- **Data:** no real database yet — mock data in code; API routes validate/log and echo back (persistence can be added later)
- **Styling:** Tailwind CSS only (no component library)

The "full stack" aspect comes from API routes: a `POST /api/leads` endpoint the lead form submits to, and a `GET /api/properties` endpoint serving listings.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS (comes with `create-next-app`)
- No other dependencies (validation done manually, no DB/ORM)

## Steps

### 1. Scaffold the project

Run in the project folder:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

Configure `next.config.ts` with `images.remotePatterns` for `images.unsplash.com` so `next/image` can load free stock property photos.

### 2. Mock data & types — `src/lib/properties.ts`

- `Property` type: `id`, `title`, `address`, `price`, `beds`, `baths`, `sqft`, `imageUrl`, `tag` ("For Sale" / "New" / "Featured")
- Export ~6 hardcoded properties with Unsplash image URLs

### 3. API routes

- **`src/app/api/properties/route.ts`** — `GET` returns the mock property list as JSON
- **`src/app/api/leads/route.ts`** — `POST` accepts `{ name, email, phone?, message }`; manually validates required fields and email format; returns `400` with field errors or `200` with a success payload; logs the lead to the server console (stand-in for future DB write)

### 4. Landing page sections — components in `src/components/`

`src/app/page.tsx` composes these top to bottom:

1. **`Navbar`** — logo/brand, anchor links to sections (#listings, #about, #contact), "Get in Touch" CTA button
2. **`Hero`** — full-width background image, headline ("Find Your Dream Home"), subheading, CTA buttons scrolling to listings/contact
3. **`FeaturedListings`** — server component reading directly from `lib/properties.ts`; responsive grid (1/2/3 cols) of **`PropertyCard`**s (image via `next/image`, price, title, address, beds/baths/sqft, tag badge)
4. **`Stats`** — small band with 3–4 numbers (homes sold, happy clients, years of experience with count animation when enter into view port) 
5. **`LeadForm`** — client component (`"use client"`); controlled inputs for name/email/phone/message; submits to `POST /api/leads` with `fetch`; shows loading, inline validation errors, and success/error states
6. **`Footer`** — brand blurb, quick links, contact info

### 5. Polish

- Update `src/app/layout.tsx` metadata (title/description) and font
- Smooth-scroll anchors, hover states on cards/buttons, mobile-responsive layout throughout
- Delete the default `create-next-app` boilerplate content

## Files created/modified

```
next.config.ts                        (image domains)
src/app/layout.tsx                    (metadata, font)
src/app/page.tsx                      (compose sections)
src/app/api/properties/route.ts       (GET listings)
src/app/api/leads/route.ts            (POST lead, validate + log)
src/lib/properties.ts                 (types + mock data)
src/components/Navbar.tsx
src/components/Hero.tsx
src/components/FeaturedListings.tsx
src/components/PropertyCard.tsx
src/components/Stats.tsx
src/components/LeadForm.tsx
src/components/Footer.tsx
```

## Verification

1. `npm run dev` → open http://localhost:3000; confirm all sections render and layout is responsive (resize/narrow the window)
2. `curl http://localhost:3000/api/properties` → returns the 6 mock listings as JSON
3. Submit the lead form with missing/invalid email → inline error shown; `curl -X POST http://localhost:3000/api/leads -H 'Content-Type: application/json' -d '{}'` → `400` with field errors
4. Submit valid form → success message in UI, lead logged in the dev server console
5. `npm run build` → production build passes with no type/lint errors
