import ashwinsrihari from "../assets/2025/team/ashwinsrihari.jpeg";

const MeetTheTeam = () => {
  const speaker = {
    id: 1,
    socialLink: "https://x.com/ashwinsrihari",
    name: "Ashwin Srihari",
    memojiLogo: ashwinsrihari,
    backgroundColour: "#FFB069",
  };

  return (
    <div id="speakers" className="flex flex-col items-center justify-center">
      <div className="h-24" />
      <h2 className="font-sans font-bold text-3xl md:text-4xl mb-3">
        Watch Party Around India Keynote
      </h2>
      <h4 className="font-sans font-bold text-lg md:text-2xl text-[#A4A4A4]">
        Design for India
      </h4>
      <div className="flex flex-col items-center justify-center max-w-7xl mt-8 px-4">
        <div
          role="button"
          className="flex flex-col items-center justify-end w-48 h-48 rounded-full shadow relative hover:scale-105 transition-transform duration-200"
          style={{ backgroundColor: speaker.backgroundColour }}
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            if (speaker.socialLink !== "#") {
              window.open(speaker.socialLink, "_blank");
            }
          }}
          onKeyDown={(e) =>
            e.key === "Enter" && window.open(speaker.socialLink, "_blank")
          }
        >
          <img
            loading="lazy"
            src={speaker.memojiLogo}
            alt={`${speaker.name} logo`}
            className="w-36 h-36 rounded-full mb-1 absolute top-4 left-1/2 -translate-x-1/2 object-cover"
          />
          <div
            title={`View ${speaker.name}'s profile`}
            className="font-oliver uppercase bg-[#F1E2D0] text-[#964C0A] w-full rounded-2xl text-center px-2 py-1 font-semibold text-xl absolute bottom-0 left-0 rotate-[4.45deg]"
          >
            {speaker.name}
          </div>
        </div>
        <h2 className="font-sans font-semibold text-xl text-center mt-8">
          2025 Apple Design Award Finalist&nbsp;
          <span className="text-3xl font-coveredByYourGrace text-[#BDA6A6]">
            Denim
          </span>
          &nbsp;App
        </h2>
      </div>
    </div>
  );
};

export default MeetTheTeam;
