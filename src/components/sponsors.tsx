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
          className="absolute w-40 h-16 lg:w-[350px] lg:h-[120px] right-[-14px] top-[-10px] lg:right-[-65px] lg:top-[-20px]"
        />
        <h2 className="text-3xl lg:text-6xl font-bold">
          Powered By Our Sponsors
        </h2>
        <div className="h-10" />
        <h3 className="text-lg lg:text-4xl font-calSans">
          Meet the sponsors supporting our mission
        </h3>
        <div className="h-12" />
      </div>
    </div>
  );
};

export default Sponsors;
