import React from 'react'
import '../main.css';
import { Link } from 'react-router-dom';

const Comments = () => {
  return (
    <div className='mt-4'>
        <h4 className='flex justify-center text-center text-[#03A6A6] text-3xl font-bold font-mono ' style={{
            letterSpacing: 2
        }}>
            Comments: 
        </h4>
        
        <div className='container justify-center flex-wrap mx-auto w-full flex gap-4 mt-6 pb-6'>
            <div className='border border-slate-800 rounded-lg p-4 shadow-lg hover:shadow-[#103740] hover:translate-x-1 bg-gradient-to-br from-[#5E3D52] via-[#457CA3] to-[#185D7A]'>
                    <h1 className='text-xl font-semibold font-sans text-[#fefedf]'>
                    Commented on <span className='font-bold text-emerald-200'>Emmanuel</span>'s Post
                    </h1>
                    <blockquote>--
                    <p className='text-.5xl font-semibold'>
                        Thanks For the informative Content
                    </p>
                    </blockquote>
                    <Link to='/api/v1/posts/:id' className='text-violet-900 font-semibold text-sm hover:text-[#583BBF]'>
                        See More
                    </Link>
                </div>
                <div className='border border-slate-800 rounded-lg p-4 shadow-lg hover:shadow-[#103740] hover:translate-x-1 bg-gradient-to-br from-[#5E3D52] via-[#457CA3] to-[#185D7A]'>
                <h1 className='text-xl font-semibold font-sans text-[#fefedf]'>
                    Commented on <span className='font-bold text-emerald-200'>Emmanuel</span>'s Post
                    </h1>
                    <blockquote>--
                    <p className='text-.5xl font-semibold'>
                        Thanks For the informative Content
                    </p>
                    </blockquote>
                    <Link to='/api/v1/posts/:id' className='text-violet-900 font-semibold text-sm hover:text-[#583BBF]'>
                        See More
                    </Link>
                </div>
                <div className='border border-slate-800 rounded-lg p-4 shadow-lg hover:shadow-[#103740] hover:translate-x-1 bg-gradient-to-br from-[#5E3D52] via-[#457CA3] to-[#185D7A]'>
                <h1 className='text-xl font-semibold font-sans text-[#fefedf]'>
                    Commented on <span className='font-bold text-emerald-200'>Emmanuel</span>'s Post
                    </h1>
                    <blockquote>--
                    <p className='text-.5xl font-semibold'>
                        Thanks For the informative Content
                    </p>
                    </blockquote>
                    <Link to='/api/v1/posts/:id' className='text-violet-900 font-semibold text-sm hover:text-[#583BBF]'>
                        See More
                    </Link>
                </div>
        </div>
        
    </div>
  )
}

export default Comments