import styles from "./Cert.module.css";

import { SectionAppearFadeEffect } from "../Effects/ImageEffectsAndOtherEffects";
import { useRef } from "react";

interface CertsProps {
   id: number;
   certName: string;
   certImg: string;
   certProvider: string;
}
interface CertsArray {
   certData: CertsProps[];
}

const Certs = ({ certData }: CertsArray) => {
   const sectionRef = useRef<HTMLDivElement>(null);

   SectionAppearFadeEffect(sectionRef, styles.visible);

   return (
      <section>
         <div className={styles.certSection} ref={sectionRef}>
            <h2 className={styles.certTitle}>Certifications</h2>
            <div className={styles.certCon}>
               {certData.map((cert) => {
                  return (
                     <div key={cert.id} className={styles.indivCertBox}>
                        <div className={styles.certDetails}>
                           <h3 className={styles.certTitleName}>{cert.certName}</h3>
                           <h4 className={styles.certProv}>{cert.certProvider}</h4>
                        </div>
                        <div className={styles.certImgBox}>
                           <img
                              className={styles.certImg}
                              src={cert.certImg}
                              alt={`${cert.certName} From ${cert.certProvider}`}
                           />
                        </div>
                     </div>
                  );
               })}
            </div>
            <div className={styles.bottomCerBlur}></div>
         </div>
      </section>
   );
};

export default Certs;
