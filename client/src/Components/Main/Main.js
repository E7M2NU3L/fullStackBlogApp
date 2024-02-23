import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'

import AI from '../../assets/AI.jpg';
import Tech from '../../assets/Tech.webp';
import MEd from '../../assets/MEd.jpg';

const Main = () => {
  return (
    <div className='h-full' id='sec'>

      <div className=''>
        <div className='flex flex-wrap gap-4 justify-evenly items-center'>
          <div className='border px-4 py-2 shadow-md hover:shadow-lg hover:shadow-purple-800 bg-slate-200 border-1 ring-1 ring-purple-300 hover:ring-purple-500 rounded-lg '>
            <img
            src={AI}
            alt=''
            id="img"
            className='rounded-lg img-sm mb-4 '
            />
            <h1 className='text-2xl font-bold text-slate-700 mb-2'>
              Generative AI in Medicine
            </h1>
            <h3 className='font-semibold text-md'>
            as we navigate through the ever-evolving landscape of the medical field, exploring how AI is reshaping diagnostics, treatment strategies, and the future of healthcare. Embrace the future with us, where cutting-edge insights and transformative ideas come together to pave the way for a healthier tomorrow.
            </h3>
            <blockquote>
              3 Mins Read
            </blockquote>
            <Link to='/api/v1/posts/:id' className='hover:text-blue-500'>
              Read More
            </Link>
          </div>
          
          <div className='border px-4 py-2 shadow-md hover:shadow-lg hover:shadow-purple-800 bg-slate-200 border-1 ring-1 ring-purple-300 hover:ring-purple-500 rounded-lg'>
            <img
            src={MEd}
            alt=''
            id="img"
            className=' rounded-lg img-sm mb-4'
            />
            <h1 className='text-2xl font-bold text-slate-700 mb-2'>
              Generative AI in Medicine
            </h1>
            <h3 className='font-semibold text-md'>
            where we embark on an insightful journey at the intersection of medicine and artificial intelligence (AI). In this space, we delve into the dynamic realm where technological innovation and healthcare converge, unlocking a treasure trove of knowledge and groundbreaking discoveries. From the latest advancements in medical AI to the transformative impact on patient care, our blog serves as your compass through the intricate landscape of this symbiotic relationship
            </h3>
            <blockquote>
              3 Mins Read
            </blockquote>
            <Link to='/api/v1/posts/:id' className='hover:text-blue-500'>
              Read More
            </Link>
          </div>

          <div className='border px-4 py-2 shadow-md hover:shadow-lg hover:shadow-purple-800 bg-slate-200 border-1 ring-1 ring-purple-300 hover:ring-purple-500 rounded-lg'>
            <img
            src={Tech}
            alt=''
            id="img"
            className='rounded-lg img-sm mb-4 '
            />
            <h1 className='text-2xl font-bold text-slate-700 mb-2'>
              Generative AI in Medicine
            </h1>
            <h3 className='font-semibold text-md'>
            where we embark on an insightful journey at the intersection of medicine and artificial intelligence (AI). In this space, we delve into the dynamic realm where technological innovation and healthcare converge, unlocking a treasure trove of knowledge and groundbreaking discoveries. From the latest advancements in medical AI to the transformative impact on patient care, our blog serves as your compass through the intricate landscape of this symbiotic relationship
            </h3>
            <blockquote>
              3 Mins Read
            </blockquote>
            <Link to='/api/v1/posts/:id' className='hover:text-blue-500'>
              Read More
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main