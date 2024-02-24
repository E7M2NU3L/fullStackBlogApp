import React from 'react'
import '../main.css';

import { Link } from 'react-router-dom';
import GenAI from '../../../assets/GenAI.webp';

const Comments = () => {
  return (
    <div className='mt-4'>
                <h4 className='flex justify-center text-center text-2xl font-semibold text-slate-700'>
                    Comments: 
                </h4>
                
                <div className='container justify-center flex-wrap mx-auto w-full flex gap-4 mt-6 mb-6'>
                    <div className='border border-slate-800 rounded-lg p-4 shadow-lg hover:shadow-cyan-700 bg-slate-300'>
                            <h1 className='text-xl font-semibold font-sans text-slate-900'>
                            Commented on <span className='font-bold text-slate-600'>Emmanuel</span>'s Post
                            </h1>
                            <blockquote>--
                            <p className='text-.5xl font-semibold'>
                                Thanks For the informative Content
                            </p>
                            </blockquote>
                            <Link to='/api/v1/posts/:id' className='text-slate-800 text-sm hover:text-slate-400'>
                                See More
                            </Link>
                        </div>
                        <div className='border border-slate-800 rounded-lg p-4 shadow-lg hover:shadow-cyan-700 bg-slate-300'>
                        <h1 className='text-xl font-semibold font-sans text-slate-900'>
                            Commented on <span className='font-bold text-slate-600'>Emmanuel</span>'s Post
                            </h1>
                            <blockquote>--
                            <p className='text-.5xl font-semibold'>
                                Thanks For the informative Content
                            </p>
                            </blockquote>
                            <Link to='/api/v1/posts/:id' className='text-slate-800 text-sm hover:text-slate-400'>
                                See More
                            </Link>
                        </div>
                        <div className='border border-slate-800 rounded-lg p-4 shadow-lg hover:shadow-cyan-700 bg-slate-300'>
                        <h1 className='text-xl font-semibold font-sans text-slate-900'>
                            Commented on <span className='font-bold text-slate-600'>Emmanuel</span>'s Post
                            </h1>
                            <blockquote>--
                            <p className='text-.5xl font-semibold'>
                                Thanks For the informative Content
                            </p>
                            </blockquote>
                            <Link to='/api/v1/posts/:id' className='text-slate-800 text-sm hover:text-slate-400'>
                                See More
                            </Link>
                        </div>
                </div>
                
            </div>
  )
}

export default Comments