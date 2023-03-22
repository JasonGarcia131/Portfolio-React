import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { ProjectData } from './ProjectData';
import { Link } from 'react-router-dom';

function App() {

  useEffect(()=>{},[])

  const mappedProjectCards = ProjectData.map((project, i) => {
    const {imgUrl1, imgUrl2, imgUrl3, name, techStack, description, codeLink, pageLink} = project;
    return (
      <div className="project-card-wrapper" key={i}>
        <ProjectCard 
          url1={imgUrl1} 
          url2={imgUrl2} 
          url3={imgUrl3} 
          name={name} 
          techStack={techStack}
          description={description} 
          codeLink={codeLink} 
          pageLink={pageLink} />
      </div>
    )
  })

  return (
    <div className="App">
      <Header />
      <main>
        <div className='about-me'>
          <h1>Jason Garcia</h1>
          <p>Fullstack developer eager to collaborate and build.</p>
          <Link to="/AboutMe">About Me</Link>
          <br/>
          <a href="https://github.com/JasonGarcia131/Portfolio-React.git">Portfolio Source Code</a>
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
