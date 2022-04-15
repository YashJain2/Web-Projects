import "./index.scss";
import LogoTitle from "../../assets/images/home-image-4.png";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../lottie/lottie-2.json";


const Home = () => {
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
                <h1>Hi, <br/> I'm 
                <img src={LogoTitle} alt="My name is yash"/>
                ash
                <br/>
                web developer
                </h1>
                <h2>
                    MERN Developer | UI-UX Designer | Compettive Programmer
                </h2>
                <Link to="/contact" className="contact-button">Contact Me</Link>
                <div className="lottie">
                    <Lottie
                        options={defaultOptions}
                    />
                </div>
                    
            </div>
        </div>
    );
}

export default Home;