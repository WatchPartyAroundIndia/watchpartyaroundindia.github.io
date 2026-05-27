import swiftPuneLogo from "../../assets/organisers/swift-pune.png";
import { makeDescription } from "./helpers";
import type { CityEvent } from "./types";

export const puneEvent: CityEvent = {
  id: 9,
  slug: "pune",
  aliases: [],
  city: "Pune",
  chapterName: "Swift Pune",
  date: "June 8, 2026",
  time: "8:30 PM",
  startDate: "2025-06-08T20:30:00+05:30",
  endDate: "2025-06-09T00:30:00+05:30",
  logo: swiftPuneLogo,
  venue: "The Daily All Day",
  address: "Lane No. 7, Opposite SBI Bank, Ashok Chakra Society, Meera Nagar, Koregaon Park",
  structuredAddress: {
    streetAddress: "Lane No. 7, Opposite SBI Bank, Ashok Chakra Society, Meera Nagar, Koregaon Park",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  location: "Koregaon Park",
  lumaUrl: "https://luma.com/2qk6jerr",
  mapUrl:
    "https://www.google.com/maps/place/The+Daily+All+Day+Pune/@18.5338985,73.8996072,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c107f3e27ee1:0xf74289ab94d6cabf!8m2!3d18.5338985!4d73.8996072!16s%2Fg%2F11f4t_5hy4!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D",
  gradient: {
    from: "#222222",
    to: "#111111",
  },
  description: makeDescription("Swift Pune", "The Daily All Day", "Pune"),
  highlights: [
    "Hosted with Swift Pune",
    "Venue support from The Daily All Day",
    "Free registration through Luma",
  ],
  agenda: [
    {
      time: "8:30 PM",
      title: "Arrival and check-in",
      description:
        "Meet the Swift Pune community and find your group for the evening",
    },
    {
      time: "9:00 PM",
      title: "Relax & Network",
      description:
        "Relax after a long work day, grab dinner and beverages, and network with the vibrant community from Pune",
    },
    {
      time: "10:30 PM",
      title: "WWDC keynote watch",
      description:
        "Watch the keynote live",
    }
  ],
};
