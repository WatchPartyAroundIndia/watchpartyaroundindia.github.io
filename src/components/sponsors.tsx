import { FC } from "react";
import sponsorsRound from "../assets/2025/sponsors-round.svg";
import sevenSpanlogo from "../assets/2025/sponsors/7Span.svg";
import bookMyShowLogo from "../assets/2025/sponsors/bookmyshow.png";
import ixigoLogo from "../assets/2025/sponsors/ixigo.png";
import jbcodeappLogo from "../assets/2025/sponsors/jbcodeapp.jpeg";
import keralaStartupMissionLogo from "../assets/2025/sponsors/kerala-startup-mission.svg";
import kissflowLogo from "../assets/2025/sponsors/kissflow.png";
import swiggyLogo from "../assets/2025/sponsors/swiggy.png";
import tuistLogo from "../assets/2025/sponsors/tuist.jpeg";

const Sponsors = () => {
  const venueSponsors = [
    {
      sponsorId: 1,
      name: "Kissflow",
      description: "'People-First' people",
      logo: kissflowLogo,
      contact: "Chennai",
      website: "https://kissflow.com/",
    },
    {
      sponsorId: 2,
      name: "JBCodeapp",
      description: "Your Trusted Development Partner",
      logo: jbcodeappLogo,
      contact: "Surat",
      website: "https://jbcodeapp.com/",
    },
    {
      sponsorId: 3,
      name: "Swiggy",
      description: "No Order Too Small",
      logo: swiggyLogo,
      contact: "Bengaluru",
      website: "https://www.swiggy.com/",
    },
    {
      sponsorId: 4,
      name: "7Span",
      description: "Your Growth Is Our Sword!",
      logo: sevenSpanlogo,
      contact: "Ahmedabad",
      website: "https://7span.com/",
    },
    {
      sponsorId: 5,
      name: "BookMyShow",
      description: "It All Starts Here",
      logo: bookMyShowLogo,
      contact: "Mumbai",
      website: "https://in.bookmyshow.com/",
    },
    {
      sponsorId: 6,
      name: "Kerala Startup Mission",
      description: "Learn, start, grow and scale",
      logo: keralaStartupMissionLogo,
      contact: "Kozhikode",
      website: "https://startupmission.kerala.gov.in/",
    },
    {
      sponsorId: 7,
      name: "ixigo",
      description: "Know & Go",
      logo: ixigoLogo,
      contact: "Delhi",
      website: "https://www.ixigo.com/",
    },
  ];

  const supportingSponsors = [
    {
      sponsorId: 1,
      name: "Swiggy",
      description: "No Order Too Small",
      logo: swiggyLogo,
      contact: "Bengaluru",
      website: "https://www.swiggy.com/",
    },
    {
      sponsorId: 2,
      name: "Tuist",
      description: "Build better apps faster",
      logo: tuistLogo,
      contact: "Delhi",
      website: "https://tuist.dev/",
    },
  ];

  return (
    <div id="sponsors" className="flex flex-col items-center gap-2 text-center">
      <div className="flex flex-col">
        <div className="relative w-fit mx-auto flex items-center">
          <h2 className="text-4xl lg:text-6xl font-bold relative z-10">
            Powered By Our{" "}
            <span className="relative inline-block align-bottom">
              <span className="relative z-10">Sponsors</span>
              <img
                width={2480}
                aria-hidden="true"
                src={sponsorsRound}
                alt="Decorative circle around the word Sponsors"
                className="absolute left-0 bottom-0 pointer-events-none"
              />
            </span>
          </h2>
        </div>
        <div className="h-10" />
        <h3 className="text-xl md:text-2xl lg:text-4xl font-calSans">
          Meet the sponsors supporting our mission
        </h3>
        <div className="h-12" />
        <div className="flex flex-col max-w-6xl mx-auto gap-8">
          <SponsorsSection title="Venue Sponsors" sponsors={venueSponsors} />
          <SponsorsSection
            title="Other Sponsors"
            sponsors={supportingSponsors}
          />
        </div>
        <div className="h-16" />
      </div>
    </div>
  );
};

interface SponsorsSectionProps {
  sponsors: {
    sponsorId: number;
    name: string;
    description: string;
    logo: string;
    contact: string;
    website: string;
  }[];
  title: string;
}

const SponsorsSection: FC<SponsorsSectionProps> = ({ title, sponsors }) => {
  return (
    <>
      <h2 className="text-xl lg:text-2xl text-center font-calSans">{title}</h2>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 px-8">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.sponsorId}
            className="flex gap-2 items-start justify-start font-sans bg-white rounded-2xl shadow-md hover:scale-[1.02] transition-transform cursor-pointer w-full sm:w-72 px-2 py-3"
            onClick={() => {
              if (sponsor.website) {
                window.open(sponsor.website, "_blank", "noopener, noreferrer");
              }
            }}
            role="button"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-12 w-auto rounded"
              loading="lazy"
            />
            <div className="flex flex-col justify-start items-start">
              <p className="font-bold text-base text-left">{sponsor.name}</p>
              <p className="text-xs mb-1 opacity-80 text-left">
                {sponsor.description}
              </p>
              <p className="text-xs opacity-60">{sponsor.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sponsors;
