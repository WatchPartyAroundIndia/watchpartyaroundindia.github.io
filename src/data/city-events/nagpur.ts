import swiftNagpurLogo from "../../assets/organisers/swift-nagpur.jpeg";
import { makeDescription } from "./helpers";
import type { CityEvent } from "./types";

export const nagpurEvent: CityEvent = {
  id: 10,
  slug: "nagpur",
  aliases: [],
  city: "Nagpur",
  chapterName: "Swift Nagpur",
  date: "June 8, 2026",
  time: "8:30 PM",
  startDate: "2026-06-08T20:30:00+05:30",
  endDate: "2026-06-09T00:30:00+05:30",
  logo: swiftNagpurLogo,

  venue: "The Crib- Taqueria | Pickleball | Rock Climbing",
  address: "15, N Ambazari Rd, Ambazari, Nagpur, Maharashtra 440010",
  structuredAddress: {
    streetAddress: "15, N Ambazari Rd, Ambazari",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },

  location: "Ambazari",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=The+Crib+Taqueria+Pickleball+Rock+Climbing+Nagpur",

  gradient: {
    from: "#F97316",
    to: "#EA580C",
  },

  description: makeDescription(
    "Swift Nagpur",
    "Venue to be announced",
    "Nagpur"
  ),

  highlights: [
    "Hosted with Swift Nagpur",
    "WWDC 2026 community watch party",
    "Venue details coming soon",
  ],

  agenda: [
    {
      time: "8:30 PM",
      title: "Arrival and networking",
      description:
        "Meet fellow developers, students, and Apple enthusiasts from Nagpur",
    },
    {
      time: "9:00 PM",
      title: "Community conversations",
      description:
        "Discuss Apple technologies, apps, design, and developer experiences",
    },
    {
      time: "10:30 PM",
      title: "WWDC keynote watch",
      description:
        "Watch the WWDC 2026 keynote live together with the community",
    },
  ],
};