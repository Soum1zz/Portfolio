import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


export default function leftNav(){
    return(
        <div>
             <h2>Portfolio</h2>

             <div>
                <div>HOME</div>
                <div>BIOGRAPHY</div>
                <div>PORTFOLIO</div>
                <div>PROJECTS</div>
                <div>SKILLS</div>
                <div>CONTACT ME</div>

             </div>

             <hr/>

             <div>
                 <FaLinkedin/>
                 <FaGithub/>
                 <SiLeetcode/>
             </div>
        </div>
    )
}