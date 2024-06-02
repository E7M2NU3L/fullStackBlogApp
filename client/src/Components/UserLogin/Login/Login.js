import { Apple, GitHub, Google } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import './main.css';

const Login = () => {

    
    const colorPalettes = {
        'primary': '#D81630',
        'secondary': '#D68F87',
        'lightbg': '#FFE4DE',
        'hovercolor': '#7FB0E1',
    }

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

        // form Data
        const [userDetails, setUserDetails] = useState({
            email: '',
            password: '',
        });

        
        const handleSubmit = async (e) => {
            e.preventDefault(); // Corrected the typo (preventDefault, not preventDefaults)
            
        };
        
        const handleEmail = (e) => {
            setUserDetails({
            ...userDetails,
            [e.target.name] : e.target.value,
            });
        };
        
        const handlePassword = (e) => {
            setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
            });
        };
    
    
  return (
    <div className='min-h-screen h-full w-full flex justify-center items-center bg-gradient-to-tr from-[#05070D] to-[#103740]'>
        <div className='bg-[#103740] p-12 rounded-lg hover:shadow-md hover:shadow-[#03a6c6] outline-none'>
            <div className='lol'>
            <h1 className='underline font-["Roboto", sans-serif] text-[#03A6A6] font-bold text-2xl'>
                Login
            </h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='flex w-full mt-6 gap-2'>
                    <button className='py-2 px-auto flex-grow border border-1 shadow-md hover:shadow-[#28beb6] bg-[#fff] rounded-lg ring-1 hover:ring-emerald-400 active:animate-bounce'>
                    <Google />
                    </button>
                    <button className='py-2 px-auto flex-grow border border-1 shadow-md hover:shadow-[#28beb6] bg-[#fff] rounded-lg ring-1 hover:ring-emerald-400 active:animate-bounce'>
                    <Apple />
                    </button>
                    <button className='py-2 px-auto flex-grow border border-1 shadow-md hover:shadow-[#28beb6] bg-[#fff] rounded-lg ring-1 hover:ring-emerald-400 active:animate-bounce'>
                    <GitHub />
                    </button>
                    </div>

                <div className='flex flex-row mt-6 mb-6 justify-center items-center gap-2'>
                    <hr className='flex-grow w-full bg-black border-1 border-blue-900'/>
                    <span className='flex-shrink font-["Roboto", sans-serif] txet-xl'>OR</span>
                    <hr className='flex-grow w-full bg-black border-1 border-blue-900'/>
                </div>
                <div className='flex flex-col'>
                <input
                type='text'
                name='email'
                placeholder='email'
                className='mt-2 mx-3 border-0 input-el rounded-lg flex justify-center pl-3 items-center py-1 text-[#09c6a6] hover:outline-none outline-none'
                value={userDetails.email}
                onChange={handleEmail} // Changed from onClick to onChange
                />
            </div>
            <br />
            <div className='flex flex-col'>
                <input
                type='password'
                name='password'
                placeholder='password'
                autoComplete='false'
                className='mt-2 mx-3 border-0 input-el rounded-lg flex justify-center pl-3 items-center py-1 text-[#09c6a6] outline-none hover:outline-none'
                value={userDetails.password}
                onChange={handlePassword} // Changed from onClick to onChange
                />
            </div>
            <br />
            <div className='w-full justify-center flex items-center text-center'>
                <button
                type='submit'
                className='w-48 flex border border-none rounded-lg bg-[#D93D04] text-[#fefedf] justify-center items-center text-center  shadow-lg hover:shadow-lg  py-1 font-bold'
                >
                Submit
                </button>
            </div>

                <h4 className='flex flex-col mt-3'>
                    <a className='text-[#28beb4] hover:text-emerald-500 active:text-red-500 text-sm' >Forgot Password?</a>
                    <a className='text-[#28beb4] text-sm hover:text-emerald-600 active:text-red-500'>Dont Have an Account? Sign up</a>
                </h4>
            </form>

        </div>

    </div>
  )
}

export default Login
