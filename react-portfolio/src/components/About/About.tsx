import styles from "./About.module.css";
import { getImageUrl } from "../../utils/imageUtils";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/animationVariants";
import layoutStyle from "../Layout.module.css";

const About = () => {
   return (
      <motion.section
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.15 }}
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
                     img: "marketing.png",
                     title: "Marketing",
                     p: "Crafting compelling campaigns and understanding consumer behavior",
                  },
                  {
                     img: "analytics.png",
                     title: "Analytics",
                     p: "Using data insights to optimize marketing efforts and measure success",
                  },
                  {
                     img: "technology.png",
                     title: "Technology",
                     p: "Using data insights to optimize marketing efforts and measure success",
                  },
               ].map((item, index) => (
                  <motion.li
                     key={index}
                     variants={itemVariants}
                     whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                     <img src={getImageUrl(`about/${item.img}`)} alt="" className={styles.smallImgs} />
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
