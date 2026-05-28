import { teamMembers } from "../data/team-members";

const MeetTheTeam = () => {
  return (
    <div id="team" className="flex flex-col items-center justify-center">
      <div className="h-24" />
      <h2 className="font-sans font-bold text-3xl md:text-4xl mb-3">
        Meet The Team
      </h2>
      <h4 className="font-sans font-bold text-lg md:text-2xl text-[#A4A4A4]">
        Built by devs, for devs
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
              onClick={(event) => {
                event.preventDefault();
                if (member.socialLink !== "#") {
                  window.open(member.socialLink, "_blank");
                }
              }}
              onKeyDown={(event) =>
                event.key === "Enter" && window.open(member.socialLink, "_blank")
              }
            >
              <img
                loading="lazy"
                src={member.photo}
                alt={`${member.name} logo`}
                className="w-36 h-36 rounded-full mb-1 absolute top-4 left-1/2 -translate-x-1/2 object-cover"
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
