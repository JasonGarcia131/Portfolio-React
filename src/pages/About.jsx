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
                    <p> I've worked in management as a warehouse supervisor for 5+ years. I Completed a software development program offered through California State University Long Beach.
                        I've built full stack applications using Javascript, React, Redux, Node/Express, Mongoose/Postgres. I have experience using the git terminal and collaborating in a team. Finding solutions to
                        problems is self rewarding for me so challenges are always accepted. 
                    </p>
                    <Link to="/">Home</Link>
                    <a href="https://www.linkedin.com/in/jason-garcia-00b71b245/">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default About;