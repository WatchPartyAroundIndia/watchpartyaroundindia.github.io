import locationPinLogo from "../assets/2025/location-pin.svg";
import swiftLogo from "../assets/2025/swift.svg";

const RegisterNow = () => {
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
      <h2 className="font-sans font-bold text-3xl md:text-4xl mb-3">
        Register Now
      </h2>
      <h4 className="font-sans font-bold text-lg md:text-2xl text-[#A4A4A4]">
        Seats are limited—save yours today!
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl mt-8 px-8 lg:px-4">
        {swiftEvents.map((event) => (
          <div
            key={event.id}
            className={`aspect-square rounded-3xl bg-gradient-to-b from-[${event.startColour}] to-[${event.endColour}] shadow max-h-[265px] w-full transform transition-transform hover:scale-[1.02] hover:shadow-lg`}
          >
            <div className="flex flex-col items-start justify-center gap-3 p-6">
              <div className="text-white font-medium bg-black/80 px-3 py-1 rounded-md text-xs">
                {event.time}
              </div>

              <div className="flex items-center gap-2">
                <img
                  loading="lazy"
                  src={swiftLogo}
                  aria-hidden="true"
                  alt={`${event.chapterName} logo`}
                  className="w-8 h-8 flex-shrink-0"
                />
                <h6 className="font-semibold text-white text-lg">
                  {event.chapterName}
                </h6>
              </div>

              <h4 className="font-bold text-white text-2xl mb-4 line-clamp-2">
                {event.venue}
              </h4>

              <div className="flex items-center justify-between w-full text-white mt-auto">
                <div className="flex items-center font-semibold text-base">
                  <img
                    loading="lazy"
                    src={locationPinLogo}
                    alt="location pin"
                    className="inline w-4 h-4 mr-1"
                  />
                  {event.location}
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (event.registerLink !== "#") {
                      window.open(event.registerLink, "_blank");
                    }
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
    </div>
  );
};

export default RegisterNow;
