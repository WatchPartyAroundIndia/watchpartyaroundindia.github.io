import { FC } from "react";
import locationPinLogo from "../assets/2025/location-pin.svg";
import swiftLogo from "../assets/2025/swift.svg";

interface RegisterNowProps {}

const RegisterNow: FC<RegisterNowProps> = () => {
  const swiftEvents = [
    {
      id: 1,
      time: "9:00 PM",
      logo: swiftLogo,
      chapterName: "Swift Delhi",
      venue: "IXIGO Office, Rajouri Garden Rajiv Chowk, Delhi.",
      location: "Gurugram",
      registerLink: "#",
      startColour: "#FFC677",
      endColour: "#FF9500",
    },
    {
      id: 2,
      time: "9:00 PM",
      logo: swiftLogo,
      chapterName: "Swift Delhi",
      venue: "IXIGO Office, Rajouri Garden Rajiv Chowk, Delhi.",
      location: "Gurugram",
      registerLink: "#",
      startColour: "#A8D7FF",
      endColour: "#6171FF",
    },
    {
      id: 3,
      time: "9:00 PM",
      logo: swiftLogo,
      chapterName: "Swift Delhi",
      venue: "IXIGO Office, Rajouri Garden Rajiv Chowk, Delhi.",
      location: "Gurugram",
      registerLink: "#",
      startColour: "#DE9CFF",
      endColour: "#AF52DE",
    },
    {
      id: 4,
      time: "9:00 PM",
      logo: swiftLogo,
      chapterName: "Swift Delhi",
      venue: "IXIGO Office, Rajouri Garden Rajiv Chowk, Delhi.",
      location: "Gurugram",
      registerLink: "#",
      startColour: "#BB5BF3",
      endColour: "#6900EE",
    },
    {
      id: 5,
      time: "9:00 PM",
      logo: swiftLogo,
      chapterName: "Swift Delhi",
      venue: "IXIGO Office, Rajouri Garden Rajiv Chowk, Delhi.",
      location: "Gurugram",
      registerLink: "#",
      startColour: "#A8D7FF",
      endColour: "#6171FF",
    },
    {
      id: 6,
      time: "9:00 PM",
      logo: swiftLogo,
      chapterName: "Swift Delhi",
      venue: "IXIGO Office, Rajouri Garden Rajiv Chowk, Delhi.",
      location: "Gurugram",
      registerLink: "#",
      startColour: "#FFC677",
      endColour: "#FF9500",
    },
    {
      id: 7,
      time: "9:00 PM",
      logo: swiftLogo,
      chapterName: "Swift Delhi",
      venue: "IXIGO Office, Rajouri Garden Rajiv Chowk, Delhi.",
      location: "Gurugram",
      registerLink: "#",
      startColour: "#BB5BF3",
      endColour: "#6900EE",
    },
    {
      id: 8,
      time: "9:00 PM",
      logo: swiftLogo,
      chapterName: "Swift Delhi",
      venue: "IXIGO Office, Rajouri Garden Rajiv Chowk, Delhi.",
      location: "Gurugram",
      registerLink: "#",
      startColour: "#A8D7FF",
      endColour: "#6171FF",
    },
    {
      id: 9,
      time: "9:00 PM",
      logo: swiftLogo,
      chapterName: "Swift Delhi",
      venue: "IXIGO Office, Rajouri Garden Rajiv Chowk, Delhi.",
      location: "Gurugram",
      registerLink: "#",
      startColour: "#FFC677",
      endColour: "#FF9500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-24" />
      <h2 className="font-sans font-bold text-4xl mb-5">Register Now</h2>
      <h4 className="font-sans font-bold text-2xl text-[#A4A4A4]">
        Seats are limited - save yours today!
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl mt-8 px-3">
        {swiftEvents.map((event) => (
          <div
            key={event.id}
            className={`aspect-square rounded-3xl bg-gradient-to-b from-[${event.startColour}] to-[${event.endColour}] shadow transition max-h-[265px] w-full`}
          >
            <div className="flex flex-col items-start justify-center gap-3 p-6">
              <div className="text-white font-medium bg-black/80 px-3 py-1 rounded-md text-xs">
                {event.time}
              </div>

              <div className="flex items-center gap-2">
                <img
                  src={swiftLogo}
                  alt="swift"
                  className="w-7 h-7 flex-shrink-0"
                />
                <h6 className="font-semibold text-white text-base">
                  {event.chapterName}
                </h6>
              </div>

              <h4 className="font-bold text-white text-2xl mb-4 line-clamp-2">
                {event.venue}
              </h4>

              <div className="flex items-center justify-between w-full text-white mt-auto">
                <div className="flex items-center font-semibold text-sm">
                  <img
                    src={locationPinLogo}
                    alt="location pin"
                    className="inline w-4 h-4 mr-1"
                  />
                  {event.location}
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(event.registerLink, "_blank");
                  }}
                  className="rounded-lg bg-[#2A282F]/80 font-sans font-medium p-2 px-3 text-sm"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-24" />
    </div>
  );
};

export default RegisterNow;
