import cvCont from '../assets/cont.png'
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import yUp from '../assets/y-up.png'
import yDn from '../assets/y-dn.png'
import bUp from '../assets/b-up.png'
import bDn from '../assets/b-dn.png'

export default function CVSection(){
    return(
        <div className="cv-div">
            <img src={yUp}width={30}/>
            <a
            href="/Soumallya_Naskar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download>
                <LiaLongArrowAltDownSolid className='arrow'/>
                <img src={cvCont}width={70}></img>
                <div>DOWNLOAD CV</div>
                
            </a>
            <img src={yDn}width={30}/>

        </div>
    )
}