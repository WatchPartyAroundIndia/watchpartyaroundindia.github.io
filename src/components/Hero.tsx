import heroImage from "../assets/images/hero/swift-icons.svg";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center mt-20 bg-gradient-to-b from-[#010117] via-[#141432] to-[#1a1a3a] min-h-screen">
      <div className="h-8"></div>
      <img
        src={heroImage}
        className="max-w-56 md:max-w-sm mb-6"
        alt="watch party india"
      />
      <h1 className="text-2xl md:text-4xl lg:text-5xl text-center mb-10 font-bold tracking-tight">
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 inline-block text-transparent bg-clip-text">
          WWDC
        </span>
        &nbsp;
        <span className="bg-gradient-to-r from-orange-400 to-orange-600 inline-block text-transparent bg-clip-text">
          Watch
        </span>
        &nbsp;
        <span className="bg-gradient-to-r from-pink-400 to-pink-600 inline-block text-transparent bg-clip-text">
          Party
        </span>
        &nbsp;
        <br />
        <span className="bg-gradient-to-r from-gray-200 to-gray-400 inline-block text-transparent bg-clip-text">
          Around India
        </span>
      </h1>

      <div className="max-w-xl px-6 text-center">
        <div className="relative inline-block">
          <h3 className="font-extrabold text-6xl lg:text-8xl text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.5)] drop-shadow-[0_0_32px_rgba(255,192,203,0.5)] animate-pulse-glow">
            Coming Soon
          </h3>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400 rounded-full blur-lg opacity-70 animate-glow" />
        </div>
        <div className="h-8"></div>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          Stay tuned for updates on India's biggest WWDC Watch Party!
        </p>
      </div>
    </div>
  );
};

export default Hero;
