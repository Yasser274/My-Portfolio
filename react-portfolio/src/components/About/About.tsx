import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import {ImageEffects} from "../Effects/ImageEffectsAndOtherEffects";
import { useEffect,useRef } from "react";


const About = () => {
   const sectionRef = useRef<HTMLElement>(null);

   // effect when components becomes visible after scroll
   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add(styles.visible);
                  observer.unobserve(entry.target); // Stop observing once visible
               }
            });
         },
         { threshold: 0.1 } // Trigger when 10% of section is visible
      );

      if (sectionRef.current) {
         observer.observe(sectionRef.current);
      }

      // Cleanup observer on unmount
      return () => {
         if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
         }
      };
   }, []);
   return (
      <section className={styles.aboutSect} id="about" ref={sectionRef}>
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
