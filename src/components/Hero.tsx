import heroImage from "../assets/images/hero/swift-icons.svg";

const Hero = () => {
  return (
    <div className='w-full flex flex-col items-center mt-20'>
      <img
        src={heroImage}
        className='max-w-48 md:max-w-xs mb-4'
        alt='watch party india'
      />
      <h1 className='text-3xl md:text-5xl lg:text-7xl text-center mb-8'>
        <span className='text-blue-gradient font-bold'>WWDC</span>&nbsp;
        <span className='text-orange-gradient font-bold'>Watch</span>
        &nbsp;
        <span className='text-pink-gradient font-bold'>Party</span>&nbsp;
        <br />
        <span className='text-gray-gradient font-bold'>Around India</span>
      </h1>

      <p className='max-w-xl text-sm text-center px-6 mb-8 text-white'>
        Join us for the Watch Party Around India in Ahmedabad, Delhi, Mumbai,
        Bengaluru, and Hyderabad! Watch the unveiling of the latest Apple
        platforms, technologies, and tools together and discuss. Engage and
        connect with the developer community of India.
        <br />
        <span className='font-semibold'>
          Registration is free (Both offline and online).
        </span>
      </p>

      <div className='max-w-xl px-6 text-center'>
        <h3 className='font-bold text-xl md:text-2xl lg:text-3xl text-white'>
          10th June 2024, Monday
        </h3>
        <h4 className='text-slate-400 font-bold text-base md:text-xl lg:text-2xl'>
          7:30 PM IST to 12:30 AM IST
        </h4>
      </div>
    </div>
  );
};

export default Hero;
