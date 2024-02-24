import React, { useContext, useEffect } from 'react'
import Posts from './utils/Posts';
import Comments from './utils/Comments';
import Details from './utils/Details';

const Profile = () => {
    
    {/*
    const {fetchProfileAction, profile, error} = useContext(authContext);

    useEffect(() => {
        fetchProfileAction();
    },[])

    console.log(profile);
    console.log(error);
    
    const url = "http://localhost:3000/api/v1/users/profile"
     */}

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
    <div className='h-full bg-gradient-to-tr from-[#05070D] to-[#103740]'>
        <Details />
    <hr
    className='w-40 mx-auto h-1 shadow-md mt-4 mb-4 bg-slate-900' 
    />

    <Posts />

            <hr
    className='w-40 mx-auto h-1 shadow-md mt-4 mb-4 bg-slate-900' 
    />

    <Comments />
    </div>
  )
}

export default Profile