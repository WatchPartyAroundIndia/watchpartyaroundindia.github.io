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

interface SponsorsProps {}

const Sponsors: FC<SponsorsProps> = () => {
  const sponsors = [
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
        <div className="relative w-fit mx-auto">
          <img
            src={sponsorsRound}
            alt="Sponsors"
            className="absolute w-44 h-16 lg:w-[350px] lg:h-[120px] right-0 top-[-10px] lg:right-[-65px] lg:top-[-28px]"
          />
          <h2 className="text-4xl lg:text-6xl font-bold">
            Powered By Our Sponsors
          </h2>
        </div>
        <div className="h-10" />
        <h3 className="text-2xl lg:text-4xl font-calSans">
          Meet the sponsors supporting our mission
        </h3>
        <div className="h-12" />
        <div className="flex flex-col max-w-6xl mx-auto">
          <h2 className="text-base md:text-xl lg:text-2xl text-center mb-4 font-calSans">
            Venue Sponsor
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-x-14 lg:gap-y-12">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.sponsorId}
                className="flex gap-2 items-start justify-start p-2 min-w-80 font-sans bg-white rounded-2xl shadow-md cursor-pointer"
                onClick={() =>
                  window.open(sponsor.website, "_blank", "noopener, noreferrer")
                }
                role="button"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-16 h-16"
                />
                <div className="flex flex-col justify-start items-start">
                  <p className="font-bold text-base">{sponsor.name}</p>
                  <p className="text-xs mb-1">{sponsor.description}</p>
                  <p className="text-[14px]">{sponsor.contact}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-8" />
          <h2 className="text-base md:text-xl lg:text-2xl text-center mb-4 font-calSans">
            Other Sponsors
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-x-14 lg:gap-y-12">
            {otherSponsors.map((sponsor) => (
              <div
                key={sponsor.sponsorId}
                className="flex gap-2 items-start justify-start p-2 min-w-80 font-sans bg-white rounded-2xl shadow-md cursor-pointer"
                onClick={() =>
                  window.open(sponsor.website, "_blank", "noopener, noreferrer")
                }
                role="button"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-16 h-16"
                />
                <div className="flex flex-col justify-start items-start">
                  <p className="font-bold text-base">{sponsor.name}</p>
                  <p className="text-xs mb-1">{sponsor.description}</p>
                  <p className="text-[14px]">{sponsor.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-16" />
      </div>
    </div>
  );
};

export default Sponsors;
