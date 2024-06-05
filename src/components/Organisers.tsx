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
      name: "Watch Party Ahemdadbad",
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
    <div className='flex flex-col justify-center my-10 mx-48 max-w-full'>
      <h5 className='text-center text-lg font-semibold text-grayGradientText mb-8'>
        organised by
      </h5>
      <div className='flex'>
        {listOfOrganisers.map((organiser) => (
          <div
            key={organiser.id}
            className='flex items-center justify-center w-1/3'
          >
            {organiser.icon && (
              <img
                src={organiser.icon}
                alt={organiser.name}
                className='w-9 mr-2'
              />
            )}
            <p className='font-semibold'>{organiser.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organisers;
