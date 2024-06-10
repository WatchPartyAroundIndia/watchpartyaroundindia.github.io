import panelist01 from "../assets/images/panelists/01.svg";
import panelist02 from "../assets/images/panelists/02.svg";
import panelist03 from "../assets/images/panelists/03.svg";
import panelist04 from "../assets/images/panelists/04.svg";
import panelist05 from "../assets/images/panelists/05.svg";
import panelist06 from "../assets/images/panelists/06.svg";
import panelist07 from "../assets/images/panelists/07.svg";
import panelist08 from "../assets/images/panelists/08.svg";
import panelist09 from "../assets/images/panelists/09.svg";
import panelist10 from "../assets/images/panelists/10.svg";

const PanelDiscussion = () => {
  const listOfSpeakers = [
    {
      id: 3,
      name: "Kishan Raja",
      designation: "Sr. iOS Engineer",
      company: "HyperlinkInfoSystem",
      location: "Swift Ahmedabad",
      imageSrc: panelist03,
      linkedIn: "https://www.linkedin.com/in/raja-kishan",
      twitter: "",
    },
    {
      id: 4,
      name: "Maulesh Vyas",
      designation: "Sr. iOS Engineer",
      company: "CricHeroes",
      location: "Swift Ahmedabad",
      imageSrc: panelist04,
      linkedIn: "https://www.linkedin.com/in/mauleshvyas",
      twitter: "https://x.com/mauleshvyas",
    },
    {
      id: 1,
      name: "Ajay Bhanushali",
      designation: "SSE",
      company: "Paytm",
      location: "Swift Mumbai",
      imageSrc: panelist01,
      linkedIn: "",
      twitter: "",
    },
    {
      id: 2,
      name: "Rushit Rakhasiya",
      designation: "iOS Developer",
      company: "Freelance",
      location: "Swift Mumbai",
      imageSrc: panelist02,
      linkedIn: "",
      twitter: "",
    },
    {
      id: 9,
      name: "Supriya Gunda",
      designation: "SDE-IV",
      company: "NativeX EdTech",
      location: "Swift Hyderabad",
      imageSrc: panelist09,
      linkedIn: "https://www.linkedin.com/in/gundasupriya/",
      twitter: "",
    },
    {
      id: 10,
      name: "Nikhil Soni",
      designation: "Founder of InfinityVerse",
      company: "Recognised Apple Swift Teacher, Mentor",
      location: "Swift Hyderabad",
      imageSrc: panelist10,
      linkedIn: "https://www.linkedin.com/in/nikhilsoni1302",
      twitter: "https://x.com/nick_soninikhil",
    },
    {
      id: 5,
      name: "Priyal Porwal",
      designation: "SMTS",
      company: "Salesforce",
      location: "Swift Bengaluru",
      imageSrc: panelist05,
      linkedIn: "https://www.linkedin.com/in/priyal-porwal/",
      twitter: "https://x.com/priyal_porwal_",
    },
    {
      id: 6,
      name: "Pallav Trivedi",
      designation: "Engineering Manager",
      company: "BMS",
      location: "Swift Bengaluru",
      imageSrc: panelist06,
      linkedIn: "https://www.linkedin.com/in/pallavtrivedi/",
      twitter: "",
    },
    {
      id: 7,
      name: "Krishnaprasad J",
      designation: "CTO, Co-Founder",
      company: "Parjanya Creative Solutions",
      location: "Swift Bengaluru",
      imageSrc: panelist07,
      linkedIn: "https://www.linkedin.com/in/krishnaprasad-jagadish/",
      twitter: "https://x.com/_kjagadish",
    },
    {
      id: 8,
      name: "Shubham Singh",
      designation: "SDE-3",
      company: "DailyRounds",
      location: "Swift Bengaluru",
      imageSrc: panelist08,
      linkedIn: "https://www.linkedin.com/in/shubham0812/",
      twitter: "https://x.com/Shubham_iosdev",
    },
  ];

  return (
    <div className='flex flex-col justify-center'>
      <div className='h-8'></div>
      <h5 className='text-2xl text-center font-semibold text-white'>
        Panel Discussion
      </h5>
      <h5 className='text-2xl text-center text-slate-400 font-semibold'>
        WWDC24 Predictions
      </h5>
      <div className='h-8'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto w-3/5 gap-8'>
        {listOfSpeakers.map((speaker) => (
          <div key={speaker.id} className='flex flex-col items-center'>
            <img
              src={speaker.imageSrc}
              alt={speaker.name}
              className='w-40 h-40 rounded-full mb-4 object-cover'
            />
            <p className='font-semibold text-xl text-white text-center'>
              {speaker.name}
            </p>
            <p className='text-base text-slate-400 text-center'>
              {speaker.designation}
            </p>
            <p className='text-base mb-1 text-slate-400 text-center'>
              {speaker.company}
            </p>
            <p className='text-sm font-medium text-white'>{speaker.location}</p>
            <div className='h-2'></div>
            <div
              className={`flex items-center ${
                speaker.linkedIn && speaker.twitter
                  ? "justify-between"
                  : "justify-center"
              }`}
            >
              {speaker.linkedIn && (
                <i
                  className={`fa-brands fa-linkedin-in text-white cursor-pointer ${
                    speaker.linkedIn && speaker.twitter ? "mr-4" : "mr-0"
                  }`}
                  onClick={() => {
                    window.open(speaker.linkedIn, "_blank");
                  }}
                ></i>
              )}
              {speaker.twitter && (
                <i
                  className='fa-brands fa-twitter text-white cursor-pointer'
                  onClick={() => {
                    window.open(speaker.twitter, "_blank");
                  }}
                ></i>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelDiscussion;
