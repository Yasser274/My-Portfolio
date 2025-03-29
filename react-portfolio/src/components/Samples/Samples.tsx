import styles from './Samples.module.css'
import { SectionAppearFadeEffect } from "../Effects/ImageEffectsAndOtherEffects";
import { useRef } from 'react';


const Samples = () => {
  const sectionRef = useRef<HTMLElement>(null)
  SectionAppearFadeEffect(sectionRef,styles.visible)
   return (
      <section id="samples" className={styles.samplesSection} ref={sectionRef}>
         <div className={styles.samplesCon}>
          <h2 className={styles.samplesTitle}>Samples</h2>
         </div>
      </section>
   );
};

export default Samples;
