import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import ImageEffects from "../Effects/ImageEffects";

const About = () => {
   return (
      <section className={styles.aboutSect} id="about">
         <h2 className={styles.bigTitle}>About</h2>
         <div className={styles.twoBox}>
            <ImageEffects src={getImageUrl("about/About-Img.png")} alt="About Me"/>
            <ul className={styles.aboutsCon}>
               <li>
                  <img src={getImageUrl("about/analytics.png")} alt="" className={styles.smallImgs} />
                  <div className={styles.smallCons}>
                     <h3 className={styles.smallTitle}>kgsijhtehko</h3>
                     <p>hehmetkop hme ophmeoth meitph metiphi</p>
                  </div>
               </li>
               <li>
                  <img src={getImageUrl("about/analytics.png")} alt="" className={styles.smallImgs} />
                  <div className={styles.smallCons}>
                     <h3 className={styles.smallTitle}>kgsijhtehko</h3>
                     <p>hehmetkop hme ophmeoth meitph metiphi</p>
                  </div>
               </li>
               <li>
                  <img src={getImageUrl("about/analytics.png")} alt="" className={styles.smallImgs} />
                  <div className={styles.smallCons}>
                     <h3 className={styles.smallTitle}>kgsijhtehko</h3>
                     <p>hehmetkop hme ophmeoth meitph metiphi</p>
                  </div>
               </li>
            </ul>
         </div>
      </section>
   );
};

export default About;
