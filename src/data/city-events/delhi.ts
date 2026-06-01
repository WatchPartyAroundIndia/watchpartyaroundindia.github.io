import swiftDelhiLogo from "../../assets/organisers/swift-delhi.png";
import ixigoLogo from "../../assets/2025/sponsors/ixigo.png";
import { makeDescription } from "./helpers";
import type { CityEvent } from "./types";

export const delhiEvent: CityEvent = {
  id: 6,
  slug: "delhi",
  aliases: [],
  city: "Delhi NCR",
  chapterName: "Swift Delhi",
  date: "June 8, 2026",
  time: "8:00 PM",
  startDate: "2025-06-09T21:00:00+05:30",
  endDate: "2025-06-10T00:30:00+05:30",
  logo: swiftDelhiLogo,
  venue: "Ixigo Office, 2nd Floor, Veritas Building",
  address: "Ixigo Office, 2nd Floor, Veritas Building, Gurugram",
  structuredAddress: {
    streetAddress: "Ixigo Office, 2nd Floor, Veritas Building",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  location: "Gurugram",
  lumaUrl: "https://luma.com/flgblcpd",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Ixigo%20Office%20Veritas%20Building%20Gurugram",
  sponsorName: "ixigo",
  sponsorLogo: ixigoLogo,
  gradient: {
    from: "#A8D7FF",
    to: "#6171FF",
  },
  description: makeDescription("Swift Delhi", "Ixigo Office", "Delhi NCR"),
  highlights: [
    "Hosted with Swift Delhi",
    "Venue support from ixigo",
    "Free registration through Luma",
  ],
  agenda: [
    {
      time: "8:00 PM",
      title: "Doors open at ixigo",
      description:
        "Arrive at the Gurugram venue, check in, and meet the Delhi NCR community.",
    },
    {
      time: "9:30 PM",
      title: "Delhi NCR community welcome",
      description:
        "A short welcome from the organizers before everyone joins the live keynote.",
    },
    {
      time: "10:30 PM",
      title: "WWDC keynote watch",
      description:
        "Watch Apple's keynote live with Swift Delhi and other Apple platform builders.",
    },
    {
      time: "After keynote",
      title: "Post-keynote reactions / State of the Union",
      description:
        "Discuss the announcements, share first impressions, and compare notes with the room.",
    },
  ],
};
