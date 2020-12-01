// Reusable component for scroll animations

// Importing React Intersection Observer
// Intersection Observer does something to an element 
// when it is in view
import { useInView } from 'react-intersection-observer';
// To control when an animation starts
import { useAnimation } from 'framer-motion';

export const useScroll = () => {
        
    const controls = useAnimation();

    // When an element is half on screen
    const [element, view] = useInView({
        threshold: 0.2
    });

    // If element is in view, enable "show" animation
    if (view) {
        controls.start('show');
    } else {
        controls.start('hidden');
    }
    
    // Returning the things we need in the component
    return [element, controls];

}