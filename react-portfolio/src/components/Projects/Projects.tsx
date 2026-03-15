import styles from "./Projects.module.css";
// import { getImageUrl } from "../../utils/imageUtils";
import { ProjectsDataTypes } from "../../data/ProjectsData";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/animationVariants";
import layoutStyle from "../Layout.module.css";

interface ProjectsPropsArray {
   projects: ProjectsDataTypes[];
}

const Projects = ({ projects }: ProjectsPropsArray) => {
   return (
      <section>
         <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={layoutStyle.sectionPart}
            id="projects"
         >
            <h2 className={styles.projectTitle}>Projects</h2>
            <div className={styles.projectItemsCon}>
               {projects.map((project, index) => (
                  <motion.div className={styles.projectItemBox} key={index} variants={itemVariants}>
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
                  </motion.div>
               ))}
            </div>
         </motion.div>
      </section>
   );
};

export default Projects;
