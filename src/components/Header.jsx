import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="contact-info-wrapper">
                <p>
                    Contact Me:
                </p>
                <p>
                    323-316-8978
                </p>
                <a href="mailto:jaygarcia0530@gmail.com"> jaygarcia0530@gmail.com </a>
            </div>
            <div className="header-links">
                <p>
                    Links:
                </p>
                <a href="#">Resume</a>
                <a href="#">GitHub</a>
                <Link to="/AboutMe">About Me</Link>
            </div>
        </header>
    )
}

export default Header;