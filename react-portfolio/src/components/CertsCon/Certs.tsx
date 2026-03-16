import styles from "./Cert.module.css";

import { GlowingCard, GlowingCards } from "../common/GlowingCards";
import { motion } from "framer-motion";
import layoutStyle from "../Layout.module.css";
import { containerVariants, itemVariants } from "../../utils/animationVariants";
import useViewAmount from "../../utils/useViewAmount";

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

   const viewAmount = useViewAmount()

   return (
      <section>
         <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewAmount }}
            className={`${styles.certSection} ${layoutStyle.sectionPart} `}
            id="certifications"
         >
            <h2 className={styles.certTitle}>Certifications</h2>
            <GlowingCards>
               {certData.map((cert) => {
                  return (
                     <motion.div variants={itemVariants}>
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
                     </motion.div>
                  );
               })}
            </GlowingCards>
            <div className={styles.bottomCerBlur}></div>
         </motion.div>
      </section>
   );
};

export default Certs;
