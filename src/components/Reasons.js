import React, {useEffect, useContext} from 'react';
import StateManager from '../context/stateManager'
import { FiChevronUp, FiChevronDown} from "react-icons/fi";
import illustrator from '../assets/illustrator1.png'
import '../style/reasons.scss';

const Reasons = () => {
    const {state, toggleDropDown} = useContext(StateManager)

    useEffect(()=>{
        const callback = function(entries){
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    if(entry.intersectionRatio >= 0){
                        document.querySelector(".reasons-texts").classList.add("move-from-bottom")
                        document.querySelector(".reasons-illustrator").classList.add("scale-from-down")
                    }
                }
                else{
                    document.querySelector(".reasons-texts").classList.remove("move-from-bottom")
                    document.querySelector(".reasons-illustrator").classList.remove("scale-from-down")
                }
            })
        }

        let observer = new IntersectionObserver(callback)
        const target = document.querySelectorAll(".reason-title")
        console.log(target)
        target.forEach(target=>{
            observer.observe(target)
        })

        return () => {
            observer = null;
        };
    })

    function handleDropDown(type){
        toggleDropDown(type)
    }

    return (
        <div className="reasons-container">
            <div className="reasons-texts">
                <p className="reason-title">Why Choose <span className="style-us">Us</span></p>
                <p className="reason-description">
                    We are a genuinely customer-focused organization we provide 
                    highly-customized software and solutions which complements 
                    generic products that are superior to all others in all market.
                </p>
                <div className="each-reason-container">
                {state.one != "each-reason-text" ? 
                        <FiChevronUp onClick={() =>handleDropDown("each-reason-text")} className="toggle-reason-text" /> : 
                        <FiChevronDown onClick={() =>handleDropDown("one")} className="toggle-reason-text" />
                    }
                    <p className="each-reason-header-text">
                        <span className="reason-number">01 &nbsp;&nbsp;&nbsp;</span>
                        Protect your organization
                    </p>
                    <p className={`${state.one}`}>jksjksajkkjsajja</p>
                </div>
                <div className="each-reason-container">
                    {state.two != "each-reason-text" ? 
                        <FiChevronUp onClick={() =>handleDropDown("each-reason-text")} className="toggle-reason-text" /> : 
                        <FiChevronDown onClick={() =>handleDropDown("two")} className="toggle-reason-text" />
                    }
                    <p className="each-reason-header-text">
                        <span className="reason-number">01 &nbsp;&nbsp;&nbsp;</span>
                        Protect your organization
                    </p>
                    <p className={`${state.two}`}>jksjksajkkjsajja</p>
                </div>
                <div className="each-reason-container">
                {state.three != "each-reason-text" ? 
                        <FiChevronUp onClick={() =>handleDropDown("each-reason-text")} className="toggle-reason-text" /> : 
                        <FiChevronDown onClick={() =>handleDropDown("three")} className="toggle-reason-text" />
                    }
                    <p className="each-reason-header-text">
                        <span className="reason-number">01 &nbsp;&nbsp;&nbsp;</span>
                        Protect your organization
                    </p>
                    <p className={`${state.three}`}>jksjksajkkjsajja</p>
                </div>
            </div>
            <div className="reasons-illustrator">
                <img src={illustrator} className="illustrator-icon" />
            </div>
        </div>
    );
}

export default Reasons;