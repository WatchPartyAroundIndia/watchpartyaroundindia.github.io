import { useEffect, useState } from "react";
import wwdcLogo from "../assets/2025/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 1, label: "About", link: "#about" },
    { id: 2, label: "Sponsors", link: "#sponsors" },
    { id: 3, label: "Speakers", link: "#speakers" },
    { id: 4, label: "2024", link: "#2024" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="relative w-full font-prompt">
      <div className="flex items-center w-full px-2 md:px-4 lg:px-8 py-10">
        <img
          src={wwdcLogo}
          alt="WWDC 2025 logo"
          className="w-24 h-9 md:w-32 md:h-11 lg:w-[148px] lg:h-[54px]"
        />
        <ul className="items-center justify-end flex-1 space-x-8 hidden md:flex mr-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="hover:underline hover:decoration-[#FFC9F0] hover:underline-offset-1 hover:[text-decoration-thickness:5px] cursor-pointer text-xl lg:text-2xl"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="ml-auto md:ml-0 text-lg md:text-xl lg:text-2xl text-white bg-[#4884FF] font-medium px-4 md:px-6 lg:px-8 py-1 md:py-1.5 lg:py-2 border-2 border-[#0B2131] hidden md:block"
        >
          Register
        </button>

        {/* Hamburger Icon */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto md:hidden relative w-10 h-10 flex items-center justify-center z-50"
        >
          <span
            className={`absolute w-6 h-0.5 bg-black transition-transform duration-300 ${
              menuOpen ? "rotate-45 top-2.5" : "top-1.5"
            }`}
          ></span>
          <span
            className={`absolute w-6 h-0.5 bg-black transition-transform duration-300 ${
              menuOpen ? "-rotate-45 top-2.5" : "top-4"
            }`}
          ></span>
        </button>
      </div>

      {/* Overlay and Sliding Panel */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 backdrop-blur-sm bg-white/70"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-center pt-12 gap-8 px-6`}
      >
        <img src={wwdcLogo} alt="WWDC 2025 logo" className="w-32 h-12" />
        {navItems.map((item) => (
          <a
            href={item.link}
            className="hover:underline hover:decoration-[#FFC9F0] hover:underline-offset-1 hover:[text-decoration-thickness:5px] cursor-pointer text-xl lg:text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <button
          type="button"
          className="mt-4 text-xl text-white bg-[#4884FF] font-medium px-6 py-2 border-2 border-[#0B2131]"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
