import { BackHandRounded, Person, QuestionMark } from '@mui/icons-material'
import { Link } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center bg-gradient-to-tr from-slate-300 to-sky-300 h-screen'>
        <div>
        <h1 className='text-4xl font-bold mt-2'>
            Route Not Found
        </h1>
        <QuestionMark className='bg-purple-500 shaodw-lg shadow-puple-300 flex items-center justify-center border-1 mx-auto' style={{
            width: "200px",
            height: "200px",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            display: "flex",
            marginTop: "30px"
        }}
        />
        <div className='mt-4 relative'>
        <Link to="/" className='font-semibold text-2xl mt-4 cursor-pointer'>
            Go back
        </Link>
        </div>
        </div>
    </div>
  )
}

export default NotFound