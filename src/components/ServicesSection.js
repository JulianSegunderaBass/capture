// Part of the "About Us" page

import React from 'react';
// Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
// Import Images
import home2 from '../img/home2.png';
// Styling Import
import styled from 'styled-components';
// Importing Framer Motion and Animations
import { motion } from 'framer-motion';
import { scrollReveal } from '../animate';
// Importing our custom useScroll component for scroll animations
import { useScroll } from './useScroll';

const ServicesSection = () => {

    // A custom hook using the returned parameters from useScroll
    const [element, controls] = useScroll();

    return (
        // Ref is used to connect to useInView via useScroll
        // Setting animate to controls hands control over to useInView
        <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            {/* Text Section */}
            <Description>
                <h2>High <span>quality</span> services</h2>
                {/* Cards Section */}
                <Cards>
                    {/* Individual Cards */}
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="Clock Icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="Teamwork Icon" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="Diaphragm Icon" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="Money Icon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="" />
            </Image>
        </Services>
    )
}

// Styled Component
const Services = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        /* Keeping the aspect ratio right */
        object-fit: cover;
    }
`;

export default ServicesSection;