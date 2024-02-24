import React from 'react'
import { Link } from 'react-router-dom'
import '../main.css';
import Logo from '../../../assets/Logo.jpg';

const Details = () => {
  return (
    <div>
        <h1 className='text-slate-600 text-3xl mt-5 justify-center font-bold text-center'>
            User Profile
        </h1>
        <div className='flex justify-evenly mt-9'>
                
            <div>
                <h1 className='text-2xl text-slate-700 font-["Roboto", sans-serif] font-bold'>
                    Profile <span className='text-slate-900'>Picture</span>
                </h1>
                <img src={Logo}
                alt='user Profile'
                className='rounded-lg border border-s-amber-400 hover:shadow-md hover:shadow-slate-900 max-w-24 mx-auto mt-3'
                />
                <Link to='/api/users/upload-profile-photo' className='mt-1 text-center flex justify-center'>
                    <button className='bg-slate-600 text-white font-sans border shadow-md hover:shadow-slate-300 px-3 py-1 rounded-lg'>
                        Upload Profile
                    </button>
                </Link>
            </div>
            <div>
                <h3 className='text-2xl font-bold text-slate-700 justify-center text-center flex'>
                User Details
                </h3>
                <div className='mt-4 flex justify-evenly'>
                    <h4 className='text-blue-800'>
                        User Name: 
                    </h4>
                    <h4 className='text-slate-700 font-["Roboto", sans-serif] font-semibold'>
                        Emmanuel
                    </h4>
                </div>
                
                <div className='mt-4 flex flex-col justify-center items-center text-center'>
                    <h4 className='text-blue-800'>
                        Email id: 
                    </h4>
                    <h4 className='text-slate-700 font-["Roboto", sans-serif] font-semibold'>
                        aemmanuel685210@gmail.com
                    </h4>
                </div>
                
                <div className='mt-4 flex justify-evenly'>
                    <h4 className='text-blue-800'>
                        Connection Status: 
                    </h4>
                    <h4 className='text-green-500 font-semibold'>
                        Connected
                    </h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details