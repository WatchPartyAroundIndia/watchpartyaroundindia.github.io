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
import leader12 from "../assets/images/about/delhi/02.svg";
import leader13 from "../assets/images/about/delhi/03.svg";

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
          linkedIn: "https://www.linkedin.com/in/sforsethi/",
          twitter: "https://x.com/sforsethi",
        },
        {
          id: 2,
          name: "Simran Rout",
          designation: "iOS Engineer",
          company: "Gojek",
          imageSrc: leader12,
          linkedIn: "https://www.linkedin.com/in/simran-rout/",
          twitter: "https://x.com/simranrout10",
        },
        {
          id: 3,
          name: "Maninder Singh",
          designation: "iOS Dev",
          company: "BlueSmart",
          imageSrc: leader13,
          linkedIn: "https://www.linkedin.com/in/manindersinghh",
          twitter: "",
        },
      ],
    },
    {
      id: 2,
      name: "Swift Ahmedabad",
      voulenteers: [
        {
          id: 3,
          name: "Devanshi Modha",
          designation: "Senior iOS Developer",
          company: "Accenture",
          imageSrc: leader02,
          linkedIn: "https://www.linkedin.com/in/devanshimodha/",
          twitter: "https://x.com/devanshimodha",
        },
        {
          id: 4,
          name: "Bhavin Vaghela",
          designation: "Sr. iOS Developer",
          company: "Hyperlink Infosystem",
          imageSrc: leader03,
          linkedIn: "https://www.linkedin.com/in/bhavin-vaghela",
          twitter: "https://x.com/bhavin_v92",
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
          linkedIn: "https://www.linkedin.com/in/rajhraval/",
          twitter: "https://x.com/rajhraval",
        },
        {
          id: 6,
          name: "Yogesh",
          designation: "Senior iOS Developer",
          company: "100ms",
          imageSrc: leader05,
          linkedIn: "http://www.linkedin.com/in/yogeshsingh2810 ",
          twitter: "https://twitter.com/_yogeshsingh",
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
          linkedIn: "https://www.linkedin.com/in/irangareddy/",
          twitter: "https://twitter.com/irangareddy",
        },
        {
          id: 12,
          name: "Anirudh Jwala",
          designation: "Senior Software Engineer",
          company: "IRIS",
          imageSrc: leader11,
          linkedIn: "",
          twitter: "https://x.com/nirudhuuu",
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
          company: "Gojek Tech",
          imageSrc: leader07,
          linkedIn: "https://www.linkedin.com/in/sinchanmaitri/",
          twitter: "https://twitter.com/amitsamant_dev",
        },
        {
          id: 9,
          name: "Sinchan Maitri",
          designation: "iOS Engineer",
          company: "Fueled",
          imageSrc: leader08,
          linkedIn: "https://www.linkedin.com/in/sinchanmaitri",
          twitter: "https://www.x.com/sinchanmaitri",
        },
        {
          id: 10,
          name: "Nayyan Mujadiya",
          designation: "R & D Engineer",
          company: "Siemens EDA",
          imageSrc: leader09,
          linkedIn: "https://www.linkedin.com/in/nayyanmujadiya/",
          twitter: "https://x.com/nayaneye",
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
        <p className='text-center font-base w-full px-6 md:w-4/5 lg:w-3/5 text-white'>
          Watch Party Around India is a collaborative initiative by the Swift
          communities of Delhi, Ahmedabad, Mumbai, Hyderabad and Bengaluru. Our
          mission is to unite and uplift the Indian Apple developer community
          through shared learning and networking. This event marks the first
          inter-city gathering in India focused on Apple's development
          ecosystem. Join us to connect, learn, and grow together as we
          celebrate WWDC.
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
