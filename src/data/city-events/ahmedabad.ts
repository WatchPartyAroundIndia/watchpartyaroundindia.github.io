import swiftAhmedabadLogo from "../../assets/2025/organisers/swift-ahmedabad.svg";
import sevenSpanLogo from "../../assets/2025/sponsors/7Span.svg";
import { makeDescription } from "./helpers";
import type { CityEvent } from "./types";

export const ahmedabadEvent: CityEvent = {
  id: 3,
  slug: "ahmedabad",
  aliases: [],
  city: "Ahmedabad",
  chapterName: "Swift Ahmedabad",
  date: "June 9, 2025",
  time: "9:00 PM",
  startDate: "2025-06-09T21:00:00+05:30",
  endDate: "2025-06-10T00:30:00+05:30",
  logo: swiftAhmedabadLogo,
  venue: "7Span, 201, Isquare Corporate Park",
  address: "7Span, 201, Isquare Corporate Park, Sola, Ahmedabad",
  structuredAddress: {
    streetAddress: "7Span, 201, Isquare Corporate Park, Sola",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  location: "Sola",
  lumaUrl: "https://lu.ma/kne1yfpm",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=7Span%20Isquare%20Corporate%20Park%20Sola%20Ahmedabad",
  sponsorName: "7Span",
  sponsorLogo: sevenSpanLogo,
  gradient: {
    from: "#DE9CFF",
    to: "#AF52DE",
  },
  description: makeDescription("Swift Ahmedabad", "7Span", "Ahmedabad"),
  highlights: [
    "Hosted with Swift Ahmedabad",
    "Venue support from 7Span",
    "Free registration through Luma",
  ],
  agenda: [
    {
      time: "9:00 PM",
      title: "Doors open at 7Span",
      description:
        "Check in, meet local developers, and settle in before the keynote starts.",
    },
    {
      time: "9:30 PM",
      title: "Ahmedabad community welcome",
      description:
        "A short organizer welcome and community catch-up before the livestream.",
    },
    {
      time: "10:30 PM",
      title: "WWDC keynote watch",
      description:
        "Watch Apple's keynote live with Swift Ahmedabad and fellow Apple platform developers.",
    },
    {
      time: "After keynote",
      title: "Post-keynote discussion",
      description:
        "Break down the announcements and share thoughts on new platform updates.",
    },
  ],
};
