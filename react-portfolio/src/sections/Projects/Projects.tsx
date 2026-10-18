import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import ui from "@/styles/ui.module.css";
import Section from "@/components/ui/Section";
import useSpotlight from "@/hooks/useSpotlight";
import { revealContainer, revealCard, inViewOnce, softSpring } from "@/utils/animationVariants";
import type { ProjectDescription, ProjectItem, ProjectLink } from "@/types";
import { ArrowUpRightIcon, GithubIcon, PlayIcon } from "@/components/icons/Icons";

interface ProjectsProps {
   projects: ProjectItem[];
}

// my project descriptions have normal paragraphs, bold ones and lines starting with "- "
// this turns the "- " lines into a real list (ul/li) and the rest into <p>
const renderDescription = (desc: ProjectDescription[]) => {
   const blocks: React.ReactNode[] = [];
   let bullets: string[] = [];

   const flushBullets = () => {
      if (bullets.length === 0) return;
      blocks.push(
         <ul key={`list-${blocks.length}`} className={styles.bullets}>
            {bullets.map((b) => (
               <li key={b}>{b}</li>
            ))}
         </ul>,
      );
      bullets = [];
   };

   desc.forEach((paragraph) => {
      if (paragraph.text.startsWith("- ")) {
         bullets.push(paragraph.text.slice(2));
         return;
      }
      flushBullets();
      blocks.push(
         <p key={`p-${blocks.length}`} className={paragraph.isBold ? styles.leadIn : undefined}>
            {paragraph.text}
         </p>,
      );
   });
   flushBullets();
   return blocks;
};

// picks which icon to show from the link text EX: "Code on GitHub" gets the github icon
const linkIcon = (link: ProjectLink) => {
   const text = link.text.toLowerCase();
   if (text.includes("github") || text.includes("code")) return <GithubIcon />;
   if (text.includes("demo") || text.includes("video")) return <PlayIcon />;
   return <ArrowUpRightIcon />;
};

const ProjectCard = ({ project, featured }: { project: ProjectItem; featured: boolean }) => {
   const onSpotlightMove = useSpotlight();

   return (
      <motion.article
         className={`${ui.card} ${styles.card} ${featured ? styles.featured : ""}`}
         variants={revealCard}
         whileHover={{ y: -6, transition: softSpring }}
         onMouseMove={onSpotlightMove}
      >
         <a
            href={project.projectLinks[0]?.url}
            target="_blank"
            rel="noreferrer"
            className={styles.imageLink}
            tabIndex={-1}
            aria-hidden="true"
         >
            <img src={project.projectImg} alt="" className={styles.image} loading="lazy" />
         </a>

         <div className={styles.body}>
            <h3 className={styles.name}>{project.projectName}</h3>
            <ul role="list" className={styles.tags} aria-label="Built with">
               {project.projectTags.map((tag) => (
                  <li key={tag} className={ui.chip}>
                     {tag}
                  </li>
               ))}
            </ul>
            <div className={styles.desc}>
               {featured ? renderDescription(project.projectDesc) : <p>{project.projectDesc[0]?.text}</p>}
            </div>
            <ul role="list" className={styles.links}>
               {project.projectLinks.map((link, i) => (
                  <li key={link.url}>
                     <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`${ui.btn} ${i === 0 ? ui.btnPrimary : ui.btnGhost} ${styles.linkBtn}`}
                     >
                        {linkIcon(link)}
                        {link.text}
                        <span className="sr-only"> for {project.projectName} (opens in a new tab)</span>
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </motion.article>
   );
};

const Projects = ({ projects }: ProjectsProps) => {
   return (
      <Section id="work" title="Selected work" note="Personal projects I designed, built and shipped outside my job." alt>
         <motion.div
            className={styles.grid}
            variants={revealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
         >
            {projects.map((project, index) => (
               // the first project shows big (featured), the rest go in 2 columns
               <ProjectCard key={project.projectName} project={project} featured={index === 0} />
            ))}
         </motion.div>
      </Section>
   );
};

export default Projects;
