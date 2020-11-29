// This page stacks the components:

import React from 'react';
// Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
// Importing Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animate';

const AboutUs = () => {
    // Using an animated div as the root component
    return (
        <motion.div 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            exit="exit"
        >
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    )
}

export default AboutUs;