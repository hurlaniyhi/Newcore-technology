import React from 'react';
import Underline from "./reusable/Underline"
import { FaCode, FaBroadcastTower, FaInfinity, FaVideo, FaKey} from "react-icons/fa";
import { BiCloudDownload} from "react-icons/bi";
import { FiSettings} from "react-icons/fi";
import { GiBarbedSun} from "react-icons/gi";
import '../style/services.scss'

const Services = () => {
    return (
        <div className="services-container">
            <div className="service-title-wrapper" data-aos='fade-up'>
                <h2 id="" className="services-title">Services</h2>
                <Underline />
                <p className="service-description">We bestow these services professionally, give us a trial and get convinced</p>
            </div>

            <div className="each-service-container">
                <div className="service-wrapper" data-aos='zoom-in'>
                    <FaCode className="code-icon" />
                    <h4 className="service-type">Web design / Development</h4>
                    <p className="service-info-text">
                        We build responsive web site / engine that detect the visitor's screen size
                        &amp; orientation and change the layout accordingly with flexible layouts,
                        images, application and database for your business or institutions.
                    </p>
                </div>
                <div className="service-wrapper" data-aos='zoom-in'>
                    <BiCloudDownload className="code-icon" />
                    <h4 className="service-type">Networking</h4>
                    <p className="service-info-text">
                        We connect your organization computers wire or wireless, so that you can share common 
                        devices, functions, and features including servers, clients, 
                        transmission media, shared data, shared printers and other hardware and software 
                        resources.
                    </p>
                </div>
                <div className="service-wrapper" data-aos='zoom-in'>
                    <FiSettings className="code-icon" />
                    <h4 className="service-type">Electronics</h4>
                    <p className="service-info-text">
                        Let's us customize your electronic, circuits and devices. we can build you
                         typical custom design that has unique product features or operational 
                         requirements for use in industrial, medical, IoT, or home applications.
                    </p>
                </div>
                <div className="service-wrapper" data-aos='zoom-in'>
                    <GiBarbedSun className="code-icon" />
                    <h4 className="service-type">Solar power solutions</h4>
                    <p className="service-info-text">
                        Increase energy efficiency with reliable and optimal power supply. Integrate our 
                        unique solar system that provide 24/7 power supply with low cost and 
                        effective for your industrial, home and offices.
                    </p>
                </div>
                <div className="service-wrapper" data-aos='zoom-in'>
                    <FaBroadcastTower className="code-icon" />
                    <h4 className="service-type">Digital Marketing</h4>
                    <p className="service-info-text">
                        Our marketing strategies involves  the use  of  online  channels  and  methods  that 
                        enable  businesses  and  organisations to  monitor  the  success  of  their  marketing  campaigns, 
                        often we lets our clients understand what does and doesn’t work.
                    </p>
                </div>
                <div className="service-wrapper" data-aos='zoom-in'>
                    <FaInfinity className="code-icon" />
                    <h4 className="service-type">Branding</h4>
                    <p className="service-info-text">
                        Creates a unique name, symbol or design that is easily identifiable as belonging to your organization. This helps to identify your product 
			            and distinguish it from other products &amp; services. Branding is very important in any organization, lets create you a unique and professional brand.
                    </p>
                </div>
                <div className="service-wrapper" data-aos='zoom-in'>
                    <FaVideo className="code-icon" />
                    <h4 className="service-type">Digital Security</h4>
                    <p className="service-info-text">
                        Level of insecurity in our country is anoying these days the questions is, how can I protect my precious digitally? We can install
			            tracking device on your precious (family, loved ones and properties) in other to  help our security agencies, to retrieve them ontime.
                    </p>
                </div>
                <div className="service-wrapper" data-aos='zoom-in'>
                    <FaKey className="code-icon" />
                    <h4 className="service-type">IT Consultancy</h4>
                    <p className="service-info-text">
                        We provide external analysts and evaluate a company's IT systems to help you meet your business objectives. Our primary duties include 
			            analyzing and diagnosing your company's IT infrastructure, understanding your business needs, designing and implementing a technology solution.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;