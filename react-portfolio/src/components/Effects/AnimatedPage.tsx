import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// Define the animation properties. We can have different animations.
const animations: Variants = {
   // when it just starts loading
   initial: {
      opacity: 0,
      filter: "blur(20px)",
      scale: 1.02, // Slight scale up for a "zooming in" feel
   },
   // when page finishes loading
   animate: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
   },
   // when i switch to another page
   exit: {
      opacity: 0,
      filter: "blur(20px)",
      scale: 0.98, // Slight scale down as it leaves
   },
};
interface AnimatedPageProps {
   children: ReactNode; // ✅ anything React can render
}

const AnimatedPage = ({ children }: AnimatedPageProps) => {
   return (
      // This is the core of Framer Motion. It's a regular div but with animation superpowers.
      <motion.div
         variants={animations} // This object defines the different states of our animation (initial, animate, exit).
         initial="initial" // Tells the component to start with the styles defined in variants.initial.
         animate="animate" // When the component mounts (appears on the page), it will animate to the styles in variants.animate.
         exit="exit" // When the component unmounts (leaves the page), it will perform the exit animation before being removed.
         transition={{ duration: 0.4 }} // Control the speed of the animation
      >
         {children}
      </motion.div>
   );
};

export default AnimatedPage;
