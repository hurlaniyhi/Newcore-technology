import React,{useEffect} from 'react';
import skillsIllustrator from '../assets/skills.png'
import '../style/skills.scss'

const Skills = () => {

    let [webDesign, electronics, branding, consultancy] = ["95%", "74%", "98%", "56%"]

    useEffect(()=>{
        const callback = function(entries){
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    console.log({ratio: entry.intersectionRatio})
                    if(entry.intersectionRatio >= 0){
                        document.querySelector(".bar1").classList.add("show-level1")
                        document.querySelector(".bar2").classList.add("show-level2")
                        document.querySelector(".bar3").classList.add("show-level3")
                        document.querySelector(".bar4").classList.add("show-level4")
                    }
                }
                else{
                    document.querySelector(".bar1").classList.remove("show-level1")
                    document.querySelector(".bar2").classList.remove("show-level2")
                    document.querySelector(".bar3").classList.remove("show-level3")
                    document.querySelector(".bar4").classList.remove("show-level4")
                }
            })
        }

        let observer = new IntersectionObserver(callback)
        const target = document.querySelectorAll(".level-on-view")
        console.log(target)
        target.forEach(target=>{
            observer.observe(target)
        })

        return () => {
            observer = null;
        };
    })

    return (
        <div className="skills-container">
            <img src={skillsIllustrator} className="skills-illustrator" data-aos='fade-up-right' data-aos-once={true} data-aos-easing="ease-in-out" data-aos-duration="800"/>
            <div className="skills-texts" data-aos='fade-up-left' data-aos-once={true}>
                <h3 className="skills-title">Skills level</h3>
                <p className="skills-description">
                    OBINS Technology Ltd., our team are confidence enough to handle your problems digitally, share it with us and consider it done!...
                </p>
                <div className="skills-levels-wrapper">
                    <span className="skills-level-text">Web design / Develompent &amp; Networking <i className="level-val">{webDesign}</i></span>
                    <div className="level-bar-wrapper">
                        <div className="level-bar bar1" style={{width: webDesign}}></div>
                    </div>
                </div>
                <div className="skills-levels-wrapper">
                    <span className="skills-level-text">Electronics / Solar power <i className="level-val">{electronics}</i></span>
                    <div className="level-bar-wrapper">
                        <div className="level-bar bar2" style={{width: electronics}}></div>
                    </div>
                </div>
                <div className="skills-levels-wrapper">
                    <span className="skills-level-text">Branding / Digital Marketing <i className="level-val">{branding}</i></span>
                    <div className="level-bar-wrapper">
                        <div className="level-bar bar3" style={{width: branding}}></div>
                    </div>
                </div>
                <div className="skills-levels-wrapper level-on-view">
                    <span className="skills-level-text">Digital Security / IT Consultancy <i className="level-val">{consultancy}</i></span>
                    <div className="level-bar-wrapper">
                        <div className="level-bar bar4" style={{width: consultancy}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;