import React, {useEffect, useContext} from 'react';
import StateManager from '../context/stateManager'
import { FiChevronUp, FiChevronDown} from "react-icons/fi";
import illustrator from '../assets/ill2.png'
import '../style/reasons.scss';

const Reasons = () => {
    const {state, toggleDropDown} = useContext(StateManager)

    function handleDropDown(type){
        toggleDropDown(type)
    }

    return (
        <div className="reasons-container">
            <div className="reasons-texts" data-aos='fade-up' data-aos-once={true}>
                <h3 className="reason-title">Why Choose <strong>Us</strong></h3>
                <p className="reason-description">
                    {/* We are a genuinely customer-focused organization we provide 
                    highly-customized software and solutions which complements 
                    generic products that are superior to all others in all market. */}
                    We are the bridge that brings together people, technology and business.
                    With NewCore Technologies, you will find cost-efficient support, guidance 
                    and the inspiration you need to provide your business with a competitive advantages.
                </p>
                <div className="each-reason-container">
                {state.one != "each-reason-text" ? 
                        <FiChevronUp onClick={() =>handleDropDown("each-reason-text")} className="toggle-reason-text" /> : 
                        <FiChevronDown onClick={() =>handleDropDown("one")} className="toggle-reason-text" />
                    }
                    <p className="each-reason-header-text">
                        <span id="allowMe" className="reason-number">01 &nbsp;&nbsp;&nbsp;</span>
                        Protect your organization
                    </p>
                    <p data-aos-anchor="#allowMe" className={`${state.one}`}>Are you a small, medium or large entrepreneur? then protect / prevent your business from fraud, by integrate our latest technology monitoring system for figures and stocks' accountability.</p>
                </div>
                <div className="each-reason-container">
                    {state.two != "each-reason-text" ? 
                        <FiChevronUp onClick={() =>handleDropDown("each-reason-text")} className="toggle-reason-text" /> : 
                        <FiChevronDown onClick={() =>handleDropDown("two")} className="toggle-reason-text" />
                    }
                    <p className="each-reason-header-text">
                        <span className="reason-number">02 &nbsp;&nbsp;&nbsp;</span>
                        Increase numbers of genius in your institution
                    </p>
                    <p className={`${state.two}`}>Are you a primary, secondary or tertiary institution owner? then lets make learning easy, fast and acurate for your students, by integrating latest technology on educational develompent software.</p>
                </div>
                <div className="each-reason-container">
                {state.three != "each-reason-text" ? 
                        <FiChevronUp onClick={() =>handleDropDown("each-reason-text")} className="toggle-reason-text" /> : 
                        <FiChevronDown onClick={() =>handleDropDown("three")} className="toggle-reason-text" />
                    }
                    <p className="each-reason-header-text">
                        <span className="reason-number">03 &nbsp;&nbsp;&nbsp;</span>
                        Safeguard your family, loved ones and properties
                    </p>
                    <p className={`${state.three}`}>Are you a family or properties owner? then protect the precious surround you with our surveillance gadgets and software.</p>
                </div>
            </div>
            <div className="reasons-illustrator" data-aos='zoom-in' data-aos-once={true}>
                <img src={illustrator} className="illustrator-icon" />
            </div>
        </div>
    );
}

export default Reasons;