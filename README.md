# Watch Party Around India

Website for WWDC Watch Party Around India, built with React, TypeScript, Vite, and Tailwind CSS.

## Getting Started

Install dependencies:

```sh
npm install
```

Run the local dev server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Run lint checks:

```sh
npm run lint
```

## Routes

The site includes a landing page plus city pages:

- `/hyderabad`
- `/delhi`
- `/bangalore`
- `/mumbai`
- `/ahmedabad`
- `/surat`
- `/chennai`
- `/kozhikode`
- `/pune`
- `/nagpur`

City routes are handled by `/:citySlug` in `src/main.tsx`.

## Data Architecture

The app is data-driven. UI components should import from `src/data/city-events.ts`:

```ts
import { cityEvents, getCityEventBySlug } from "../data/city-events";
```

`src/data/city-events.ts` is the aggregator. It combines:

- base city event files (`src/data/city-events/<city>.ts`)
- tagged member assignments (`src/data/team-members.ts`)

and produces:

- `teamMembers` for each city page
- `speakers` for each city page
- `venueSponsors` for the homepage

## Where To Update City Event Details

Edit the matching file in `src/data/city-events/`:

- `ahmedabad.ts`
- `bangalore.ts`
- `chennai.ts`
- `delhi.ts`
- `hyderabad.ts`
- `kozhikode.ts`
- `mumbai.ts`
- `surat.ts`
- `pune.ts`
- `nagpur.ts`

Each file exports one `CityEvent` object.

Common fields:

- `slug`: URL segment, for example `hyderabad` for `/hyderabad`
- `aliases`: misspellings or legacy slugs to auto-redirect
- `city`, `chapterName`
- `date`, `time`, `startDate`, `endDate`
- `venue`, `address`, `structuredAddress`, `location`, `mapUrl`
- `lumaUrl` (optional): when missing, register buttons fall back to `mapUrl`
- `sponsorName`, `sponsorLogo`, `sponsorDescription`, `sponsorWebsite`
- `gradient`
- `description`
- `highlights`
- `agenda`

Use ISO 8601 with `+05:30` for schema dates:

```ts
startDate: "2026-06-09T19:00:00+05:30";
endDate: "2026-06-10T00:30:00+05:30";
```

## Member Tagging System

City team members and speakers are assigned in `src/data/team-members.ts`.

Each profile can define `cityAssignments` with tags:

```ts
cityAssignments: [
  { city: "hyderabad", role: "Organizer", kind: "team" },
  {
    city: "hyderabad",
    role: "Speaker",
    kind: "speaker",
    sessionTitle: "What is new in SwiftUI",
    sessionDescription: "A quick walkthrough of key WWDC updates.",
    tags: ["SwiftUI", "WWDC26"],
  },
];
```

Rules:

- `city` must match the city slug (for example `hyderabad`, `bangalore`)
- `kind` defaults to `team` when omitted
- no cap on number of members per city
- one person can appear in multiple cities
- cards show assignment tags (`City`, `Type`, `Role`, custom tags)

City page sections are generated automatically:

- `{chapterName} Team Members`
- `{chapterName} Speakers` (only when speaker assignments exist)

## Homepage Dynamic Sections

These sections are auto-generated from data:

- `Register Now`: uses `cityEvents`; card logo uses sponsor logo when available, else chapter logo
- `Venue Sponsors`: uses `venueSponsors` derived from city event sponsor fields

## Luma Registration Behavior

City page register CTAs:

- top-right action button
- registration card button

Behavior:

- if `lumaUrl` exists, CTA points to Luma
- if `lumaUrl` is missing, CTA points to `mapUrl`

## Structured Data

JSON-LD is generated in `src/components/event-structured-data.tsx` from city event data.

Keep these fields accurate:

- `startDate`
- `endDate`
- `venue`
- `structuredAddress`
- `lumaUrl` or `mapUrl`
- `description`
- `chapterName`

Reference:

- https://developers.google.com/search/docs/appearance/structured-data/event

## Adding A New City

1. Add assets under `src/assets/` as needed.
2. Create `src/data/city-events/<city>.ts`.
3. Export a `CityEvent` object.
4. Import and include it in `src/data/city-events.ts`.
5. Add `aliases` if needed.
6. Add member tags in `src/data/team-members.ts` using `cityAssignments`.
7. Run `npm run lint` and `npm run build`.

## Routing And GitHub Pages

Clean URLs work with fallback files:

- `src/main.tsx`
- `public/404.html`
- `index.html`
- `public/CNAME`

## Important Files

- `src/components/register-now.tsx`
- `src/components/sponsors.tsx`
- `src/components/city-event-page.tsx`
- `src/components/event-structured-data.tsx`
- `src/data/city-events.ts`
- `src/data/city-events/types.ts`
- `src/data/team-members.ts`
