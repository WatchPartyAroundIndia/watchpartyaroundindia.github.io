import swiftMumbaiLogo from "../../assets/2025/organisers/swift-mumbai.png";
import atlasLogo from "../../assets/2025/sponsors/atlas.svg";
import { makeDescription } from "./helpers";
import type { CityEvent } from "./types";

export const mumbaiEvent: CityEvent = {
  id: 2,
  slug: "mumbai",
  aliases: [],
  city: "Mumbai",
  chapterName: "Swift Mumbai",
  date: "June 8, 2026",
  time: "7:30 PM",
  startDate: "2026-06-08T19:30:00+05:30",
  endDate: "2026-06-08T00:30:00+05:30",
  logo: swiftMumbaiLogo,
  venue: "Atlas University",
  address: "Atlas University, BKC, Mumbai",
  structuredAddress: {
    streetAddress: "Atlas University, Ambedkar Nagar, Kurla West",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  location: "BKC",
  lumaUrl: "https://luma.com/ct1h2pul",
  mapUrl:
    "https://maps.app.goo.gl/5w57gH3UMq87f2Hu7",
  sponsorName: "Atlas University",
  sponsorLogo: atlasLogo,
  sponsorDescription: "Higher education for changemakers",
  gradient: {
    from: "#A8D7FF",
    to: "#6171FF",
  },
  description: makeDescription("Swift Mumbai", "Atlas University, BKC", "Mumbai"),
  highlights: [
    "Hosted with Swift Mumbai",
    "Venue support from Atlas University",
    "Free registration through Luma",
  ],
  agenda: [
    {
      time: "7:30 PM",
      title: "Arrival and check-in",
      description:
        "Meet the Swift Mumbai organizers and find your group for the evening.",
    },
    {
      time: "8:15 PM",
      title: "Pre-keynote conversations",
      description:
        "Talk through predictions, expectations, and favorite announcements from past WWDCs.",
    },
    {
      time: "10:30 PM",
      title: "WWDC keynote watch",
      description:
        "Watch the keynote live from Atlas University with the Mumbai community.",
    },
    {
      time: "After keynote",
      title: "Mumbai community wrap-up",
      description:
        "Discuss what matters most for app teams, indie developers, and designers.",
    },
  ],
};
