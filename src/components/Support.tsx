const Support = () => {
  const listOfSupporters = [
    {
      id: 1,
      venueName: "Sponsor Event",
      location: "Sponsor the Watch Party Event",
      registrationUrl: "https://www.example.com",
      textColor: "text-[#778877]",
      bgColor: "bg-[#778877]",
      buttonText: "Contact Us",
    },
    {
      id: 2,
      venueName: "Volunteer",
      location: "Be a volunteer at your nearest watch party",
      registrationUrl: "https://www.example.com",
      textColor: "text-[#869BE9]",
      bgColor: "bg-[#869BE9]",
      buttonText: "Sign Up",
    },
  ];

  return (
    <>
      <div id='sponsor' className='h-2' />
      <div className='flex flex-col justify-center my-12'>
        <h5 className='text-2xl text-center font-semibold'>
          Register for the Event
        </h5>
        <h5 className='text-2xl text-center text-grayGradientText font-semibold mb-8'>
          Offline and Online
        </h5>
        <div className='grid grid-cols-2 gap-8 mb-2 mx-auto'>
          {listOfSupporters.map((schedule) => (
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
    </>
  );
};

export default Support;
