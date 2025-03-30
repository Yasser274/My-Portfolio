import styles from "./Projects.module.css";
// import { getImageUrl } from "../../utils";
import { useRef } from "react";
import { SectionAppearFadeEffect } from "../Effects/ImageEffectsAndOtherEffects";

interface ProjectsProps {
   projectName: string | number;
   projectImg: string;
   projectDesc: string;
   projectTags: string[] | number[];
   projectLinkSource?: string;
   projectLinkSite?: string;
}
interface ProjectsPropsArray {
   projects: ProjectsProps[];
}

const Projects: React.FC<ProjectsPropsArray> = ({ projects }) => {
   const sectionRef = useRef<HTMLDivElement>(null);


     SectionAppearFadeEffect(sectionRef,styles.visible)


   return (
      <section>
         <div className={styles.projectsCon} id="projects" ref={sectionRef}>
            <h2 className={styles.projectTitle}>Projects</h2>
            <div className={styles.projectItemsCon}>
               {projects.map((project, index) => (
                  <div className={styles.projectItemBox} key={index}>
                     <img src={project.projectImg} alt="Project Image" className={styles.projectItemImg} />
                     <h3 className={styles.projectItemName}>{project.projectName}</h3>
                     <p className={styles.projectItemDesc}>{project.projectDesc}</p>
                     <div className={styles.projectItemTagsCon}>
                        {project.projectTags.map((tag: string | number, index: number) => (
                           <div className={styles.projectTag} key={index}>
                              {tag}
                           </div>
                        ))}
                     </div>
                     <div className={styles.projectsLinksCon}>
                        <a href={project.projectLinkSource}>
                           {" "}
                           <button className={styles.projectsLinksBtn}>Source</button>
                        </a>
                        <a href={project.projectLinkSite}>
                           <button className={styles.projectsLinksBtn}>Link</button>
                        </a>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Projects;
