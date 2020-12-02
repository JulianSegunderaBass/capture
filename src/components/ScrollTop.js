// Makes sure each loded page automatically scrolls to the top
// Scroll to top each time url changes

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const ScrollTop = () => {
    // Use Location gets the current page location data
    // Includes pathname
    const {pathname} = useLocation();
    console.log(pathname);

    // Scroll to top when page loads
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0
        });
        // Condition meaning "scroll when pathname changes"
    }, [pathname]);
    return null;
}

export default ScrollTop;