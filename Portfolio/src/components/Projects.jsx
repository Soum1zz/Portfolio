import mercatoImg from '../assets/mercato-img.png'
import chessifyImg from '../assets/chessify-img.png'
import '../styles/projects.css'
export default function Projects(){
    return(
        <div className="sub-div">
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
                    style={{letterSpacing:"5px"}}
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
                    style={{letterSpacing:"5px"}}
                    >Chess website created using react.</div>
                </div>
                
            </div>
        </div>
    )
}