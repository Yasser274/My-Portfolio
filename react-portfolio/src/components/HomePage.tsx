import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Samples from "../components/Samples/Samples";
import Certs from "../components/CertsCon/Certs";
// Experience Data and other Data
import { experienceData, jobsExperienceData } from "../data/experienceAndSkillsData";
import { projectsData } from "../data/ProjectsData";
import { CertData } from "../data/CertData";
import AnimatedPage from "./Effects/AnimatedPage";

const HomePage = () => {
   return (
      // when this page appears(mount) animate it
      <AnimatedPage>
         <section>
            <Hero></Hero>
            <About></About>
            <Experience experiences={experienceData} jobsExperiences={jobsExperienceData}></Experience>
            <Projects projects={projectsData}></Projects>
            <Certs certData={CertData}></Certs>
            <Samples></Samples>
         </section>
      </AnimatedPage>
   );
};

export default HomePage;
