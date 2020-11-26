// Part of the "About Us" page

import React from 'react';
// Styling Import
import styled from 'styled-components';

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>This is a test answer.</p>
                    <p>This is a test paragraph section that functions as an answer.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>This is a test answer.</p>
                    <p>This is a test paragraph section that functions as an answer.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>This is a test answer.</p>
                    <p>This is a test paragraph section that functions as an answer.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do you offer?</h4>
                <div className="answer">
                    <p>This is a test answer.</p>
                    <p>This is a test paragraph section that functions as an answer.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
}

const Faq = styled.div`
    min-height: 90vh;
    display: block;
    padding: 5rem 10rem;
    color: white;
    h2 {
       padding-bottom: 2rem;
       font-weight: lighter;
    }
    span {
        display: block;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;