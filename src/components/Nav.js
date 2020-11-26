// Navigation Section

import React from 'react';
// Styling Import
import styled from 'styled-components';
// Link Import to replace a tags
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link to="/" id="logo">Capture</Link></h1>
            <ul>
                <li><Link to="/">1. About Us</Link></li>
                <li><Link to="/work">2. Our Work</Link></li>
                <li><Link to="/contact">3. Contact Us</Link></li>
            </ul>
        </StyledNav>
    )
}

// Styled Component

// Note: StyledNav is used because "Nav" would conflict with component name
const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
        letter-spacing: 1px;
    }
    li {
       padding-left: 10rem;
       /* For line animations */
       position: relative;
    }
`;

export default Nav;