import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import useAuth from '../../hooks/useAuth';
const Header = () => {
  const {user, logOut} = useAuth();
  const {displayName} = user;
    return (
        <header className="text-gray-600 body-font border-b-2">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img className='w-60' src={Logo} alt="" />
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to='/home' className="nav-link">Home</Link>
      <Link to='/about' className="nav-link">About</Link>
      <Link to='/services' className="nav-link">Services</Link>
      <Link to='/doctors' className="nav-link">Doctors</Link>
      <Link to='/booking' className="nav-link">Booking</Link>
      <Link to='/Contact' className="nav-link">Contact</Link>
    </nav>
    <h2 className="text-lg font-bold">{displayName}</h2>
    {
        user.email ? 
        <button onClick={logOut} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> Logout
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
        </button>
         : 
         <Link  to='/login'>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> Login
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
        </button>
    </Link>
    }
  </div>
</header>
    );
};

export default Header;