import mercatoImg from '../assets/mercato-img.png'
import civ_con from '../assets/CivC_Conc.png'
import studyImg from '../assets/study-pic.png'

import '../styles/projects.css'
export default function Projects(){
    return(
        <div className="proj-div">
            <div className='sub-title'>PROJECTS
            <div className='sub-hori-line'></div>

            </div>
            <div
            className='proj-card'
            >
                <img src={mercatoImg} />
                <div className='hover-text'
                >
                    <h2
                    >Mercato</h2>
                    <div
                    style={{letterSpacing:"3px"}}
                    >Fully functional e-commerce platform created using springboot framework.</div>
                </div>
                
            </div>
            <div
            className='proj-card'
            >
                <img src={civ_con} />
                <div className='hover-text'>
                    <h2
                    >Civik Connect</h2>
                    <div
                    style={{letterSpacing:"3px"}}
                    >Website to help people connect with NGOs to solve their problems.</div>
                </div>
                
            </div>
            <div
            className='proj-card'
            >
                <img src={studyImg} />
                <div className='hover-text'>
                    <h2
                    >Study Helper </h2>
                    <div
                    style={{letterSpacing:"3px"}}
                    >Chrome extension for students to help them group videos by topics and keep notes </div>
                </div>
                
            </div>
        </div>
    )
}