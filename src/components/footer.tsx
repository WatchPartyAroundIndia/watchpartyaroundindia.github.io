import heartLogo from "../assets/2025/heart.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col mx-auto items-center justify-center text-center p-8">
      <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl">
        It's time.
      </h2>
      <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl">
        Get Ready
      </h2>
      <div className="h-12" />
      <p>We're counting down the days with Swift communities across India</p>
      <div className="h-8" />
      <p className="max-w-sm">
        Get your devices charged, your minds inspired, and your curiosity ready.
        WWDC 2025 is almost here and we can't wait to experience it with you
      </p>
      <div className="h-24" />
      <img src={heartLogo} alt="Made with love" className="w-8 h-8" />
      <h3 className="font-bold text-black/50">
        Made by developers for developers
      </h3>
      <h4 className="font-bold text-black/30">Developed in India in 2025</h4>
      <p className="text-xs text-black/40 mt-2">
        Designed by&nbsp;
        <span className="hover:text-blue-500 transition-colors hover:underline">
          <a
            href="http://www.linkedin.com/in/ayush21082"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ayush Singh
          </a>
        </span>
        &nbsp;&amp; developed by&nbsp;
        <span className="hover:text-blue-500 transition-colors hover:underline">
          <a
            href="https://x.com/nirudhuuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anirudh Jwala
          </a>
        </span>
      </p>
      <div className="h-28" />
    </footer>
  );
};

export default Footer;
