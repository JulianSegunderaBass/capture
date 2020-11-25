// Part of the "About Us" page

import React from 'react';
// Import Images
import home1 from '../img/home1.png';
// Styling Import
import styled from 'styled-components';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    {/* Three divs to animate individually */}
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>
                    Contact us for any photography or videography ideas that you have. 
                    We have professionals with amazing skills.
                </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="Guy with camera" />
            </Image>
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
    h2 {
        font-weight: lighter;
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

const Hide = styled.div`
    /* To hide the title elements out of view for animations */
    overflow: hidden;
`;

export default AboutSection;