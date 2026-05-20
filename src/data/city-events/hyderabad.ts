import swiftHyderabadLogo from "../../assets/2025/organisers/swift-hyderabad.svg";
import draperStartUpHouseLogo from "../../assets/2025/sponsors/draper.svg";
import { makeDescription } from "./helpers";
import type { CityEvent } from "./types";

export const hyderabadEvent: CityEvent = {
  id: 7,
  slug: "hyderabad",
  aliases: ["hyderbad"],
  city: "Hyderabad",
  chapterName: "Swift Hyderabad",
  date: "June 9, 2025",
  time: "7:00 PM",
  startDate: "2025-06-09T19:00:00+05:30",
  endDate: "2025-06-10T00:30:00+05:30",
  logo: swiftHyderabadLogo,
  venue: "Draper Startup House, Rajiv Gandhi Nagar",
  address: "Draper Startup House, Rajiv Gandhi Nagar, Gachibowli, Hyderabad",
  structuredAddress: {
    streetAddress: "Draper Startup House, Rajiv Gandhi Nagar, Gachibowli",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  location: "Gachibowli",
  lumaUrl: "https://lu.ma/jehijqln",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Draper%20Startup%20House%20Gachibowli%20Hyderabad",
  sponsorName: "Draper Startup House",
  sponsorLogo: draperStartUpHouseLogo,
  gradient: {
    from: "#A8D7FF",
    to: "#6171FF",
  },
  description: makeDescription(
    "Swift Hyderabad",
    "Draper Startup House",
    "Hyderabad"
  ),
  highlights: [
    "Hosted with Swift Hyderabad",
    "Venue support from Draper Startup House",
    "Free registration through Luma",
  ],
  agenda: [
    {
      time: "7:00 PM",
      title: "Doors open at Draper Startup House",
      description:
        "Check in, meet the Hyderabad organizers, and settle in at the Gachibowli venue.",
    },
    {
      time: "7:45 PM",
      title: "Hyderabad community mixer",
      description:
        "Spend time with local iOS, macOS, watchOS, and design folks before the keynote.",
    },
    {
      time: "10:30 PM",
      title: "WWDC keynote watch",
      description:
        "Watch Apple's keynote live with Swift Hyderabad and react to the announcements together.",
    },
    {
      time: "After keynote",
      title: "Design and developer discussion",
      description:
        "Talk through the updates, new APIs, and what the Hyderabad community wants to explore next.",
    },
  ],
};
