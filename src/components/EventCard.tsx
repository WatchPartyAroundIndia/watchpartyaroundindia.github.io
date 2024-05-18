import { useState } from "react";
import Volunteer from "./Volunteer";

interface IPartner {
  id: number;
  name: string;
  imageUrl: string;
}

interface IVolunteer {
  id: number;
  name: string;
  imageUrl: string;
  socials: string;
}

interface EventCardProps {
  chapterName: string;
  title: string;
  imageUrl: string;
  category: string;
  description: string;
  registrationUrl: string;
  sponsorRegistrationUrl: string;
  partners: IPartner[];
  volunteers: IVolunteer[];
}

const EventCard = (event: EventCardProps) => {
  const [partnersSignedUp] = useState(event.partners.length > 0);

  const openURL = (url: string) => {
    window.open(url, "_blank", "noopener");
  };

  return (
    <div className='border-[0.2px] border-[#f9f9f9] rounded-lg mt-2 mb-6 mx-3'>
      <h2 className='px-4 py-2 bg-[#D9D9D952] rounded-t-lg font-bold'>
        {event.chapterName}
      </h2>

      <div className='flex-col md:flex md:flex-row items-start px-6 pt-4'>
        <div className='w-full md:w-1/3 h-56 mb-2 rounded'>
          <img
            src={event.imageUrl}
            alt={event.title}
            title={event.title}
            onContextMenu={(e) => e.preventDefault()}
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
        <div className='md:w-2/3 px-2 md:pl-8 md:pr-2 h-full'>
          <h3 className='text-2xl font-bold'>{event.title}</h3>
          <span className='text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-yellow-900 text-yellow-300'>
            {event.category}
          </span>
          <p className='my-2 text-base text-justify'>{event.description}</p>
          <button
            onClick={() => {
              openURL(event.registrationUrl);
            }}
            className='w-full text-white-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-orange-100 hover:text-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
          >
            Register
          </button>
        </div>
      </div>

      <div className='flex items-center md:justify-between px-8 py-4 mb-2'>
        {/* Conditional rendering for sponsor section or sign-up button */}
        <div className='flex-col mr-8'>
          <h6 className='text-sm mb-1 font-semibold'>
            {partnersSignedUp ? "Sponsors" : "Be a Sponsor"}
          </h6>
          <div className='flex'>
            {partnersSignedUp ? (
              event.partners.map((partner) => (
                <img
                  key={partner.id}
                  src={partner.imageUrl}
                  width={32}
                  height={10}
                  alt={partner.name}
                  title={partner.name}
                  onContextMenu={(e) => e.preventDefault()}
                  className='w-24 h-10 object-contain mr-2'
                />
              ))
            ) : (
              <button
                onClick={() => {
                  openURL(event.sponsorRegistrationUrl);
                }}
                className='text-sm bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out'
              >
                Sign Up Now
              </button>
            )}
          </div>
        </div>

        {/* Render volunteers */}
        <div className='flex-col mr-8'>
          <h6 className='text-sm mb-1 font-semibold'>Volunteers</h6>
          <div className='flex -space-x-4 rtl:space-x-reverse'>
            {event.volunteers.map((volunteer) => (
              <Volunteer
                key={volunteer.id}
                className='w-10 h-10 border-2 border-white rounded-full cursor-pointer'
                width={40}
                height={40}
                {...volunteer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
