import LeftNav from "../components/leftNav"
import RightBody from "../components/rightBody"
import '../styles/Landing.css'
export default function Landing(){
    return(
        <div className="landing-wrapper">
            <LeftNav/>
            <div className="vert-sep"></div>
            <RightBody/>
        </div>
    )
}