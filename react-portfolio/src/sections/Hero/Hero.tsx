import { useRef, useState, KeyboardEvent, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./Hero.module.css";
import layout from "@/styles/section.module.css";
import ui from "@/styles/ui.module.css";
import { site } from "@/data/siteData";
import { focusAreas } from "@/data/focusData";
import { certsData } from "@/data/certsData";
import { projectsData } from "@/data/projectsData";
import { heroContainer, heroFade, heroLine, easeOut, softSpring } from "@/utils/animationVariants";
import { getImageUrl } from "@/utils/imageUtils";
import CountUp from "@/components/ui/CountUp";
import { GithubIcon, LinkedinIcon } from "@/components/icons/Icons";

// the numbers under the hero (they count up when you scroll to them)
// certs and projects come from the data files so they update by themselves when i add one
const stats = [
   { value: 500, suffix: "+", label: "employees use the intranet I build" },
   { value: certsData.length, suffix: "", label: "certificates, including AWS" },
   { value: projectsData.length, suffix: "", label: "personal projects shipped" },
];

const Hero = () => {
   const [activeIndex, setActiveIndex] = useState<number>(0); // which of the 3 options is picked
   const tabRefs = useRef<(HTMLButtonElement | null)[]>([]); // so the arrow keys can move focus between the buttons
   const active = focusAreas[activeIndex];

   //? the glow that follows the mouse, motion values change without re rendering the component
   // and useSpring makes the glow trail behind the mouse smoothly instead of snapping to it
   // *the glow is a circle that MOVES (transform) instead of redrawing the background every frame,
   // moving with transform is done by the GPU so it doesn't make the other animations stutter
   const mouseX = useMotionValue(800);
   const mouseY = useMotionValue(250);
   const glowX = useSpring(mouseX, { stiffness: 90, damping: 20, mass: 0.6 });
   const glowY = useSpring(mouseY, { stiffness: 90, damping: 20, mass: 0.6 });

   const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
   };

   // left/right arrow keys move between the 3 options (that's how tabs normally work with a keyboard)
   const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      const step = e.key === "ArrowRight" ? 1 : -1;
      const next = (activeIndex + step + focusAreas.length) % focusAreas.length; // % wraps around EX: last -> first
      setActiveIndex(next);
      tabRefs.current[next]?.focus();
   };

   return (
      <section className={styles.hero} onMouseMove={handleMouseMove}>
         {/* ===== Background: grid + the glow that follows the mouse + 2 blurry blobs that move slowly ===== */}
         <div className={styles.bg} aria-hidden="true">
            <div className={styles.grid} />
            <motion.div className={styles.spotlight} style={{ x: glowX, y: glowY }} />
            {/* the blobs move with a css animation (Hero.module.css) so they run on the GPU */}
            <div className={`${styles.blob} ${styles.blobA}`} />
            <div className={`${styles.blob} ${styles.blobB}`} />
         </div>

         <div className={`${layout.container} ${styles.inner}`}>
            {/* everything here animates in order when the page loads: badge, then each headline line, then the rest */}
            <motion.div className={styles.content} variants={heroContainer} initial="hidden" animate="visible">
               <motion.p variants={heroFade} className={styles.badge}>
                  <span className={styles.pulse} aria-hidden="true" />
                  {site.role} at MIS, {site.location.split(",")[0]}
               </motion.p>

               <h1 className={styles.heading}>
                  {/* screen readers still read my name even though it's not shown here */}
                  <span className="sr-only">{site.name}. </span>
                  <span className={styles.lineMask}>
                     <motion.span variants={heroLine} className={styles.line}>
                        I build
                     </motion.span>
                  </span>
                  <span className={styles.lineMask}>
                     <motion.span variants={heroLine} className={styles.line}>
                        {/* this part changes when you pick another option below */}
                        <AnimatePresence mode="wait" initial={false}>
                           <motion.span
                              key={active.id}
                              className={styles.phrase}
                              initial={{ y: "40%", opacity: 0 }}
                              animate={{ y: "0%", opacity: 1 }}
                              exit={{ y: "-40%", opacity: 0 }}
                              transition={{ duration: 0.5, ease: easeOut }}
                           >
                              {active.phrase}
                           </motion.span>
                        </AnimatePresence>
                     </motion.span>
                  </span>
               </h1>

               {/* the 3 options, the teal pill slides under whichever one is picked */}
               <motion.div variants={heroFade} className={styles.tabs} role="tablist" aria-label="What I build">
                  {focusAreas.map((area, index) => {
                     const selected = index === activeIndex;
                     return (
                        <button
                           key={area.id}
                           ref={(el) => {
                              tabRefs.current[index] = el;
                           }}
                           type="button"
                           role="tab"
                           id={`focus-tab-${area.id}`}
                           aria-selected={selected}
                           aria-controls="focus-panel"
                           tabIndex={selected ? 0 : -1}
                           className={`${styles.tab} ${selected ? styles.tabSelected : ""}`}
                           onClick={() => setActiveIndex(index)}
                           onKeyDown={onTabKey}
                        >
                           {/* layoutId makes framer motion slide the same pill from the old button to the new one */}
                           {selected ? <motion.span layoutId="focus-pill" className={styles.tabPill} transition={softSpring} /> : null}
                           <span className={styles.tabText}>
                              <span className={styles.labelLong}>{area.label}</span>
                              <span className={styles.labelShort}>{area.shortLabel}</span>
                           </span>
                        </button>
                     );
                  })}
               </motion.div>

               <motion.div variants={heroFade}>
                  <div
                     id="focus-panel"
                     role="tabpanel"
                     aria-labelledby={`focus-tab-${active.id}`}
                     aria-live="polite"
                     className={styles.panel}
                  >
                     <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                           key={active.id}
                           initial={{ opacity: 0, y: 8 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -6 }}
                           transition={{ duration: 0.35, ease: easeOut }}
                        >
                           <p className={styles.detail}>{active.detail}</p>
                           <motion.ul
                              role="list"
                              className={styles.stack}
                              aria-label="Tools"
                              initial="hidden"
                              animate="visible"
                              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
                           >
                              {active.stack.map((tool) => (
                                 <motion.li
                                    key={tool}
                                    className={ui.chip}
                                    variants={{
                                       hidden: { opacity: 0, y: 6 },
                                       visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
                                    }}
                                 >
                                    {tool}
                                 </motion.li>
                              ))}
                           </motion.ul>
                        </motion.div>
                     </AnimatePresence>
                  </div>
               </motion.div>

               <motion.div variants={heroFade} className={styles.actions}>
                  <Link to={{ pathname: "/", hash: "#contact" }} className={`${ui.btn} ${ui.btnPrimary}`}>
                     Get in touch
                  </Link>
                  <Link to={{ pathname: "/", hash: "#work" }} className={`${ui.btn} ${ui.btnGhost}`}>
                     See my work
                  </Link>
                  <span className={styles.socials}>
                     <a href={site.github} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="GitHub">
                        <GithubIcon />
                     </a>
                     <a
                        href={site.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.iconLink}
                        aria-label="LinkedIn"
                     >
                        <LinkedinIcon />
                     </a>
                  </span>
               </motion.div>
            </motion.div>

            {/* ===== My picture with the spinning teal ring ===== */}
            <motion.div
               className={styles.portraitWrap}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2, ease: easeOut, delay: 0.35 }}
            >
               {/* floats up and down slowly forever
                   (css animation instead of framer motion because looping animations in css run on the GPU,
                   so they stay smooth even when javascript is busy with scrolling or other animations) */}
               <div className={styles.portraitFloat}>
                  <div className={styles.ringGlow} aria-hidden="true" />
                  <div className={styles.ring} aria-hidden="true" />
                  <img src={getImageUrl("hero/Avatar.png")} alt={`Portrait of ${site.name}`} className={styles.portrait} />
                  <span className={`${styles.floatChip} ${styles.chipTop}`}>SPFx + React</span>
                  <span className={`${styles.floatChip} ${styles.chipBottom}`}>AWS Certified</span>
               </div>
            </motion.div>
         </div>

         {/* ===== Stats ===== */}
         <div className={layout.container}>
            <motion.ul
               role="list"
               className={styles.stats}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
               {stats.map((stat) => (
                  <motion.li key={stat.label} className={styles.stat} variants={heroFade}>
                     <span className={styles.statValue}>
                        <CountUp to={stat.value} suffix={stat.suffix} />
                     </span>
                     <span className={styles.statLabel}>{stat.label}</span>
                  </motion.li>
               ))}
            </motion.ul>
         </div>
      </section>
   );
};

export default Hero;