# Watch Party Around India

Website for WWDC Watch Party Around India, built with React, TypeScript, Vite, and Tailwind CSS.

The site has a main landing page plus clean city URLs such as:

- `/hyderabad`
- `/delhi`
- `/bangalore`
- `/mumbai`
- `/ahmedabad`
- `/surat`
- `/chennai`
- `/kozhikode`

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

## City Pages

Each city page is powered by data in `src/data/city-events/`.

The root export is `src/data/city-events.ts`. Keep importing from this file in components:

```ts
import { cityEvents, getCityEventBySlug } from "../data/city-events";
```

Do not import city files directly from UI components unless there is a strong reason. The aggregator keeps the public API stable.

## Where To Update A City

Edit the matching city file:

- `src/data/city-events/ahmedabad.ts`
- `src/data/city-events/bangalore.ts`
- `src/data/city-events/chennai.ts`
- `src/data/city-events/delhi.ts`
- `src/data/city-events/hyderabad.ts`
- `src/data/city-events/kozhikode.ts`
- `src/data/city-events/mumbai.ts`
- `src/data/city-events/surat.ts`

Each file exports one `CityEvent` object. This controls the city page, home registration card, Luma registration links, and structured data.

Common fields to update:

- `slug`: clean URL path, for example `hyderabad` creates `/hyderabad`.
- `aliases`: alternate spellings that should redirect to the canonical slug, for example `hyderbad`.
- `city` and `chapterName`: page title and organizer display text.
- `date`, `time`, `startDate`, `endDate`: visible time and Event schema dates.
- `venue`, `address`, `structuredAddress`, `location`, `mapUrl`: location card and structured data.
- `lumaUrl`: used by both Register buttons and Event schema offer URL.
- `sponsorName` and `sponsorLogo`: venue partner block.
- `gradient`: city card/page accent colors.
- `highlights`: short badges below the hero copy.
- `agenda`: city-specific schedule shown in the "What to expect" section.

Use ISO 8601 dates with the India timezone offset for schema fields:

```ts
startDate: "2025-06-09T19:00:00+05:30",
endDate: "2025-06-10T00:30:00+05:30",
```

## Updating A City Agenda

Agendas are intentionally city-specific. Update the `agenda` array inside the relevant city file:

```ts
agenda: [
  {
    time: "7:00 PM",
    title: "Doors open",
    description: "Check in and meet the local community.",
  },
  {
    time: "10:30 PM",
    title: "WWDC keynote watch",
    description: "Watch the keynote live with the city chapter.",
  },
],
```

The page renders agenda items automatically from this array.

## Adding A New City

1. Add organizer and sponsor assets under `src/assets/2025/` if needed.
2. Create a new file in `src/data/city-events/<city>.ts`.
3. Export a `CityEvent` object from that file.
4. Import the new city event in `src/data/city-events.ts`.
5. Add it to the `cityEvents` array.
6. Add aliases if old links or common misspellings should redirect.
7. Run `npm run lint` and `npm run build`.

The clean URL is handled by the router route `/:citySlug` in `src/main.tsx`.

## Luma Registration

Luma pages are linked directly through `lumaUrl`. The city page has two registration links:

- Top-right `Register`
- Card button `Register on Luma`

Both buttons use the city-specific `lumaUrl`.

Luma event pages are not embedded in an iframe because Luma blocks iframe rendering with frame protection headers. Keep registration as a direct link unless Luma changes that behavior.

## Structured Data

Event JSON-LD is generated in `src/components/event-structured-data.tsx` from each `CityEvent`.

When changing event details, make sure these fields are accurate:

- `startDate`
- `endDate`
- `venue`
- `structuredAddress`
- `lumaUrl`
- `description`
- `chapterName`

Google's Event structured data documentation is here:

https://developers.google.com/search/docs/appearance/structured-data/event

## Routing And GitHub Pages

The app uses browser routes for clean URLs. GitHub Pages needs a fallback so direct visits to `/hyderabad` still load the React app.

Relevant files:

- `src/main.tsx`: app routes.
- `public/404.html`: GitHub Pages fallback redirect.
- `index.html`: restores clean paths from the fallback redirect.
- `public/CNAME`: custom domain config.

## Important Components

- `src/components/register-now.tsx`: city cards on the homepage.
- `src/components/city-event-page.tsx`: city page layout and Register buttons.
- `src/components/event-structured-data.tsx`: Event schema JSON-LD.
- `src/data/city-events.ts`: public city event list and slug lookup.
- `src/data/city-events/types.ts`: shared city data types.
