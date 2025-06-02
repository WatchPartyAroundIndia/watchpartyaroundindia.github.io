import { FC } from "react";
import wwdcLogo from "../assets/2025/logo.svg";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="flex items-center w-full px-2 md:px-4 lg:px-8 py-10 font-prompt">
      <img
        src={wwdcLogo}
        alt="WWDC 2025"
        className="w-24 h-9 md:w-32 md:h-11 lg:w-[148px] lg:h-[54px]"
      />
      <ul className="items-center justify-end flex-1 space-x-8 hidden md:flex mr-8">
        {["About", "Sponsors", "Speakers", "2024"].map((item, index) => (
          <li
            key={index}
            className="hover:underline hover:decoration-[#FFC9F0] hover:underline-offset-1 hover:[text-decoration-thickness:5px] cursor-pointer text-xl lg:text-2xl"
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="ml-auto md:ml-0 text-lg md:text-xl lg:text-2xl text-white bg-[#4884FF] font-medium px-4 md:px-6 lg:px-8 py-1 md:py-1.5 lg:py-2 border-2 border-[#0B2131]">
        Register
      </button>
    </div>
  );
};

export default Navbar;
