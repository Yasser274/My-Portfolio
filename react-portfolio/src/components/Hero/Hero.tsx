import { getImageUrl } from "../../utils";
import styles from './Hero.module.css'

const Hero = () => {
   return (
      <section className={styles.sectionM}>
         <div className={styles.cont}>
            <h1 className={styles.intro}>Hi, I'm Yasser</h1>
            <p className={styles.desc}>About me Later on</p>
            <a href="mailto:yasserals10@gmail.com" className={styles.contactBtn}>Contact Me</a>
         </div>
         <img src={getImageUrl('hero/Avatar.png')} alt="Profile Picture" className={styles.avatarPic}/>

         <div className={styles.topBlur}></div>
         <div className={styles.bottomBlur}></div>
      </section>
   );
};

export default Hero;
