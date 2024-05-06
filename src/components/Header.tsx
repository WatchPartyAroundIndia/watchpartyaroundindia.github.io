import webSiteConfig from "../data/configData.json";
import heroSectionVideo from "../assets/videos/wwdc24.mp4";

const Header = () => {
  return (
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
  );
};

export default Header;
