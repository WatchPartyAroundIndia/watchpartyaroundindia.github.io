import swiftAhmedabadLogo from "../../assets/organisers/swift-ahmedabad.png";
import pixsterStudioLogo from "../../assets/2026/sponsors/pixterStudio.jpeg";
import { makeDescription } from "./helpers";
import type { CityEvent } from "./types";

export const ahmedabadEvent: CityEvent = {
  id: 3,
  slug: "ahmedabad",
  aliases: [],
  city: "Ahmedabad",
  chapterName: "Swift Ahmedabad",
  date: "June 8, 2026",
  time: "8:30 PM",
  startDate: "2026-06-08T20:30:00+05:30",
  endDate: "2026-06-09T01:00:00+05:30",
  logo: swiftAhmedabadLogo,

  venue: "Pixster Studio",
  address: "13th Floor, Solitaire Connect, Sarkhej - Gandhinagar Hwy, near BMW Gallop Motors, Makarba, Ahmedabad, Gujarat 382210, India",
  structuredAddress: {
    streetAddress: "13th Floor, Solitaire Connect, Sarkhej - Gandhinagar Hwy, near BMW Gallop Motors, Makarba",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },

  location: "Solitaire Connect, Makarba",

  lumaUrl: "https://luma.com/b08evqjf",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Pixster+Studio+Ahmedabad",
  sponsorName: "Pixster Studio",
  sponsorLogo: pixsterStudioLogo,
  sponsorDescription: "Crafting Innovative Apps with Passion",
  sponsorWebsite: "https://www.pixsterstudio.com",

  gradient: {
    from: "#DE9CFF",
    to: "#AF52DE",
  },

  description: makeDescription("Swift Ahmedabad", "Pixster Studio", "Ahmedabad"),

  highlights: [
    "Hosted with Swift Ahmedabad",
    "Venue support from Pixster Studio",
    "Free registration through Luma",
  ],

  agenda: [
    {
      time: "8:30 PM",
      title: "Registration",
      description:
        "Check in and connect with the Swift Ahmedabad community.",
    },
    {
      time: "9:00 PM",
      title: "Lightning Talk by Pixster Studio",
      description:
        "A short talk from the team at Pixster Studio on their work and insights.",
    },
    {
      time: "9:15 PM",
      title: "Community Recap & Updates",
      description:
        "Catch up on what Swift Ahmedabad has been up to and what's coming next.",
    },
    {
      time: "9:30 PM",
      title: "Quiz • Interaction • Product Showcase",
      description:
        "Engage in a fun quiz, interact with fellow developers, and explore product demonstrations.",
    },
    {
      time: "10:00 PM",
      title: "Refreshments Break & Networking",
      description:
        "Grab refreshments, network with the community, and recharge before the keynote.",
    },
    {
      time: "10:30 PM",
      title: "WWDC Keynote Streaming",
      description:
        "Watch the WWDC 2026 keynote live together with Swift Ahmedabad.",
    },
  ],
};
