import React from 'react'
import '../main.css'
import { Link } from 'react-router-dom';
import Tech from '../../../assets/Tech.webp'
import { Button, styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import '../main.css';


const CustomCard = styled(Card)({
    maxWidth: 345,
    borderRadius: 8,
    backgroundColor: "rgba(,0,0,0.6)",
    '&:hover': {
        boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    },
})

const CustomButton = styled(Button)({
    color: "#583bbf",
    '&:hover': {
        boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    },
})

const Posts = () => {
  return (
<div>
    <div className='mt-12'>
        <h4 className='flex justify-center text-center text-2xl font-semibold head-prof'>
                    Recent Posts: 
        </h4>

        <div className="flex flex-wrap items-center h-full w-full gap-6 mt-5 align-prof">
            <CustomCard sx={{ maxWidth: 345, borderRadius: 8 }} className=' card shadow-md shadow-[#09A6C6]'
            >
                <CardMedia
                    sx={{ height: 140 }}
                    image ={Tech}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="text-[#03A6A6] font-['Roboto', sans-serif] font-bold text-3xl">
                        Generative AI in Medicine
                    </Typography>
                    <Typography variant="body-2" component="div" className='flex justify-center items-center mt-0 pt-0 text-center author' sx={{
                        color: "#d93d04",
                        opacity: 0.8,
                        fontWeight: 400,
                        fontFamily: "Poppins, sans-"
                    }}>
                        -John Patrick
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='card-date'>
                        Feb 12, 2023
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='card-body'>
                    as we navigate through the ever-evolving landscape of the medical field, exploring how AI is reshaping diagnostics, treatment strategies, and the future of healthcare. Embrace the future with us, where cutting-edge insights and transformative ideas come together to pave the way for a healthier tomorrow.
                </Typography>
                </CardContent>
                <CardActions >
                    <CustomButton size="small" className="card-links" >Share</CustomButton>
                    <CustomButton size="small" className="card-links" >Learn More</CustomButton>
                </CardActions>
            </CustomCard>

            <CustomCard sx={{ maxWidth: 345, borderRadius: 8 }} className=' card shadow-md shadow-[#09A6C6]'
            >
                <CardMedia
                    sx={{ height: 140 }}
                    image ={Tech}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="text-[#03A6A6] font-['Roboto', sans-serif] font-bold text-3xl">
                        Generative AI in Medicine
                    </Typography>
                    <Typography variant="body-2" component="div" className='flex justify-center items-center mt-0 pt-0 text-center author' sx={{
                        color: "#d93d04",
                        opacity: 0.8,
                        fontWeight: 400,
                        fontFamily: "Poppins, sans-"
                    }}>
                        -John Patrick
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='card-date'>
                        Feb 12, 2023
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='card-body'>
                    as we navigate through the ever-evolving landscape of the medical field, exploring how AI is reshaping diagnostics, treatment strategies, and the future of healthcare. Embrace the future with us, where cutting-edge insights and transformative ideas come together to pave the way for a healthier tomorrow.
                </Typography>
                </CardContent>
                <CardActions >
                    <CustomButton size="small" className="card-links" >Share</CustomButton>
                    <CustomButton size="small" className="card-links" >Learn More</CustomButton>
                </CardActions>
            </CustomCard>

            <CustomCard sx={{ maxWidth: 345, borderRadius: 8, background: "transaparent" }} className=' card shadow-md shadow-[#09A6C6]'
            >
                <CardMedia
                    sx={{ height: 140 }}
                    image ={Tech}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="text-[#03A6A6] font-['Roboto', sans-serif] font-bold text-3xl">
                        Generative AI in Medicine
                    </Typography>
                    <Typography variant="body-2" component="div" className='flex justify-center items-center mt-0 pt-0 text-center author' sx={{
                    color: "#d93d04",
                    opacity: 0.8,
                    fontWeight: 400,
                    fontFamily: "Poppins, sans-"}}>
                        -John Patrick
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='card-date'>
                        Feb 12, 2023
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='card-body'>
                    as we navigate through the ever-evolving landscape of the medical field, exploring how AI is reshaping diagnostics, treatment strategies, and the future of healthcare. Embrace the future with us, where cutting-edge insights and transformative ideas come together to pave the way for a healthier tomorrow.
                </Typography>
                </CardContent>
                <CardActions >
                    <CustomButton size="small" className="card-links" >Share</CustomButton>
                    <CustomButton size="small" className="card-links" >Learn More</CustomButton>
                </CardActions>
            </CustomCard>
        </div>
    </div>
</div>
  )
}

export default Posts