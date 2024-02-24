import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'


import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Cards from './utils/Cards';

const Main = () => {
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
    <main className='bg-[#05070D]'>
    
      <h1 className='text-4xl font-bold text-[#03A6C6] font-["Anton", sans-serif] ml-8 '>
        <span className='text-[#583BBf]'>Toasts</span> for you
      </h1>
      <div className='h-full bg-gradient-to-br from-[#05070D] to-[#103740]' id='sec'>
      <Cards />

      <Stack spacing={2} className='w-full h-full flex justify-center items-center mt-8 text-[#03A6C6]'>
        <Pagination count={11} className='text-[#03A6A6]' defaultPage={6} boundaryCount={2} />
      </Stack>
    </div>
    </main>
    
  )
}

export default Main