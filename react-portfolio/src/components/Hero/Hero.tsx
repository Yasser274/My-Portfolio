import { getImageUrl } from "../../utils/imageUtils";
import styles from "./Hero.module.css";

const Hero = () => {
   return (
      <section className={styles.sectionM}>
         <div className={styles.cont}>
            <div className={styles.nameCon}>
               <h1 className={styles.intro}>
                  Hi, I'm<span className={styles.myName}>Yasser</span>
               </h1>
            </div>
            <p className={styles.desc}>
               I blend marketing expertise, data-driven analytics, and web development skills to create
               impactful digital experiences. By leveraging technology, I craft user-friendly websites while
               using analytics to optimize strategies for better engagement and growth.
            </p>
            <a href="mailto:yasserals10@gmail.com" className={styles.contactBtn}>
               Contact Me
            </a>
         </div>
         <img src={getImageUrl("hero/Avatar.png")} alt="Profile Picture" className={styles.avatarPic} />

         <div className={styles.topBlur}></div>
         <div className={styles.bottomBlur}></div>
      </section>
   );
};

export default Hero;
