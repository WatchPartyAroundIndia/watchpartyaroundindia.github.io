const RegisterEvent = () => {
  const listOfEvents = [
    {
      id: 1,
      venueName: "Delhi Venue",
      location:
        "Niyat Studios, H 1462, Block H, Chittaranjan Park, New Delhi, Delhi",
      registrationUrl: "https://lu.ma/jem3g0yq",
      textColor: "text-[#6171FF]",
      bgColor: "bg-[#6171FF]",
      buttonText: "Register",
    },
    {
      id: 2,
      venueName: "Ahmedabad Venue",
      location:
        "MobileFirst Applications - Fintegration, A 1101 EastFace, Near, Ambli - Bopal Rd, Ambli, Ahmedabad, Gujarat",
      registrationUrl: "https://lu.ma/5xjx8hm4",
      textColor: "text-[#AF52DE]",
      bgColor: "bg-[#AF52DE]",
      buttonText: "Register",
    },
    {
      id: 3,
      venueName: "Mumbai Venue",
      location:
        "ITM Institute of Design and Media, Suvidha Square, Swami Vivekananda Rd, Andheri West",
      registrationUrl: "https://lu.ma/crifnkmg",
      textColor: "text-[#FB7C06]",
      bgColor: "bg-[#FB7C06]",
      buttonText: "Register",
    },
    {
      id: 4,
      venueName: "Benagluru Venue",
      location: "Swiggy HO, Devarabisanahalli, Bellandur, Bengaluru - 560103",
      registrationUrl:
        "https://www.meetup.com/swiftbengaluru/events/300922614/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link",
      textColor: "text-[#0ECDC1]",
      bgColor: "bg-[#0ECDC1]",
      buttonText: "Register",
    },
    {
      id: 5,
      venueName: "Hyderabad Venue",
      location:
        "Draper Startup House Hyderabad, Rajiv gandhi Nagar, Gachibowli, Hyderabad",
      registrationUrl: "https://lu.ma/cmbd8h87",
      textColor: "text-[#6900EE]",
      bgColor: "bg-[#6900EE]",
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
                className={`${schedule.textColor} bg-white rounded-3xl w-full py-2 font-semibold text-sm hover:bg-gray-100 hover:shadow-md`}
                onClick={() => {
                  window.open(schedule.registrationUrl, "_blank");
                }}
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
