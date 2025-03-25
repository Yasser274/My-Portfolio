import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

// Experience List
import { experienceData, jobsExperienceData } from "./data/experienceAndSkillsData";

function App() {
   return (
      <div className={styles.App}>
         <Navbar></Navbar>
         <Hero></Hero>
         <About></About>
         <Experience experiences={experienceData} jobsExperiences={jobsExperienceData}></Experience>
      </div>
   );
}

export default App;
