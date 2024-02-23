import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/Logo.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const colorPalettes = {
    'primary': '#CBD5E1', // slate
    'secondary': '#3B4856', // dark slate
    'lightbg': '#90AECF', // light blue
    'hovercolor': '#ECCBD8', // rose
    'additional': '#B495A1' // dark rose
}

return (
  <div className='bg-slate-300 shadow-sm shadow-[#3b4856]'>
  <div className='max-w-7xl mx-auto flex flex-wrap justify-between items-center p-2 text-center'>
    <div>
      <Link to="/">
      <img 
      src={Logo}
      alt='logo image'
      className='w-8 h-8 rounded-lg border border-[#3b4856] ring ring-[#90aecf] shadow-md hover:shadow-cyan-600' />
      </Link>
      </div>

    <div>
      <form className=' sm:max-w-xl lg:max-w-3xl'>
        <input placeholder='Search.. ' className='outline-slate-500  active:border-[#3B4856] shadow-lg hover:shadow-slate-400 ring hover:ring-slate-500 text-center items-center flex relative rounded-md px-auto'/>
      </form>
    </div>

    <div className='items-center'>
      <ul className='flex justify-evenly items-center gap-2 text-[#3B4856]'>
        <li><Link to='/api/v1/users/login'   className='hover:text-[#B495A1]' >Login</Link></li>
        <li><Link to='/api/v1/users/register'className='hover:text-[#B495A1]'   >Signup</Link></li>
        <li><Link to='/api/v1/users/profile' className='hover:text-[#B495A1]'  >Profile</Link></li>
        <li className='sm:hidden'><Link to='/api/v1/users/logout'  className='hover:text-[#B495A1]' >Logout</Link></li>
      </ul>
    </div>
  </div>
  </div>
)
};

export default Navbar;
