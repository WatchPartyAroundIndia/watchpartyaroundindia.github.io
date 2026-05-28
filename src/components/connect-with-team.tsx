import { HashLink as Link } from "react-router-hash-link";
import { connectWithTeamMembers } from "../data/team-members";

const ConnectWithTeam = () => {
  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto px-4 text-center">
      <h4 className="font-bold text-xl md:text-2xl lg:text-3xl font-sans mb-3">
        Connect with passionate developers from across India
      </h4>
      <div className="flex flex-wrap justify-start items-center mt-4 gap-6 mb-12 w-full overflow-x-auto">
        {connectWithTeamMembers.map((member) => (
          <img
            key={member.id}
            src={member.photo}
            alt={member.name}
            loading="lazy"
            className="w-16 h-16 flex-shrink-0 rounded-full object-cover"
          />
        ))}
      </div>
      <Link
        to="#team"
        className="rounded-lg bg-[#f6f6f6] font-sans font-semibold w-52 py-2.5"
      >
        Meet the team →
      </Link>
      <div className="h-12" />
    </div>
  );
};

export default ConnectWithTeam;
