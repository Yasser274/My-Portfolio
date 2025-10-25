// src/components/Effects/StarsBackground.jsx

import styles from "./ImageEffects.module.css";

const StarsBackground = () => {
   // The number of stars can be adjusted. 
   // For more, you could generate this array with a loop.
   const starCount = 7; 
   const starElements = [];

   for (let i = 1; i <= starCount; i++) {
      // Each star gets a base class and a unique modifier class
      starElements.push(<div key={i} className={`${styles.star} ${styles[`star${i}`]}`}></div>);
   }

   return (
      <div className={styles.starsContainer}>
         {starElements}
      </div>
   );
};

export default StarsBackground;