import React from 'react';
import Underline from "./reusable/Underline"
import { BiLink, BiPlus } from "react-icons/bi";
import portfolio2 from '../assets/portfolio-2.jpg'
import portfolio3 from '../assets/portfolio-3.jpg'
import portfolio4 from '../assets/portfolio-4.jpg'
import portfolio5 from '../assets/portfolio-5.jpg'
import portfolio6 from '../assets/portfolio-6.jpg'
import portfolio7 from '../assets/portfolio-7.jpg'
import portfolio8 from '../assets/portfolio-8.jpg'
import portfolio9 from '../assets/portfolio-9.jpg'
import portfolio10 from '../assets/portfolio-4.jpg'
import '../style/projects.scss'

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="service-title-wrapper" data-aos='fade-up'>
                <h2 id="" className="services-title">Projects</h2>
                <Underline />
                <p className="service-description">Here are some of our projects that you can key in as an investor/partnership or request for bespoke software for your business</p>
            </div>
            <div className="projects-wrapper" data-aos='fade-up'>
                <div className="each-projects-wrapper">
                    <img src={portfolio2} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Smart Teaches</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <BiLink className="link-icon" />
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio3} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Smart Teaches</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <BiLink className="link-icon" />
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio4} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Smart Teaches</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <BiLink className="link-icon" />
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio5} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Smart Teaches</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <BiLink className="link-icon" />
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio6} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Smart Teaches</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <BiLink className="link-icon" />
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio7} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Smart Teaches</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <BiLink className="link-icon" />
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio8} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Smart Teaches</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <BiLink className="link-icon" />
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio9} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Smart Teaches</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <BiLink className="link-icon" />
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio10} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Smart Teaches</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <BiLink className="link-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;