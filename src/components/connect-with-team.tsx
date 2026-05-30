import { HashLink as Link } from "react-router-hash-link";
import teamMember1 from "../assets/2025/team/Adithya Balaji.jpeg";
import teamMember2 from "../assets/2025/team/Akshay Pakanati.png";
import teamMember3 from "../assets/2025/team/Amit Samant.png";
import teamMember4 from "../assets/2025/team/Bhumika Patel.jpeg";
import teamMember5 from "../assets/2025/team/Gokul B.jpeg";
import teamMember6 from "../assets/2025/team/Ayush Singh.png";
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
import teamMember19 from "../assets/2025/team/Raj Raval.png";
import teamMember20 from "../assets/2025/team/Ranga Reddy.png";
import teamMember21 from "../assets/2026/team/krishna-patidar.jpeg";
import teamMember22 from "../assets/2026/team/Dr. Nikhil.jpeg";
import teamMember23 from "../assets/2026/team/KrishnaPermi.png";
import teamMember24 from "../assets/2026/team/PinakR.png";
import teamMember25 from "../assets/2026/team/RizwanA.jpeg";
import teamMember26 from "../assets/2026/team/Jigar-Patel.jpeg";

const ConnectWithTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Adithya Balaji",
      image: teamMember1,
    },
    {
      id: 2,
      name: "Akanksha Sharma",
      image: teamMember15,
    },
    {
      id: 3,
      name: "Akshay Pakanati",
      image: teamMember2,
    },
    {
      id: 4,
      name: "Amit Samant",
      image: teamMember3,
    },
    {
      id: 5,
      name: "Ayush Singh",
      image: teamMember6,
    },
    {
      id: 6,
      name: "Bhavin Vaghela",
      image: teamMember18,
    },
    {
      id: 7,
      name: "Bhumika Patel",
      image: teamMember4,
    },
    {
      id: 8,
      name: "Dr. Nikhil Mangrulkar",
      image: teamMember22,
    },
    {
      id: 9,
      name: "Gokul B",
      image: teamMember5,
    },
    {
      id: 10,
      name: "Kajal Sheth",
      image: teamMember17,
    },
    {
      id: 11,
      name: "Krishna Patidar",
      image: teamMember21,
    },
    {
      id: 12,
      name: "Krishna Permi",
      image: teamMember23,
    },
    {
      id: 13,
      name: "Nayyan Mujadiya",
      image: teamMember7,
    },
    {
      id: 14,
      name: "Nikhil Nigade",
      image: teamMember11,
    },
    {
      id: 15,
      name: "Nishant Desai",
      image: teamMember8,
    },
    {
      id: 16,
      name: "Pinak Rokde",
      image: teamMember24,
    },
    {
      id: 17,
      name: "Raghav Sethi",
      image: teamMember9,
    },
    {
      id: 18,
      name: "Raj Raval",
      image: teamMember19,
    },
    {
      id: 19,
      name: "Ranga Reddy",
      image: teamMember20,
    },
    {
      id: 20,
      name: "Ratnesh Jain",
      image: teamMember16,
    },
    {
      id: 21,
      name: "Rimesh Jotaniya",
      image: teamMember12,
    },
    {
      id: 22,
      name: "Rizwan Ahmed",
      image: teamMember25,
    },
    {
      id: 23,
      name: "Rushit Rakhasiya",
      image: teamMember10,
    },
    {
      id: 24,
      name: "Vedang Kulkarni",
      image: teamMember13,
    },
    {
      id: 25,
      name: "Yogesh Singh",
      image: teamMember14,
    },
    {
      id: 26,
      name: "JIGAR PATEL",
      image: teamMember26,
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
