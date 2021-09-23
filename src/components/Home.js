import { useContext, useEffect } from 'react';
import StateManager from '../context/stateManager'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/styles.scss';
import logo from '../assets/newcoreLogo.png'
import illustrator1 from '../assets/illustrator1.png'
import { FaRegPlayCircle } from 'react-icons/fa';
import About from "./About"
import Reasons from './Reasons';
import Skills from './Skills'
import Services from './Services'
//import Underline from "./reusable/Underline"

const Home = () => {
  const {state, navItemColor} = useContext(StateManager)

  useEffect(() =>{
    AOS.init({
      duration: 800,
      delay: 100,
      easing: 'linear'
    })
  }, [])

  async function handleLink(e){
    await navItemColor(e.target.name)
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
          <a href="#home" className="side-bar-items" href="#home" onClick={() => handleNavLink("")} name="home">Home</a>
          <a href="#about" className="side-bar-items" href="#about" onClick={() => handleNavLink("")} name="about=">About</a>
          <a href="#services" className="side-bar-items" href="#services" onClick={() => handleNavLink("")} name="services">Services</a>
          <a href="#projects" className="side-bar-items" href="#projects" onClick={() => handleNavLink("")} name="projects">Projects</a>
          <a href="#FAQ" className="side-bar-items" href="#FAQ" onClick={() => handleNavLink("")} name="FAQ">FAQs</a>
          <a href="#contacts" className="side-bar-items" href="#contacts" onClick={() => handleNavLink("")} name="contacts">Contact</a>
        </div>
      </div>
      <img src={logo} className="logo-style"/>
      <div className="navbar-container">
        <div className="nav-item-container">
          <a href="#home" onClick={handleLink} className={`nav-item ${state.home}`} name="home">Home</a>
          <a href="#about" onClick={handleLink} className={`nav-item ${state.about}`} name="about">About</a>
          <a href="#services" onClick={handleLink} className={`nav-item ${state.services}`} name="services">Services</a>
          <a href="#projects" onClick={handleLink} className={`nav-item ${state.projects}`} name="projects">Projects</a>
          <a href="#FAQ" onClick={handleLink} className={`nav-item ${state.FAQ}`} name="FAQ">FAQs</a>
          <a href="#contacts" onClick={handleLink} className={`nav-item ${state.contacts}`} name="contacts">Contact</a>
        </div>
      </div>
      <div className="interface-container">
        <div className="interface-text-container">
          <h1 className="intro-text_1">Addressing your problem digitally...</h1>
          <h2 className="intro-text_2">We are team of talented engineers providing solutions to your problems</h2>
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
      <Skills />
      <Services />
    </div>
  )
}

export default Home;
