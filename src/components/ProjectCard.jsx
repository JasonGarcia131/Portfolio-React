import { useState } from "react";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";

function ProjectCard(props) {

    console.log("props.name", props.name)

    const {url1, url2, url3, name, description, codeLink, pageLink} = props;

    console.log("url1......", url1);
    const [projectImg, setProjectImg] = useState({
        url: url1,
        selected: false
    });

    const handleImgClicked = (e) => {
        console.log("e.target.id", e.target.id)
        setProjectImg({ ...projectImg, url: `${e.target.id}`})
    }

    console.log("projectImg", projectImg.url)
    return (
        <div className="card-wrapper">
            <div id="img-carousel" style={{backgroundImage: `url("${projectImg.url}")`}}>
                <div className="project-thumbnail" id={url1} style={projectImg.url === url1 ? {color: "red"} : {color: "grey"}}onClick={handleImgClicked}>.</div>
                <div className="project-thumbnail" id={url2} style={projectImg.url === url2 ? {color: "red"} : {color: "grey"}}onClick={handleImgClicked}>.</div>
                <div className="project-thumbnail" id={url3} style={projectImg.url === url3 ? {color: "red"} : {color: "grey"}}onClick={handleImgClicked}>.</div>
            </div>
            <div className="description">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="project-links">
                <a href={codeLink}>Code</a>
                <a href={pageLink}>Page</a>
            </div>
        </div>
    )
}

export default ProjectCard;