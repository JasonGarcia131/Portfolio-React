import './App.css';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { ProjectData } from './ProjectData';

function App() {

  console.log("imgurl1.....", ProjectData[0].imgUrl1)
  return (
    <div className="App">
      <Header/>
      <main>
        <h1>Jason Garcia</h1>
        <h2>Projects</h2>
        <ProjectCard url1={ProjectData[0].imgUrl1} url2={ProjectData[0].imgUrl2} url3={ProjectData[0].imgUrl3} name={ProjectData[0].name} description={ProjectData[0].description} codeLink={ProjectData[0].codeLink} pageLink={ProjectData[0].pageLink}/>
        {/* <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/> */}
      </main>
    </div>
  );
}

export default App;
