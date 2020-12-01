// Used for toggling the FAQs
// Any elements wrapped with a "Toggle" component

import { motion } from 'framer-motion';
import React, { useState } from 'react';

// Receiving children props via wrapping and title prop
const Toggle = ({children, title}) => {

    // State for Toggle functionality
    const [toggle, setToggle] = useState(false);

    return (
        // We use motion.div so that "Animate Shared Layout" in
        // FaqSection can properly animate the questions
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            {/* If toggle is true, render out wrapped children, else, don't render */}
            <motion.h4 layout>{title}</motion.h4>
            {toggle ? children : ""}
            <div className="faq-line"></div>
        </motion.div>
    )
}

export default Toggle;