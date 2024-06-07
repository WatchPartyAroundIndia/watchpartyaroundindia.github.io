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
        <h5 className='text-xl text-white text-center text-gray-gradient font-semibold mb-8'>
          Want to show your support?
        </h5>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-items-center mx-auto gap-8'>
          {listOfSupporters.map((schedule) => (
            <div
              key={schedule.id}
              className={`${schedule.bgColor} w-60 h-52 rounded-2xl p-5 flex flex-col justify-between`}
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

export default Support;
