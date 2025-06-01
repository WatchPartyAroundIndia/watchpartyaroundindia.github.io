import { FC } from "react";
import sponsorsRound from "../assets/2025/sponsors-round.svg";

interface SponsorsProps {}

const Sponsors: FC<SponsorsProps> = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="relative flex flex-col">
        <img
          src={sponsorsRound}
          alt="Sponsors"
          className="absolute w-44 h-16 lg:w-[350px] lg:h-[120px] right-0 top-[-10px] lg:right-[-65px] lg:top-[-20px]"
        />
        <h2 className="text-4xl lg:text-6xl font-bold">
          Powered By Our Sponsors
        </h2>
        <div className="h-10" />
        <h3 className="text-2xl lg:text-4xl font-calSans">
          Meet the sponsors supporting our mission
        </h3>
        <div className="h-12" />
        <div className="flex flex-col max-w-6xl mx-auto">
          <h2 className="text-base md:text-xl lg:text-2xl text-center mb-3 font-calSans">
            Venue Sponsor
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-x-14 lg:gap-y-12">
            <div className="flex justify-center items-center gap-2">
              <p className="font-calSans text-base lg:text-lg">Tasks</p>
            </div>
          </div>
          <div className="h-8" />
          <h2 className="text-base md:text-xl lg:text-2xl text-center mb-3 font-calSans">
            Other Sponsors
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
