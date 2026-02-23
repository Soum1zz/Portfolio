import { useEffect, useState } from 'react'
import '../styles/skills.css'
export default function Skills(){
    const [animate, setAnimate] = useState(false)

    useEffect(()=>{
        const section= document.getElementById("skills");

        const observer= new IntersectionObserver(
            ([entry])=>{
                    if(entry.isIntersecting){
                        setAnimate(true);
                    }
                },
                {
                    threshold: 0.5
                }
            );
            
        if(section) 
            observer.observe(section)
        return()=>{
        if(section)
            observer.unobserve(section)
        }
    },[]);
    const skills = [
        {name:"HTML5 & CSS3", perc:90},
        {name:"REACT", perc:85},
        {name:"JAVA", perc:92},
        {name:"SPRINGBOOT", perc:83}
    ]
    return(
        <div className='sub-div'>
            <div className='sub-title'>SKILLS
            <div className='sub-hori-line'></div>

            </div>            
            {
                skills.map((skill,index)=>(
                <div className='skill-sub' key={index}>
                    <div className='skill-name'
                    style={{
                        width: animate?`${skill.perc}%`:"30%"
                    }}
                    >
                        <span
                        >{skill.name}</span>
                        <span
                        
                        >{skill.perc}%</span>
                    </div>
                </div>
                ))
            }
            
            
        </div>
    )
}