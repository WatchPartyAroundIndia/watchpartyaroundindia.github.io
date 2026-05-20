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
  date: "June 9, 2025",
  time: "7:00 PM",
  startDate: "2025-06-09T19:00:00+05:30",
  endDate: "2025-06-10T00:30:00+05:30",
  logo: swiftBengaluruLogo,
  venue: "Swiggy HO, Ground Floor, Embassy TechVillage",
  address: "Swiggy HO, Ground Floor, Embassy TechVillage, Varthur, Bengaluru",
  structuredAddress: {
    streetAddress: "Swiggy HO, Ground Floor, Embassy TechVillage, Varthur",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  location: "Varthur",
  lumaUrl: "https://lu.ma/9mfibs65",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Swiggy%20HO%20Embassy%20TechVillage%20Varthur%20Bengaluru",
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
