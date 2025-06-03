import { FC } from "react";
import azamSharpLogo from "../assets/2025/azam-sharp.svg";
import exploringFreelancingLogo from "../assets/2025/exploring-freelancing.svg";
import helmLogo from "../assets/2025/helm.svg";
import lumyLogo from "../assets/2025/lumy.svg";
import mediateLogo from "../assets/2025/mediate.svg";
import practicalIosBooksLogo from "../assets/2025/practical-ios-books.svg";
import rocketsimLogo from "../assets/2025/rocketsim.svg";
import sponsorsRound from "../assets/2025/sponsors-round.svg";
import tasksLogo from "../assets/2025/tasks.svg";

const Sponsors = () => {
  const venueSponsors = [
    {
      sponsorId: 1,
      name: "Tasks",
      description: "Daily Planner, Manage Projects",
      logo: tasksLogo,
      contact: "Mustafa Yusuf",
      website: "",
    },
    {
      sponsorId: 2,
      name: "Mediate",
      description: "Timer. Tracker. Motivator.",
      logo: mediateLogo,
      contact: "Mithil Jadhav",
      website: "",
    },
    {
      sponsorId: 3,
      name: "Lumy",
      description: "The Beautiful Sun Tracking App",
      logo: lumyLogo,
      contact: "Raja Vijayaram",
      website: "",
    },
    {
      sponsorId: 4,
      name: "Helm",
      description: "macOS App for App Store Connect",
      logo: helmLogo,
      contact: "Pol Piella",
      website: "",
    },
    {
      sponsorId: 5,
      name: "RocketSim",
      description: "Build Apps Faster on Xcode",
      logo: rocketsimLogo,
      contact: "Antoine van der Lee",
      website: "",
    },
  ];

  const otherSponsors = [
    {
      sponsorId: 1,
      name: "Practical iOS Books",
      description: "Concurrency, Combine, Core Data",
      logo: practicalIosBooksLogo,
      contact: "Donny Wals",
      website: "",
    },
    {
      sponsorId: 2,
      name: "Free Courses",
      description: "on Azamsharp School",
      logo: azamSharpLogo,
      contact: "Mohammad Azam",
      website: "",
    },
    {
      sponsorId: 3,
      name: "Exploring Freelancing",
      description: "Start your freelance journey!",
      logo: exploringFreelancingLogo,
      contact: "Rudrank Riyamm",
      website: "",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-2 text-center">
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
          <SponsorsSection title="Other Sponsors" sponsors={otherSponsors} />
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
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-10">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.sponsorId}
            className={`flex gap-2 items-start justify-start p-2 min-w-80 font-sans bg-white rounded-2xl shadow-md hover:scale-[1.02] transition-transform ${
              sponsor.website ? "cursor-pointer" : "cursor-default"
            }`}
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
              className="w-16 h-16"
              loading="lazy"
            />
            <div className="flex flex-col justify-start items-start">
              <p className="font-bold text-base">{sponsor.name}</p>
              <p className="text-xs mb-1 opacity-80">{sponsor.description}</p>
              <p className="text-[14px] opacity-80">{sponsor.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sponsors;
