import speaker01 from "../assets/images/speakers/01.svg";
import speaker02 from "../assets/images/speakers/02.svg";
import speaker03 from "../assets/images/speakers/03.svg";
import speaker04 from "../assets/images/speakers/04.svg";
import speaker05 from "../assets/images/speakers/05.svg";
import speaker06 from "../assets/images/speakers/06.svg";
import speaker07 from "../assets/images/speakers/07.svg";

const Speakers = () => {
  const listOfSpeakers = [
    {
      id: 1,
      name: "Nishant Desai",
      designation: "iOS Engineer",
      company: "PSPDFKit",
      location: "Swift Mumbai",
      imageSrc: speaker01,
      linkedIn: "https://www.linkedin.com/in/nishantdesai1",
      twitter: "https://x.com/nish_desai",
    },
    {
      id: 2,
      name: "Dishant Nagpal",
      designation: "WWDC23 Scholar iOS Intern",
      company: "Swipe",
      location: "Watch Party Delhi",
      imageSrc: speaker02,
      linkedIn: "https://www.linkedin.com/in/dishant-nagpal-6a365019a/",
      twitter: "https://x.com/DishantNagpal10",
    },
    {
      id: 3,
      name: "Akshay Pakanati",
      designation: "Lead iOS Engineer",
      company: "A23 Rummy",
      location: "Swift Hyderabad",
      imageSrc: speaker03,
      linkedIn: "https://www.linkedin.com/in/akshaypakanati/",
      twitter: "https://x.com/akshaypakanati",
    },
    {
      id: 4,
      name: "Mithil Jadhav",
      designation: "Founder, Rhythmic Works WWDC24",
      company: "Apple Design Awards Finalist - Meditate",
      location: "Swift Bengaluru",
      imageSrc: speaker04,
      linkedIn: "https://www.linkedin.com/in/mithil-jadhav-84b23212/",
      twitter: "https://x.com/mithiljadhav",
    },
    {
      id: 5,
      name: "Raksha Rao",
      designation: "CEO, Co-founder, first VisionOS app from India",
      company: "Parjanya Creative Solutions Chaarana",
      location: "Swift Bengaluru",
      imageSrc: speaker05,
      linkedIn: "https://www.linkedin.com/in/raksharao/",
      twitter: "https://x.com/raksha_rao",
    },
    {
      id: 6,
      name: "Kirti Verma",
      designation: "SDE II",
      company: "Swiggy",
      location: "Swift Bengaluru",
      imageSrc: speaker06,
      linkedIn: "https://www.linkedin.com/in/kirti-verma-05aaa6149/",
    },
    {
      id: 7,
      name: "Shashwat Mithyantha",
      designation: "SDE III",
      company: "Swiggy",
      location: "Swift Bengaluru",
      imageSrc: speaker07,
      linkedIn: "https://www.linkedin.com/in/shashwat-mithyantha/",
    },
  ];

  return (
    <div className='flex flex-col justify-center'>
      <div className='h-8'></div>
      <h5 className='text-2xl text-white text-center font-semibold'>
        Our Speakers
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
            <p className='text-sm font-medium text-white'>Keynote Speaker</p>
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

export default Speakers;
