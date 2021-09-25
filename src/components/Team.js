import React, {useEffect} from 'react';
import { FaUser } from "react-icons/fa";
import { BsFiles } from "react-icons/bs";
import Underline from "./reusable/Underline"
import member1 from "../assets/image13.png"
import member2 from "../assets/image14.png"
import member3 from "../assets/image12.png"
import '../style/team.scss'

const Team = () => {

    // useEffect(()=>{
    //     const callback = function(entries){
    //         entries.forEach(entry =>{
    //             if(entry.isIntersecting){
    //                 console.log({ratio: entry.intersectionRatio})
    //                 if(entry.intersectionRatio >= 0){
    //                     document.querySelector(".team-member-image").classList.add("move-from-bottom")
    //                 }
    //             }
    //             else{
    //                 document.querySelector(".team-member-image").classList.remove("move-from-bottom")
    //             }
    //         })
    //     }

    //     let observer = new IntersectionObserver(callback)
    //     const target = document.querySelectorAll(".team-member")
    //     console.log(target)
    //     target.forEach(target=>{
    //         observer.observe(target)
    //     })

    //     return () => {
    //         observer = null;
    //     };
    // })

    return (
        <div className="team-container">
            <div className="service-title-wrapper" data-aos='zoom-in'>
                <h2 id="" className="services-title">Our Team</h2>
                <Underline />
                <p className="service-description">Here are some of our core members</p>
            </div>
            <div className="team-member-wrapper">
                <div className="team-member" data-aos='fade-down-right'>
                    <div className="team-member-details">
                        <h4 className="member-name">Yuusuf Idreez</h4>
                        <p className="member-role">Chief executive officer</p>
                        <div className="member-info-wrapper">
                            <div className="member-info-1">
                                <BsFiles className="age-icon" />
                                <p className="member-experience">3 Years of experience</p>
                            </div>
                            <div className="member-info-2">
                                <FaUser className="age-icon" />
                                <p className="member-experience">Age: 24 years </p>
                            </div>
                        </div>
                    </div>
                    <div className="team-member-overlay"></div>
                    <img src={member3} className="team-member-image"/>
                </div>
                <div className="team-member" data-aos='fade-down'>
                    <div className="team-member-details">
                        <h4 className="member-name">Ridwan Kolawole</h4>
                        <p className="member-role">Chief Technology Officer</p>
                        <div className="member-info-wrapper">
                            <div className="member-info-1">
                                <BsFiles className="age-icon" />
                                <p className="member-experience">3 Years of experience</p>
                            </div>
                            <div className="member-info-2">
                                <FaUser className="age-icon" />
                                <p className="member-experience">Age: 24 years </p>
                            </div>
                        </div>
                    </div>
                    <div className="team-member-overlay"></div>
                    <img src={member1} className="team-member-image" />
                </div>
                <div className="team-member" data-aos='fade-down-left'>
                    <div className="team-member-details">
                        <h4 className="member-name">Muhammad Bello</h4>
                        <p className="member-role">Managing Director</p>
                        <div className="member-info-wrapper">
                            <div className="member-info-1">
                                <BsFiles className="age-icon" />
                                <p className="member-experience">3 Years of experience</p>
                            </div>
                            <div className="member-info-2">
                                <FaUser className="age-icon" />
                                <p className="member-experience">Age: 24 years </p>
                            </div>
                        </div>
                    </div>
                    <div className="team-member-overlay"></div>
                    <img src={member2} className="team-member-image" />
                </div>
                <div className="team-member hide-member" data-aos='fade-up'>
                    <div className="team-member-details">
                        <h4 className="member-name">Ahmed Olaoye</h4>
                        <p className="member-role">Chairman</p>
                        <div className="member-info-wrapper">
                            <div className="member-info-1">
                                <BsFiles className="age-icon" />
                                <p className="member-experience">3 Years of experience</p>
                            </div>
                            <div className="member-info-2">
                                <FaUser className="age-icon" />
                                <p className="member-experience">Age: 24 years </p>
                            </div>
                        </div>
                    </div>
                    <div className="team-member-overlay"></div>
                    <img src={member2} className="team-member-image" />
                </div>
            </div>
        </div>
    );
}

export default Team;