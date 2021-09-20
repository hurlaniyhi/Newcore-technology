import { useState } from 'react';
import '../style/styles.scss';
import logo from '../assets/newcoreLogo.png'
import illustrator1 from '../assets/illustrator1.png'
import { FaRegPlayCircle } from 'react-icons/fa';
import About from "./About"
import Reasons from './Reasons';
import Underline from "./reusable/Underline"

const Home = () => {
  const [activeLink, setActiveLink] = useState({home: "active-link", about: "", services: "", Projects: "", FAQ: "", contact: ""})

  function handleLink(e){
    console.log({name: e.target.name})
    e.target.href=`#${e.target.name}`
    setActiveLink({home: "", about: "", services: "", Projects: "", FAQ: "", contact: "", [e.target.name]: "active-link"})
  }

  function handleNavLink(data){
    if(data === "checkbox"){
      if(!document.querySelector(".navigation__checkbox").checked){
        console.log(document.querySelector(".navigation__checkbox").checked)
        document.querySelector(".main-container").className = "main-container main-container-tweak"
      }
      else{
        document.querySelector(".main-container").className = "main-container"
      }
    }
    else{
      document.querySelector(".navigation__checkbox").checked = false
      document.querySelector(".main-container").className = "main-container"
    }
  }

  return (
    <div className="main-container">
      
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
      <label for="navi-toggle" onClick={() => handleNavLink("checkbox")} class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__side-bar-wrapper">
        <div className="side-bar-container">
          <a className="side-bar-items" href="#home" onClick={() => handleNavLink("")} name="home">Home</a>
          <a className="side-bar-items" href="#about" onClick={() => handleNavLink("")} name="about=">About</a>
          <a className="side-bar-items" href="#services" onClick={() => handleNavLink("")} name="services">Services</a>
          <a className="side-bar-items" href="#projects" onClick={() => handleNavLink("")} name="projects">Projects</a>
          <a className="side-bar-items" href="#FAQ" onClick={() => handleNavLink("")} name="FAQ">FAQs</a>
          <a className="side-bar-items" href="#contacts" onClick={() => handleNavLink("")} name="contacts">Contact</a>
        </div>
      </div>
      <img src={logo} className="logo-style"/>
      <div className="navbar-container">
        <div className="nav-item-container">
          <a onClick={handleLink} className={`nav-item ${activeLink.home}`} name="home">Home</a>
          <a onClick={handleLink} className={`nav-item ${activeLink.about}`} name="about">About</a>
          <a onClick={handleLink} className={`nav-item ${activeLink.services}`} name="services">Services</a>
          <a onClick={handleLink} className={`nav-item ${activeLink.projects}`} name="projects">Projects</a>
          <a onClick={handleLink} className={`nav-item ${activeLink.FAQ}`} name="FAQ">FAQs</a>
          <a onClick={handleLink} className={`nav-item ${activeLink.contacts}`} name="contacts">Contact</a>
        </div>
      </div>
      <div className="interface-container">
        <div className="interface-text-container">
          <p className="intro-text_1">Addressing your problem digitally...</p>
          <p className="intro-text_2">We are team of talented engineers providing solutions to your problems</p>
          <div className="getStarted-container">
            <a className="getStarted-button">Get started</a>
            <FaRegPlayCircle className="play-icon" />
            <p className="play-text">Watch Video</p>
          </div>
        </div>
        <div className="interface-image-container">
          <img src={illustrator1} className="illustrator1"/>
        </div>
      </div>
      
      <About />
      <Reasons />
    </div>
  )
}

export default Home;
