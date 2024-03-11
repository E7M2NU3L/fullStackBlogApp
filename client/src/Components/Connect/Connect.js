import React, { useState } from 'react';
import './main.css';
import { RoundedCornerOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';

const Connect = () => {
    // email state handler
    const [email, setEmail] = useState('');

    // handle the change in the state
    const handleEmailChange = (e) => setEmail(e.target.value);

    // handle the submit function
    const handleSubmit= (e) => {
        e.preventDefaults();

        // further functionality
    }

  return (
    <div className='w-full' style={{
        height: "40vh"
    }}>
        <main className=' max-w-6xl flex mx-auto justify-between items-center'>
            <div className='flex-2 justify-center items-center w-full'>
                <h1 className='text-2xl font-["Poppins", sans-serif]'>
                    Stay Updated <span style={{
                        height: "8px",
                        paddingTop: "5px"
                    }}>
                        <RoundedCornerOutlined />
                    </span>
                </h1>

                <p className='mb-6 text-md'>
                    Get the latest creative news from Jehr-blogs about medicine, healthcare, AI, Technology and many more sub categories
                </p>
                <form className='' onSubmit={handleSubmit}>
                    <input placeholder='Your email address' type='email'
                        value={email}
                        onChange={handleEmailChange}
                        className='px-2 py-4 outline-none bg-transparent text-[#fefedf]'
                        />
                        <Button variant='outlined' className='flex items-center text-center justify-center w-full bg-black text-[#fefedf]'>
                            Sign up
                        </Button>
                </form>
            </div>
            <div className="flex-1"></div>
        </main>

    </div>
  )
}

export default Connect