import React from 'react'
import Tech from '../../assets/Tech.webp';
import './Header.css';

const Header = () => {
  return (
    <div className=''>

  
    <div className='bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-600 flex h-screen items-center justify-evenly aligner'>
      <div className='mx-8'>
      <h1 className='text-bold text-4xl text-center flex items-center justify-center pt-4'>
        JEHR-BLOG
      </h1>
      <h3 className='mt-4 font-md font-semibold'> 
      <span className='mx-2'></span>Exploring the Nexus of Medicine and Artificial Intelligence: Your Gateway to Cutting-Edge Insights in Healthcare Innovation
      </h3>
    <p className='text-sm font-normal mt-6'>
    Welcome to our blog, where we embark on an insightful journey at the intersection of medicine and artificial intelligence (AI). In this space, we delve into the dynamic realm where technological innovation and healthcare converge, unlocking a treasure trove of knowledge and groundbreaking discoveries.
    </p>
    <a href='#posts' scroll="smooth" className='border-1 shadow-md bg-slate-600 px-2 py-1 rounded-lg text-white text-semibold relative hover:text-green-200 active:text-slate-400 flex justify-center mx-12 mt-8 mb-4'>
      Explore
    </a>
    
      </div>
      <div>
      
    <img
    src={Tech}
    alt=''
    className='shadow-lg hover:shadow-blue-500 hover:ring-sky-500'
    />
    
      </div>
    </div>
    </div>
  )
}

export default Header