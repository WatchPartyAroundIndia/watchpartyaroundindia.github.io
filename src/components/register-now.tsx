import { Link } from "react-router-dom";
import locationPinLogo from "../assets/2025/location-pin.svg";
import { cityEvents } from "../data/city-events";

const RegisterNow = () => {
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
        {cityEvents.map((event) => (
          <div
            key={event.id}
            className="aspect-square rounded-3xl shadow max-h-[265px] w-full transform transition-transform hover:scale-[1.02] hover:shadow-lg"
            style={{
              backgroundImage: `linear-gradient(180deg, ${event.gradient.from} 0%, ${event.gradient.to} 100%)`,
            }}
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
                <Link
                  to={`/${event.slug}`}
                  className="rounded-lg bg-[#2A282F]/80 font-sans font-medium p-2 px-3 text-sm"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisterNow;
