import React from 'react'
import '../main.css'

import { Link } from 'react-router-dom';
import GenAI from '../../../assets/GenAI.webp';

const Posts = () => {
  return (
    <div>
           <div className='mt-12'>
                <h4 className='flex justify-center text-center text-2xl font-semibold text-slate-700'>
                    Recent Posts: 
                </h4>
                <div className=' max-w-4xl mx-auto items-center flex flex-wrap gap-4'>
                    <div className='mt-3 mb-3'>
                        <div className=' rounded-lg p-4 shadow-lg  mb-3 bg-[#103740] mx-4'>
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

                        <div className=' rounded-lg p-4 shadow-lg  mb-3 bg-[#103740] mx-4'>
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
                        <div className=' rounded-lg p-4 shadow-lg  mb-3 bg-[#103740] mx-4'>
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
                        <div className=' rounded-lg p-4 shadow-lg  mb-3 bg-[#103740] mx-4'>
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
    </div>
  )
}

export default Posts