import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";
import Projects from "@/sections/Projects/Projects";
import Experience from "@/sections/Experience/Experience";
import Skills from "@/sections/Skills/Skills";
import Certifications from "@/sections/Certifications/Certifications";
import Writing from "@/sections/Blog/Blog";
// Data
import { projectsData } from "@/data/projectsData";
import { jobsData } from "@/data/jobsData";
import { skillsData } from "@/data/skillsData";
import { certsData } from "@/data/certsData";

const HomePage = () => {
   return (
      <>
         <Hero></Hero>
         <About></About>
         <Projects projects={projectsData}></Projects>
         <Experience jobs={jobsData}></Experience>
         <Skills groups={skillsData}></Skills>
         <Certifications certs={certsData}></Certifications>
         <Writing></Writing>
      </>
   );
};

export default HomePage;
