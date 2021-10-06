import React, { useContext, useEffect } from 'react';
import StateManager from '../context/stateManager'
import '../style/styles.scss';
import logo from '../assets/newcoreLogo.png'
import sideBarImage from '../assets/side-bar-img.png'
import illustrator1 from '../assets/ills2.png'
import { FaRegPlayCircle, FaReact, FaGoogle, FaNodeJs, FaCogs, FaRss, FaCode } from 'react-icons/fa';

const FrontView = () => {

    const {state, navItemColor} = useContext(StateManager)

    useEffect(()=>{
        const callback = function(entries){
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    console.log({ratio: entry.intersectionRatio})
                    if(entry.intersectionRatio >= 0){
                        document.querySelector(".navbar-container").classList.remove("navbar-container-bckgrnd2")
                    }
                }
                else{
                    document.querySelector(".navbar-container").classList.add("navbar-container-bckgrnd2")
                }
            })
        }

        let observer = new IntersectionObserver(callback)
        const target = document.querySelectorAll(".toggle-nav-bkg")
        console.log(target)
        target.forEach(target=>{
            observer.observe(target)
        })

        return () => {
            observer = null;
        };
    })

    async function handleLink(e){
        await navItemColor(e.target.name)
        //console.log({state})
    }

    function removeSideBar(){ 
        document.body.style.overflow = "auto"
        document.querySelector(".navigation__checkbox").checked = false
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
            document.body.style.overflow = "auto"
            document.querySelector(".navigation__checkbox").checked = false
            document.querySelector(".main-container").className = "main-container"
        }
      }

     function handleBodyStyle(e){
         if(e.target.checked){
             document.body.style.overflow = "hidden";
             console.log("checked")
         }
         else{
             document.body.style.overflow = "auto"
         }
     }

    return (
        <div className="main-container">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle" onChange={handleBodyStyle} />
            <label for="navi-toggle" onClick={() => handleNavLink("checkbox")} class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__side-bar-wrapper" onClick={removeSideBar}>
            </div>
            <div className="side-bar-container">
                    <a href="#home" className="side-bar-items" href="#home" onClick={() => handleNavLink("")} name="home">Home</a>
                    <a href="#about" className="side-bar-items" href="#about" onClick={() => handleNavLink("")} name="about=">About</a>
                    <a href="#services" className="side-bar-items" href="#services" onClick={() => handleNavLink("")} name="services">Services</a>
                    <a href="#projects" className="side-bar-items" href="#projects" onClick={() => handleNavLink("")} name="projects">Projects</a>
                    <a href="#FAQ" className="side-bar-items" href="#FAQ" onClick={() => handleNavLink("")} name="FAQ">Team</a>
                    <a href="#contacts" className="side-bar-items" href="#contacts" onClick={() => handleNavLink("")} name="contacts">Contact</a>
                    <img src={sideBarImage} className="side-bar-img" />
                </div>
            <img src={logo} className="logo-style"/>
            <div className="navbar-container">
                <div className="nav-item-container">
                    <a href="#home" onClick={handleLink} className={`nav-item ${state.home}`} name="home">Home</a>
                    <a href="#about" onClick={handleLink} className={`nav-item ${state.about}`} name="about">About</a>
                    <a href="#services" onClick={handleLink} className={`nav-item ${state.services}`} name="services">Services</a>
                    <a href="#projects" onClick={handleLink} className={`nav-item ${state.projects}`} name="projects">Projects</a>
                    <a href="#FAQ" onClick={handleLink} className={`nav-item ${state.FAQ}`} name="FAQ">Team</a>
                    <a href="#contacts" onClick={handleLink} className={`nav-item ${state.contacts}`} name="contacts">Contact</a>
                </div>
            </div>
            <div id="home" className="interface-container">
                <p className="toggle-nav-bkg"></p>
                <div className="interface-text-container">
                    <h1 className="intro-text_1">
                        {/* Addressing your problem digitally... */}
                        {/* we are the solution and not the pollution */}
                        Digital delivery is the way the future works...
                    </h1>
                    <h2 className="intro-text_2">We are team of talented engineers providing solutions to your problems</h2>
                    <div className="getStarted-container">
                        <a href="#contacts" className="getStarted-button">Get started</a>
                        <FaRegPlayCircle className="play-icon" />
                        <p className="play-text">Watch Video</p>
                    </div>
                </div>
                <div className="interface-image-container">
                    <img src={illustrator1} className="illustrator1"/>
                </div>
            </div>
            <div className="technology-icons">
                <FaReact className="each-tech-icon" />
                <FaGoogle className="each-tech-icon" />
                <FaNodeJs className="each-tech-icon" />
                <FaCogs className="each-tech-icon" />
                <FaRss className="each-tech-icon" />
                <FaCode className="each-tech-icon" />
            </div>
        </div>
    );
}

export default FrontView;