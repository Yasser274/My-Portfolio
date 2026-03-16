import { getImageUrl } from "../../utils/imageUtils";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/animationVariants";
import layoutStyle from "../Layout.module.css";
import useViewAmount from "../../utils/useViewAmount";


const Hero = () => {
   const viewAmount = useViewAmount()

   return (
      // Make the outer section the animation root
      <motion.section
         className={`${styles.sectionM} ${layoutStyle.sectionPart}`}
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: viewAmount }}
      >
         <motion.div variants={containerVariants} className={styles.cont}>
            <motion.div className={styles.nameCon} variants={itemVariants}>
               <h1 className={styles.intro}>
                  Hi, I'm<span className={styles.myName}>Yasser</span>
               </h1>
            </motion.div>

            <motion.p variants={itemVariants} className={styles.desc}>
               I blend marketing expertise, data-driven analytics, and web development skills to create
               impactful digital experiences. By leveraging technology, I craft user-friendly websites while
               using analytics to optimize strategies for better engagement and growth.
            </motion.p>

            <motion.a
               variants={itemVariants}
               href="mailto:yasserals10@gmail.com"
               className={styles.contactBtn}
               whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
               Contact Me
            </motion.a>
         </motion.div>

         <motion.img
            src={getImageUrl("hero/Avatar.png")}
            alt="Profile Picture"
            className={styles.avatarPic}
            variants={itemVariants}
         />

         <div className={styles.topBlur}></div>
         <div className={styles.bottomBlur}></div>
      </motion.section>
   );
};

export default Hero;
