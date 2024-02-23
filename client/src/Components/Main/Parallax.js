import React, { useEffect, useRef } from 'react';
import BG from '../../assets/summer6/1.png';
import Tree from '../../assets/summer6/2.png';
import Cloud from '../../assets/summer6/3.png';
import Grass from '../../assets/summer6/4.png';
import Other from '../../assets/summer6/5.png';
import './Main.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register the plugin

const Parallax = () => {
    // for bg to shrink
    let bgcloud = useRef(null);

    // for moving the clouds
    let move_cloud = useRef(null);

    // for trees to move
    let trees_move = useRef(null);

    useEffect(() => {
        // Set up ScrollTrigger for bgcloud
        gsap.to(bgcloud, {
        scale: 1.2,
        scrollTrigger: {
            scrub: 1,
        },
        });
    }, []);

    useEffect(() => {
        // Set up ScrollTrigger for trees_move
        gsap.from(trees_move, {
        scale: 1,
        scrollTrigger: {
            scrub: 1,
        },
        });

        gsap.to(trees_move, {
        scale: 1.5,
        
        scrollTrigger: {
            scrub: 1,
        },
        });
    }, [trees_move]); // Add trees_move as a dependency to avoid a warning

    useEffect(() => {
        // Set up ScrollTrigger for move_cloud
        gsap.to(move_cloud, {
        y: 25,
        x: 100,
        scrollTrigger: {
            scrub: 1,
        },
        });
    }, []);

    let move_grass = useRef(null);
    useEffect(() => {
        gsap.to(move_grass, {
            y:80,
            scrollTrigger: {
                scrub:1
            }
        })
    },[])

    let move_gournd = useRef(null);
    useEffect(() => {
        gsap.to(move_gournd, {
            y:40,
            scrollTrigger: {
                scrub: 1,
            }
        })
    }, [])

    let move_text = useRef(null);
    useEffect(() => {
        gsap.to(move_text, {
            y:35,
            delay:2,
            scrollTrigger:{
                scrub:1,
            }
        })
    }, [])


    return (
        <div>
        <div className='parallax' id='posts'>
            <img src={BG} ref={(el) => (bgcloud = el)} alt='' className='bg' />
            <img
            src={Tree}
            alt=''
            ref={(el) => (move_cloud = el)}
            className='cloud'
            />
            <img src={Cloud} alt='' className='grass' ref={(el) => {move_grass = el}}/>
            <img
            src={Other}
            alt=''
            ref={(el) => (trees_move = el)}
            className='tree'
            />
            <img src={Grass} alt='' className='ground' ref={el => {move_gournd = el}} />
            <h1 id='text' className='text-slate-600 font-serif' ref={el => {move_text = el}}>
            Recent Blogs
            </h1>
        </div>
        </div>
    );
};

export default Parallax;
