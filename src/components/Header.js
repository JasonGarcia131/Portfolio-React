import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

function Header() {

    const [isContact, setIsContact] = useState(false);

    const BASEURL = "https://jasongarcia131.github.io/Portfolio-React/#/"
    const pathname = window.location.href

    const home = pathname === `${BASEURL}` ? <p style={{ opacity: ".5" }}><Link to="/">Home</Link></p> : <p><Link to="/">Home</Link></p>
    const aboutMe = pathname === `${BASEURL}AboutMe` ? <p style={{ opacity: ".5" }}><Link to="/AboutMe">About Me</Link></p> : <p><Link to="/AboutMe">About Me</Link></p>
    const resume = pathname === `${BASEURL}Resume` ? <p style={{ opacity: ".5" }}><Link to="/Resume">Resume</Link></p> : <p><Link to="/Resume">Resume</Link></p>

    return (
        <header>
            <div className="header-links">
                {home}
                {resume}
                {aboutMe}
                <p>
                    <a href="https://github.com/JasonGarcia131" target="_blank" rel="noreferrer" >GitHub</a>
                </p>
                <p className="contact-button" onClick={() => setIsContact(!isContact)}>Contact Me: </p>
            </div>
            {isContact ? (
                <div className="contact-dropdown">
                    <div>
                        <FaPhoneAlt /> <span className="margin">323-316-8978</span>
                    </div>
                    <div>
                        <a className="mailIcon" href="mailto:jaygarcia0530@gmail.com"><FaEnvelope /> </a><a className="margin mobile" href="mailto:jaygarcia0530@gmail.com"> jaygarcia0530@gmail.com </a>
                    </div>
                </div>
            ) : ""}
        </header>
    )
}

export default Header;