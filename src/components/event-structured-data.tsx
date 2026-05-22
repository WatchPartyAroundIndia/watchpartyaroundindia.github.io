import heroImage from "../assets/2025/hero.svg";
import type { CityEvent } from "../data/city-events";

const SITE_URL = "https://watchpartyaroundindia.com";

const absoluteUrl = (path: string) => new URL(path, SITE_URL).href;

interface EventStructuredDataProps {
  event: CityEvent;
}

const EventStructuredData = ({ event }: EventStructuredDataProps) => {
  const eventUrl = absoluteUrl(`/${event.slug}`);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `WWDC25 Watch Party Around India: ${event.city}`,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    url: eventUrl,
    image: [absoluteUrl(heroImage)],
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.structuredAddress.streetAddress,
        addressLocality: event.structuredAddress.addressLocality,
        addressRegion: event.structuredAddress.addressRegion,
        addressCountry: event.structuredAddress.addressCountry,
      },
    },
    offers: {
      "@type": "Offer",
      url: event.lumaUrl,
      price: 0,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: "2025-05-01T00:00:00+05:30",
    },
    organizer: {
      "@type": "Organization",
      name: event.chapterName,
      url: SITE_URL,
    },
    isAccessibleForFree: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default EventStructuredData;
