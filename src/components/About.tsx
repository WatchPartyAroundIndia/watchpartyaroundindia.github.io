import swiftMumbai from "../assets/images/organisers/swift-mumbai.svg";
import swiftBengaluru from "../assets/images/organisers/swift-begaluru.svg";
import swiftHyderabad from "../assets/images/organisers/swift-hyderabad.svg";

import leader01 from "../assets/images/about/delhi/01.svg";
import leader02 from "../assets/images/about/ahemdabad/01.svg";
import leader03 from "../assets/images/about/ahemdabad/02.svg";
import leader04 from "../assets/images/about/mumbai/01.svg";
import leader05 from "../assets/images/about/mumbai/02.svg";
import leader06 from "../assets/images/about/mumbai/03.svg";
import leader07 from "../assets/images/about/bengaluru/01.svg";
import leader08 from "../assets/images/about/bengaluru/02.svg";
import leader09 from "../assets/images/about/bengaluru/03.svg";
import leader10 from "../assets/images/about/hyderabad/01.svg";
import leader11 from "../assets/images/about/hyderabad/02.svg";

const About = () => {
  const listOfChapters = [
    {
      id: 1,
      name: "Watch Party Delhi",
      voulenteers: [
        {
          id: 1,
          name: "Raghav Sethi",
          designation: "iOS Developer",
          company: "Freelance",
          imageSrc: leader01,
          linkedIn: "",
          twitter: "",
        },
      ],
    },
    {
      id: 2,
      name: "Swift Ahemdadbad",
      voulenteers: [
        {
          id: 3,
          name: "Devanshi Modha",
          designation: "Senior iOS Developer",
          company: "",
          imageSrc: leader02,
          linkedIn: "",
          twitter: "",
        },
        {
          id: 4,
          name: "Pallav Trivedi",
          designation: "Senior iOS Developer",
          company: "Assistant Project Manager",
          imageSrc: leader03,
          linkedIn: "",
          twitter: "",
        },
      ],
    },
    {
      id: 3,
      name: "Swift Mumbai",
      icon: swiftMumbai,
      voulenteers: [
        {
          id: 5,
          name: "Raj H Raval",
          designation: "Public Relations",
          company: "",
          imageSrc: leader04,
          linkedIn: "",
          twitter: "",
        },
        {
          id: 6,
          name: "Yogesh",
          designation: "Senior iOS Developer",
          company: "100ms",
          imageSrc: leader05,
          linkedIn: "",
          twitter: "",
        },
        {
          id: 7,
          name: "Akanksha Sharma",
          designation: "Senior Software Engineer",
          company: "HERE Maps",
          imageSrc: leader06,
          linkedIn: "",
          twitter: "",
        },
      ],
    },
    {
      id: 5,
      name: "Swift Hyderabad",
      icon: swiftHyderabad,
      voulenteers: [
        {
          id: 11,
          name: "Ranga Reddy",
          designation: "Senior Software Engineer",
          company: "",
          imageSrc: leader10,
          linkedIn: "",
          twitter: "",
        },
        {
          id: 12,
          name: "Anirudh Jwala",
          designation: "Senior Software Engineer",
          company: "IRIS",
          imageSrc: leader11,
          linkedIn: "",
          twitter: "",
        },
      ],
    },
    {
      id: 4,
      name: "Swift Bengaluru",
      icon: swiftBengaluru,
      voulenteers: [
        {
          id: 8,
          name: "Amit Samant",
          designation: "Senior iOS Engineer",
          company: "",
          imageSrc: leader07,
          linkedIn: "",
          twitter: "",
        },
        {
          id: 9,
          name: "Sinchan Maitri",
          designation: "iOS Engineer",
          company: "",
          imageSrc: leader08,
          linkedIn: "",
          twitter: "",
        },
        {
          id: 10,
          name: "Nayyan Mujadiya",
          designation: "R & D Engineer",
          company: "",
          imageSrc: leader09,
          linkedIn: "",
          twitter: "",
        },
      ],
    },
  ];

  return (
    <>
      <div id='about' className='h-16'></div>
      <div className='flex flex-col items-center justify-center'>
        <h5 className='text-2xl text-center font-semibold text-white'>
          About Us
        </h5>
        <div className='h-2'></div>
        <p className='text-center font-base w-full px-6 lg:w-3/5 text-white'>
          This event is organised in collaboration of Swift Communities of
          Mumbai, Bengaluru and Hyderabad along with Watch Party Delhi and
          Ahemdabad.
        </p>
        <div className='h-8'></div>
        <div className='flex flex-col'>
          {listOfChapters.map((chapter) => (
            <div key={chapter.id}>
              <div className='flex items-center justify-center mb-4'>
                {chapter.icon && (
                  <img
                    src={chapter.icon}
                    alt={chapter.name}
                    className='w-9 mr-2'
                  />
                )}
                <p className='font-semibold text-white text-xl'>
                  {chapter.name}
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8'>
                {chapter.voulenteers.map((voulenteer) => (
                  <div
                    key={voulenteer.id}
                    className='flex flex-col items-center'
                  >
                    <img
                      src={voulenteer.imageSrc}
                      alt={voulenteer.name}
                      className='w-40 h-40 rounded-full mb-4 object-cover'
                    />
                    <p className='font-semibold text-xl text-white text-center'>
                      {voulenteer.name}
                    </p>
                    <p className='text-base text-slate-400 text-center'>
                      {voulenteer.designation}
                    </p>
                    <p className='text-base mb-1 text-slate-400 text-center'>
                      {voulenteer.company}
                    </p>
                    <div className='h-2'></div>
                    <div
                      className={`flex items-center ${
                        voulenteer.linkedIn && voulenteer.twitter
                          ? "justify-between"
                          : "justify-center"
                      }`}
                    >
                      {voulenteer.linkedIn && (
                        <i
                          className={`fa-brands fa-linkedin-in text-white cursor-pointer ${
                            voulenteer.linkedIn && voulenteer.twitter
                              ? "mr-4"
                              : "mr-0"
                          }`}
                          onClick={() => {
                            window.open(voulenteer.linkedIn, "_blank");
                          }}
                        ></i>
                      )}
                      {voulenteer.twitter && (
                        <i
                          className='fa-brands fa-twitter text-white cursor-pointer'
                          onClick={() => {
                            window.open(voulenteer.twitter, "_blank");
                          }}
                        ></i>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className='h-8'></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
