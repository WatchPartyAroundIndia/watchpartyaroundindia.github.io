const Speakers = () => {
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
    <div className='flex flex-col justify-center mt-10 mb-16'>
      <h5 className='text-2xl text-center font-semibold mb-12'>Our Speakers</h5>
      <div className='flex items-center mx-auto max-w-fit'>
        {listOfSpeakers.map((speaker) => (
          <div
            key={speaker.id}
            className='flex flex-col items-center justify-center mx-4'
          >
            <div className='w-40 h-40 rounded-full bg-slate-200 mb-4' />
            <p className='font-semibold text-xl'>{speaker.name}</p>
            <p className='text-base mb-2 text-grayGradientText'>
              {speaker.designation}
            </p>
            <p className='text-sm font-medium'>Keynote Speaker</p>
            <p className='text-sm font-medium'>{speaker.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
