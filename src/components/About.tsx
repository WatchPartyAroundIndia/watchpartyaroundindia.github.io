import swiftMumbai from "../assets/images/organisers/swift-mumbai.svg";
import swiftBengaluru from "../assets/images/organisers/swift-begaluru.svg";
import swiftHyderabad from "../assets/images/organisers/swift-hyderabad.svg";

const About = () => {
  const listOfChapters = [
    {
      id: 1,
      name: "Swift Mumbai",
      icon: swiftMumbai,
      voulenteers: [
        {
          id: 1,
          name: "John Appleseed",
          designation: "iOS Engineer, Apple",
          location: "Swift Mumbai",
        },
        {
          id: 2,
          name: "Jane Appleseed",
          designation: "iOS Engineer, Apple",
          location: "Swift Bengaluru",
        },
        {
          id: 3,
          name: "John Doe",
          designation: "iOS Engineer, Apple",
          location: "Swift Hyderabad",
        },
      ],
    },
    {
      id: 2,
      name: "Swift Bengaluru",
      icon: swiftBengaluru,
      voulenteers: [
        {
          id: 1,
          name: "John Appleseed",
          designation: "iOS Engineer, Apple",
          location: "Swift Mumbai",
        },
        {
          id: 2,
          name: "Jane Appleseed",
          designation: "iOS Engineer, Apple",
          location: "Swift Bengaluru",
        },
        {
          id: 3,
          name: "John Doe",
          designation: "iOS Engineer, Apple",
          location: "Swift Hyderabad",
        },
      ],
    },
    {
      id: 3,
      name: "Swift Hyderabad",
      icon: swiftHyderabad,
      voulenteers: [
        {
          id: 1,
          name: "John Appleseed",
          designation: "iOS Engineer, Apple",
          location: "Swift Mumbai",
        },
        {
          id: 2,
          name: "Jane Appleseed",
          designation: "iOS Engineer, Apple",
          location: "Swift Bengaluru",
        },
        {
          id: 3,
          name: "John Doe",
          designation: "iOS Engineer, Apple",
          location: "Swift Hyderabad",
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
        <div className='flex flex-col items-center max-w-fit'>
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

              <div className='grid grid-cols-2 md:grid-cols-3 items-center justify-items-center gap-8'>
                {chapter.voulenteers.map((voulenteer) => (
                  <div
                    key={voulenteer.id}
                    className='flex flex-col items-center mx-4'
                  >
                    <div className='w-24 h-24 rounded-full bg-slate-200 mb-4' />
                    <p className='font-semibold text-base text-white text-center'>
                      {voulenteer.name}
                    </p>
                    <p className='text-xs font-medium text-white text-center'>
                      {voulenteer.location}
                    </p>
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
