import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

interface JobExperienceProps {
   jobTitle: string;
   companyName: string;
   companyLogo: string;
   date: string;
   points: string[]; // an array of strings
}

const MakeJobItem: React.FC<JobExperienceProps> = ({ companyName, companyLogo, jobTitle, date, points }) => {
   return (
      <>
         <div className={styles.jobLogoCon}>
            <img src={companyLogo} alt={`The logo of the company ${companyName}`} />
         </div>
         <div className={styles.jobContentCon}>
            <h3 className={styles.jobContent}>
               {jobTitle},{companyName}
            </h3>
            <p className={styles.jobDuration}>{date}</p>
            <ul className={styles.jobPoints}>
               {/* Go through the points array and make an li for each one and filling whats inside it about the index it's required to have a key in TypeScript */}
               {points.map((point: string, index: number) => (
                  <li key={index} className={styles.pointItem}>
                     {point}
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
};

const JobExperiences: React.FC<JobExperienceProps> = ({
   companyName,
   companyLogo,
   date,
   points,
   jobTitle,
}) => {
   return (
      <div className={styles.jobCon}>
         {/* if these below are empty it renders the another div with h4 if not it calls a function that renders jobsExp */}
         {companyName && companyLogo && date && points && jobTitle ? (
            <>{MakeJobItem({ companyName, companyLogo, jobTitle, date, points })}</>
         ) : (
            <div className={styles.emptyJobExp}>
               <h4>Currently seeking job opportunities</h4>
            </div>
         )}
      </div>
   );
};

export default JobExperiences;
