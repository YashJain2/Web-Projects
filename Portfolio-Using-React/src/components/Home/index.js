import "./index.scss";
import LogoTitle from "../../assets/images/home-image-4.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo/index.js";

const Home = () => {

    const [letterClass,setLetterClass] = useState('text-animate');
    const nameArray = ['a','s','h'];
    const jobArray = ['w','e','b', ' ','d','e','v','e','l','o','p','e','r','.'];
    useEffect(()=>{
        async function timeOut(){
            return setTimeout(()=>{
                setLetterClass('text-animate-hover');
            },4000);
        }
        timeOut();
    },[]);

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={`${letterClass}`}>H</span>
                <span className={`${letterClass} _10`}>i,</span>
                <br/>
                <span className={`${letterClass} _11`}>I</span>
                <span className={`${letterClass} _12`}>'m</span>
                <img src={LogoTitle} alt="My name is yash"/>
                <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={13}
                />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={16}
                />
                </h1>
                <h2>
                    MERN Developer | UI-UX Designer | Compettive Programmer
                </h2>
                <Link to="/contact" className="contact-button">Contact Me</Link>    
            </div>
            <Logo/>
        </div>
    );
}
export default Home;