import swiftKozhikodeLogo from "../../assets/2025/organisers/swift-kozhikode.svg";
import keralaStartupMissionLogo from "../../assets/2025/sponsors/kerala-startup-mission.svg";
import { makeDescription } from "./helpers";
import type { CityEvent } from "./types";

export const kozhikodeEvent: CityEvent = {
  id: 8,
  slug: "kozhikode",
  aliases: [],
  city: "Kozhikode",
  chapterName: "Swift Kozhikode",
  date: "June 9, 2025",
  time: "7:30 PM",
  startDate: "2025-06-09T19:30:00+05:30",
  endDate: "2025-06-10T00:30:00+05:30",
  logo: swiftKozhikodeLogo,
  venue: "Kerala Startup Mission, 1650D, Palazhi",
  address: "Kerala Startup Mission, 1650D, Palazhi, Pantheeramkavu, Kozhikode",
  structuredAddress: {
    streetAddress: "Kerala Startup Mission, 1650D, Palazhi, Pantheeramkavu",
    addressLocality: "Kozhikode",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  location: "Pantheeramkavu",
  lumaUrl: "https://lu.ma/wvgrqd6p",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Kerala%20Startup%20Mission%20Palazhi%20Pantheeramkavu%20Kozhikode",
  sponsorName: "Kerala Startup Mission",
  sponsorLogo: keralaStartupMissionLogo,
  sponsorDescription: "Learn, start, grow and scale",
  sponsorWebsite: "https://startupmission.kerala.gov.in/",
  gradient: {
    from: "#FFC677",
    to: "#FF9500",
  },
  description: makeDescription(
    "Swift Kozhikode",
    "Kerala Startup Mission",
    "Kozhikode"
  ),
  highlights: [
    "Hosted with Swift Kozhikode",
    "Venue support from Kerala Startup Mission",
    "Free registration through Luma",
  ],
  agenda: [
    {
      time: "7:30 PM",
      title: "Check-in at Kerala Startup Mission",
      description:
        "Arrive, meet the Kozhikode organizers, and connect with the local community.",
    },
    {
      time: "8:15 PM",
      title: "Kozhikode community networking",
      description:
        "Meet fellow Apple platform developers and share what you are hoping to see at WWDC.",
    },
    {
      time: "10:30 PM",
      title: "WWDC keynote watch",
      description:
        "Watch Apple's keynote live with Swift Kozhikode and follow the announcements together.",
    },
    {
      time: "After keynote",
      title: "Takeaways and community wrap-up",
      description:
        "Share first reactions, useful links, and ideas for future community sessions.",
    },
  ],
};
