import "./index.scss";
import LogoTitle from "../../assets/images/home-image-4.png";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../lottie/lottie-2.json";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";


const Home = () => {

    const [letterClass,setLetterClass] = useState('text-animate');
    const nameArray = ['a','s','h'];
    const jobArray = ['w','e','b', ' ','d','e','v','e','l','o','p','e','r','.'];

    useEffect(()=>{
        return setTimeout(()=>{
            setLetterClass('text-animate');
        },4000);
    })
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

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
                    idx={15}
                />

                <br/>
                <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}
                />

                </h1>

                <h2>
                    MERN Developer | UI-UX Designer | Compettive Programmer
                </h2>

                <Link to="/contact" className="contact-button">Contact Me</Link>
                <div className="lottie">
                    <Lottie options={defaultOptions}/>  
                </div>
                    
            </div>
        </div>
    );
}

export default Home;