import swiftSuratLogo from "../../assets/2025/organisers/swift-surat.jpeg";
import optimumBrewLogo from "../../assets/2026/sponsors/optimumBrew_logo.png";
import { makeDescription } from "./helpers";
import type { CityEvent } from "./types";

export const suratEvent: CityEvent = {
  id: 4,
  slug: "surat",
  aliases: ["surat"],
  city: "Surat",
  chapterName: "Swift Surat",
  date: "June 8, 2026",
  time: "8:00 PM",
  startDate: "2025-06-08T20:00:00+05:30",
  endDate: "2025-06-9T00:00:00+05:30",
  logo: swiftSuratLogo,
  venue: "OptimumBrew Technology",
  address: "A-401, RJD Business Hub, Naginawadi Rd, Katargam, Surat, Gujarat, India",
  structuredAddress: {
    streetAddress: "A-401, RJD Business Hub, Naginawadi Rd, Katargam",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  location: "Katargam",
  lumaUrl: "https://luma.com/kgspe1yk",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=OptimumBrew+Technology+LLP",
  sponsorName: "OptimumBrew Technology",
  sponsorLogo: optimumBrewLogo,
  gradient: {
    from: "#BB5BF3",
    to: "#6900EE",
  },
  description: makeDescription("Swift Surat", "OptimumBrew Technology", "Surat"),
  highlights: [
    "Hosted with Swift Surat",
    "Venue support from OptimumBrew Technology",
    "Free registration through Luma",
  ],
  agenda: [
    {
      time: "8:00 PM",
      title: "welcome at OptimumBrew",
      description:
          "Arrive at the venue, complete check-in, settle in, and connect with fellow Swift community members.",
    },
    {
      time: "8:15 PM",
      title: "Community Introductions & Welcome Talk by OptimumBrew Technology",
      description:
          "A brief welcome session and introduction by OptimumBrew Technology, followed by community introductions.",
    },
    {
      time: "8:45 PM",
      title: "Refreshments, Food & Networking",
      description:
          "Enjoy refreshments and food while networking and engaging with fellow attendees.",
    },
    {
      time: "9:30 PM",
      title: "Quiz, Panel Discussion & Interaction",
      description:
          "Participate in a quiz, panel discussion, and interactive sessions with fellow developers.",
    },
    {
      time: "10:30 PM",
      title: "WWDC 2026 Keynote Live Screening",
      description:
          "Watch Apple’s WWDC 2026 keynote live together with the Swift Surat community.",
    },
  ],
};
