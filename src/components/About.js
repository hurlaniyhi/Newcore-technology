import {useEffect} from 'react'
import '../style/about.scss';
import Underline from "./reusable/Underline"
import { FaCheck } from 'react-icons/fa';

const About = () => {

    return (
        <div id="about" className="about-container">
            <div className="about-us-wrapper" data-aos='fade-up' data-aos-once={true}>
                <h2 id="about-title" className="about-title">About Us</h2>
                <Underline />
                <div className="about-content-container">
                    <div className="about-text-block_1">
                        <p className="about-text">
                            Newcore Technologies is an operating organization. We are one of 
                            Nigeria’s fastest-growing information technology service and software
                            development companies, utilizing an extensive and robust indigenous 
                            infrastructure to provide bespoke software solutions to clients and partners worldwide. 
                            We are a team of seasoned experts dedicated to our craft of choice.
                        </p>
                        <div className="about-text-list">
                            <FaCheck className="bullet-check" />
                            <p className="list-text">
                                Newcore Technologies is an operating organization. We are one of 
                                Nigeria’s fastest-growing information technology service and software
                            </p>
                        </div>
                        <div className="about-text-list">
                            <FaCheck className="bullet-check" />
                            <p className="list-text">
                                Newcore Technologies is an operating organization. We are one of 
                                Nigeria’s fastest-growing information technology service and software
                            </p>
                        </div>
                    </div>
                    <div className="about-text-block_2">
                        <p className="about-text">
                            We nurture our creative potentials towards transforming the 
                            way of running organizations in an easier and accurate way 
                            for customers and staffs. We believe in using program as a 
                            tool for business development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;