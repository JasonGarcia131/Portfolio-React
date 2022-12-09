import './App.css';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { ProjectData } from './ProjectData';
import { Link } from 'react-router-dom';

function App() {

  const mappedProjectCards = ProjectData.map((project, i) => {
    return (
      <div className="project-card-wrapper" key={i}>
        <ProjectCard url1={project.imgUrl1} url2={project.imgUrl2} url3={project.imgUrl3} name={project.name} description={project.description} codeLink={project.codeLink} pageLink={project.pageLink} />
      </div>
    )
  })

  return (
    <div className="App">
      <Header />
      <main>
        <div className='about-me'>
          <h1>Jason Garcia</h1>
          <p>Junior fullstack developer eager to collaborate and build.</p>
          <Link to="/AboutMe">About Me</Link>
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
