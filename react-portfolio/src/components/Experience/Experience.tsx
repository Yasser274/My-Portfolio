import styles from "./Experience.module.css";
// import { getImageUrl } from "../../utils";
import IndividualExp from "./IndividualExp";
import JobExperiences from "./JobExperiences";
import { useRef } from "react";
import { SectionAppearFadeEffect } from "../Effects/ImageEffectsAndOtherEffects";

interface ExperienceItem {
   image: string;
   title: string | number;
   cert?: string;
   moreInfo?: string;
}
interface JobExperienceItem {
   jobTitle: string;
   companyName: string;
   companyLogo: string;
   date: string;
   points: string[];
}

interface ExperienceAndJobsProps {
   experiences: ExperienceItem[]; // Array of experience objects
   jobsExperiences: JobExperienceItem[];
}

const Experience: React.FC<ExperienceAndJobsProps> = ({ experiences, jobsExperiences }) => {
   const sectionRef = useRef<HTMLElement>(null);

   SectionAppearFadeEffect(sectionRef, styles.visible);

   return (
      <section id="experience" className={styles.sectionExp} ref={sectionRef}>
         <h2 className={styles.bigTitle}>Experience & Skills</h2>
         <div className={styles.expCon}>
            {/* go through an array and for how many there is return one by one */}
            <div className={styles.leftExp}>
               {experiences.map((exp: ExperienceItem, index: number) => {
                  return (
                     <IndividualExp
                        key={index} // Unique key for each item
                        image={exp.image}
                        title={exp.title}
                        cert={exp.cert}
                        moreInfo={exp.moreInfo}
                     ></IndividualExp>
                  );
               })}
            </div>
            <div className={styles.rightExp}>
               {jobsExperiences.map((job: JobExperienceItem, index: number) => {
                  return (
                     <JobExperiences
                        key={index}
                        jobTitle={job.jobTitle}
                        companyLogo={job.companyLogo}
                        companyName={job.companyName}
                        points={job.points}
                        date={job.date}
                     ></JobExperiences>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Experience;
