// The "Our Work" page

import React from 'react';
// Importing Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// Importing Styles
import styled from 'styled-components';
// Import Link
import { Link } from 'react-router-dom';
// Importing Animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from '../animate';

const OurWork = () => {
    return (
        // * We can use framer motion with "Work" because of (motion.div) in styles
        <Work 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            exit="exit"
            style={{background: "#fff"}}
        >
            {/* For the animated background using a different container
            This lets us stagger them differently from pageAnimation */}
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                {/* Line to be animated */}
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="The Athlete" />
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                {/* Line to be animated */}
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="The Racer" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                {/* Line to be animated */}
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="Good Times" />
                </Link>
            </Movie>
        </Work>
    )
}

// * We use motion.div because this styled component will be animated
const Work = styled(motion.div)`
    min-height: 100vh;
    /* For Animations */
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line {
      height: 0.5rem;
      background: #23d997;
      margin-bottom: 3rem;  
    }
    img {
        width: 100%;
        height: 70vh;
        /* To prevent image squishing */
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    /* Top 10% to allow nav to be seen */
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    /* Cover the rest of the screen */
    z-index: 2;
`;

// Copying in the styles from Frame1
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default OurWork;