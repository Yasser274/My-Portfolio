import styles from "./About.module.css";
import { getImageUrl } from "../../utils/imageUtils";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/animationVariants";
import layoutStyle from "../Layout.module.css";
import useViewAmount from "../../utils/useViewAmount";

// Vector components
import SharePoint_Icon from "../../assets/about/sharepoint-svg";
import FullStack_Icon from "../../assets/about/fullstack-svg";
import CloudData_Icon from "../../assets/about/clouddata-svg";

const About = () => {
   const viewAmount = useViewAmount();

   const aboutCards = [
      {
         icon: <SharePoint_Icon width={95} height={95} primaryColor="#161616" accentColor="#6f99b6" />,
         title: "Microsoft 365 & SharePoint",
         p: "Building SPFx web parts with React, TypeScript and Fluent UI, integrated with Microsoft Graph, Azure AD and Power Automate.",
      },
      {
         icon: <FullStack_Icon width={90} height={90} primaryColor="#161616" accentColor="#6f99b6" />,
         title: "Full-Stack Web",
         p: "Building responsive web apps with React, Node.js, Express and PostgreSQL, from authentication to database design.",
      },
      {
         icon: <CloudData_Icon width={90} height={90} primaryColor="#161616" accentColor="#6f99b6" />,
         title: "Cloud & Data",
         p: "AWS Certified Cloud Practitioner preparing for Solutions Architect Associate, with SQL, Python and Power BI for data work.",
      },
   ];

   return (
      <motion.section
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: viewAmount }}
         className={`${styles.aboutSect} ${layoutStyle.sectionPart}`}
         id="about"
      >
         <motion.h2 variants={itemVariants} className={styles.bigTitle}>
            About
         </motion.h2>

         <motion.div variants={containerVariants} className={styles.twoBox}>
            <motion.div
               variants={itemVariants}
               className={styles.aboutImgContainer}
               style={{ flex: 1, display: "flex", justifyContent: "center" }}
            >
               <img src={getImageUrl("about/About-Img.png")} alt="About Me" className={styles.aboutImg} />
            </motion.div>

            <motion.ul variants={containerVariants} className={styles.aboutsCon}>
               {aboutCards.map((item, index) => (
                  <motion.li
                     key={index}
                     variants={itemVariants}
                     whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                     <div
                        className={styles.smallImgs}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                     >
                        {item.icon}
                     </div>
                     <div className={styles.smallCons}>
                        <h3 className={styles.smallTitle}>{item.title}</h3>
                        <p>{item.p}</p>
                     </div>
                  </motion.li>
               ))}
            </motion.ul>
         </motion.div>
      </motion.section>
   );
};

export default About;
