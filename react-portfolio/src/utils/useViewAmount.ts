import { useState, useEffect } from "react";

// Function Doc (JSDoc comment)
/**
 * Custom hook to return a different scroll trigger amount
 * based on the current window width. (for frame motion appearing animation whether it's desktop or mobile)
 */
export const useViewAmount = (breakpoint = 830) => {
   const [amount, setAmount] = useState(0.3);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth <= breakpoint) {
            setAmount(0.05); // Mobile: Trigger almost immediately
         } else {
            setAmount(0.3); // Desktop: Trigger when 30% visible
         }
      };

      // Set initial value (run the function when the effect is triggered first time)
      handleResize();

      // leave in a listener to run the function anytime user adjust his window's width
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize); // cleanup when user unmounts(leaves the page that has this component)
   }, [breakpoint]);

   return amount;
};

export default useViewAmount;
