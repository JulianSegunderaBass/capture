// * For each individual movie's details
// * Includes an Award component with some styling
// ? As opposed to manually-created components per movie, this dynamic
// ? component renders with the data that is passed in via the url

import React, { useState, useEffect } from 'react';
// Import Styling
import styled from 'styled-components';
// Use History from React Router Dom
import { useHistory } from 'react-router-dom';
// Importing the movie state data
import { MovieState } from '../movieState';
// Importing Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animate';

const MovieDetail = () => {
    // History gives us information on our current location
    const history = useHistory();
    // Saving the specific path
    const url = history.location.pathname;
    
    // * State
    // The whole range of movies from movieState.js
    const [movies, setMovies] = useState(MovieState);
    // Extracting the current movie based on the url
    const [movie, setMovie] = useState(null);

    // * Use Effect runs as soon as the component mounts
    useEffect(() => {
        // Filtering through the list of movies
        // Finds the movie with the same url as const url
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        // We use array indexing because an array of an object is returned
        setMovie(currentMovie[0]);
    // Run whenever the movie list or url changes
    }, [movies, url]);

    return (
        <>
            {/* Only render content when the current movie data is available */}
            {movie && (
                <Details
                    variants={pageAnimation} 
                    initial="hidden" 
                    animate="show"
                    exit="exit"
                >
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="Main Movie Image" />
                    </HeadLine>
                    <Awards>
                        {/* Render an award component for each award in the awards array */}
                        {/* A key is always needed when mapping */}
                        {movie.awards.map((award) => (
                            <Award 
                                title={award.title} 
                                description={award.description} 
                                key={award.title} 
                            />
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="Secondary Movie Image" />
                    </ImageDisplay>
                </Details>
            )}
        </>
    )
}

// * Styled Component
// * Using Framer Motion with Details
const Details = styled(motion.div)`
    color: white;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    /* Relative so we can move its children */
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;

// AwardStyle is used to prevent clashing with Award component
const AwardStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0rem;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

// * Award Component which takes props from the mapping above
const Award = ({ title, description }) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default MovieDetail;