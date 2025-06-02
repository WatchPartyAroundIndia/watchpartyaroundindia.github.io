import { FC } from "react";
import arrowBottomLogo from "../assets/2025/arrow-bottom.svg";
import arrowTopLogo from "../assets/2025/arrow-top.svg";

interface ExperiencesProps {}

const Experiences: FC<ExperiencesProps> = () => {
  return (
    <div className="relative flex items-center justify-center text-center px-4 max-w-6xl mx-auto h-[850px]">
      {/* Arrows */}
      <div className="absolute top-16 md:top-0 left-1/2 transform -translate-x-1/2">
        <img
          src={arrowTopLogo}
          alt="arrow trailing"
          className="h-40 md:h-60 lg:h-100"
        />
      </div>
      <div className="absolute bottom-16 md:bottom-[-4%] left-1/2 transform -translate-x-1/2">
        <img
          src={arrowBottomLogo}
          alt="arrow leading"
          className="h-40 md:h-60 lg:h-100"
        />
      </div>

      {/* Center Text */}
      <div className="z-10 max-w-3xl font-nunitoSans font-extrabold text-4xl lg:text-6xl">
        <h1 className="leading-snug text-[#1F1F29]">
          Experience the magic of
          <br />
          <span className="italic">WWDC with India's Swift communities</span>
          <br />
          <span>live, loud, and together</span>
        </h1>
      </div>

      {/* Sticky Notes */}
      <div className="absolute top-[28%] md:top-[24%] left-[4%] rotate-[1.55deg] bg-orange-100 p-3 rounded-xl shadow w-48 lg:w-64 text-left text-sm lg:text-xl">
        <p className="font-bold font-nunitoSans text-[#634200] italic">
          Innovative, playful — I like that I don't have to think about data
          anymore.
        </p>
        <p className="text-xs lg:text-base text-[#634200]/35 font-semibold mt-1">
          Marian, Product Designer
        </p>
      </div>

      <div className="absolute top-[28%] md:top-[18%] right-[5%] rotate-[18deg] bg-orange-100 p-3 rounded-xl shadow w-48 lg:w-64 text-left text-sm lg:text-xl">
        <p className="font-bold font-nunitoSans text-[#634200] italic">
          Love how clean the design is. Doesn't look overwhelming like many
          project tools
        </p>
        <p className="text-xs lg:text-basee text-[#634200]/35 font-semibold mt-1">
          Leszek, Project Manager
        </p>
      </div>

      <div className="absolute bottom-[26%] md:bottom-[20%] left-[1%] rotate-[-9deg] bg-orange-100 p-3 rounded-xl shadow w-48 lg:w-64 text-left text-sm lg:text-xl">
        <p className="font-bold font-nunitoSans text-[#634200] italic">
          Super simple, fun to set up a project, and immediately multi-
        </p>
        <br />
        <br />
      </div>

      <div className="absolute bottom-[24%] md:bottom-[15%] right-[5%] rotate-[18deg] bg-orange-100 p-3 rounded-xl shadow w-48 lg:w-64 text-left text-sm lg:text-xl">
        <p className="font-bold font-nunitoSans text-[#634200] italic">
          Feels very plug-and-play and is great at showing when the project is
          at risk
        </p>
        <p className="text-xs lg:text-base text-[#634200]/35 font-semibold mt-1">
          Madjid, Graphic Designer
        </p>
      </div>
    </div>
  );
};

export default Experiences;
