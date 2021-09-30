import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/styles.scss';
import FrontView from './FrontView'
import About from "./About"
import Reasons from './Reasons';
import Skills from './Skills'
import Services from './Services'
import Projects from './Projects'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {

  useEffect(() =>{
    AOS.init({
      duration: 800,
      delay: 100,
      easing: 'linear'
    })
  }, [])


  return (
    <div>
      <FrontView />
      <About />
      <Reasons />
      <Skills />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;
