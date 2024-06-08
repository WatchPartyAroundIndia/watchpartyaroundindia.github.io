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
    <>
      <div id='register' className='h-16'></div>
      <div className='flex flex-col justify-center'>
        <h5 className='text-2xl text-white text-center font-semibold'>
          Register for the Event
        </h5>
        <h5 className='text-2xl text-center text-slate-400 font-semibold'>
          Offline and Online
        </h5>
        <div className='h-8'></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center mx-auto gap-8'>
          {listOfEvents.map((schedule) => (
            <div
              key={schedule.id}
              className={`${schedule.bgColor} w-[90%] md:w-[80%] lg:w-60 h-52 rounded-2xl p-5 flex flex-col justify-between`}
            >
              <div>
                <p className='font-bold text-xl text-white'>
                  {schedule.venueName}
                </p>
                <p className='font-base text-base text-white'>
                  {schedule.location}
                </p>
              </div>
              <button
                className={`${schedule.textColor} bg-white rounded-2xl w-full py-2 font-semibold text-sm hover:bg-gray-100 hover:shadow-md`}
              >
                {schedule.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RegisterEvent;
