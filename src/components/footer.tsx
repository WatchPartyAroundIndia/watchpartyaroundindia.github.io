import { FC } from "react";
import heartLogo from "../assets/2025/heart.svg";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center text-center p-8">
      <h2 className="font-sans font-bold text-6xl">It's time.</h2>
      <h2 className="font-sans font-bold text-6xl">Get Ready</h2>
      <div className="h-12" />
      <p>We're counting down the days with Swift communities across India</p>
      <div className="h-8" />
      <p className="max-w-sm">
        Get your devices charged, your minds inspired, and your curiosity ready.
        WWDC 2025 is almost here and we can't wait to experience it with you
      </p>
      <div className="h-24" />
      <img src={heartLogo} alt="Heart Logo" className="w-8 h-8" />
      <h3 className="font-bold text-black/50">Made by me for me</h3>
      <h4 className="font-bold text-black/30">Developed in India in 2025</h4>
    </div>
  );
};

export default Footer;
