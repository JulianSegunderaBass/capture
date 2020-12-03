// The Contact Us page

import React from 'react';
// Importing Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animate';
// Importing Styling
import styled from 'styled-components';

const ContactUs = () => {
    return (
        <ContactStyle
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            exit="exit"
            style={{background: "#fff"}}
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send us a message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send an email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Social Media</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
}

// Styled Components
const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 850px) {
        padding: 2rem 2rem;
    }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 850px) {
        margin-top: 2rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
    /* @media (max-width: 750px) {
        width: 1.5rem;
        height: 1.5rem;
    } */
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
    @media (max-width: 850px) {
        h2 {
            font-size: 2.5rem;
        }
    }
`;

export default ContactUs;