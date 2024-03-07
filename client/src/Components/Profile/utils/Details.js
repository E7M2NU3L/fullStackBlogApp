import React from 'react'
import { Link } from 'react-router-dom'
import '../main.css';
import Logo from '../../../assets/Logo.jpg';

const className ={
    black: "bg-[#05070D]",
    DG: "bg-[#103740]",
    LG:"bg-[#03A6A6]",
    LGText: "text-[#03A6A6]",
    orange: "text-[#D93D04]",
    purple: "text-[#583BBF]",
    gradient: "bg-gradient-to-tr from-[#5E3D52] 60%, via-[#457CA3] 10% to-[#185D7A] 30%",
    gradient2: "bg-gradient-to-tr from-[#05070D] to-[#103740]"
}

const Details = () => {
  return (
    <div>
        <h1 className='text-[#03A6A6] pt-7 text-3xl justify-center font-bold text-center'>
            User Profile
        </h1>
        <div className='flex justify-evenly mt-9'>
                
            <div>
                <h1 className='text-2xl text-[#03A6A6] font-["Roboto", sans-serif] font-bold'>
                    Profile <span className='text-[#d93d04]'>Picture</span>
                </h1>
                <img src={Logo}
                alt='user Profile'
                className='rounded-lg border border-s-amber-400 hover:shadow-md hover:shadow-slate-900 max-w-24 mx-auto mt-3'
                />
                <Link to='/api/users/upload-profile-photo' className='mt-1 text-center flex justify-center'>
                    <button className='bg-[#d93d04] text-white font-sans mt-4 shadow-md hover:shadow-[#103740] px-3 py-1 rounded-lg'>
                        Upload Profile
                    </button>
                </Link>
            </div>
            <div>
                <h3 className='text-2xl font-bold text-[#03A6A6] justify-center text-center flex'>
                User Details
                </h3>
                <div className='mt-4 flex justify-evenly'>
                    <h4 className='text-[#03a6a6]'>
                        User Name: 
                    </h4>
                    <h4 className='text-[#d93d04] font-["Roboto", sans-serif] font-semibold'>
                        Emmanuel
                    </h4>
                </div>
                
                <div className='mt-4 flex flex-col justify-center items-center text-center'>
                    <h4 className='text-[#03a6a6]'>
                        Email id: 
                    </h4>
                    <h4 className='text-[#d93d04] font-["Roboto", sans-serif] font-semibold'>
                        aemmanuel685210@gmail.com
                    </h4>
                </div>
                
                <div className='mt-4 flex justify-evenly'>
                    <h4 className='text-[#03a6a6]'>
                        Connection Status: 
                    </h4>
                    <h4 className='text-[#d93d04] font-semibold'>
                        Connected
                    </h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details