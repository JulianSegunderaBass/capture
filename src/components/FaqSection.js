// Part of the "About Us" page

import React from 'react';

const FaqSection = () => {
    return (
        <div className="faq">
            <h2>Any Questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>This is a test answer.</p>
                    <p>This is a test paragraph section that functions as an answer.</p>
                </div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>This is a test answer.</p>
                    <p>This is a test paragraph section that functions as an answer.</p>
                </div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>This is a test answer.</p>
                    <p>This is a test paragraph section that functions as an answer.</p>
                </div>
            </div>
            <div className="question">
                <h4>What products do you offer?</h4>
                <div className="answer">
                    <p>This is a test answer.</p>
                    <p>This is a test paragraph section that functions as an answer.</p>
                </div>
            </div>
        </div>
    )
}

export default FaqSection;