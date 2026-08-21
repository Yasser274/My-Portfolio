import { getImageUrl } from "../../utils/imageUtils";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/animationVariants";
import layoutStyle from "../Layout.module.css";
import useViewAmount from "../../utils/useViewAmount";

const Hero = () => {
   const viewAmount = useViewAmount();

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
               I bridge the gap between business strategy, data analytics, and technical architecture. From
               scoping enterprise requirements and analyzing user behavior to engineering scalable digital
               platforms, I build solutions that drive measurable business impact.{" "}
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

         <motion.div variants={itemVariants} className={styles.avatarWrap}>
            <motion.img
               src={getImageUrl("hero/Avatar.png")}
               alt="Profile Picture"
               className={styles.avatarPic}
               animate={{ y: [-9, 9, -9], rotate: [-1.2, 1.2, -1.2] }}
               transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
               }}
            />
         </motion.div>

         <div className={styles.topBlur}></div>
         <div className={styles.bottomBlur}></div>
      </motion.section>
   );
};

export default Hero;
