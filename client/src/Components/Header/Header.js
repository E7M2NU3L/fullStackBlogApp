import React from 'react'
import Tech from '../../assets/Tech.webp';
import './Header.css';
import HeroImg from '../../assets/AI.jpg';
import { Add, HdrPlus, PlusOne } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Header = () => {
  
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

  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div className='flex h-screen items-center justify-around aligner'>
      <div className='mx-8' style={{
        maxWidth: "55vh"
      }}>
          <h1 className='text-bold text-4xl pt-4 text-[#03A6A6] font-bold'>
            JEHR-BLOGS
          </h1>
          <h3 className='mt-4 font-md font-semibold text-[#03A6A6]'> 
          <span className='mx-2'></span>Exploring the Nexus of Medicine and Artificial Intelligence: Your Gateway to Cutting-Edge Insights in Healthcare Innovation
          </h3>
        <p className='text-sm font-light mt-6 mb-4 text-[#2CBBA3]'>
        Welcome to our blog, where we embark on an insightful journey at the intersection of medicine and artificial intelligence (AI). In this space, we delve into the dynamic realm where technological innovation and healthcare converge, unlocking a treasure trove of knowledge and groundbreaking discoveries.
        </p>
        <a href='#posts' scroll="smooth" className='border-1 border-[#D93D04]  shadow-md py-2 px-4 gap-2 relative text-[#fefedf] bg-[#D93D04] rounded-md'>
        <Button onClick={handleClick(SlideTransition)} sx={{
          color: "#fefedf",
        }}><Link to="/api/v1/users/create-post">
          <Add /> Create Posts</Link></Button>
        </a>
      </div>

        <Snackbar
          open={state.open}
          onClose={handleClose}
          TransitionComponent={state.Transition}
          message="Redirecting to the Page"
          key={state.Transition.name}
          autoHideDuration={1200}
        />
      <div className='hero-image' style={{
        maxWidth: "45vh"
      }}>     
        <img
        src={HeroImg}
        alt=''
        className='img-effects'
        />
      </div>
    </div>
  )
}

export default Header