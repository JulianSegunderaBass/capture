// This page stacks the components:

import React from 'react';
// Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

const AboutUs = () => {
    // Using a "Fraction" instead of a div as the root component
    return (
        <>
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </>
    )
}

export default AboutUs;