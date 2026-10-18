import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Experience.module.css";
import ui from "@/styles/ui.module.css";
import type { JobItem } from "@/types";
import { openTransition, revealCard, inViewOnce, easeOut } from "@/utils/animationVariants";
import useSpotlight from "@/hooks/useSpotlight";

interface JobCardProps {
   job: JobItem;
   defaultOpen?: boolean;
   current?: boolean; // my job right now, gets the "Current" tag and the glowing dot
}

const JobCard = ({ job, defaultOpen = false, current = false }: JobCardProps) => {
   const [open, setOpen] = useState<boolean>(defaultOpen);
   const pointsId = useId();
   const onSpotlightMove = useSpotlight();

   return (
      <motion.li
         className={styles.job}
         variants={revealCard}
         initial="hidden"
         whileInView="visible"
         viewport={inViewOnce}
      >
         {/* the dot on the timeline line, pops in when you scroll to it */}
         <motion.span
            className={`${styles.dot} ${current ? styles.dotCurrent : ""}`}
            aria-hidden="true"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
         />

         <div className={`${ui.card} ${styles.card} ${open ? styles.cardOpen : ""}`} onMouseMove={onSpotlightMove}>
            <button
               type="button"
               className={styles.jobToggle}
               aria-expanded={open}
               aria-controls={pointsId}
               onClick={() => setOpen((o) => !o)}
            >
               <span className={styles.jobHead}>
                  <span className={styles.meta}>
                     <span className={styles.date}>{job.date}</span>
                     {current ? <span className={styles.currentTag}>Current</span> : null}
                  </span>
                  <span className={styles.jobTitle}>{job.jobTitle}</span>
                  <span className={styles.company}>{job.companyName}</span>
               </span>
               {/* the + rotates into an x when it's open */}
               <motion.span
                  className={styles.toggleIcon}
                  aria-hidden="true"
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={openTransition}
               >
                  +
               </motion.span>
            </button>

            <AnimatePresence initial={false}>
               {open ? (
                  <motion.div
                     id={pointsId}
                     key="points"
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: "auto", opacity: 1, transition: { height: openTransition, opacity: { duration: 0.35, delay: 0.1 } } }}
                     exit={{ height: 0, opacity: 0, transition: { height: openTransition, opacity: { duration: 0.2 } } }}
                     style={{ overflow: "hidden" }}
                  >
                     {/* Go through the points array and make an li for each one */}
                     <motion.ul
                        className={styles.points}
                        initial="hidden"
                        animate="visible"
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
                     >
                        {job.points.map((point: string, index: number) => (
                           <motion.li
                              key={index}
                              variants={{
                                 hidden: { opacity: 0, x: -8 },
                                 visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: easeOut } },
                              }}
                           >
                              {point}
                           </motion.li>
                        ))}
                     </motion.ul>
                  </motion.div>
               ) : null}
            </AnimatePresence>
         </div>
      </motion.li>
   );
};

export default JobCard;
