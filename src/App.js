import './styles.css';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { ProjectData } from './ProjectData';
import { Link } from 'react-router-dom';

function App() {

  const mappedProjectCards = ProjectData.map((project, i) => {
    const { imgUrl1, name, techStack, description, codeLink, pageLink } = project;
    return (
      <ProjectCard
        key={i}
        url1={imgUrl1}
        name={name}
        techStack={techStack}
        description={description}
        codeLink={codeLink}
        pageLink={pageLink}
      />
    )
  })

  return (
    <div className="App">
      <Header/>
      <main>
        <div className='about-me'>
          <h1>Jason Garcia</h1>
          <p>Fullstack developer eager to collaborate and build.</p>
          <div className='row'>
            <Link to="/AboutMe">About Me</Link>
            <a href="https://github.com/JasonGarcia131/Portfolio-React.git">Portfolio Source Code</a>
          </div>
        </div>
        <div className='project-container'>
          <h2>Projects</h2>
          <div className='project-container-scroll'>
            {mappedProjectCards}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
