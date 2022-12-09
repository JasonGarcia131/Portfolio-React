import "./About.css"
import Header from "../components/Header";
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <Header />
            <div className="about-page-wrapper">
                <div className="about-image">
                    <img src="https://www.clipartkey.com/mpngs/m/92-923177_software-development-icon-png.png" alt="animated computer"/>
                </div>
                <div className="description-wrapper">
                    <h1>About Me</h1>
                    <p> I've worked in management as a warehouse supervisor for 5+ years and recently decided to pursue a career in software development. I enrolled in a bootcamp program offered through California State University Long Beach and immediately became passionate.
                        I completed the 9 month course that taught me the fundemetals of software development and exposed me to some advanced topics. With the discipline I've gained from my previous jobs,
                        I am ready to branch off into a new career path.
                    </p>
                    <Link to="/">Home</Link>
                    <a href="https://www.linkedin.com/in/jason-garcia-00b71b245/">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default About;