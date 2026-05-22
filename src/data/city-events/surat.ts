import swiftSuratLogo from "../../assets/2025/organisers/swift-surat.jpeg";
import jbcodeappLogo from "../../assets/2025/sponsors/jbcodeapp.jpeg";
import { makeDescription } from "./helpers";
import type { CityEvent } from "./types";

export const suratEvent: CityEvent = {
  id: 4,
  slug: "surat",
  aliases: [],
  city: "Surat",
  chapterName: "Swift Surat",
  date: "June 9, 2025",
  time: "8:00 PM",
  startDate: "2025-06-09T20:00:00+05:30",
  endDate: "2025-06-10T00:30:00+05:30",
  logo: swiftSuratLogo,
  venue: "JBcodeapp, 536, 5, Square Point, M.V Circle",
  address: "JBcodeapp, 536, 5, Square Point, M.V Circle, Dahin Nagar, Surat",
  structuredAddress: {
    streetAddress: "JBcodeapp, 536, 5, Square Point, M.V Circle, Dahin Nagar",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  location: "Dahin Nagar",
  lumaUrl: "https://lu.ma/j41uncut",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=JBcodeapp%20Square%20Point%20M.V%20Circle%20Dahin%20Nagar%20Surat",
  sponsorName: "JBCodeapp",
  sponsorLogo: jbcodeappLogo,
  gradient: {
    from: "#BB5BF3",
    to: "#6900EE",
  },
  description: makeDescription("Swift Surat", "JBcodeapp", "Surat"),
  highlights: [
    "Hosted with Swift Surat",
    "Venue support from JBCodeapp",
    "Free registration through Luma",
  ],
  agenda: [
    {
      time: "8:00 PM",
      title: "Check-in at JBcodeapp",
      description:
        "Arrive, meet the Surat organizers, and connect with local developers.",
    },
    {
      time: "8:45 PM",
      title: "Community networking",
      description:
        "Spend time with other Apple platform builders before the keynote stream.",
    },
    {
      time: "10:30 PM",
      title: "WWDC keynote watch",
      description:
        "Watch the keynote live with Swift Surat and react to the announcements together.",
    },
    {
      time: "After keynote",
      title: "Ideas and takeaways",
      description:
        "Discuss new APIs, tools, and what the Surat community wants to explore next.",
    },
  ],
};
