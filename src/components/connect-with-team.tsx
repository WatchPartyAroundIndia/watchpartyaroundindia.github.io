import { HashLink as Link } from "react-router-hash-link";
import teamMember2 from "../assets/2025/team/Akshay Pakanati.png";
import teamMember4 from "../assets/2025/team/Bhumika Patel.jpeg";
import teamMember5 from "../assets/2025/team/Gokul B.jpeg";
import teamMember7 from "../assets/2025/team/Nayyan Mujadiya.jpeg";
import teamMember8 from "../assets/2025/team/Nishant Desai.png";
import teamMember9 from "../assets/2025/team/Raghav Sethi.png";
import teamMember10 from "../assets/2025/team/Rushit Rakhasiya.png";
import teamMember11 from "../assets/2026/team/NikhilN.jpg";
import teamMember12 from "../assets/2026/team/RimeshJ.jpeg";
import teamMember13 from "../assets/2026/team/VedangK.png";
import teamMember14 from "../assets/2026/team/YogeshS.jpg";
import teamMember15 from "../assets/2026/team/AkankshaS.jpeg";
import teamMember16 from "../assets/2026/team/RatneshJ.jpeg";
import teamMember17 from "../assets/2025/team/Kajal Sheth.png";
import teamMember18 from "../assets/2025/team/Bhavin Vaghela.jpg";

const ConnectWithTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Akanksha Sharma",
      image: teamMember15,
    },
    {
      id: 2,
      name: "Akshay Pakanati",
      image: teamMember2,
    },
    {
      id: 3,
      name: "Bhavin Vaghela",
      image: teamMember18,
    },
    {
      id: 4,
      name: "Bhumika Patel",
      image: teamMember4,
    },
    {
      id: 5,
      name: "Gokul B",
      image: teamMember5,
    },
    {
      id: 6,
      name: "Kajal Sheth",
      image: teamMember17,
    },
    {
      id: 7,
      name: "Nayyan Mujadiya",
      image: teamMember7,
    },
    {
      id: 8,
      name: "Nikhil Nigade",
      image: teamMember11,
    },
    {
      id: 9,
      name: "Nishant Desai",
      image: teamMember8,
    },
    {
      id: 10,
      name: "Raghav Sethi",
      image: teamMember9,
    },
    {
      id: 11,
      name: "Ratnesh Jain",
      image: teamMember16,
    },
    {
      id: 12,
      name: "Rimesh Jotaniya",
      image: teamMember12,
    },
    {
      id: 13,
      name: "Rushit Rakhasiya",
      image: teamMember10,
    },
    {
      id: 14,
      name: "Vedang Kulkarni",
      image: teamMember13,
    },
    {
      id: 15,
      name: "Yogesh Singh",
      image: teamMember14,
    },
  ];

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto px-4 text-center">
      <h4 className="font-bold text-xl md:text-2xl lg:text-3xl font-sans mb-3">
        Connect with passionate developers from across India
      </h4>
      <div className="flex flex-wrap justify-start items-center mt-4 gap-6 mb-12 w-full overflow-x-auto">
        {teamMembers.map((team) => (
          <img
            key={team.id}
            src={team.image}
            alt={team.name}
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
