import { ahmedabadEvent } from "./city-events/ahmedabad";
import { bangaloreEvent } from "./city-events/bangalore";
import { chennaiEvent } from "./city-events/chennai";
import { delhiEvent } from "./city-events/delhi";
import { hyderabadEvent } from "./city-events/hyderabad";
import { kozhikodeEvent } from "./city-events/kozhikode";
import { mumbaiEvent } from "./city-events/mumbai";
import { suratEvent } from "./city-events/surat";
import type { CityEvent } from "./city-events/types";

export type { CityEvent } from "./city-events/types";

export const cityEvents: CityEvent[] = [
  bangaloreEvent,
  mumbaiEvent,
  ahmedabadEvent,
  suratEvent,
  chennaiEvent,
  delhiEvent,
  hyderabadEvent,
  kozhikodeEvent,
];

export const getCityEventBySlug = (slug?: string) => {
  if (!slug) {
    return undefined;
  }

  const normalizedSlug = slug.trim().toLowerCase();

  return cityEvents.find(
    (event) =>
      event.slug === normalizedSlug || event.aliases.includes(normalizedSlug)
  );
};
