import React from 'react';
import Underline from "./reusable/Underline"
import { BiLink, BiPlus } from "react-icons/bi";
import portfolio2 from '../assets/vsprout.png'
import portfolio3 from '../assets/managerApp.png'
import portfolio4 from '../assets/countryInfoImg.png'
import portfolio5 from '../assets/natour.png'
import portfolio6 from '../assets/portfolio-6.jpg'
import portfolio7 from '../assets/tradeAround.png'
import portfolio8 from '../assets/portfolio-8.jpg'
import portfolio9 from '../assets/cbt.png'
import portfolio10 from '../assets/portfolio-5.jpg'
import portfolio11 from '../assets/rhymes.jpg'
import portfolio12 from '../assets/shopwyse.jpg'
import portfolio13 from '../assets/thinklex.jpg'
import '../style/projects.scss'

const Projects = () => {
    return (
        <div id="projects" className="projects-container">
            <div className="service-title-wrapper" data-aos='fade-up'>
                <h2 id="" className="services-title">Projects</h2>
                <Underline />
                <p className="service-description">Here are some of our projects that you can key in as an investor/partnership or request for bespoke software for your business</p>
            </div>
            <div className="projects-wrapper" data-aos='fade-up'>
                <div className="each-projects-wrapper">
                    <img src={portfolio2} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">School Portal</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <a href="https://virtuous-sprout.herokuapp.com" target="_blank" rel="noopener noreferrer"><BiLink className="link-icon" /></a>
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio3} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Staff Manager</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <a href="https://check-d-deck.herokuapp.com" target="_blank" rel="noopener noreferrer"><BiLink className="link-icon" /></a>
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio4} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Go Country</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <a href="https://countrydet.netlify.app/" target="_blank" rel="noopener noreferrer"><BiLink className="link-icon" /></a>
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio5} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Tour and Smile</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <a href="https://tourandsmile.herokuapp.com" target="_blank" rel="noopener noreferrer"><BiLink className="link-icon" /></a>
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio6} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Ride Easily</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <BiLink className="link-icon" />
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio7} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">TradeAround</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <a href="https://buymore.netlify.app/" target="_blank" rel="noopener noreferrer"><BiLink className="link-icon" /></a>
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio8} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Clean Up</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <BiLink className="link-icon" />
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio9} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">CBT Site</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <a href="https://cbtquiz.netlify.app/" target="_blank" rel="noopener noreferrer"><BiLink className="link-icon" /></a>
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio10} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Savetify</h4>
                        <p className="project-info-text" >Web App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <BiLink className="link-icon" />
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio11} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Rhymes</h4>
                        <p className="project-info-text" >Mobile App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <a href="https://drive.google.com/file/d/1pRg9vZrelncG5n_0UzjVESI2TWzllaeH/view?usp=sharing" target="_blank" rel="noopener noreferrer"><BiLink className="link-icon" /></a>
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio12} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Shopwyse</h4>
                        <p className="project-info-text" >Mobile App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <a href="https://drive.google.com/file/d/1KQqhHzfJttZCk23h_-BqibATsFUXthpr/view?usp=sharing" target="_blank" rel="noopener noreferrer"><BiLink className="link-icon" /></a>
                    </div>
                </div>
                <div className="each-projects-wrapper">
                    <img src={portfolio13} className="project-image" />
                    <div className="project-info">
                        <h4 className="project-info-title">Thinklex</h4>
                        <p className="project-info-text" >Mobile App.</p>
                        <BiPlus className="link-icon plus-icon" />
                        <a href="https://drive.google.com/file/d/1KRUZLoBuwCXuVtVi5oxua56ho2KLxck0/view?usp=sharing" target="_blank" rel="noopener noreferrer"><BiLink className="link-icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;