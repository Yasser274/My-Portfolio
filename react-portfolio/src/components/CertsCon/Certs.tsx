import styles from "./Cert.module.css";

import { SectionAppearFadeEffect } from "../Effects/ImageEffectsAndOtherEffects";
import { useRef } from "react";
import { GlowingCard, GlowingCards } from "../common/GlowingCards";

interface CertsProps {
   id: number;
   certName: string;
   certImg: string;
   certProvider: string;
   glowColor: string;
}
interface CertsArray {
   certData: CertsProps[];
}

const Certs = ({ certData }: CertsArray) => {
   const sectionRef = useRef<HTMLDivElement>(null);

   SectionAppearFadeEffect(sectionRef, styles.visible);

   return (
      <section>
         <div className={styles.certSection} ref={sectionRef} id="certifications">
            <h2 className={styles.certTitle}>Certifications</h2>
            <GlowingCards>
               {certData.map((cert) => {
                  return (
                     <GlowingCard key={cert.id} glowColor={cert.glowColor}>
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
                     </GlowingCard>
                  );
               })}
            </GlowingCards>
            <div className={styles.bottomCerBlur}></div>
         </div>
      </section>
   );
};

export default Certs;
