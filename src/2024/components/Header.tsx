import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [showNavDialog, setShowNavDialog] = useState("hidden");

  return (
    <nav
      className={`p-4 flex justify-between items-center ${
        showNavDialog === "hidden" &&
        "backdrop-filter backdrop-blur-lg bg-opacity-30 fixed w-full top-0"
      }`}
    >
      <span className='text-lg font-medium text-white'>
        Watch Party Around India
      </span>

      <div id='nav-menu' className='hidden md:flex gap-12'>
        <Link
          to='#about'
          className='font-medium hover:text-blue-gradient text-slate-300 text-sm'
        >
          About
        </Link>
        <a
          href='https://docs.google.com/document/d/1I4Jr1OWuk5C_ZjlbrUzQv2Qb2PJApntWghPpVojfh2o/view'
          target='_blank'
          className='font-medium hover:text-orange-gradient text-slate-300 text-sm'
        >
          Code of Conduct
        </a>
        <Link
          to='#register'
          className='font-medium hover:text-pink-gradient text-slate-300 text-sm'
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
        <i className='fa-solid fa-bars text-white'></i>
      </button>

      <div
        id='nav-dialog'
        className={`${showNavDialog} md:hidden bg-[#010117] inset-0`}
      >
        <div
          id='nav-bar'
          className='flex z-100 justify-between items-center p-4'
        >
          <span className='text-lg font-medium text-white'>
            Watch Party Around India
          </span>
          <button
            className='p-2 md:hidden'
            onClick={() => {
              setShowNavDialog("hidden");
            }}
          >
            <i className='fa-solid fa-xmark text-white text-xl'></i>
          </button>
        </div>

        <div className='mt-6 text-center'>
          <Link
            to='#about'
            onClick={() => {
              setShowNavDialog("hidden");
            }}
            className='font-medium text-xl text-slate-300 hover:text-blue-gradient block rounded-lg m-3 p-3 transition duration-200'
          >
            About
          </Link>
          <a
            href='https://docs.google.com/document/d/1I4Jr1OWuk5C_ZjlbrUzQv2Qb2PJApntWghPpVojfh2o/view'
            target='_blank'
            onClick={() => {
              setShowNavDialog("hidden");
            }}
            className='font-medium text-xl text-slate-300 hover:text-orange-gradient block rounded-lg m-3 p-3 transition duration-200'
          >
            Code of Conduct
          </a>
          <Link
            to='#register'
            onClick={() => {
              setShowNavDialog("hidden");
            }}
            className='font-medium text-xl text-slate-300 hover:text-pink-gradient block rounded-lg m-3 p-3 transition duration-200'
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
