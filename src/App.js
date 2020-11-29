// Pages being stacked:

import React from 'react';
// Global Styles
import GlobalStyle from './components/GlobalStyle';
// Importing Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
// Importing Nav
import Nav from './components/Nav';
// Additional Router Imports
import { Switch, Route, useLocation } from 'react-router-dom';
// Importing Animations
// * Animate Presence helps React detect when a component
// * is removed from the tree - exit animations
// * Also requires "useLocation" from React Router Dom
import { AnimatePresence } from 'framer-motion';

function App() {
    const location = useLocation();
    return (
        // React Router is not very specific with paths. 
        // Use Switch Component.
        // Note: The Navbar stays constant on all paths
        <div className="App">
            <GlobalStyle />
            <Nav />
            {/* Wrapping the Switch with Animate Presence */}
            {/* exitBeforeEnter says to wait until current component 
            is closed before animating the next component */}
            <AnimatePresence exitBeforeEnter>
                {/* location and pathname needed for Animate Presence */}
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <AboutUs />
                    </Route>
                    <Route path="/work" exact>
                        {/* Work route is exact to allow Movie Detail to load */}
                        <OurWork />
                    </Route>
                    <Route path="/work/:id">
                        {/* id is dynamic text */}
                        <MovieDetail />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;