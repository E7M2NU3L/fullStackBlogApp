import * as React from 'react';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import AI from '../../../assets/AI.jpg';
import Tech from '../../../assets/Tech.webp';
import MEd from '../../../assets/MEd.jpg';
import './main.css';

export default function Cards() {
    return (
        <div className="flex flex-wrap items-center h-full w-full gap-6">
        <Card sx={{ maxWidth: 345, borderRadius: 8 }} className=' card shadow-md shadow-[#09A6C6]'
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
                <Typography variant="body-2" component="div" className='flex justify-center items-center mt-0 pt-0 text-center author'>
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
                <Button size="small" className="card-links" >Share</Button>
                <Button size="small" className="card-links" >Learn More</Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, borderRadius: 8 }} className=' card shadow-md shadow-[#09A6C6]'
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
                <Typography variant="body-2" component="div" className='flex justify-center items-center mt-0 pt-0 text-center author'>
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
                <Button size="small" className="card-links" >Share</Button>
                <Button size="small" className="card-links" >Learn More</Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, borderRadius: 8 }} className=' card shadow-md shadow-[#09A6C6]'
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
                <Typography variant="body-2" component="div" className='flex justify-center items-center mt-0 pt-0 text-center author'>
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
                <Button size="small" className="card-links" >Share</Button>
                <Button size="small" className="card-links" >Learn More</Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, borderRadius: 8 }} className=' card shadow-md shadow-[#09A6C6]'
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
                <Typography variant="body-2" component="div" className='flex justify-center items-center mt-0 pt-0 text-center author'>
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
                <Button size="small" className="card-links" >Share</Button>
                <Button size="small" className="card-links" >Learn More</Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, borderRadius: 8 }} className=' card shadow-md shadow-[#09A6C6]'
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
                <Typography variant="body-2" component="div" className='flex justify-center items-center mt-0 pt-0 text-center author'>
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
                <Button size="small" className="card-links" >Share</Button>
                <Button size="small" className="card-links" >Learn More</Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, borderRadius: 8 }} className=' card shadow-md shadow-[#09A6C6]'
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
                <Typography variant="body-2" component="div" className='flex justify-center items-center mt-0 pt-0 text-center author'>
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
                <Button size="small" className="card-links" >Share</Button>
                <Button size="small" className="card-links" >Learn More</Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, borderRadius: 8, background: "transaparent" }} className=' card shadow-md shadow-[#09A6C6]'
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
                <Typography variant="body-2" component="div" className='flex justify-center items-center mt-0 pt-0 text-center author'>
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
                <Button size="small" className="card-links" >Share</Button>
                <Button size="small" className="card-links" >Learn More</Button>
            </CardActions>
        </Card>
</div>
    );
}