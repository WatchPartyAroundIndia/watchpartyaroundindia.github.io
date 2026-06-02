import swiftChennaiLogo from "../../assets/2025/organisers/swift-chennai.png";
import sedinLogo from "../../assets/2026/sponsors/sedin.png";
import { makeDescription } from "./helpers";
import type { CityEvent } from "./types";

export const chennaiEvent: CityEvent = {
  id: 5,
  slug: "chennai",
  aliases: [],
  city: "Chennai",
  chapterName: "Swift Chennai",
  date: "June 8, 2026",
  time: "8:00 PM",
  startDate: "2026-06-09T20:00:00+05:30",
  endDate: "2026-06-10T00:30:00+05:30",
  logo: swiftChennaiLogo,
  venue: "Sedin Technologies",
  address: "Sedin Technologies, A1/1, 49th Street, 7th Ave, Ashok Nagar, Chennai, Tamil Nadu 600083",
  structuredAddress: {
    streetAddress: "Sedin Technologies, A1/1, 49th Street, 7th Ave, Ashok Nagar",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  location: "Ashok Nagar",
  lumaUrl: "https://luma.com/q86j02km",
  mapUrl:
    "https://maps.app.goo.gl/Vo6fM33zLCqecRh56",
  sponsorName: "Sedin Technologies",
  sponsorLogo: sedinLogo,
  sponsorDescription: "Better the best",
  sponsorWebsite: "https://sedintechnologies.com",
  gradient: {
    from: "#A8D7FF",
    to: "#6171FF",
  },
  description: makeDescription("Swift Chennai", "Sedin Technologies", "Chennai"),
  highlights: [
    "Hosted with Swift Chennai",
    "Venue support from Sedin Technologies",
    "Free registration through Luma",
  ],
  agenda: [
    {
      time: "8:00 PM",
      title: "Arrival at Sedin Technologies",
      description:
        "Check in, meet the Swift Chennai organizers, and get settled for the evening.",
    },
    {
      time: "8:45 PM",
      title: "Chennai community catch-up",
      description:
        "Connect with local Apple platform developers before the keynote stream begins.",
    },
    {
      time: "10:30 PM",
      title: "WWDC keynote watch",
      description:
        "Watch Apple's keynote live with Swift Chennai and follow the announcements together.",
    },
    {
      time: "After keynote",
      title: "Discussion and networking",
      description:
        "Share reactions, talk through new APIs, and keep the community conversations going.",
    },
  ],
};
