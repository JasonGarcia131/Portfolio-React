import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="contact-info-wrapper">
                <p>Contact Me: </p>
                <div>
                    <FaPhoneAlt /> <span className="margin">323-316-8978</span>
                </div>
                <div>
                    <a className="mailIcon" href="mailto:jaygarcia0530@gmail.com"><FaEnvelope /> </a><a className="margin mobile" href="mailto:jaygarcia0530@gmail.com"> jaygarcia0530@gmail.com </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;