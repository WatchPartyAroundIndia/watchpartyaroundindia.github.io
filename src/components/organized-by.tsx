import swiftAhmedabadLogo from "../assets/organisers/swift-ahmedabad.png";
import swiftBengaluruLogo from "../assets/organisers/swift-bengaluru.png";
import swiftChennaiLogo from "../assets/organisers/swift-chennai.png";
import swiftDelhiLogo from "../assets/organisers/swift-delhi.png";
import swiftHyderabadLogo from "../assets/organisers/swift-hyderabad.svg";
import swiftKozhikodeLogo from "../assets/organisers/swift-kozhikode.svg";
import swiftMumbaiLogo from "../assets/organisers/swift-mumbai.png";
import swiftSuratLogo from "../assets/organisers/swift-surat.jpeg";
import swiftPuneLogo from "../assets/organisers/swift-pune.png";
import swiftNagpurLogo from "../assets/organisers/swift-nagpur.jpeg";

const OrganizedBy = () => {
  const organizedChapters = [
    {
      id: 1,
      name: "Swift Delhi",
      logo: swiftDelhiLogo,
    },
    {
      id: 2,
      name: "Swift Bengaluru",
      logo: swiftBengaluruLogo,
    },
    {
      id: 3,
      name: "Swift Mumbai",
      logo: swiftMumbaiLogo,
    },
    {
      id: 4,
      name: "Swift Hyderabad",
      logo: swiftHyderabadLogo,
    },
    {
      id: 5,
      name: "Swift Ahmedabad",
      logo: swiftAhmedabadLogo,
    },
    {
      id: 6,
      name: "Swift Surat",
      logo: swiftSuratLogo,
    },
    {
      id: 7,
      name: "Swift Chennai",
      logo: swiftChennaiLogo,
    },
    {
      id: 8,
      name: "Swift Kozhikode",
      logo: swiftKozhikodeLogo,
    },
    {
      id: 9,
      name: "Swift Pune",
      logo: swiftPuneLogo,
    },
    {
      id: 11,
      name: "Swift Nagpur",
      logo: swiftNagpurLogo
    }
  ];

  return (
    <section
      className="flex flex-col max-w-6xl mx-auto"
      aria-labelledby="organized-by-heading"
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center mb-12 uppercase font-oliver">
        organized with ❤️ by
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-x-14 lg:gap-y-12">
        {organizedChapters.map((chapter) => (
          <div
            key={chapter.id}
            className="flex justify-center items-center gap-2"
          >
            <img
              src={chapter.logo}
              alt={chapter.name}
              className="h-9 w-9 object-contain rounded-full"
              loading="lazy"
            />
            <p className="font-calSans text-base lg:text-lg">{chapter.name}</p>
          </div>
        ))}
      </div>
      <div className="h-24" />
    </section>
  );
};

export default OrganizedBy;
