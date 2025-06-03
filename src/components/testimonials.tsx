import { FC } from "react";
import { Tweet } from "react-tweet";

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = () => {
  const tweets = [
    {
      id: 1,
      tweetId: "1802058968841208259",
    },
    {
      id: 2,
      tweetId: "1802055170723024898",
    },
    {
      id: 3,
      tweetId: "1802118173648658603",
    },
    {
      id: 4,
      tweetId: "1801905908647448851",
    },
    {
      id: 5,
      tweetId: "1802072899647410579",
    },
    {
      id: 6,
      tweetId: "1801803967430856949",
    },
    {
      id: 7,
      tweetId: "1666213689803030529",
    },
    {
      id: 8,
      tweetId: "1404280679634980868",
    },
    {
      id: 9,
      tweetId: "1403221154832302082",
    },
    {
      id: 10,
      tweetId: "1800993559224385645",
    },
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
          <div key={tweet.id} className="light break-inside-avoid mb-4">
            <Tweet id={tweet.tweetId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
