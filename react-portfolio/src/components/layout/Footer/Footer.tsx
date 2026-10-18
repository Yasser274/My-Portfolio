import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Footer.module.css";
import layout from "@/styles/section.module.css";
import ui from "@/styles/ui.module.css";
import { site } from "@/data/siteData";
import { revealContainer, revealUp, inViewOnce } from "@/utils/animationVariants";
import { CheckIcon, CopyIcon, FileIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons/Icons";

const Footer = () => {
   const [copied, setCopied] = useState<boolean>(false);

   const copyEmail = async () => {
      try {
         await navigator.clipboard.writeText(site.email);
         setCopied(true);
         setTimeout(() => setCopied(false), 2000);
      } catch {
         // if copying doesn't work (old browser or no permission) just open the email app instead
         window.location.href = `mailto:${site.email}`;
      }
   };

   return (
      <footer id="contact" className={styles.footer}>
         <div className={layout.container}>
            {/* the contact card, its teal border spins slowly around it (css in Footer.module.css) */}
            <motion.div
               className={styles.cta}
               variants={revealContainer}
               initial="hidden"
               whileInView="visible"
               viewport={inViewOnce}
            >
               <div className={styles.ctaInner}>
                  <motion.h2 className={styles.title} variants={revealUp}>
                     Have a role or a project in mind?
                  </motion.h2>
                  <motion.p className={styles.lead} variants={revealUp}>
                     Email is the fastest way to reach me. I'm happy to talk about SharePoint, web apps or anything on
                     this site.
                  </motion.p>

                  <motion.div className={styles.actions} variants={revealUp}>
                     <a href={`mailto:${site.email}`} className={`${ui.btn} ${ui.btnPrimary}`}>
                        <MailIcon /> {site.email}
                     </a>
                     <button type="button" className={`${ui.btn} ${ui.btnGhost} ${styles.copy}`} onClick={copyEmail}>
                        {/* after clicking it says "Copied" for 2 seconds then goes back */}
                        <AnimatePresence mode="wait" initial={false}>
                           <motion.span
                              key={copied ? "copied" : "copy"}
                              className={styles.copyLabel}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.2 }}
                           >
                              {copied ? <CheckIcon /> : <CopyIcon />}
                              {copied ? "Copied" : "Copy email"}
                           </motion.span>
                        </AnimatePresence>
                     </button>
                  </motion.div>
               </div>
            </motion.div>

            <div className={styles.bottom}>
               <p className={styles.meta}>
                  © {new Date().getFullYear()} {site.name}, {site.location}
               </p>
               <ul role="list" className={styles.links}>
                  <li>
                     <a href={site.github} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="GitHub">
                        <GithubIcon />
                     </a>
                  </li>
                  <li>
                     <a
                        href={site.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.iconLink}
                        aria-label="LinkedIn"
                     >
                        <LinkedinIcon />
                     </a>
                  </li>
                  <li>
                     <a href={site.resume} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="Resume">
                        <FileIcon />
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
