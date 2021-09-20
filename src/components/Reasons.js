import React from 'react';
import illustrator from '../assets/illustrator1.png'
import '../style/reasons.scss';

const Reasons = () => {
    return (
        <div className="reasons-container">
            <div className="reasons-texts">
                <p className="reason-title">Why Choose <span className="style-us">Us</span></p>
                <p className="reason-description">
                    We are a genuinely customer-focused organization we provide 
                    highly-customized software and solutions which complements 
                    generic products that are superior to all others in all market.
                </p>
            </div>
            <div className="reasons-illustrator">
                <img src={illustrator} className="illustrator-icon" />
            </div>
        </div>
    );
}

export default Reasons;