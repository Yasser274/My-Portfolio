import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./Experience.module.css";
import Section from "@/components/ui/Section";
import JobCard from "./JobCard";
import type { JobItem } from "@/types";

interface ExperienceProps {
   jobs: JobItem[];
}

const Experience = ({ jobs }: ExperienceProps) => {
   const timelineRef = useRef<HTMLOListElement>(null);
   // the teal line fills from the top as you scroll through the timeline
   // offset = start filling when the top of the list hits 70% of the screen, finish when the bottom hits 60%
   const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 70%", "end 60%"] });
   const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

   return (
      <Section id="experience" title="Experience" note="Newest first. Open a role to see what I worked on.">
         <ol role="list" className={styles.timeline} ref={timelineRef}>
            <span className={styles.track} aria-hidden="true">
               <motion.span className={styles.trackFill} style={{ scaleY: fill }} />
            </span>
            {jobs.map((job, index) => (
               // my current job starts open and the older ones start closed
               <JobCard key={`${job.companyName}-${job.date}`} job={job} defaultOpen={index === 0} current={index === 0} />
            ))}
         </ol>
      </Section>
   );
};

export default Experience;
