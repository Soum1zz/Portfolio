import mercatoImg from '../assets/mercato-img.png'
import chessifyImg from '../assets/chessify-img.png'
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
                    style={{fontWeight:800, fontSize:"60px"}}
                    >Mercato</h2>
                    <div
                    style={{letterSpacing:"3px"}}
                    >Fully functional e-commerce platform created using springboot framework.</div>
                </div>
                
            </div>
            <div
            className='proj-card'
            >
                <img src={chessifyImg} />
                <div className='hover-text'>
                    <h2
                    style={{fontWeight:800, fontSize:"60px"}}
                    >Chessify</h2>
                    <div
                    style={{letterSpacing:"3px"}}
                    >Chess website created using react.</div>
                </div>
                
            </div>
            <div
            className='proj-card'
            >
                <img src={studyImg} />
                <div className='hover-text'>
                    <h2
                    style={{fontWeight:800, fontSize:"60px"}}
                    >Study Helper Extension</h2>
                    <div
                    style={{letterSpacing:"3px"}}
                    >Chrome extension for students to help them group videos by topics and keep notes </div>
                </div>
                
            </div>
        </div>
    )
}