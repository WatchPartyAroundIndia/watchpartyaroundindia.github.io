import { Tweet } from "react-tweet";

const Testimonials = () => {
  const tweets = [
    "1800220646326304813",
    "1800450572950331484",
    "1800203162286182516",
    "1800240372443943400",
    "1808320576135586092",
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-24" />
      <h2 className="font-sans font-bold text-3xl md:text-4xl mb-3 text-center">
        Experiences That{" "}
        <span className="font-coveredByYourGrace text-[#BDA6A6] text-4xl md:text-5xl">
          Inspire
        </span>
      </h2>
      <h4 className="font-sans font-bold text-lg md:text-2xl text-[#A4A4A4] text-center">
        Hear what attendees loved about their experience
      </h4>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 w-full max-w-7xl mt-8 mx-auto px-3 space-y-4">
        {tweets.map((tweet) => (
          <div key={tweet} className="light break-inside-avoid mb-4 px-1">
            <Tweet id={tweet} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
