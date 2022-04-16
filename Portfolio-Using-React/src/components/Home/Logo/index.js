import "./index.scss";
import Lottie from "react-lottie";
import animationData from "../../../lottie/lottie-2.json";

const Logo=() =>{

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return(
        <div className="logo-container">
            <div className="lottie">
                    <Lottie options={defaultOptions}/>  
            </div>
        </div>
    );
}
export default Logo;