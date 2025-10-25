import { motion } from "framer-motion";
import { ReactNode } from "react";

// Define the animation properties. We can have different animations.
const animations = {
   initial: { opacity: 0, x: -100 }, // Start invisible and 100px to the left
   animate: { opacity: 1, x: 0 }, // Animate to fully visible at its original position
   exit: { opacity: 0, x: 100 }, // Animate out by fading and moving 100px to the right
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
         transition={{ duration: 0.5 }} // Control the speed of the animation
      >
         {children}
      </motion.div>
   );
};

export default AnimatedPage;
