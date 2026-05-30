import { FC } from "react";
import sponsorsRound from "../assets/2025/sponsors-round.svg";
import atlasLogo from "../assets/2025/sponsors/atlas.svg";
import ixigoLogo from "../assets/2025/sponsors/ixigo.png";
import keralaStartupMissionLogo from "../assets/2025/sponsors/kerala-startup-mission.svg";
import sedinLogo from "../assets/2026/sponsors/sedin.png";
import swiggyLogo from "../assets/2025/sponsors/swiggy.png";
import draperStartUpHouseLogo from "../assets/2025/sponsors/draper.svg";
import pixsterStudioLogo from "../assets/2026/sponsors/pixterStudio.jpeg";
import optimumBrewLogo from "../assets/2026/sponsors/optimumBrew_logo.png";
import thecrib from "../assets/2026/sponsors/thecrib.png";

const Sponsors = () => {
  const venueSponsors = [
    {
      sponsorId: 1,
      name: "Sedin Technologies",
      description: "Better the best",
      logo: sedinLogo,
      contact: "Chennai",
      website: "https://sedintechnologies.com",
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
      name: "Pixster Studio",
      description: "Crafting Innovative Apps with Passion",
      logo: pixsterStudioLogo,
      contact: "Ahmedabad",
      website: "https://www.pixsterstudio.com",
    },
    {
      sponsorId: 5,
      name: "Atlas University",
      description: "Higher education for changemakers",
      logo: atlasLogo,
      contact: "Mumbai",
      website: "",
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
    {
      sponsorId: 8,
      name: "Draper StartUp House",
      description: "The Global Home for Entrepreneurs",
      logo: draperStartUpHouseLogo,
      contact: "Hyderabad",
      website: "https://draperstartuphouse.com/hyderabad",
    },
    {
      sponsorId: 9,
      name: "OptimumBrew Technology",
      description: "",
      logo: optimumBrewLogo,
      contact: "Surat",
      website: "https://optimumbrew.com/",
    },
    {
      sponsorId: 8,
      name: "The Crib",
      description: "Taqueria | Pickleball | Rock Climbing",
      logo: thecrib,
      contact: "Nagpur",
      website: "https://maps.app.goo.gl/ctqvzMemnHXhxix56",
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
