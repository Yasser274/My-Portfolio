import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils/imageUtils";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState<boolean>(false);
   const location = useLocation();
   const isHomePage = location.pathname === "/";

   // disable scrolling when menu is open (mobile screen)
   useEffect(() => {
      // if menu is open disable scrolling
      if (menuOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "auto";
      }

      return () => {
         document.body.style.overflow = "auto"; // Cleanup on unmount
      };
   }, [menuOpen]); // when menuOpen changes run this effect

   // Auto-close menu if screen is resized past mobile breakpoint
   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth > 1260 && menuOpen) {
            setMenuOpen(false);
         }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, [menuOpen]);

   return (
      <nav className={`${styles.navbar} ${styles.sticky}`}>
         {/* --- THE DARK OVERLAY --- */}
         {menuOpen && <div className={styles.pageOverlay} onClick={() => setMenuOpen(false)}></div>}

         <div className={styles.leftPartNav}>
            <NavLink to="/" className={`${styles.homeLink} curzr-hover`}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={styles.homeIcon}
               >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
               </svg>
            </NavLink>
         </div>
         <div className={`${styles.menu} ${styles.rightPartNav}`}>
            <div className={styles.menuBtnContainer} onClick={() => setMenuOpen(!menuOpen)}>
               {/* Hamburger Icon */}
               <img
                  src={getImageUrl("nav/NavIcon.png")}
                  alt="menu-open"
                  className={`${styles.menuBtn} ${menuOpen ? styles.iconHidden : styles.iconVisible}`}
               />
               {/* Close Icon */}
               <img
                  src={getImageUrl("nav/CloseNavIcon.png")}
                  alt="menu-close"
                  className={`${styles.menuBtn} ${menuOpen ? styles.iconVisible : styles.iconHidden}`}
               />
            </div>
            <ul
               className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
               onClick={() => setMenuOpen(false)}
            >
               {/* --- BACKGROUND LAYERS --- */}
               <div className={styles.menuBlobWrapper}>
                  <div className={styles.noiseOverlay}></div>
                  <svg
                     className={styles.menuBlobSvg}
                     /* 1. MASSIVE viewBox so the shape never touches the edges */
                     viewBox="-100 -100 800 800"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <defs>
                        <linearGradient id="menuGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                           <stop offset="0%" stopColor="#06b6d4" />
                           <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                     </defs>
                     {/* 2. Removed the buggy SVG filter attribute here */}
                     <path
                        d="M210.729 388.084C89.6366 364.321 -24.7027 479.376 5.94288 323.207C36.5884 167.039 403.272 -21.7112 524.365 2.05113C645.457 25.8135 475.103 253.09 444.457 409.259C413.811 565.427 331.821 411.846 210.729 388.084Z"
                        fill="url(#menuGradient)"
                        fillOpacity="0.8" /* Slightly more opaque since we blur it in CSS */
                     />
                  </svg>
               </div>
               {isHomePage ? (
                  <>
                     <li>
                        <a href="#about">About</a>
                     </li>
                     <li>
                        <a href="#experience">Experience</a>
                     </li>
                     <li>
                        <a href="#projects">Projects</a>
                     </li>
                     <li>
                        <a href="#certifications">Certifications</a>
                     </li>
                     <li>
                        <a href="#contact">Contact</a>
                     </li>
                  </>
               ) : (
                  <li>
                     <NavLink to="/">Home</NavLink>
                  </li>
               )}
               <li>
                  <NavLink to={"/blogs"}>Blog</NavLink>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
