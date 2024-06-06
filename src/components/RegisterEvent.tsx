const RegisterEvent = () => {
  const listOfEvents = [
    {
      id: 1,
      venueName: "Delhi Venue",
      location: "GOJEK Office, Rajouri Garden Rajiv Chowk, Delhi.",
      registrationUrl: "https://www.example.com",
      textColor: "text-[#6171FF]",
      bgColor: "bg-[#6171FF]",
      buttonText: "Register",
    },
    {
      id: 2,
      venueName: "Mumbai Venue",
      location: "GOJEK Office, Bandra Kurla Complex, Mumbai.",
      registrationUrl: "https://www.example.com",
      textColor: "text-[#AF52DE]",
      bgColor: "bg-[#AF52DE]",
      buttonText: "Register",
    },
    {
      id: 3,
      venueName: "Bangalore Venue",
      location: "GOJEK Office, Indiranagar, Bangalore.",
      registrationUrl: "https://www.example.com",
      textColor: "text-[#FB7C06]",
      bgColor: "bg-[#FB7C06]",
      buttonText: "Register",
    },
    {
      id: 4,
      venueName: "Online",
      location: "Virtual Event",
      registrationUrl: "https://www.example.com",
      textColor: "text-[#0ECDC1]",
      bgColor: "bg-[#0ECDC1]",
      buttonText: "Register",
    },
    {
      id: 5,
      venueName: "Hyderabad Venue",
      location: "GOJEK Office, Hitech City, Hyderabad.",
      registrationUrl: "https://www.example.com",
      textColor: "text-[#6900EE]",
      bgColor: "bg-[#6900EE]",
      buttonText: "Register",
    },
    {
      id: 6,
      venueName: "Chennai Venue",
      location: "GOJEK Office, T Nagar, Chennai.",
      registrationUrl: "https://www.example.com",
      textColor: "text-[#CD0E69]",
      bgColor: "bg-[#CD0E69]",
      buttonText: "Register",
    },
  ];

  return (
    <div id='register' className='flex flex-col justify-center mt-10 mb-16'>
      <h5 className='text-2xl text-center font-semibold'>
        Register for the Event
      </h5>
      <h5 className='text-2xl text-center text-grayGradientText font-semibold mb-8'>
        Offline and Online
      </h5>
      <div className='grid grid-cols-3 gap-8 mb-2 mx-auto'>
        {listOfEvents.map((schedule) => (
          <div
            key={schedule.id}
            className={`${schedule.bgColor} w-60 h-52 rounded-2xl p-5 flex flex-col justify-between`}
          >
            <div>
              <p className='font-bold text-xl'>{schedule.venueName}</p>
              <p className='font-base text-base'>{schedule.location}</p>
            </div>
            <button
              className={`${schedule.textColor} bg-white rounded-2xl w-full py-2 font-semibold text-sm`}
            >
              {schedule.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisterEvent;
