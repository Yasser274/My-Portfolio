import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import ui from "@/styles/ui.module.css";
import Section from "@/components/ui/Section";
import useSpotlight from "@/hooks/useSpotlight";
import { revealContainer, revealCard, inViewOnce, softSpring, easeOut } from "@/utils/animationVariants";
import type { SkillGroup } from "@/types";

interface SkillsProps {
   groups: SkillGroup[];
}

const SkillCard = ({ group }: { group: SkillGroup }) => {
   const onSpotlightMove = useSpotlight();
   return (
      <motion.div className={`${ui.card} ${styles.card}`} variants={revealCard} onMouseMove={onSpotlightMove}>
         <h3 className={styles.groupName}>{group.group}</h3>
         <motion.ul
            role="list"
            className={styles.list}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
         >
            {group.items.map((skill) => (
               <motion.li
                  key={skill.name}
                  className={styles.skill}
                  title={skill.note}
                  variants={{
                     hidden: { opacity: 0, y: 8 },
                     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
                  }}
                  whileHover={{ y: -2, transition: softSpring }}
               >
                  {skill.name}
                  {skill.cert ? (
                     <a href={skill.cert} target="_blank" rel="noreferrer" className={styles.extra}>
                        cert<span className="sr-only">ificate for {skill.name}</span>
                     </a>
                  ) : null}
                  {skill.video ? (
                     <a href={skill.video} target="_blank" rel="noreferrer" className={styles.extra}>
                        demo<span className="sr-only"> video for {skill.name}</span>
                     </a>
                  ) : null}
               </motion.li>
            ))}
         </motion.ul>
      </motion.div>
   );
};

const Skills = ({ groups }: SkillsProps) => {
   return (
      <Section id="skills" title="Skills" note="The tools I use at work and on my own projects." alt>
         <motion.div
            className={styles.grid}
            variants={revealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
         >
            {groups.map((group) => (
               <SkillCard key={group.group} group={group} />
            ))}
         </motion.div>
      </Section>
   );
};

export default Skills;
