const Schedule = () => {
  const listOfSchedule = [
    {
      id: 1,
      timings: "7:00 PM to 7:15 PM",
      description: "Welcome and Registrations",
    },
    {
      id: 2,
      timings: "7:15 PM to 7:30 PM",
      description: "Keynote Speaker",
    },
    {
      id: 3,
      timings: "7:30 PM to 8:00 PM",
      description: "Panel Discussion",
    },
    {
      id: 4,
      timings: "8:00 PM to 8:30 PM",
      description: "Q&A Session",
    },
    {
      id: 5,
      timings: "8:30 PM to 9:00 PM",
      description: "Networking",
    },
    {
      id: 6,
      timings: "9:00 PM to 9:15 PM",
      description: "Closing Remarks",
    },
  ];

  return (
    <div className='flex flex-col justify-center'>
      <h5 className='text-2xl text-center font-semibold'>Schedule</h5>
      <h5 className='text-2xl text-center text-grayGradientText font-semibold mb-8'>
        Indian Standard Time
      </h5>
      {listOfSchedule.map((schedule) => (
        <div
          key={schedule.id}
          className='flex justify-between w-full mx-4 md:w-1/2 md:mx-auto mb-2'
        >
          <p className='font-semibold text-xl'>{schedule.timings}</p>
          <p className='font-semibold text-xl'>{schedule.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
