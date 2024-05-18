import webSiteConfig from "./data/configData.json";

import Header from "./components/Header";
import EventCard from "./components/EventCard";
// import Volunteer from "./components/Volunteer";

const App = () => {
  return (
    <div className='flex flex-col items-center mt-14 max-w-full'>
      <Header />

      <div className='mb-8 max-w-4xl'>
        <h2 className='text-3xl ml-4 mb-4 font-bold'>Events</h2>
        {webSiteConfig.events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      {/* Disabled until volunteers gets finalised. */}
      {/* <div className='mb-8 max-w-2xl'>
        <h2 className='text-3xl mb-4 font-bold'>Voluteers</h2>
        <div className='flex flex-wrap'>
          {webSiteConfig.volunteers.map((volunteer) => (
            <Volunteer
              key={volunteer.id}
              width={60}
              height={60}
              className='size-[52px] rounded-full ring-1 ring-[#b9b9b9] object-cover mx-1 my-2 cursor-pointer'
              {...volunteer}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default App;
