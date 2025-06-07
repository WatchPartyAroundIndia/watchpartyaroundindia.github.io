import locationPinLogo from "../assets/2025/location-pin.svg";
import swiftAhmedabadLogo from "../assets/2025/organisers/swift-ahmedabad.svg";
import swiftBengaluruLogo from "../assets/2025/organisers/swift-bengaluru.png";
import swiftChennaiLogo from "../assets/2025/organisers/swift-chennai.png";
import swiftHyderabadLogo from "../assets/2025/organisers/swift-hyderabad.svg";
import swiftMumbaiLogo from "../assets/2025/organisers/swift-mumbai.png";
import swiftSuratLogo from "../assets/2025/organisers/swift-surat.jpeg";
import swiftLogo from "../assets/2025/swift.svg";

const RegisterNow = () => {
  const swiftEvents = [
    {
      id: 1,
      time: "7:00 PM",
      logo: swiftBengaluruLogo,
      chapterName: "Swift Bengaluru",
      venue: "Swiggy HO, Ground Floor, Embassy TechVillage",
      location: "Varthur",
      registerLink: "https://lu.ma/9mfibs65",
      startColour: "#FFC677",
      endColour: "#FF9500",
    },
    {
      id: 2,
      time: "7:30 PM",
      logo: swiftMumbaiLogo,
      chapterName: "Swift Mumbai",
      venue: "BookMyShow Office, Empressa 14",
      location: "Andheri East",
      registerLink: "https://lu.ma/cbn8zy6m",
      startColour: "#A8D7FF",
      endColour: "#6171FF",
    },
    {
      id: 3,
      time: "9:00 PM",
      logo: swiftAhmedabadLogo,
      chapterName: "Swift Ahmedabad",
      venue: "7Span, 201, Isquare Corporate Park",
      location: "Sola",
      registerLink: "https://lu.ma/kne1yfpm",
      startColour: "#DE9CFF",
      endColour: "#AF52DE",
    },
    {
      id: 4,
      time: "8:00 PM",
      logo: swiftSuratLogo,
      chapterName: "Swift Surat",
      venue: "JBcodeapp, 536, 5, Square Point, M.V Circle",
      location: "Dahin Nagar",
      registerLink: "https://lu.ma/j41uncut",
      startColour: "#BB5BF3",
      endColour: "#6900EE",
    },
    {
      id: 5,
      time: "8:00 PM",
      logo: swiftChennaiLogo,
      chapterName: "Swift Chennai",
      venue: "Kissflow, No. 5, Tower-B, 10th Floor",
      location: "Perungudi",
      registerLink: "https://lu.ma/9engu1qy",
      startColour: "#A8D7FF",
      endColour: "#6171FF",
    },
    {
      id: 6,
      time: "9:00 PM",
      logo: swiftLogo,
      chapterName: "Swift Delhi",
      venue: "Ixigo Office, 2nd Floor, Veritas Building",
      location: "Gurugram",
      registerLink: "https://lu.ma/pry2tx7d",
      startColour: "#A8D7FF",
      endColour: "#6171FF",
    },
    {
      id: 7,
      time: "7:00 PM",
      logo: swiftHyderabadLogo,
      chapterName: "Swift Hyderabad",
      venue: "Draper Startup House, Rajiv gandhi Nagar",
      location: "Gachibowli",
      registerLink: "https://lu.ma/jehijqln",
      startColour: "#A8D7FF",
      endColour: "#6171FF",
    },
    {
      id: 8,
      time: "7:30 PM",
      logo: swiftLogo,
      chapterName: "Swift Kozhikode",
      venue: "1650D, Palazhi, Kozhikode",
      location: "Pantheeramkavu",
      registerLink: "#",
      startColour: "#FFC677",
      endColour: "#FF9500",
    },
  ];

  return (
    <div id="register" className="flex flex-col items-center justify-center">
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
                  src={event.logo}
                  aria-hidden="true"
                  alt={`${event.chapterName} logo`}
                  className="w-8 h-8 flex-shrink-0 rounded-full"
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
