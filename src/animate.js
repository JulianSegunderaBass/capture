// Animations for navigating pages
// ? Must be applied to each page

export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            // Lets the whole page animation complete before child animations
            when: "beforeChildren",
            // Staggering - lets children elements animate independently or "staggered"
            staggerChildren: 0.25
        }
    },
    // Exit runs when the component is "closed"
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        } 
    }
}

export const titleAnim = {
    hidden: {
        y: 200
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    }
}

export const fade = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.75
        }
    }
}

export const photoAnim = {
    hidden: {
        scale: 1.5,
        opacity: 0
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.75
        }
    }
}

export const lineAnim = {
    // Note: percentages need to be wrapped with quotes
    hidden: {
        width: '0%'
    },
    show: {
        width: '100%',
        transition: {
            duration: 1
        }
    }
}

// For background animations in OurWork
export const slider = {
    hidden: {
        x: '-130%',
        skew: '45deg'
    },
    show: {
        x: '100%',
        skew: '0deg',
        transition: {
            ease: 'easeOut',
            duration: 1
        }
    }
}

// A separate parent Framer container for the slider
export const sliderContainer = {
    hidden: {
        opacity: 1
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            ease: 'easeOut'
        }
    }
}

// For the scroll reveal animations
export const scrollReveal = {
    hidden: {
        opacity: 0,
        x: 300,
        transition: {
            duration: 0.5
        }
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
}