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
                    <p> I've worked in management as a warehouse supervisor for 5+ years. I completed a full stack software development program offered through California State University Long Beach.
                        Throughout the course, I built full stack applications using Javascript, React, Redux, Node/Express, Mongoose/Postgress and git/github. Even after the course, I continue to my learning journey to expand my skills in the tech industry.
                        Aside from my technical skills, I am a great team player always looking to learn and contribute with a team.   
                    </p>
                    <Link to="/">Home</Link>
                    <a href="https://www.linkedin.com/in/jason-garcia-00b71b245/">LinkedIn</a>
                    <a href="https://github.com/JasonGarcia131/Portfolio-React">Portfolio Source Code</a>
                </div>
            </div>
        </div>
    )
}

export default About;