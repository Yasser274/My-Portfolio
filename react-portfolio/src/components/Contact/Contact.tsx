import styles from "../Experience/Experience.module.css";
import { getImageUrl } from "../../utils/imageUtils";

const Contact = () => {
   return (
      <section id="contact" className={styles.sectionContact}>
         <div className={styles.contactBigCon}>
            <div className={styles.upperContact}>
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
               </div>
            </div>
            <div className={styles.bottomContact}>
               <div className={styles.contactRightBox}>
                  <a href="https://www.linkedin.com/in/yasser-alsuwaid-b65a8723b/" className={styles.accountLinks}>
                     <img
                        src={getImageUrl("contact/linkedin-ICO.svg")}
                        alt="Linkedin Icon"
                        className={styles.contactIcons}
                     />
                  </a>
               </div>
               <div className={styles.contactRightBox}>
                  <a href="https://github.com/Yasser274" className={styles.accountLinks}>
                     <img
                        src={getImageUrl("contact/github-ICO.svg")}
                        alt="Github Icon"
                        className={`${styles.contactIcons} ${styles.white}`}
                     />
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;
