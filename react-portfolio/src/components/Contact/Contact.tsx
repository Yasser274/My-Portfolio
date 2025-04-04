import styles from "../Experience/Experience.module.css";
import { getImageUrl } from "../../utils/imageUtils"; 

const Contact = () => {
   return (
      <section id="contact" className={styles.sectionContact}>
         <div className={styles.contactBigCon}>
            <div className={styles.contactLeftCon}>
               <h2 className={styles.contactTitle}>Contact</h2>
            </div>
            <div className={styles.contactRightCon}>
               <div className={styles.contactRightBox}>
                  <img
                     src={getImageUrl("contact/mail-ICO.svg")}
                     alt="Email Icon"
                     className={`${styles.contactIcons} ${styles.white}`}
                  />
                  <address className={styles.contactInfo}>yasserals10@gmail.com</address>
               </div>
               <div className={styles.contactRightBox}>
                  <img
                     src={getImageUrl("contact/linkedin-ICO.svg")}
                     alt="Linkedin Icon"
                     className={styles.contactIcons}
                  />
                  <a href="https://www.linkedin.com/in/yasser-a-b65a8723b/">
                     <address className={styles.contactInfo}>Yasser A</address>
                  </a>
               </div>
               <div className={styles.contactRightBox}>
                  <img
                     src={getImageUrl("contact/github-ICO.svg")}
                     alt="Github Icon"
                     className={`${styles.contactIcons} ${styles.white}`}
                  />
                  <a href="https://github.com/Yasser274">
                     <address className={styles.contactInfo}>Yasser274</address>
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;
