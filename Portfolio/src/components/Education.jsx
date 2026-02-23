import '../styles/education.css'
export default function Education(){
    return(
        <div className="sub-div">
            <div className='sub-title'>EDUCATION
            <div className='sub-hori-line'></div>

            </div>
            <div className="edu-sub">
                <div style={{fontWeight:"600", fontSize:"15px"}}><b>MAULANA AZAD NATIONAL INSTITUTE OF TECHNOLOGY BHOPAL ( 2024 - Present)</b></div>
                <h1>Master Degree</h1>
                <div style={{fontSize:"20px"}}>I'm currently pursuing Masters of Computer Application. My current cgpa is 8.64</div>
            </div>
            <div className="edu-sub">
                <div style={{fontWeight:"600", fontSize:"15px"}}><b>SHIBPUR DINOBUNDHOO INSTITUTION  ( 2020 - 2023)</b></div>
                <h1>Bachelor Degree</h1>
                <div style={{fontSize:"20px"}}>I completed Bachelors of Science (Hons.) in mathematics with 8.25 cgpa</div>
            </div>
        </div>
    )
}