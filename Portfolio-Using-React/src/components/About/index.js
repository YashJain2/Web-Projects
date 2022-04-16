import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const About = () => {
    const [letterClass,setLetterClass] = useState('text-animate');

    useEffect(()=>{
        async function timeOut(){
            return setTimeout(()=>{
                setLetterClass('text-animate-hover');
            },3000);
        }
        timeOut();
    },[]);

    return(
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','M','e']}
                    idx={15} 
                    />
                </h1>
                <p>I'm very ambitious Full Stack Developer looking for a role 
                in established organization with the opportunity to work of latest 
                technologies and challenging and diverse projects.</p>
                <p>
                I' quietly confident, naturally curious, and perpectually working on 
                improving my Data Structure and Algorithm and Software Development skills.
                </p>
                <p>
                I' quietly confident, naturally curious, and perpectually working on 
                improving my Data Structure and Algorithm and Software Development skills.
                </p>
            </div>

            <div className="about-image-container">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faNodeJs} color="#43853D"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28a4d9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#efd81d"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#ec4d28"/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;
