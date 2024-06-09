const Schedule = () => {
  const listOfSchedule = [
    {
      id: 1,
      timings: "7:15 PM",
      description: "Assemble and Check-in",
    },
    {
      id: 2,
      timings: "7:45 PM",
      description: "Intro to event - wifi access, other info",
    },
    {
      id: 3,
      timings: "8:00 PM | 15 mins",
      description: "Keynote Talk - 1",
    },
    {
      id: 4,
      timings: "8:15 PM | 15 mins",
      description: "Keynote Talk - 2",
    },
    {
      id: 5,
      timings: "8:30 PM | 30 mins",
      description: "Panel Discussion",
    },
    {
      id: 6,
      timings: "9:00 PM | 45 mins",
      description: '"Breakout" for Dinner',
    },
    {
      id: 7,
      timings: "9:45 PM | 25 mins",
      description:
        "Shared Apple Fanboi, design & developer Trivia with SwiftMumbai, SwiftHyderabad, SwiftAhmedabad and WatchParty Delhi",
    },
    {
      id: 8,
      timings: "10:30 PM",
      description: "WWDC24 Keynote",
    },
    {
      id: 9,
      timings: "~ 12:30 AM",
      description: "Casual Break and Group Photo",
    },
    {
      id: 10,
      timings: "1:30 AM",
      description: "WWDC24 Platforms State of the Union",
    },
    {
      id: 11,
      timings: "~ 2:30 AM",
      description: "Closing notes and Announcements",
    },
  ];

  return (
    <div className='flex flex-col justify-center'>
      <div className='h-8'></div>
      <h5 className='text-2xl text-center font-semibold text-white'>
        Schedule
      </h5>
      <h5 className='text-xl text-center text-slate-400 font-semibold'>
        Indian Standard Time
      </h5>
      <div className='h-8'></div>
      <div className='flex flex-col mx-auto w-2/3 md:w-1/2'>
        {listOfSchedule.map((schedule) => (
          <div
            key={schedule.id}
            className='md:flex md:justify-between mb-2 md:w-full'
          >
            <p className='font-semibold text-lg text-slate-400 md:w-[40%]'>
              {schedule.timings}
            </p>
            <p className='font-semibold text-xl md:text-right text-white md:w-[60%]'>
              {schedule.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
