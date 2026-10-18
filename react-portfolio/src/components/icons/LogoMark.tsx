import { useId } from "react";
import { motion } from "framer-motion";
import styles from "./LogoMark.module.css";
import { easeOut } from "@/utils/animationVariants";

interface LogoMarkProps {
   size?: number;
   className?: string;
}

//? my YA logo, the Y and the A share the same diagonal line so it looks like one mark instead of 2 letters
// when the page loads the outline and the letters draw themselves in (pathLength goes from 0 to 1)
// and when you hover the navbar logo the outline turns 60deg (a hexagon looks the same every 60deg so only the gradient moves)
const LogoMark = ({ size = 40, className }: LogoMarkProps) => {
   // useId so the gradient ids are unique, if the logo is on the page twice they won't clash
   const id = useId().replace(/:/g, "");
   const accentId = `ya-accent-${id}`;
   const bgId = `ya-bg-${id}`;

   // each letter stroke draws in one after another
   const draw = (delay: number) => ({
      initial: { pathLength: 0, opacity: 0 },
      animate: { pathLength: 1, opacity: 1 },
      transition: { pathLength: { duration: 0.7, ease: easeOut, delay }, opacity: { duration: 0.2, delay } },
   });

   return (
      <svg
         width={size}
         height={size}
         viewBox="0 0 44 44"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={`${styles.logo} ${className ?? ""}`}
         aria-hidden="true"
      >
         <defs>
            {/* userSpaceOnUse is important, without it the gradient disappears on perfectly straight lines (the stem and the crossbar) */}
            {/* the colors are in style={{}} so they can use the theme.css variables (stopColor="" can't read var()) */}
            <linearGradient id={accentId} gradientUnits="userSpaceOnUse" x1="4" y1="4" x2="40" y2="40">
               <stop offset="0" style={{ stopColor: "var(--gradient-stop-3)" }} />
               <stop offset="0.5" style={{ stopColor: "var(--gradient-stop-1)" }} />
               <stop offset="1" style={{ stopColor: "var(--color-accent-strong)" }} />
            </linearGradient>
            <linearGradient id={bgId} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="44" y2="44">
               <stop offset="0" style={{ stopColor: "var(--color-surface-2)" }} />
               <stop offset="1" style={{ stopColor: "var(--color-bg-alt)" }} />
            </linearGradient>
         </defs>

         {/* the hexagon (rounded corners) */}
         <path
            d="M22 2.6 Q23.2 2.6 24.2 3.2 L37.6 10.9 Q39.6 12.1 39.6 14.4 V29.6 Q39.6 31.9 37.6 33.1 L24.2 40.8 Q22 42 19.8 40.8 L6.4 33.1 Q4.4 31.9 4.4 29.6 V14.4 Q4.4 12.1 6.4 10.9 L19.8 3.2 Q20.8 2.6 22 2.6 Z"
            fill={`url(#${bgId})`}
         />
         {/* the outline on its own so it can turn on hover without turning the letters */}
         <motion.path
            className={styles.outline}
            d="M22 2.6 Q23.2 2.6 24.2 3.2 L37.6 10.9 Q39.6 12.1 39.6 14.4 V29.6 Q39.6 31.9 37.6 33.1 L24.2 40.8 Q22 42 19.8 40.8 L6.4 33.1 Q4.4 31.9 4.4 29.6 V14.4 Q4.4 12.1 6.4 10.9 L19.8 3.2 Q20.8 2.6 22 2.6 Z"
            stroke={`url(#${accentId})`}
            strokeWidth="1.6"
            strokeLinecap="round" // closes the tiny gap at the top where the line starts and ends
            {...draw(0)}
            transition={{ pathLength: { duration: 1.1, ease: easeOut }, opacity: { duration: 0.3 } }}
         />

         {/* the letters */}
         <g style={{ stroke: "var(--color-text)" }} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <motion.path d="M12.5 13.5 L18.6 21.6" {...draw(0.35)} /> {/* Y left arm */}
            <motion.path d="M24.6 13 L15 31" {...draw(0.45)} /> {/* the shared line (Y right arm + A left leg) */}
            <motion.path d="M18.6 21.6 V31" {...draw(0.6)} /> {/* Y stem */}
            <motion.path d="M24.6 13 L31.5 31" {...draw(0.6)} /> {/* A right leg */}
         </g>
         {/* the A crossbar in the accent color */}
         <motion.path d="M22.8 26 H28.6" stroke={`url(#${accentId})`} strokeWidth="2.8" strokeLinecap="round" {...draw(0.8)} />
      </svg>
   );
};

export default LogoMark;
