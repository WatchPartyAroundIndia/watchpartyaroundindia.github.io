import { FC } from "react";
import swiftLogo from "../assets/2025/swift.svg";

interface ConnectWithTeamProps {}

const ConnectWithTeam: FC<ConnectWithTeamProps> = () => {
  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto px-4 text-center">
      <h4 className="font-bold text-3xl font-sans">
        Connect with passionate developers from across India
      </h4>
      <div className="flex justify-start items-center mt-4 gap-6 mb-10 overflow-x-auto scrollbar-thin max-w-full w-full">
        {[...Array(9)].map((_, i) => (
          <img
            key={i}
            src={swiftLogo}
            alt="swift"
            className="w-16 h-16 flex-shrink-0"
          />
        ))}
      </div>
      <button className="rounded-lg bg-[#f6f6f6] font-sans font-semibold w-52 h-12">
        Meet the team →
      </button>
      <div className="h-24" />
    </div>
  );
};

export default ConnectWithTeam;
