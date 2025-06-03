import { FC } from "react";
import arrowBottomLogo from "../assets/2025/arrow-bottom.svg";
import arrowTopLogo from "../assets/2025/arrow-top.svg";

interface StickyNoteProps {
  position: string;
  rotation: string;
  quote: string;
  author?: string;
}

const StickyNote: FC<StickyNoteProps> = ({
  position,
  rotation,
  quote,
  author,
}) => {
  return (
    <div
      className={`absolute ${position} ${rotation} bg-orange-100 p-3 rounded-xl shadow w-36 md:w-48 lg:w-64 text-left text-sm lg:text-xl min-h-[100px] transition-transform hover:scale-105 duration-200`}
    >
      <p className="font-bold font-nunitoSans text-[#634200] italic text-xs md:text-sm lg:text-base">
        {quote}
      </p>
      {author && (
        <p className="text-xs lg:text-sm text-[#634200]/35 font-semibold mt-1">
          {author}
        </p>
      )}
    </div>
  );
};

const Experiences = () => {
  return (
    <div className="relative flex items-center justify-center text-center px-4 max-w-6xl mx-auto h-[750px]">
      {/* Arrows */}
      <div className="absolute top-4 md:top-0 left-1/2 transform -translate-x-1/2">
        <img
          alt=""
          aria-hidden="true"
          src={arrowTopLogo}
          className="h-40 md:h-60 lg:h-100"
        />
      </div>
      <div className="absolute bottom-0 md:bottom-[-4%] left-1/2 transform -translate-x-1/2">
        <img
          alt=""
          aria-hidden="true"
          src={arrowBottomLogo}
          className="h-40 md:h-60 lg:h-100"
        />
      </div>

      {/* Center Text */}
      <div className="z-10 max-w-3xl font-nunitoSans font-extrabold text-3xl md:text-5xl lg:text-6xl">
        <h1 className="leading-snug text-[#1F1F29]">
          Experience the magic of
          <br />
          <span className="italic">
            WWDC with India&apos;s Swift communities
          </span>
          <br />
          <span>live, loud, and together</span>
        </h1>
      </div>

      {/* Sticky Notes */}
      <StickyNote
        position="top-[24%] md:top-[24%] left-[4%]"
        rotation="rotate-[1.55deg]"
        quote="Innovative, playful — I like that I don't have to think about data anymore."
        author="Marian, Product Designer"
      />
      <StickyNote
        position="top-[20%] md:top-[18%] right-[5%]"
        rotation="rotate-[18deg]"
        quote="Love how clean the design is. Doesn't look overwhelming like many project tools"
        author="Leszek, Project Manager"
      />
      <StickyNote
        position="bottom-[24%] md:bottom-[20%] left-[1%]"
        rotation="rotate-[-9deg]"
        quote="Super simple, fun to set up a project, and immediately multi-"
      />
      <StickyNote
        position="bottom-[20%] md:bottom-[15%] right-[5%]"
        rotation="rotate-[18deg]"
        quote="Feels very plug-and-play and is great at showing when the project is at risk"
        author="Madjid, Graphic Designer"
      />
    </div>
  );
};

export default Experiences;
