import swiftChennaiLogo from "../../assets/2025/organisers/swift-chennai.png";
import kissflowLogo from "../../assets/2025/sponsors/kissflow.png";
import { makeDescription } from "./helpers";
import type { CityEvent } from "./types";

export const chennaiEvent: CityEvent = {
  id: 5,
  slug: "chennai",
  aliases: [],
  city: "Chennai",
  chapterName: "Swift Chennai",
  date: "June 9, 2025",
  time: "8:00 PM",
  startDate: "2025-06-09T20:00:00+05:30",
  endDate: "2025-06-10T00:30:00+05:30",
  logo: swiftChennaiLogo,
  venue: "Kissflow, No. 5, Tower-B, 10th Floor",
  address: "Kissflow, No. 5, Tower-B, 10th Floor, Perungudi, Chennai",
  structuredAddress: {
    streetAddress: "Kissflow, No. 5, Tower-B, 10th Floor, Perungudi",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  location: "Perungudi",
  lumaUrl: "https://lu.ma/9engu1qy",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Kissflow%20Tower-B%2010th%20Floor%20Perungudi%20Chennai",
  sponsorName: "Kissflow",
  sponsorLogo: kissflowLogo,
  gradient: {
    from: "#A8D7FF",
    to: "#6171FF",
  },
  description: makeDescription("Swift Chennai", "Kissflow", "Chennai"),
  highlights: [
    "Hosted with Swift Chennai",
    "Venue support from Kissflow",
    "Free registration through Luma",
  ],
  agenda: [
    {
      time: "8:00 PM",
      title: "Arrival at Kissflow",
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
