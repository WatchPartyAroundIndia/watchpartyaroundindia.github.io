const Header = () => {
  return (
    <nav className='w-full flex justify-between my-8 px-10'>
      <p className='w-auto text-2xl font-semibold'>Watch Party Around India</p>
      <ul className='flex'>
        <li className='pr-12 cursor-pointer'>About</li>
        <li className='pr-12 cursor-pointer'>Sponsor</li>
        <li className='pr-12 cursor-pointer'>Register</li>
      </ul>
    </nav>
  );
};

export default Header;
