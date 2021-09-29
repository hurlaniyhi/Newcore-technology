import React, {useState} from 'react';
import Underline from "./reusable/Underline"
import { BsGeoAlt, BsEnvelope } from "react-icons/bs";
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
import location from '../assets/address.jpg'
import "../style/contact.scss"
import axios from 'axios';

const Contact = () => {

    const [emailData, setEmailData] = useState({isRequest: false})

    function handleData(e){
        setEmailData({...emailData, [e.target.name]: e.target.value})
    }

    async function handleEmail(){
        
        if(!emailData.name || !emailData.emailAddress || !emailData.phoneNumber || !emailData.mailContent || !emailData.mailSubject){
            return alert("kindly fill all required information")
        }

        if(String(emailData.phoneNumber).length != 11){
            return alert("Invalid phone number")
        }
        if(!emailData.emailAddress.includes("@")){
            return alert("Invalid email address")
        }
        const payload = {
            name: emailData.name,
            emailAddress: emailData.emailAddress,
            phoneNumber: emailData.phoneNumber,
            mailSubject: emailData.mailSubject,
            mailContent: emailData.mailContent
        }

        setEmailData({...emailData, isRequest: true})
       
        console.log({payload})

        axios.post("https://halal-school.herokuapp.com/newcoretechnology-mail", payload)
        .then(response => {
            setEmailData({name: "", emailAddress: "", phoneNumber: "", mailSubject: "", mailContent: "", isRequest: false})
            console.log({response: response.data})
           return alert(response.data.message)
        })
        .catch(err=>{
            setEmailData({name: "", emailAddress: "", phoneNumber: "", mailSubject: "", mailContent: "", isRequest: false})
            console.log({error: err})
           return alert("Something went wrong - kindly check your network")
        })
    }

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
                            <input type="text" value={emailData.name} className="form-input"  name="name" onChange={handleData} required />
                        </div>
                        <div className="half-section-form">
                            <label for="name" className="form-label">Your Email</label>
                            <input type="email" value={emailData.emailAddress} type="email" name="emailAddress" className="form-input" onChange={handleData}  required/>
                        </div>
                    </div>
                    <div className="form-field">
                        <label className="form-label">Phone No.</label>
                        <input className="form-input" value={emailData.phoneNumber} name="phoneNumber" type="number" onChange={handleData} required />
                    </div>
                    <div className="form-field">
                        <label className="form-label">Subject</label>
                        <input className="form-input" value={emailData.mailSubject} name="mailSubject" onChange={handleData} required/>
                    </div>
                    <div className="form-field">
                        <label className="form-label">Message</label>
                        <textarea className="form-input form-text-area" value={emailData.mailContent} name="mailContent" onChange={handleData} required></textarea>
                    </div>
                    <a className="form-btn">
                        {
                            emailData.isRequest ?  <Dots /> :  <span onClick={handleEmail}>Send Message</span>
                        }
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;