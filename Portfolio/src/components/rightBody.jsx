import Hero from "./Hero"
import '../styles/rightBody.css'
import Education from "./Education"
import Skills from "./Skills"
import Projects from "./Projects"
import ContactMe from "./ContactMe"
import CVSection from "./CVSection"
export default function rightBody(){
    return(
        <div className="right-div">
            <section id="home">
              <Hero/>
              <CVSection/>
            </section>
                <div className="hor-line"></div>
            <section id="education">
              <Education/>
            </section>
                <div className="hor-line"></div>
            <section id="skills">
                <Skills/>
            </section>
                <div className="hor-line"></div>
            <section id="projects">
                <Projects/>
            </section>
                <div className="hor-line"></div>
            <section id="contact">
              <ContactMe/>
            </section>
        </div> 
    )
}