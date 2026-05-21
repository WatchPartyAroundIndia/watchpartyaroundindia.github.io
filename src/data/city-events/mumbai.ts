import swiftMumbaiLogo from "../../assets/2025/organisers/swift-mumbai.png";
import bookMyShowLogo from "../../assets/2025/sponsors/bookmyshow.png";
import { makeDescription } from "./helpers";
import type { CityEvent } from "./types";

export const mumbaiEvent: CityEvent = {
  id: 2,
  slug: "mumbai",
  aliases: [],
  city: "Mumbai",
  chapterName: "Swift Mumbai",
  date: "June 9, 2025",
  time: "7:30 PM",
  startDate: "2025-06-09T19:30:00+05:30",
  endDate: "2025-06-10T00:30:00+05:30",
  logo: swiftMumbaiLogo,
  venue: "BookMyShow Office, Empressa 14",
  address: "BookMyShow Office, Empressa 14, Andheri East, Mumbai",
  structuredAddress: {
    streetAddress: "BookMyShow Office, Empressa 14, Andheri East",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  location: "Andheri East",
  lumaUrl: "https://lu.ma/cbn8zy6m",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=BookMyShow%20Office%20Empressa%2014%20Andheri%20East%20Mumbai",
  sponsorName: "BookMyShow",
  sponsorLogo: bookMyShowLogo,
  gradient: {
    from: "#A8D7FF",
    to: "#6171FF",
  },
  description: makeDescription("Swift Mumbai", "BookMyShow Office", "Mumbai"),
  highlights: [
    "Hosted with Swift Mumbai",
    "Venue support from BookMyShow",
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
        "Watch the keynote live from the BookMyShow office with the Mumbai community.",
    },
    {
      time: "After keynote",
      title: "Mumbai community wrap-up",
      description:
        "Discuss what matters most for app teams, indie developers, and designers.",
    },
  ],
};
