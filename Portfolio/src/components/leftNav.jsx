import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import '../styles/leftNav.css'
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


export default function leftNav(){
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState("home");
    useEffect(()=>{
        const sections= document.querySelectorAll("section");

        const observer= new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    if(entry.isIntersecting){
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        )
        
        sections.forEach((section)=>observer.observe(section));
        return()=>{
            sections.forEach((section)=>observer.unobserve(section))
        }
    }

    ,[]);
    return(
        <div className="left-div">
            {/* <div className='sub-title'>My Portfolio

            </div>              */}
            <div className="hamburger" onClick={()=> setOpen(!open)}>
                {
                    open?
                    <RxCross2/>:
                    <RxHamburgerMenu/>
                }
             </div>
             <div className={`nav-links ${open? "show":""}`}>
                <a className={`sub-links ${active==="home"? "active": ""}`}
                href="#home"
                >HOME</a>
                <a className={`sub-links ${active==="education"? "active": ""}`}
                href="#education"
                >EDUCATION</a>
                <a className={`sub-links ${active==="skills"? "active": ""}`}
                href="#skills"
                >SKILLS</a>
                <a className={`sub-links ${active==="projects"? "active": ""}`}
                href="#projects"
                >PROJECTS</a>
                <a className={`sub-links ${active==="contact"? "active": ""}`}
                href="#contact"
                >CONTACT ME</a>

             </div>

             <div className="hor-line"></div>

             <div className="social-links">
                
                <a className="sub-social"
                href="https://www.linkedin.com/in/soumallya-naskar-4a8b85320/" 
                target="_blank" 
                rel="noreferrer"
                >
                    <FaLinkedin/>
                </a>
                <a className="sub-social"
                href="https://github.com/Soum1zz" 
                target="_blank" 
                rel="noreferrer"
                > 
                    <FaGithub/>
                </a>
                <a className="sub-social"
                href="https://leetcode.com/u/Soumallya/" 
                target="_blank" 
                rel="noreferrer"
                >
                    <SiLeetcode/>
                </a>
             </div>
        </div>
    )
}