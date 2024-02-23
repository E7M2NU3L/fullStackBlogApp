import React, { useContext, useEffect } from 'react'
import Logo from '../../assets/Logo.jpg';
import { Link } from 'react-router-dom';
import GenAI from '../../assets/GenAI.webp';
import { authContext } from '../../apis/Users/AuthContext';

const Profile = () => {
    const {fetchProfileAction, profile, error} = useContext(authContext);

    useEffect(() => {
        fetchProfileAction();
    },[])

    console.log(profile);
    console.log(error);
    
    const url = "http://localhost:3000/api/v1/users/profile"
  return (
    <div className='h-full'>
        <h1 className='text-slate-600 text-3xl mt-5 justify-center font-bold text-center'>
            User Profile
        </h1>
        <div className='flex justify-evenly mt-9'>
            
        <div>
            <h1 className='text-2xl text-slate-700 font-["Roboto", sans-serif] font-bold'>
                Profile <span className='text-slate-900'>Picture</span>
            </h1>
            <img src={Logo}
            alt='user Profile'
            className='rounded-lg border border-s-amber-400 hover:shadow-md hover:shadow-slate-900 max-w-24 mx-auto mt-3'
             />
             <Link to='/api/users/upload-profile-photo' className='mt-1 text-center flex justify-center'>
                <button className='bg-slate-600 text-white font-sans border shadow-md hover:shadow-slate-300 px-3 py-1 rounded-lg'>
                    Upload Profile
                </button>
             </Link>
        </div>
        <div>
            <h3 className='text-2xl font-bold text-slate-700 justify-center text-center flex'>
            User Details
            </h3>
            <div className='mt-4 flex justify-evenly'>
                <h4 className='text-blue-800'>
                    User Name: 
                </h4>
                <h4 className='text-slate-700 font-["Roboto", sans-serif] font-semibold'>
                    Emmanuel
                </h4>
            </div>
            
            <div className='mt-4 flex flex-col justify-center items-center text-center'>
                <h4 className='text-blue-800'>
                    Email id: 
                </h4>
                <h4 className='text-slate-700 font-["Roboto", sans-serif] font-semibold'>
                    aemmanuel685210@gmail.com
                </h4>
            </div>
            
            <div className='mt-4 flex justify-evenly'>
                <h4 className='text-blue-800'>
                    Connection Status: 
                </h4>
                <h4 className='text-green-500 font-semibold'>
                    Connected
                </h4>
            </div>
        </div>
        </div>
    <hr
    className='w-40 mx-auto h-1 shadow-md mt-4 mb-4 bg-slate-900' 
    />
        <div className='mt-12'>
                <h4 className='flex justify-center text-center text-2xl font-semibold text-slate-700'>
                    Recent Posts: 
                </h4>
                <div className='max-w-4xl mx-auto items-center flex flex-wrap gap-4'>
                    <div className='mt-3 mb-3'>
                        <div className='border border-slate-800 rounded-lg p-4 shadow-lg hover:shadow-cyan-700 mb-3 bg-slate-400 mx-4'>
                            <img 
                            src={GenAI}
                            className=' rounded-lg w-full p-3'
                            />
                            <h1 className='text-xl font-normal font-sans text-slate-900'>
                            Chatbot examples: A beginner’s guide
                            </h1>
                            <p>
                            A chatbot is a program or script designed to interact and respond to humans in real-time conversation. Different organizations and individuals employ chatbots for a variety of different uses and business functions.<span className='hidden'>
                            Broadly, chatbots provide pre-written responses and information to handle basic requests or to get enough information from customers to connect them to a live agent for better and more specific service. More advanced chatbots use machine learning, artificial intelligence [AI] and generative AI technology to generate real-time responses based on user input. Chatbots have become a sort of Swiss-Army-knife for many organizations, one tool that fulfills many business needs
                                </span> 
                            </p>
                            <Link to='/api/v1/posts/:id' className='text-slate-800 hover:text-slate-400'>
                                Read More
                            </Link>
                        </div>
                        <div className='border border-slate-800 rounded-lg p-4 shadow-lg hover:shadow-cyan-700 mb-3 bg-slate-400 mx-4'>
                            <img 
                            src={GenAI}
                            className=' rounded-lg w-full p-3'
                            />
                            <h1 className='text-xl font-normal font-sans text-slate-900'>
                            Chatbot examples: A beginner’s guide
                            </h1>
                            <p>
                            A chatbot is a program or script designed to interact and respond to humans in real-time conversation. Different organizations and individuals employ chatbots for a variety of different uses and business functions.<span className='hidden'>
                            Broadly, chatbots provide pre-written responses and information to handle basic requests or to get enough information from customers to connect them to a live agent for better and more specific service. More advanced chatbots use machine learning, artificial intelligence [AI] and generative AI technology to generate real-time responses based on user input. Chatbots have become a sort of Swiss-Army-knife for many organizations, one tool that fulfills many business needs
                                </span> 
                            </p>
                            <Link to='/api/v1/posts/:id' className='text-slate-800 hover:text-slate-400'>
                                Read More
                            </Link>
                        </div>
                        <div className='border border-slate-800 rounded-lg p-4 shadow-lg hover:shadow-cyan-700 mb-3 bg-slate-400 mx-4'>
                            <img 
                            src={GenAI}
                            className=' rounded-lg w-full p-3'
                            />
                            <h1 className='text-xl font-normal font-sans text-slate-900'>
                            Chatbot examples: A beginner’s guide
                            </h1>
                            <p>
                            A chatbot is a program or script designed to interact and respond to humans in real-time conversation. Different organizations and individuals employ chatbots for a variety of different uses and business functions.<span className='hidden'>
                            Broadly, chatbots provide pre-written responses and information to handle basic requests or to get enough information from customers to connect them to a live agent for better and more specific service. More advanced chatbots use machine learning, artificial intelligence [AI] and generative AI technology to generate real-time responses based on user input. Chatbots have become a sort of Swiss-Army-knife for many organizations, one tool that fulfills many business needs
                                </span> 
                            </p>
                            <Link to='/api/v1/posts/:id' className='text-slate-800 hover:text-slate-400'>
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>

            <hr
    className='w-40 mx-auto h-1 shadow-md mt-4 mb-4 bg-slate-900' 
    />
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
    </div>
  )
}

export default Profile