import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import Logoy from "../../assets/images/logo-y-1.png";
import LogoSubtitle from "../../assets/images/logo-sub.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faMailForward, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className='logo' to="/">
        <img src ={Logoy} alt="logo"/>
        <img src ={LogoSubtitle} alt="Sub title" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank"  rel='noreferrer' href='https://www.linkedin.com/in/yash-jain-5142121a4/' alt="Link to LinkedIn">
            <FontAwesomeIcon icon ={faLinkedin} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a target="_blank"  rel='noreferrer' href='https://github.com/YashJain2/' alt="Link to Github">
            <FontAwesomeIcon icon ={faGithub} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a target="_blank"  rel='noreferrer' href='https://www.instagram.com/yashjain2005/' alt="Link to Instagram">
            <FontAwesomeIcon icon ={faInstagram} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a target="_blank"  rel='noreferrer' href='mailto:yjain8958372013@gmail.com' alt="Link to Gmail">
            <FontAwesomeIcon icon ={faMailForward} color="#4d4d4e"/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
