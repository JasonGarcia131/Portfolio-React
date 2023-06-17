import "./About.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <Header />
            <div className="about-page-wrapper">
                <div className="about-image">
                    <img src="https://www.clipartkey.com/mpngs/m/92-923177_software-development-icon-png.png" alt="animated computer" />
                </div>
                <div className="description-wrapper">
                    <h1>About Me</h1>
                    <p> 
                        At the age of 21, I was appointed the position of warehouse supervisor for a transship business. My foundation of skills were built through trial and error.
                        Throughout the years, my strengths were highlighted, but, most importantly, my weaknesses were recognized through this journey of professional self-development. 
                        As I branch out into a new career path in Software Development, I bring along the experience 
                        and passion to create, collaborate, and build.
                    </p>
                    <Link to="/">Home</Link>
                    <a href="https://www.linkedin.com/in/jason-garcia-00b71b245/">LinkedIn</a>
                    <a href="https://github.com/JasonGarcia131/Portfolio-React">Portfolio Source Code</a>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default About;