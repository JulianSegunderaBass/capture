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
        y: 300,
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