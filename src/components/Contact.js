import React from 'react';
import Underline from "./reusable/Underline"
import { BsGeoAlt, BsEnvelope } from "react-icons/bs";
import location from '../assets/address.jpg'
import "../style/contact.scss"

const Contact = () => {
    return (
        <div id="contacts" className="contact-container">
             <div className="service-title-wrapper" data-aos='fade-left'>
                <h2 className="services-title">Contact</h2>
                <Underline />
                <p className="service-description">Get in touch with us in any of these locations</p>
            </div>
            <div className="contact-wrapper">
                <div className="contact-location" data-aos='fade-down-right'>
                    <div className="location-type-wrapper">
                        <BsGeoAlt className="type-icon" />
                        <div className="type-text-wrapper">
                            <h4>Location:</h4>
                            <p>31, Biada, Gaa akanbi, Ilorin, Kwara State, Nigeria.</p>
                        </div>
                    </div>
                    <div className="location-type-wrapper">
                        <BsEnvelope className="type-icon" />
                        <div className="type-text-wrapper">
                            <h4>Email:</h4>
                            <p><a>newcoretechnologies@gmail.com.</a></p>
                        </div>
                    </div>
                    <div className="location-type-wrapper">
                        <BsEnvelope className="type-icon" />
                        <div className="type-text-wrapper">
                            <h4>Call:</h4>
                            <p><a className="call-number">+234 708 7994 127,  &nbsp;&nbsp; +234 806 4054 305</a></p>
                        </div>
                    </div>
                    <div className="map-location"><img src={location} /></div>
                </div>
                <div className="contact-mailing-form" data-aos="zoom-in">
                    <div className="form-row">
                        <div className="half-section-form">
                            <label for="name" className="form-label">Your Name</label>
                            <input type="text" className="form-input"  name="fullname" required />
                        </div>
                        <div className="half-section-form">
                            <label for="name" className="form-label">Your Email</label>
                            <input type="email" type="email" className="form-input"  required=""/>
                        </div>
                    </div>
                    <div className="form-field">
                        <label className="form-label">Phone No.</label>
                        <input className="form-input" type="number" />
                    </div>
                    <div className="form-field">
                        <label className="form-label">Subject</label>
                        <input className="form-input" />
                    </div>
                    <div className="form-field">
                        <label className="form-label">Message</label>
                        <textarea className="form-input form-text-area"></textarea>
                    </div>
                    <a className="form-btn">Send Message</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;