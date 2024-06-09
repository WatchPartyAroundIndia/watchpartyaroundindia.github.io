import swiftMumbai from "../assets/images/organisers/swift-mumbai.svg";
import swiftBengaluru from "../assets/images/organisers/swift-begaluru.svg";
import swiftHyderabad from "../assets/images/organisers/swift-hyderabad.svg";

const Organisers = () => {
  const listOfOrganisers = [
    {
      id: 1,
      name: "Watch Party Delhi",
    },
    {
      id: 2,
      name: "Swift Ahemdadbad",
    },
    {
      id: 3,
      name: "Swift Mumbai",
      icon: swiftMumbai,
    },
    {
      id: 4,
      name: "Swift Bengaluru",
      icon: swiftBengaluru,
    },
    {
      id: 5,
      name: "Swift Hyderabad",
      icon: swiftHyderabad,
    },
  ];

  return (
    <div className='flex flex-col justify-center mt-4'>
      <h5 className='text-base text-center font-semibold text-slate-400'>
        organised by
      </h5>
      <div className='h-4'></div>
      <div className='md:overflow-x-auto flex flex-col md:flex-row items-center md:mx-auto md:no-scrollbar'>
        {listOfOrganisers.map((organiser) => (
          <div key={organiser.id} className='flex items-center m-2 min-w-fit'>
            {organiser.icon && (
              <img
                src={organiser.icon}
                alt={organiser.name}
                className='w-9 mr-2'
              />
            )}
            <p className='font-semibold text-white'>{organiser.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organisers;
