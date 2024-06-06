import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [showNavDialog, setShowNavDialog] = useState("hidden");

  return (
    <nav
      className={`p-3 flex justify-between items-center px-10 ${
        showNavDialog === "hidden" &&
        "backdrop-filter backdrop-blur-lg bg-opacity-30 fixed w-full top-0"
      }`}
    >
      <Link to='#' id='brand'>
        <span className='text-lg font-medium'>Watch Party Around India</span>
      </Link>

      <div id='nav-menu' className='hidden md:flex gap-12'>
        <Link to='#about' className='font-medium hover:text-blueGradientText'>
          About
        </Link>
        <Link
          to='#sponsor'
          className='font-medium hover:text-orangeGradientText'
        >
          Sponsor
        </Link>
        <Link
          to='#register'
          className='font-medium hover:text-pinkGradientText'
        >
          Register
        </Link>
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
          <Link to='#' id='brand'>
            <span className='text-lg font-medium'>
              Watch Party Around India
            </span>
          </Link>
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
          <Link
            to='#about'
            onClick={() => {
              setShowNavDialog("hidden");
            }}
            className='font-medium hover:text-blueGradientText hover:bg-gray-50 block rounded-lg m-3 p-3 transition duration-200'
          >
            About
          </Link>
          <Link
            to='#sponsor'
            onClick={() => {
              setShowNavDialog("hidden");
            }}
            className='font-medium hover:text-orangeGradientText hover:bg-gray-50 block rounded-lg m-3 p-3 transition duration-200'
          >
            Sponsor
          </Link>
          <Link
            to='#register'
            onClick={() => {
              setShowNavDialog("hidden");
            }}
            className='font-medium hover:text-pinkGradientText hover:bg-gray-50 block rounded-lg m-3 p-3 transition duration-200'
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
