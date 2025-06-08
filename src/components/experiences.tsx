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
      {author ? (
        <p className="text-xs lg:text-sm text-[#634200]/35 font-semibold mt-1">
          {author}
        </p>
      ) : (
        <p>
          <br />
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
        position="top-[14%] md:top-[18%] left-[4%]"
        rotation="rotate-[2.8deg]"
        quote="For me WWDC watch party served as a hub for community-driven learning, collaboration, and celebration, reinforcing the importance of a supportive and inclusive developer ecosystem"
      />
      <StickyNote
        position="top-[20%] md:top-[18%] right-[5%]"
        rotation="rotate-[18deg]"
        quote="The WWDC24 Watch Party was an incredible experience. The Community bonding, Knowledge Sharing and Networking it brought was unparalleled."
      />
      <StickyNote
        position="bottom-[20%] md:bottom-[14%] left-[1%]"
        rotation="rotate-[-9deg]"
        quote="The watch party helped me connect with fellow apple enthusiasts and professionals in the tech community. It was great talking to them and exchanging ideas."
      />
      <StickyNote
        position="bottom-[20%] md:bottom-[15%] right-[5%]"
        rotation="rotate-[18deg]"
        quote="The panel members knowledge and networking with developers was welcoming and worth it."
      />
    </div>
  );
};

export default Experiences;
