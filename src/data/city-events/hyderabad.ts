import swiftHyderabadLogo from "../../assets/2025/organisers/swift-hyderabad.svg";
import sonatypeLogo from "../../assets/2026/sponsors/sonatype.jpeg";
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
  venue: "Sonatype",
  address:
    "TOWER-1, Aurobindo Orbit, 25th Floor, Sonatype India, Knowledge City Rd, Silpa Gram Craft Village, HITEC City, Hyderabad, Serilingampalle (M), Telangana 500081",
  structuredAddress: {
    streetAddress:
      "TOWER-1, Aurobindo Orbit, 25th Floor, Sonatype India, Knowledge City Rd, Silpa Gram Craft Village, HITEC City",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  location: "HITEC City",
  lumaUrl: "https://luma.com/v8d19gd7",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=TOWER-1+Aurobindo+Orbit+25th+Floor+Sonatype+India+Knowledge+City+Rd+Silpa+Gram+Craft+Village+HITEC+City+Hyderabad+Telangana+500081",
  sponsorName: "Sonatype",
  sponsorLogo: sonatypeLogo,
  sponsorDescription: "Venue partner for Swift Hyderabad",
  gradient: {
    from: "#A8D7FF",
    to: "#6171FF",
  },
  description: makeDescription("Swift Hyderabad", "Sonatype", "Hyderabad"),
  highlights: [
    "Hosted with Swift Hyderabad",
    "Venue support from Sonatype",
    "Free registration through Luma",
  ],
  agenda: [
    {
      time: "7:00 PM",
      title: "Doors open at Sonatype",
      description:
        "Check in, meet the Hyderabad organizers, and settle in at the HITEC City venue.",
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
