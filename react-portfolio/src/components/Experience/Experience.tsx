import styles from "./Experience.module.css";
import layoutStyle from "../Layout.module.css";
import IndividualExp from "./IndividualExp";
import JobExperiences from "./JobExperiences";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/animationVariants";
import useViewAmount from "../../utils/useViewAmount";

interface ExperienceItem {
   image: string;
   title: string | number;
   cert?: string;
   moreInfo?: string;
   video?: string;
   smallTitle?: string;
}
interface JobExperienceItem {
   jobTitle: string;
   companyName: string;
   companyLogo: string;
   date: string;
   points: string[];
}

interface ExperienceAndJobsProps {
   experiences: ExperienceItem[];
   jobsExperiences: JobExperienceItem[];
}

const Experience = ({ experiences, jobsExperiences }: ExperienceAndJobsProps) => {
   const viewAmount = useViewAmount();

   return (
      <motion.section
         id="experience"
         className={layoutStyle.sectionPart}
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: viewAmount }} //  change amount to control when the appearing animation should start
      >
         {/* Child 1: The Title */}
         <motion.h2 variants={itemVariants} className={styles.bigTitle}>
            Experience & Skills
         </motion.h2>

         <div className={styles.expCon}>
            {/* Child 2: The Left Column */}
            <motion.div variants={itemVariants} className={styles.leftExp}>
               {experiences.map((exp: ExperienceItem, index: number) => {
                  return (
                     <IndividualExp
                        key={index}
                        image={exp.image}
                        title={exp.title}
                        cert={exp.cert}
                        moreInfo={exp.moreInfo}
                        video={exp.video}
                        smallTitle={exp.smallTitle}
                     />
                  );
               })}
            </motion.div>

            {/* Child 3: The Right Column */}
            <motion.div variants={itemVariants} className={styles.rightExp}>
               {jobsExperiences.map((job: JobExperienceItem, index: number) => {
                  return (
                     <JobExperiences
                        key={index}
                        jobTitle={job.jobTitle}
                        companyLogo={job.companyLogo}
                        companyName={job.companyName}
                        points={job.points}
                        date={job.date}
                     />
                  );
               })}
            </motion.div>
         </div>

         {/* For the Blue Dot Blur background */}
         <div className={styles.expBlur}></div>
      </motion.section>
   );
};

export default Experience;
