// This page stacks the components:

import React from 'react';
// Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
// Importing Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animate';
// Import to automatically scroll to top upon loading
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => {
    // Using an animated div as the root component
    return (
        <motion.div 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            exit="exit"
        >
            {/* Extra component to scroll to top of page upon loading */}
            <ScrollTop />
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    )
}

export default AboutUs;