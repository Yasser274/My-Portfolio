import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

// Experience Data and other Data
import { experienceData, jobsExperienceData } from "./data/experienceAndSkillsData";
import { projectsData } from "./data/ProjectsData";
import Contact from "./components/Contact/Contact";
import Samples from "./components/Samples/Samples";
import Cursor from "./components/Effects/Cursor";
// import LoadingScreen from "./components/Effects/LoadingScreen";

function App() {
   
   return (
      <div className={styles.App}>
         <Cursor></Cursor>
         {/* <LoadingScreen></LoadingScreen> */}
         <Navbar></Navbar>
         <Hero></Hero>
         <About></About>
         <Experience experiences={experienceData} jobsExperiences={jobsExperienceData}></Experience>
         <Projects projects={projectsData}></Projects>
         <Samples></Samples>
         <Contact></Contact>
      </div>
   );
}

export default App;
