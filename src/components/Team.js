import React, {useEffect} from 'react';
import { FaCertificate } from "react-icons/fa";
import { BsFiles } from "react-icons/bs";
import Underline from "./reusable/Underline"
import member1 from "../assets/rhydhur6.png"
import member2 from "../assets/moh2.png"
import member3 from "../assets/moh1.png"
import member4 from "../assets/newton2.png"
import member5 from "../assets/lakadir2.png"
import '../style/team.scss'

const Team = () => {

    return (
        <div id="FAQ" className="team-container">
            <div className="service-title-wrapper" data-aos='zoom-in'>
                <h2 id="" className="services-title">Our Team</h2>
                <Underline />
                <p className="service-description">Here are some of our members</p>
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
                                <FaCertificate className="age-icon" />
                                <p className="member-experience">B.ENG., GMNSE</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-member-overlay"></div>
                    <img src={member4} className="team-member-image"/>
                </div>
                <div className="team-member" data-aos='fade-down'>
                    <div className="team-member-details">
                        <h4 className="member-name">Ridwan Kolawole</h4>
                        <p className="member-role">Chief Technology Officer</p>
                        <div className="member-info-wrapper">
                            <div className="member-info-1">
                                <BsFiles className="age-icon" />
                                <p className="member-experience">4 Years of experience</p>
                            </div>
                            <div className="member-info-2">
                                <FaCertificate className="age-icon" />
                                <p className="member-experience">B.ENG., GMNSE</p>
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
                                <FaCertificate className="age-icon" />
                                <p className="member-experience">B.ENG., GMNSE</p>
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
                                <FaCertificate className="age-icon" />
                                <p className="member-experience">B.ENG., GMNSE</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-member-overlay"></div>
                    <img src={member3} className="team-member-image" />
                </div>
                <div className="team-member hide-member" data-aos='fade-up'>
                    <div className="team-member-details">
                        <h4 className="member-name">Lakadir AbdulAzeez</h4>
                        <p className="member-role">Technology Expert</p>
                        <div className="member-info-wrapper">
                            <div className="member-info-1">
                                <BsFiles className="age-icon" />
                                <p className="member-experience">5 Years of experience</p>
                            </div>
                            <div className="member-info-2">
                                <FaCertificate className="age-icon" />
                                <p className="member-experience">B.ENG., GMNSE</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-member-overlay"></div>
                    <img src={member5} className="team-member-image" />
                </div>
            </div>
        </div>
    );
}

export default Team;