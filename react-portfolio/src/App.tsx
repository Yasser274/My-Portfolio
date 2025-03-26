import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

// Experience Data and other Data
import { experienceData, jobsExperienceData } from "./data/experienceAndSkillsData";
import { projectsData } from "./data/ProjectsData";

function App() {
   return (
      <div className={styles.App}>
         <Navbar></Navbar>
         <Hero></Hero>
         <About></About>
         <Experience experiences={experienceData} jobsExperiences={jobsExperienceData}></Experience>
         <Projects projects={projectsData}></Projects>
      </div>
   );
}

export default App;
