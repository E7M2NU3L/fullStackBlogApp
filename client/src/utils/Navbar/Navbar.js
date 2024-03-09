import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/Designer (6).png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const colorPalettes = {
    'primary': '#CBD5E1', // slate
    'secondary': '#3B4856', // dark slate
    'lightbg': '#90AECF', // light blue
    'hovercolor': '#ECCBD8', // rose
    'additional': '#B495A1' // dark rose
}

{/*
:root{
    --bg-gradient: linear-gradient(top top left, #5E3D52, #457CA3, #185D7A);
    --primary: ##583BBF;
    --black: ##05070D;
    --dark-green: ##103740;
    --light-green: ##03A6A6;
    --orange: #D93D04;
}
*/}

  const className ={
    black: "bg-[#05070D]",
    DG: "bg-[#103740]",
    LG:"bg-[#03A6A6]",
    orange: "text-[#D93D04]",
    purple: "text-[#583BBF]",
    gradient: "bg-gradient-to-tr from-[#5E3D52] 60%, via-[#457CA3] 10% to-[#185D7A] 30%",
    gradient2: "bg-gradient-to-tr from-[#05070D] to-[#103740]"
  }

return (
  <div className='nav-bar shadow-sm shadow-[#3b4856]'>
  <div className='max-w-7xl mx-auto flex flex-wrap justify-between items-center p-2 text-center'>
    <div>
      <Link to="/">
      <img 
      src={Logo}
      alt='logo image'
      className='w-12 h-12 rounded-full border' />
      </Link>
      </div>

    <div className='items-center'>
      
      {true ? 

      <>
      <ul className='flex justify-evenly items-center gap-2 text-[#03A6A6] mr-4'>
        <li><Link to='/api/v1/users/login'   className='hover:text-[#D93D04]' >Login</Link></li>
        <li><Link to='/api/v1/users/register'className='hover:text-[#D93D04]'   >Signup</Link></li>
      </ul>
      </>

      : 
      
      <>
      <ul>
      <li><Link to='/api/v1/users/profile' className='hover:text-[#2CBBA3]'  >Profile</Link></li>
      <li className='hidden sm:block'><Link to='/api/v1/users/logout'  className='hover:text-[#583BBF]' >Logout</Link></li>
      </ul>
      </>
}
    </div>
  </div>
  </div>
)
};

export default Navbar;