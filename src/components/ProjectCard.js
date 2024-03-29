
function ProjectCard(props) {

    const { url1, name, techStack, description, codeLink, pageLink } = props;

    return (
        <div className="card-wrapper">
            <img className="project-thumbnail" src={url1} alt="project thumbnail"/>
            <div className="description">
                <h3 className="app-name">{name}</h3>
                <p>Tech Stack: {techStack}</p>
                <p>{description}</p>
            </div>
            <div className="project-links">
                <a href={codeLink}  target="_blank" rel="noreferrer" >Code</a>
                {
                    pageLink === "#" ? <a>In progess</a> : <a href={pageLink}  target="_blank" rel="noreferrer" >Page</a>
                }
                
            </div>
        </div>
    );
}

export default ProjectCard;


