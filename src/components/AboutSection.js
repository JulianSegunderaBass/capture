// Part of the "About Us" page

import React from 'react';
// Import Images
import home1 from '../img/home1.png';
// Styling Import
import styled from 'styled-components';
// Importing Framer Motion
// To animate, replace a tag with motion.tag and add animate / initial states
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animate';
// Importing the "Wave" svg for the wave animation
import Wave from './Wave';

const AboutSection = () => {

    // Variables for Framer Motion - Variants
    // Staggering - lets children elements animate independently or "staggered"
    return (
        <About>
            <Description>
                <motion.div className="title">
                    {/* Three divs to animate individually */}
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas that you have. 
                    We have professionals with amazing skills.
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="Guy with camera" />
            </Image>
            {/* Wave Component */}
            <Wave />
        </About>
    )
}

// Styled Component
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    /* To go over the wave */
    z-index: 2;
    h2 {
        font-weight: lighter;
    }
`;

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;
    img {
        width: 100%;
        height: 80vh;
        /* Keeping the aspect ratio right */
        object-fit: cover;
    }
`;

const Hide = styled.div`
    /* To hide the title elements out of view for animations */
    overflow: hidden;
`;

export default AboutSection;