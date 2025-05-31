import { FC } from "react";
import wwdcLogo from "../assets/2025/logo.svg";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="flex items-center w-full px-8 py-10 font-prompt">
      <img src={wwdcLogo} alt="WWDC 2025" width={148} height={54} />
      <ul className="flex items-center justify-end flex-1 space-x-8">
        {["About", "Sponsors", "Speakers", "2024"].map((item, index) => (
          <li
            key={index}
            className="hover:underline hover:decoration-[#FFC9F0] hover:underline-offset-1 hover:[text-decoration-thickness:5px] cursor-pointer text-2xl"
          >
            {item}
          </li>
        ))}
        <button className="text-2xl text-white bg-[#4884FF] font-medium px-8 py-2 border-2 border-[#0B2131]">
          Register
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
