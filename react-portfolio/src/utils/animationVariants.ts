import { Variants } from "framer-motion";

export const containerVariants: Variants = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.15,
         delayChildren: 0.1,
         // Ensures children don't all fire at once
         when: "beforeChildren",
      },
   },
};

export const itemVariants: Variants = {
   hidden: {
      opacity: 0,
      y: 30,
      // Removed filter blur — it's expensive and can cause
      //    janky rendering, especially with backdrop-filter on the parent
      scale: 0.97,
   },
   visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
         duration: 0.6,
         ease: [0.25, 0.1, 0.25, 1], // cubic-bezier — smooth deceleration
      },
   },
};