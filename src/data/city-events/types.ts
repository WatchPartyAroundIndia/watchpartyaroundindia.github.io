export interface CityEventAgendaItem {
  time: string;
  title: string;
  description: string;
}

export interface CityEvent {
  id: number;
  slug: string;
  aliases: string[];
  city: string;
  chapterName: string;
  date: string;
  time: string;
  startDate: string;
  endDate: string;
  logo: string;
  venue: string;
  address: string;
  structuredAddress: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  location: string;
  lumaUrl: string;
  mapUrl: string;
  sponsorName?: string;
  sponsorLogo?: string;
  gradient: {
    from: string;
    to: string;
  };
  description: string;
  highlights: string[];
  agenda: CityEventAgendaItem[];
}
