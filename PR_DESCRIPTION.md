# PR: Add Clean City Event Pages With Per-City Data

Target branch: `main`

## Summary

This PR adds clean city-specific event pages for WWDC Watch Party Around India and moves city event content into structured, per-city TypeScript data files. Each city now owns its own agenda, Luma registration link, venue details, sponsor details, and Event schema data.

## What Changed

- Added clean city routes like `/hyderabad`, `/delhi`, `/bangalore`, `/mumbai`, `/ahmedabad`, `/surat`, `/chennai`, and `/kozhikode`.
- Added a reusable city event page for city-specific landing pages.
- Added per-city event data files under `src/data/city-events/`.
- Kept a stable city data export through `src/data/city-events.ts`.
- Added city-specific agendas so each city can have a different schedule.
- Added Event structured data JSON-LD for city pages.
- Updated homepage registration cards to route to the clean city pages.
- Fixed city page Register buttons so both links open the correct Luma event page for the active city.
- Added GitHub Pages fallback handling for clean browser routes.
- Added project README documentation for updating city pages, agendas, Luma links, and schema fields.

## City Data Structure

Each city has its own file:

- `src/data/city-events/ahmedabad.ts`
- `src/data/city-events/bangalore.ts`
- `src/data/city-events/chennai.ts`
- `src/data/city-events/delhi.ts`
- `src/data/city-events/hyderabad.ts`
- `src/data/city-events/kozhikode.ts`
- `src/data/city-events/mumbai.ts`
- `src/data/city-events/surat.ts`

The root `src/data/city-events.ts` file imports these city blocks and exports `cityEvents` plus `getCityEventBySlug`.

## Notes

- Luma is linked directly instead of embedded because Luma event pages block iframe rendering with frame protection headers.
- `/hyderbad` is supported as an alias and redirects to `/hyderabad`.
- Structured data follows Google's Event schema guidance and is generated from the same city data used by the UI.

## Testing

- `npm run lint`
- `npm run build`
- Verified `/hyderabad`, `/chennai`, `/delhi`, `/kozhikode`, and `/hyderbad` with headless Chrome.
- Verified Hyderabad renders Event JSON-LD.
- Verified both Hyderabad Register buttons point to `https://lu.ma/jehijqln`.

## Review Checklist

- Confirm each city has the correct Luma URL.
- Confirm each city agenda is final or marked for organizer review.
- Confirm venue addresses and schema dates are accurate.
- Confirm clean URLs work after deployment to GitHub Pages.
