import styles from "../Experience/Experience.module.css";
import { getImageUrl } from "../../utils/imageUtils";
import Github_Icon from "../../assets/contact/github-svg";
import Linkedin_Icon from "../../assets/contact/linkedin-svg";

const Contact = () => {
   return (
      <footer id="contact" className={styles.footer}>
         {/* The noise overlay */}
         <div className={styles.noiseOverlay}></div>
         {/* The Background Glow Effect */}
         <div className={styles.svgWrapper}>
            <svg
               className={styles.blobSvg}
               // size of the blob
               width="774"
               height="514"
               viewBox="0 0 568 479"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               // This ensures the blur doesn't get cut off at the edges
               style={{ overflow: "visible" }}
            >
               <defs>
                  <linearGradient
                     id="footerGradient"
                     x1="663.766"
                     y1="168.785"
                     x2="303.65"
                     y2="469.667"
                     gradientUnits="userSpaceOnUse"
                  >
                     <stop offset="0%" stopColor="#06b6d4" />
                     <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>

                  {/* DEFINING THE BLUR INTERNALLY */}
                  <filter id="internalBlur" x="-50%" y="-50%" width="200%" height="200%">
                     {/* Higher number = Bigger, softer spread */}
                     <feGaussianBlur in="SourceGraphic" stdDeviation="64" />
                  </filter>
               </defs>

               {/* APPLYING THE BLUR TO THE PATH */}
               <g filter="url(#internalBlur)">
                  <path
                     d="M210.729 388.084C89.6366 364.321 -24.7027 479.376 5.94288 323.207C36.5884 167.039 403.272 -21.7112 524.365 2.05113C645.457 25.8135 475.103 253.09 444.457 409.259C413.811 565.427 331.821 411.846 210.729 388.084Z"
                     fill="url(#footerGradient)"
                  ></path>
               </g>
            </svg>
         </div>
         <div className={styles.container}>
            {/* Column 1: Socials */}
            <div className={styles.column}>
               <h3 className={styles.columnTitle}>Connect</h3>
               <a href="https://github.com/Yasser274" target="_blank" className={styles.link}>
                  <Github_Icon className={styles.svgFooterIcons}></Github_Icon>
               </a>
               <a
                  href="https://www.linkedin.com/in/yasser-alsuwaid-b65a8723b/"
                  target="_blank"
                  className={styles.link}
               >
                  <Linkedin_Icon className={styles.svgFooterIcons}></Linkedin_Icon>
               </a>
               <address className={styles.email}>
                  <a href="mailto:yasserals10@gmail.com">yasserals10@gmail.com</a>
               </address>
            </div>

            {/* Column 2: Navigation (Portfolio Sitemap) */}
            <div className={styles.column}>
               <h3 className={styles.columnTitle}>Sitemap</h3>
               <a href="#about" className={styles.link}>
                  About
               </a>
               <a href="#experience" className={styles.link}>
                  Experience
               </a>
               <a href="#projects" className={styles.link}>
                  Projects
               </a>
               <a href="#certifications" className={styles.link}>
                  Certifications
               </a>
            </div>

            {/* Column 3: */}
            <div className={styles.column}>
               <h3 className={styles.columnTitle}>Resources</h3>
               <a
                  href="https://drive.google.com/file/d/1VV-jyLgCFXDcjSoxq-OqqIPsyoNW25bz/view?usp=drive_link"
                  className={styles.link}
                  target="_blank"
               >
                  Resume
               </a>
            </div>
         </div>

         <div className={styles.bottomBar}>
            <p>© {new Date().getFullYear()} Yasser. All rights reserved.</p>
         </div>
      </footer>
   );
};

export default Contact;
