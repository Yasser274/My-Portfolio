import styles from "./About.module.css";
import { getImageUrl } from "../../utils/imageUtils";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/animationVariants";
import layoutStyle from "../Layout.module.css";
import useViewAmount from "../../utils/useViewAmount";
import Workflow_Icon from "../../assets/about/workflow-svg";

const About = () => {
   const viewAmount = useViewAmount();
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

         {/* ✅ Changed from <div> to <motion.div> with containerVariants */}
         <motion.div variants={containerVariants} className={styles.twoBox}>
            <motion.div
               variants={itemVariants}
               className={styles.aboutImgContainer}
               style={{ flex: 1, display: "flex", justifyContent: "center" }}
            >
               <img src={getImageUrl("about/About-Img.png")} alt="About Me" className={styles.aboutImg} />
            </motion.div>

            {/* ✅ Changed from <ul> to <motion.ul> with containerVariants */}
            <motion.ul variants={containerVariants} className={styles.aboutsCon}>
               {[
                  {
                     img: <Workflow_Icon width={120} height={120} primaryColor={"#161616"} />,
                     title: "Product & Solutions",
                     p: "Translating complex enterprise requirements and RFPs into scalable digital products.",
                  },
                  {
                     img: "analytics.png",
                     title: "Analytics",
                     p: "Leveraging SQL, Power BI, and GA4 to map user journeys, track funnels, and optimize growth.",
                  },
                  {
                     img: "technology.png",
                     title: "Architecture & Code",
                     p: "Engineering modern web platforms, REST APIs, and cloud-ready systems with TypeScript.",
                  },
               ].map((item, index) => (
                  <motion.li
                     key={index}
                     variants={itemVariants}
                     whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                     {/* Check if image is passed in or svg */}
                     {typeof item.img === "string" ? (
                        <img
                           src={getImageUrl(`about/${item.img}`)}
                           alt={item.title}
                           className={styles.smallImgs}
                        />
                     ) : (
                        <div
                           className={styles.smallImgs}
                           style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                        >
                           {item.img}
                        </div>
                     )}
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
