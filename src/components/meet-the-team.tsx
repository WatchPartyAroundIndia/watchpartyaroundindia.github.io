import adityaBalaji from "../assets/2025/team/Adithya Balaji.jpeg";
import akshayPakanati from "../assets/2025/team/Akshay Pakanati.png";
import amitSamant from "../assets/2025/team/Amit Samant.png";
import bhavinVaghela from "../assets/2025/team/Bhavin Vaghela.jpg";
import bhumikaPatel from "../assets/2025/team/Bhumika Patel.jpeg";
import devanshi from "../assets/2025/team/Devanshi.png";
import gokulB from "../assets/2025/team/Gokul B.jpeg";
import kajalSheth from "../assets/2025/team/Kajal Sheth.png";
import maninderSingh from "../assets/2025/team/Maninder Singh.jpeg";
import nayyanMujadiya from "../assets/2025/team/Nayyan Mujadiya.jpeg";
import nishantDesai from "../assets/2025/team/Nishant Desai.png";
import raghavSethi from "../assets/2025/team/Raghav Sethi.png";
import rajRaval from "../assets/2025/team/Raj Raval.png";
import rushitRakhasiya from "../assets/2025/team/Rushit Rakhasiya.png";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      id: 1,
      socialLink: "https://www.linkedin.com/in/fuglyab",
      name: "Adithya Balaji",
      memojiLogo: adityaBalaji,
      backgroundColour: "#FFB069",
    },
    {
      id: 2,
      socialLink: "https://www.linkedin.com/in/kajal-sheth",
      name: "Kajal Sheth",
      memojiLogo: kajalSheth,
      backgroundColour: "#FFDEC0",
    },
    {
      id: 3,
      socialLink: "https://www.linkedin.com/in/bhavin-vaghela",
      name: "Bhavin Vaghela",
      memojiLogo: bhavinVaghela,
      backgroundColour: "#A6CCFA",
    },
    {
      id: 4,
      socialLink: "https://www.linkedin.com/in/nayyanmujadiya/",
      name: "Nayyan Mujadiya",
      memojiLogo: nayyanMujadiya,
      backgroundColour: "#FFE5F8",
    },
    {
      id: 5,
      socialLink: "https://www.linkedin.com/in/manindersinghh",
      name: "Maninder Singh",
      memojiLogo: maninderSingh,
      backgroundColour: "#D6D6D6",
    },
    {
      id: 6,
      socialLink: "https://www.linkedin.com/in/bhumika-ios",
      name: "Bhumika Patel",
      memojiLogo: bhumikaPatel,
      backgroundColour: "#FF69E1",
    },
    {
      id: 7,
      socialLink: "https://www.linkedin.com/in/rushit-r-757aa0167/",
      name: "Rushit Rakhasiya",
      memojiLogo: rushitRakhasiya,
      backgroundColour: "#BEFF93",
    },
    {
      id: 8,
      socialLink: "https://www.linkedin.com/in/nishantdesai1/",
      name: "Nishant Desai",
      memojiLogo: nishantDesai,
      backgroundColour: "#FFB069",
    },
    {
      id: 9,
      socialLink: "https://www.linkedin.com/in/akshaypakanati/",
      name: "Akshay Pakanati",
      memojiLogo: akshayPakanati,
      backgroundColour: "#A6CCFA",
    },
    {
      id: 10,
      socialLink: "https://www.linkedin.com/in/sforsethi/",
      name: "Raghav Sethi",
      memojiLogo: raghavSethi,
      backgroundColour: "#FFDEC0",
    },
    {
      id: 11,
      socialLink: "https://www.linkedin.com/in/amitsamant-dev",
      name: "Amit Samant",
      memojiLogo: amitSamant,
      backgroundColour: "#FFE5F8",
    },
    {
      id: 12,
      socialLink: "https://www.linkedin.com/in/gokul-bvb",
      name: "Gokul B",
      memojiLogo: gokulB,
      backgroundColour: "#D6D6D6",
    },
    {
      id: 13,
      socialLink: "https://www.linkedin.com/in/devanshimodha/",
      name: "Devanshi",
      memojiLogo: devanshi,
      backgroundColour: "#FF69E1",
    },
    {
      id: 14,
      socialLink: "https://www.linkedin.com/in/rajhraval/",
      name: "Raj Raval",
      memojiLogo: rajRaval,
      backgroundColour: "#FFDEC0",
    },
  ];

  return (
    <div id="team" className="flex flex-col items-center justify-center">
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
                if (member.socialLink !== "#") {
                  window.open(member.socialLink, "_blank");
                }
              }}
              onKeyDown={(e) =>
                e.key === "Enter" && window.open(member.socialLink, "_blank")
              }
            >
              <img
                loading="lazy"
                src={member.memojiLogo}
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
