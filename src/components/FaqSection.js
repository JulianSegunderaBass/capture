// Part of the "About Us" page

import React from 'react';
// Styling Import
import styled from 'styled-components';
// Importing reusable component for Toggling
import Toggle from './Toggle';
// Importing Framer Motion Tools
import { motion } from 'framer-motion';
import { scrollReveal } from '../animate';
// AnimateSharedLayout detects a change in the layout, in this case the children
import { AnimateSharedLayout } from 'framer-motion';
// Importing our custom useScroll component for scroll animations
import { useScroll } from './useScroll';

const FaqSection = () => {

    // A custom hook using the returned parameters from useScroll
    const [element, controls] = useScroll();

    return (
        // Ref is used to connect to useInView via useScroll
        // Setting animate to controls hands control over to useInView
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Any Questions? <span>FAQ</span></h2>
            {/* Toggle components wrapped with Animate Shared Layout */}
            <AnimateSharedLayout>
                <Toggle title="How do I start?">
                        <div className="answer">
                            <p>This is a test answer.</p>
                            <p>This is a test paragraph section that functions as an answer.</p>
                        </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                        <div className="answer">
                            <p>This is a test answer.</p>
                            <p>This is a test paragraph section that functions as an answer.</p>
                        </div>
                </Toggle>
                <Toggle title="Different Payment Methods">
                        <div className="answer">
                            <p>This is a test answer.</p>
                            <p>This is a test paragraph section that functions as an answer.</p>
                        </div>
                </Toggle>
                <Toggle title="What products do you offer?">
                        <div className="answer">
                            <p>This is a test answer.</p>
                            <p>This is a test paragraph section that functions as an answer.</p>
                        </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(motion.div)`
    min-height: 90vh;
    display: block;
    padding: 5rem 10rem;
    color: white;
    h2 {
       padding-bottom: 2rem;
       font-weight: lighter;
    }
    span {
        display: block;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;