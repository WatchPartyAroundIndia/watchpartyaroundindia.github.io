import swiftBengaluruLogo from "../../assets/2025/organisers/swift-bengaluru.png";
import swiggyLogo from "../../assets/2025/sponsors/swiggy.png";
import { makeDescription } from "./helpers";
import type { CityEvent } from "./types";

export const bangaloreEvent: CityEvent = {
  id: 1,
  slug: "bangalore",
  aliases: ["bengaluru"],
  city: "Bengaluru",
  chapterName: "Swift Bengaluru",
  date: "June 8, 2026",
  time: "7:00 PM",
  startDate: "2026-06-08T19:00:00+05:30",
  endDate: "2026-06-09T00:30:00+05:30",
  logo: swiftBengaluruLogo,
  venue: "Swiggy Limited",
  address: "4th Floor, Survey No.14, Swiggy Limited, Tower-1, Sumadhura Capitol Towers, 158, Taluk, Kadugodi Colony, Pattandur Agrahara, Kadugodi, Bengaluru, Karnataka 560066",
  structuredAddress: {
    streetAddress: "Swiggy HO, 4th Floor, Survey No.14, Swiggy Limited, Tower-1, Sumadhura Capitol Towers, Pattandur Agrahara, Kadugodi",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  location: "Kadugodi",
  lumaUrl: "https://luma.com/kur60w7l",
  mapUrl:
    "https://maps.app.goo.gl/Pz3EsxtRj4ehQvfg9",
  sponsorName: "Swiggy",
  sponsorLogo: swiggyLogo,
  gradient: {
    from: "#FFC677",
    to: "#FF9500",
  },
  description: makeDescription("Swift Bengaluru", "Swiggy HO", "Bengaluru"),
  highlights: [
    "Hosted with Swift Bengaluru",
    "Venue support from Swiggy",
    "Free registration through Luma",
  ],
  agenda: [
    {
      time: "7:00 PM",
      title: "Doors open at Swiggy",
      description:
        "Check in, settle into the venue, and meet the Bengaluru Swift community.",
    },
    {
      time: "7:45 PM",
      title: "Community introductions",
      description:
        "A quick welcome from the organizers before the keynote watch begins.",
    },
    {
      time: "10:30 PM",
      title: "WWDC keynote watch",
      description:
        "Watch Apple's announcements live with developers from across Bengaluru.",
    },
    {
      time: "After keynote",
      title: "Discussion and networking",
      description:
        "Swap reactions, API notes, and ideas for what to build next.",
    },
  ],
};
