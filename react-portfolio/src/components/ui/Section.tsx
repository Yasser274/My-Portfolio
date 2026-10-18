import { ReactNode } from "react";
import { motion } from "framer-motion";
import layout from "@/styles/section.module.css";
import { revealUp, revealContainer, inViewOnce } from "@/utils/animationVariants";

interface SectionProps {
   id: string; // the navbar links use this EX: /#work
   title: string;
   note?: string; // the small line under the title
   children: ReactNode;
   alt?: boolean; // true = slightly lighter grey background (so sections don't all look the same)
   className?: string;
}

// every section on the home page uses this, the title and note animate in when you scroll to them
// children = whatever i put between <Section> and </Section>
const Section = ({ id, title, note, children, alt = false, className }: SectionProps) => {
   return (
      <section
         id={id}
         className={`${layout.section} ${alt ? layout.sectionAlt : ""} ${className ?? ""}`}
         aria-labelledby={`${id}-title`}
      >
         <div className={layout.container}>
            <motion.header
               className={layout.sectionHead}
               variants={revealContainer}
               initial="hidden"
               whileInView="visible"
               viewport={inViewOnce}
            >
               <motion.h2 id={`${id}-title`} className={layout.sectionTitle} variants={revealUp}>
                  {title}
               </motion.h2>
               {note ? (
                  <motion.p className={layout.sectionNote} variants={revealUp}>
                     {note}
                  </motion.p>
               ) : null}
            </motion.header>
            {children}
         </div>
      </section>
   );
};

export default Section;
