import teamMember1 from "../assets/2025/team/Adithya Balaji.jpeg";
import teamMember2 from "../assets/2025/team/Akshay Pakanati.png";
import teamMember3 from "../assets/2025/team/Bhavin Vaghela.jpg";
import teamMember4 from "../assets/2025/team/Bhumika Patel.jpeg";
import teamMember5 from "../assets/2025/team/Gokul B.jpeg";
import teamMember6 from "../assets/2025/team/Kajal Sheth.png";
import teamMember7 from "../assets/2025/team/Nayyan Mujadiya.jpeg";
import teamMember8 from "../assets/2025/team/Nishant Desai.png";
import teamMember9 from "../assets/2025/team/Raghav Sethi.png";
import teamMember10 from "../assets/2025/team/Rushit Rakhasiya.png";

const ConnectWithTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Adithya Balaji",
      image: teamMember1,
    },
    {
      id: 2,
      name: "Akshay Pakanati",
      image: teamMember2,
    },
    {
      id: 3,
      name: "Bhavin Vaghela",
      image: teamMember3,
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
      image: teamMember6,
    },
    {
      id: 7,
      name: "Nayyan Mujadiya",
      image: teamMember7,
    },
    {
      id: 8,
      name: "Nishant Desai",
      image: teamMember8,
    },
    {
      id: 9,
      name: "Raghav Sethi",
      image: teamMember9,
    },
    {
      id: 10,
      name: "Rushit Rakhasiya",
      image: teamMember10,
    },
  ];

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto px-4 text-center">
      <h4 className="font-bold text-xl md:text-2xl lg:text-3xl font-sans mb-3">
        Connect with passionate developers from across India
      </h4>
      <div className="flex justify-start items-center mt-4 gap-6 mb-10 w-full overflow-x-auto">
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
      <button className="rounded-lg bg-[#f6f6f6] font-sans font-semibold w-52 h-12">
        Meet the team →
      </button>
      <div className="h-12" />
    </div>
  );
};

export default ConnectWithTeam;
