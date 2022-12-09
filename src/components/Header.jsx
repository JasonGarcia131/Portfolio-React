import { Link } from "react-router-dom"


function Header() {


    const pathname = window.location.pathname
    
    const home = pathname === "/" ? <p style={{opacity: ".5"}}><Link to="/">Home</Link></p> : <p><Link to="/">Home</Link></p>
    const aboutMe = pathname === "/AboutMe" ? <p style={{ opacity: ".5"}}><Link to="/AboutMe">About Me</Link></p> : <p><Link to="/AboutMe">About Me</Link></p>
    const resume = pathname === "/Resume" ? <p style={{ opacity: ".5"}}><Link to="/Resume">Resume</Link></p> : <p><Link to="/Resume">Resume</Link></p>

    return (
        <header>
            <div className="contact-info-wrapper">
                <p>
                    Contact Me:
                </p>
                <p>
                    323-316-8978
                </p>
                <p>
                    <a href="mailto:jaygarcia0530@gmail.com"> jaygarcia0530@gmail.com </a>
                </p>
            </div>
            <div className="header-links">
                <p>
                    Links:
                </p>
                {resume}
                {aboutMe}
                <p>
                    <a href="https://github.com/JasonGarcia131">GitHub</a>
                </p>
                
                {home}
            </div>
        </header>
    )
}

export default Header;