import { Apple, GitHub, Google } from '@mui/icons-material'
import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {
    const [userDetails, setUserDetails] = useState({
        fullname: '',
        email: '',
        password: '',
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault(); // Corrected the typo (preventDefault, not preventDefaults)
        try {
        // Send form data to the backend server
        const response = await axios.post('http://localhost:4000/api/v1/users/register', userDetails);
        console.log(response);
        console.log(response.data); // Log the response from the server
        } catch (error) {
        console.error('Error submitting form:', error);
        }
    };
    
    const handleEmail = (e) => {
        setUserDetails({
        ...userDetails,
        email: e.target.value,
        });
    };
    
    const handlePassword = (e) => {
        setUserDetails({
        ...userDetails,
        password: e.target.value,
        });
    };

    const handleFullname = (e) => {
        setUserDetails({
            ...userDetails,
            fullname: e.target.value,
        })
    }

  return (
    <div className='min-h-screen h-full w-full flex justify-center items-center bg-gradient-to-br from-[#300a4f] via-[#551979] to-[#7e27a4]'>
        <div className='bg-gradient-to-tr from-[#fef6df] via-[#eae7c4] to-[#c8d1a2] p-12 border border-1 rounded-lg hover:shadow-lg hover:shadow-[#af40d0]'>
            <h1 className='underline font-["Roboto", sans-serif] text-[#AF40D0] font-bold text-2xl'>
                Sign up
            </h1>

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
                <input type='text' name='fullname' placeholder='Username' value={userDetails.fullname} onChange={handleFullname}  className='mt-2 mx-3 border border-1 border-blue-900 active:border-[#28beb4] rounded-lg flex justify-center text-center items-center py-1'/>
                </div>
                <div className='flex flex-col mt-2'>
                <input type='text' name='email' placeholder='Enter Your Email' value={userDetails.email} onChange={handleEmail} className='mt-2 mx-3 border border-1 border-blue-900 active:border-[#28beb4] rounded-lg flex justify-center text-center items-center py-1'/>
                </div>
                <div className='flex flex-col mt-2'>
                <input type='password' name='password' placeholder='Enter your Password' autoComplete='false' value={userDetails.password} onChange={handlePassword} className='mt-2 mx-3 border border-1 border-blue-900 active:border-[#28beb4] rounded-lg flex justify-center text-center items-center py-1' />
                </div>
                <br />
                <div className='w-full justify-center flex items-center text-center'>
                <button type='submit' className='w-48 flex border border-none rounded-lg ring-1 hover:ring-[#FFACFF] bg-gradient-to-tr from-[#FFACFF] via-[#AF40D0] to-[#7e27a4] text-[#fefedf] justify-center items-center text-center hover:text-[#28beb4] shadow-lg hover:shadow-lg hover:shadow-[#FFACFF] py-1 font-bold'>
                    Submit
                </button>
                
                </div>
                <h4 className='flex flex-col mt-3'>
                    <a className='text-blue-700 text-0.5xl hover:text-emerald-600 active:text-red-500'>Already Have an Account? Log in</a>
                </h4>
            </form>

        </div>

    </div>
  )
}

export default Register