import memoji from "../assets/2025/team/memoji.png";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      id: 1,
      socialLink: "#",
      name: "Ayush Singh",
      memojiLogo: memoji,
      backgroundColour: "#FFB069",
    },
    {
      id: 2,
      socialLink: "#",
      name: "Anshul Kumar",
      memojiLogo: memoji,
      backgroundColour: "#FFDEC0",
    },
    {
      id: 3,
      socialLink: "#",
      name: "Ranga Reddy",
      memojiLogo: memoji,
      backgroundColour: "#A6CCFA",
    },
    {
      id: 4,
      socialLink: "#",
      name: "Anirudh Jwala",
      memojiLogo: memoji,
      backgroundColour: "#FFE5F8",
    },
    {
      id: 5,
      socialLink: "#",
      name: "Devanshi",
      memojiLogo: memoji,
      backgroundColour: "#D6D6D6",
    },
    {
      id: 6,
      socialLink: "#",
      name: "Arayn Kumar",
      memojiLogo: memoji,
      backgroundColour: "#FF69E1",
    },
    {
      id: 7,
      socialLink: "#",
      name: "Piyush Kumar",
      memojiLogo: memoji,
      backgroundColour: "#BEFF93",
    },
    {
      id: 8,
      socialLink: "#",
      name: "Joshi Shivam",
      memojiLogo: memoji,
      backgroundColour: "#FFB069",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-24" />
      <h2 className="font-sans font-bold text-3xl md:text-4xl mb-3">
        Meet The Team
      </h2>
      <h4 className="font-sans font-bold text-lg md:text-2xl text-[#A4A4A4]">
        Build by devs, for devs
      </h4>
      <div className="flex justify-center max-w-7xl mt-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              role="button"
              className="flex flex-col items-center justify-end w-48 h-48 rounded-full shadow relative hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: member.backgroundColour }}
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                window.open(member.socialLink, "_blank");
              }}
              onKeyDown={(e) =>
                e.key === "Enter" && window.open(member.socialLink, "_blank")
              }
            >
              <img
                loading="lazy"
                src={member.memojiLogo}
                alt={`${member.name} logo`}
                className="w-36 h-36 rounded-full mb-1 absolute top-4 left-1/2 -translate-x-1/2"
              />
              <div
                title={`View ${member.name}'s profile`}
                className="font-oliver uppercase bg-[#F1E2D0] text-[#964C0A] w-full rounded-2xl text-center px-2 py-1 font-semibold text-xl absolute bottom-0 left-0 rotate-[4.45deg]"
              >
                {member.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
