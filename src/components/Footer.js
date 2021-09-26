import React from 'react';
import { FaChevronRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import logo from '../assets/newcoreLogo.png';
import "../style/footer.scss"

const Footer = () =>{
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="each-footer-info">
                    <img src={logo} className="footer-image" />
                    <p>31, Biada, Gaa akanbi, Ilorin, Kwara State, Nigeria.</p>
                    <p><strong>Email: </strong><span>newcoretechnologies@gmail.com</span></p>
                    <p><strong>Phone: </strong><span>+234 708 7994 127</span></p>
                </div>
                <div className="each-footer-info useful-link">
                    <h3>Useful Links</h3>
                    <div className="footer-list-wrapper">
                        <div className="footer-list">
                            <FaChevronRight className="footer-icon" />
                            <a href="#home" className="footer-list-text">Home</a>
                        </div>
                        <div className="footer-list">
                            <FaChevronRight className="footer-icon" />
                            <a href="#about" className="footer-list-text">About us</a>
                        </div>
                        <div className="footer-list">
                            <FaChevronRight className="footer-icon" />
                            <a href="#services" className="footer-list-text">Services</a>
                        </div>
                        <div className="footer-list">
                            <FaChevronRight className="footer-icon" />
                            <a href="#projects" className="footer-list-text">Projects</a>
                        </div>
                        <div className="footer-list">
                            <FaChevronRight className="footer-icon" />
                            <a className="footer-list-text">Privacy policy</a>
                        </div>
                    </div>
                </div>
                <div className="each-footer-info useful-link">
                    <h3>Useful Links</h3>
                    <div className="footer-list-wrapper">
                        <div className="footer-list">
                            <FaChevronRight className="footer-icon" />
                            <a className="footer-list-text">Mobile Development</a>
                        </div>
                        <div className="footer-list">
                            <FaChevronRight className="footer-icon" />
                            <a className="footer-list-text">Web Development</a>
                        </div>
                        <div className="footer-list">
                            <FaChevronRight className="footer-icon" />
                            <a className="footer-list-text">Electronics</a>
                        </div>
                        <div className="footer-list">
                            <FaChevronRight className="footer-icon" />
                            <a className="footer-list-text">Product Management</a>
                        </div>
                        <div className="footer-list">
                            <FaChevronRight className="footer-icon" />
                            <a className="footer-list-text">Graphic design</a>
                        </div>
                    </div>
                </div>
                <div className="each-footer-info useful-link">
                    <h3>Our Social Network</h3>
                    <p className="footer-list-text color-black">Follow us on social media</p>
                    <div className="footer-list link-icons-group">
                        <FaFacebook className="link-icons" />
                        <FaInstagram className="link-icons instagram" />
                        <FaLinkedin className="link-icons linkedin" />
                        <FaTwitter className="link-icons twitter" />
                    </div>
                </div>
            </div>
            <div className="footer-bar">
                <p> © Copyright <script>document.write(new Date().getFullYear());</script>2021 <strong><span>Newcore Technologies</span></strong> All Rights Reserved</p>
                <p>Design by <span>Ridwan Kolawole</span></p>
            </div>
        </div>
    );
}

export default Footer;