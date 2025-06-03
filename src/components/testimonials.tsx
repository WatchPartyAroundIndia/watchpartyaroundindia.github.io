import { Tweet } from "react-tweet";

const Testimonials = () => {
  const tweets = [
    "1802058968841208259",
    "1802055170723024898",
    "1802118173648658603",
    "1801905908647448851",
    "1802072899647410579",
    "1801803967430856949",
    "1666213689803030529",
    "1404280679634980868",
    "1403221154832302082",
    "1800993559224385645",
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
