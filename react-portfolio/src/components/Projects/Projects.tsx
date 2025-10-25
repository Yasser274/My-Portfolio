import styles from "./Projects.module.css";
// import { getImageUrl } from "../../utils/imageUtils";
import { useRef } from "react";
import { SectionAppearFadeEffect } from "../Effects/ImageEffectsAndOtherEffects";
import { ProjectsDataTypes } from "../../data/ProjectsData";

interface ProjectsPropsArray {
   projects: ProjectsDataTypes[];
}

const Projects: React.FC<ProjectsPropsArray> = ({ projects }) => {
   const sectionRef = useRef<HTMLDivElement>(null);

   SectionAppearFadeEffect(sectionRef, styles.visible);

   return (
      <section>
         <div className={styles.projectsCon} id="projects" ref={sectionRef}>
            <h2 className={styles.projectTitle}>Projects</h2>
            <div className={styles.projectItemsCon}>
               {projects.map((project, index) => (
                  <div className={styles.projectItemBox} key={index}>
                     <a href={project.projectLinks[0].url}>
                        <img src={project.projectImg} alt="Project Image" className={styles.projectItemImg} />
                     </a>

                     <h3 className={styles.projectItemName}>{project.projectName}</h3>
                     <div className={styles.projectItemDesc}>
                        {project.projectDesc.map((paragraph, i) => {
                           // check Bold Or Not
                           const paragraphClassName = `${styles.projectParagraph} ${
                              paragraph.isBold ? styles.bold : ""
                           }`;
                           return (
                              <p key={i} className={paragraphClassName}>
                                 {paragraph.text}
                              </p>
                           );
                        })}
                     </div>
                     <div className={styles.projectItemTagsCon}>
                        {project.projectTags.map((tag: string | number, index: number) => (
                           <div className={styles.projectTag} key={index}>
                              {tag}
                           </div>
                        ))}
                     </div>
                     <div className={styles.projectsLinksCon}>
                        {/* if there are links from the pulled data for each link create this <a> element if not don't */}
                        {project.projectLinks
                           ? project.projectLinks.map((link) => {
                                return (
                                   <a href={link.url}>
                                      <button className={styles.projectsLinksBtn}>{link.text}</button>
                                   </a>
                                );
                             })
                           : null}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Projects;
