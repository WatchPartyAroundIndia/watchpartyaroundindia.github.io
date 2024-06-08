const PanelDiscussion = () => {
  const listOfSpeakers = [
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
    {
      id: 4,
      name: "Jane Doe",
      designation: "iOS Engineer, Apple",
      location: "Swift Chennai",
    },
  ];

  return (
    <div className='flex flex-col justify-center'>
      <div className='h-8'></div>
      <h5 className='text-2xl text-center font-semibold text-white'>
        Panel Discussion
      </h5>
      <h5 className='text-2xl text-center text-slate-400 font-semibold'>
        WWDC24 Predictions
      </h5>
      <div className='h-8'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-items-center mx-auto gap-8'>
        {listOfSpeakers.map((speaker) => (
          <div key={speaker.id} className='flex flex-col items-center'>
            <div className='w-40 h-40 rounded-full bg-slate-200 mb-4' />
            <p className='font-semibold text-xl text-white'>{speaker.name}</p>
            <p className='text-base mb-2 text-slate-400'>
              {speaker.designation}
            </p>
            <p className='text-sm font-medium text-white'>Keynote Speaker</p>
            <p className='text-sm font-medium text-white'>{speaker.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelDiscussion;
