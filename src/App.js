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
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        // React Router is not very specific with paths. 
        // Use Switch Component.
        // Note: The Navbar stays constant on all paths
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Switch>
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
        </div>
    );
}

export default App;