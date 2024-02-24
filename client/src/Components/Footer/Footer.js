import React from 'react'
import Whatsapp from '../../assets/svg/whatsapp.svg';
import Youtube from '../../assets/svg/youtube.svg';
import Facebook from '../../assets/svg/fb.svg';
import Computers from '../../assets/svg/Computer.svg';
import Doctor from '../../assets/svg/Doctor.svg';
import Med from '../../assets/svg/Med.svg';
import { ForkLeft, ForkRightSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Computer } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';

const Footer = () => {
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
  
    return (
    <div className=' flex flex-col flex-wrap text-[#03A6A6] bg-[#05070D] text-wrap justify-center items-center '>
        <div className='mx-auto max-w-2xl'>
        <h2 className='mt-5 text-3xl text-center flex font-["Roboto", sans-serif]  shadow-sm  mb-4'>
            JEHR-BLOGS
        </h2>
        <p className='text-md max-w-xl min-w-.5xl mx-auto font-["Roboto", sans-serif] overflow-hidden flex flex-wrap ml-4 text-[#aaa]'>
            Made for biomedical Enginneers and AI Enthusisats
        </p>
        <div className='flex justify-center items-center gap-1'>
            <hr className='flex-grow min-w-48 max-w-full shadow-lg ml-2 shadow-[#fcafcf]'/>
            <img 
            src={Computers}
            alt='Computer'
            className='w-8 flex-shrink'
            />
            <hr className='flex-grow min-w-48 max-w-full mr-2 shadow-lg shadow-[#fcafcf]'/>
        </div>

        <div className='flex justify-evenly items-center gap-10 lg:flex-row sm:flex-col md:flex-col'>
        <div className=''>
            <h4 className='text-xl font-["mon-serrat", sans-serif] text-[#fefedf]'>Quick Links</h4>
            <ul className='flex flex-col justify-center items-center mt-2'> 
            <li>
                <Link to='/' className='text-0.5xl font-["Roboto", sans-serif] text-[#fefedf] hover:text-[#28bebf] hover:animate-pulse active:shadow-emerald-400 active:shadow-lg hover:shadow-sm hover:shadow-emerald-500 '>Home</Link>
            </li>
            
            <li>
                <Link to='/api/v1/users/profile' className='text-0.5xl font-["Roboto", sans-serif] text-[#fefedf] hover:text-[#28bebf] hover:animate-pulse active:shadow-emerald-400 active:shadow-lg hover:shadow-sm hover:shadow-emerald-500 '>Profile</Link>
            </li>

            <li>
                <Link to='/api/v1/users/register' className='text-0.5xl font-["Roboto", sans-serif] text-[#fefedf] hover:text-[#28bebf] hover:animate-pulse active:shadow-emerald-400 active:shadow-lg hover:shadow-sm hover:shadow-emerald-500 '>Sign up</Link>
            </li>

            <li>
                <Link to='/api/v1/users/logout' className='text-0.5xl font-["Roboto", sans-serif] text-[#fefedf] hover:text-[#28bebf] hover:animate-pulse active:shadow-emerald-400 active:shadow-lg hover:shadow-sm hover:shadow-emerald-500 '>Logout</Link>
            </li>

            </ul>
        </div>


        <div className='ml-7'>
            <h3 className='text-center mb-2'>
                Contact us
            </h3>
            <div className='flex w-full justify-evenly items-center gap-3 mb-3'>
            <img 
            src={Whatsapp}
            alt='whatsapp'
            className='w-8 hover:shadow-emerald-700 hover:shadow-lg active:animate-bounce'
            />
            <div
            className='hover:shadow-lg hover:shadow-red-500 active:animate-bounce'
            >
                <Instagram  className='bg-pink-400 w-full h-full ietms-center rounded-md'/>
            </div>
            <a href='www.linkedin.com/in/emmanuel-arokiaraj-1bb23b24b'>
            <div className='hover:shadow-lg hover:shadow-blue-500 active:animate-bounce'>
                <LinkedIn className='bg-cyan-800'/>
            </div>
            </a>
            <img 
            src={Med}
            alt='Facebook'
            className='w-8 hover:shadow-lg hover:shadow-blue-500 active:animate-bounce'
            />
            </div>

            <div className='flex flex-col justify-center items-center text-center'>
            <h2 className='text-xl font-["poppins", sans-serif] text-[#aaa] hover:shadow-lg hover:animate-none mt-3'>Connect With us</h2>
            <button className='justify-end flex'>
            <a href='/api/v1/admin/admin-conect' className='text-center mt-2 hover:text-[#28bebf] hover:shadow-sm text-[#aaa] hover:shadow-emerald-500 hover:animate-pulse'>Connect</a>
            </button>
        </div>
        </div>

        </div>
        
        <div className='flex justify-center items-center gap-1'>
            <hr className='flex-grow min-w-48 max-w-full shadow-lg ml-2 shadow-[#fcafcf]'/>
            <img 
            src={Doctor}
            alt='Computer'
            className='w-8 flex-shrink'
            />
            <hr className='flex-grow min-w-48 max-w-full mr-2 shadow-lg shadow-[#fcafcf]'/>
        </div>

        <div className='mt-3 mb-8'>
            <h3 className='text-2xl font-bold text-center text-[#aaa] items-center mb-3'>
                More Services from us
            </h3>
            <div className='flex justify-around gap-3'>
                
            <a href='#' className='hover:text-[#28bebf]'>
                <ForkLeft />
                Resume and CV Summarizer
            </a>
            <a href='#' className='hover:text-[#28bebf] gap-1 flex items-center'>
                <div>
                    <Computer />
                </div>
                Interview Analytics with CV
            </a>
            </div>
        </div>
    </div>
    </div>
)
}

export default Footer;