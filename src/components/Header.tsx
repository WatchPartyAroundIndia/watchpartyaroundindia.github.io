import { useState } from "react";

const Header = () => {
  const [showNavDialog, setShowNavDialog] = useState("hidden");

  return (
    <nav
      className={`p-3 flex justify-between items-center px-10 ${
        showNavDialog === "hidden" &&
        "backdrop-filter backdrop-blur-lg bg-opacity-30 fixed w-full top-0"
      }`}
    >
      <a href='#' id='brand'>
        <span className='text-lg font-medium'>Watch Party Around India</span>
      </a>

      <div id='nav-menu' className='hidden md:flex gap-12'>
        <a href='#' className='font-medium hover:text-blueGradientText'>
          About
        </a>
        <a href='#' className='font-medium hover:text-orangeGradientText'>
          Sponsor
        </a>
        <a href='#' className='font-medium hover:text-pinkGradientText'>
          Register
        </a>
      </div>

      <button
        className='p-2 md:hidden'
        onClick={() => {
          setShowNavDialog("fixed");
        }}
      >
        <i className='fa-solid fa-bars'></i>
      </button>

      <div
        id='nav-dialog'
        className={`${showNavDialog} md:hidden bg-[#010117] inset-0 p-3`}
      >
        <div
          id='nav-bar'
          className='flex z-100 justify-between items-center px-6'
        >
          <a href='#' id='brand'>
            <span className='text-lg font-medium'>
              Watch Party Around India
            </span>
          </a>
          <button
            className='p-2 md:hidden'
            onClick={() => {
              setShowNavDialog("hidden");
            }}
          >
            <i className='fa-solid fa-xmark'></i>
          </button>
        </div>

        <div className='mt-6'>
          <a
            href='#'
            className='font-medium hover:text-blueGradientText hover:bg-gray-50 block rounded-lg m-3 p-3 transition duration-200'
          >
            About
          </a>
          <a
            href='#'
            className='font-medium hover:text-orangeGradientText hover:bg-gray-50 block rounded-lg m-3 p-3 transition duration-200'
          >
            Sponsor
          </a>
          <a
            href='#'
            className='font-medium hover:text-pinkGradientText hover:bg-gray-50 block rounded-lg m-3 p-3 transition duration-200'
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
