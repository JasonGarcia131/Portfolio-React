import { useState } from "react";


function ProjectCard(props) {

    const { url1, url2, url3, name, techStack, description, codeLink, pageLink } = props;

    //State variable will dynamically change the background image of a div when clicked.
    const [projectImg, setProjectImg] = useState({
        url: url1,
        selected: false
    });

    //Updates the state variable to change background image
    //The id of the clicked target is the url path to the image.
    const handleImgClicked = (e) => {
        setProjectImg({ ...projectImg, url: `${e.target.id}` })
    }

    return (
        <div className="card-wrapper">
            <div id="img-carousel" style={{ backgroundImage: `url(${projectImg.url})` }}>
                <div className="project-thumbnail" id={url1} style={projectImg.url === url1 ? { color: "red" } : { color: "grey" }} onClick={handleImgClicked}>.</div>
                <div className="project-thumbnail" id={url2} style={projectImg.url === url2 ? { color: "red" } : { color: "grey" }} onClick={handleImgClicked}>.</div>
                <div className="project-thumbnail" id={url3} style={projectImg.url === url3 ? { color: "red" } : { color: "grey" }} onClick={handleImgClicked}>.</div>
            </div>
            <div className="description">
                <h3>{name}</h3>
                <p>Tech Stack: {techStack}</p>
                <br/>
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


