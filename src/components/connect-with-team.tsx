import swiftLogo from "../assets/2025/swift.svg";

const ConnectWithTeam = () => {
  const teamMembers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto px-4 text-center">
      <h4 className="font-bold text-xl md:text-2xl lg:text-3xl font-sans mb-3">
        Connect with passionate developers from across India
      </h4>
      <div className="flex justify-start items-center mt-4 gap-6 mb-10 w-full overflow-x-auto">
        {teamMembers.map((_, i) => (
          <img
            key={i}
            src={swiftLogo}
            alt="swift"
            loading="lazy"
            className="w-16 h-16 flex-shrink-0"
          />
        ))}
      </div>
      <button className="rounded-lg bg-[#f6f6f6] font-sans font-semibold w-52 h-12">
        Meet the team →
      </button>
      <div className="h-12" />
    </div>
  );
};

export default ConnectWithTeam;
