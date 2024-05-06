import EventCard from "./components/EventCard";

// Config data
import webSiteConfig from "./data/configData.json";

// Assets
import heroSectionVideo from "./assets/videos/wwdc24.mp4";

const App = () => {
  return (
    <div className='flex flex-col items-center mt-14 max-w-full'>
      <div className='mb-8 text-center'>
        <h1 className='text-4xl font-bold mx-12 mb-8'>
          {webSiteConfig.heroTitle}
        </h1>
        <video
          className='w-full h-auto md:h-36'
          loop
          muted
          autoPlay
          playsInline
          preload='none'
        >
          <source src={heroSectionVideo} type='video/mp4' />
        </video>

        <p className='mt-8 max-w-2xl'>{webSiteConfig.heroDescription}</p>
      </div>

      <div className='mb-8'>
        <h2 className='text-3xl ml-4 mb-4 font-bold'>Events</h2>
        {webSiteConfig.events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      <div className='mb-8 max-w-2xl'>
        <h2 className='text-3xl mb-4 font-bold'>Voluteers</h2>
        <div className='flex flex-wrap'>
          {webSiteConfig.volunteers.map((volunteer) => (
            <img
              key={volunteer.id}
              src={volunteer.imageUrl}
              width={60}
              height={60}
              alt={volunteer.name}
              loading='lazy'
              className='size-[52px] rounded-full ring-1 ring-[#b9b9b9] object-cover mx-1 my-2'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
