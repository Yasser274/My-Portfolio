import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import styles from "./Navbar.module.css";
import ui from "@/styles/ui.module.css";
import { site } from "@/data/siteData";
import { openTransition, softSpring, easeOut } from "@/utils/animationVariants";
import { lockScroll, unlockScroll } from "@/utils/smoothScroll";
import useActiveSection from "@/hooks/useActiveSection";
import LogoMark from "@/components/icons/LogoMark";

// the sections on the home page, the links go to "/#id" so they still work when you're on a blog page
const navLinks = [
   { label: "About", id: "about" },
   { label: "Work", id: "work" },
   { label: "Experience", id: "experience" },
   { label: "Certificates", id: "certifications" },
   { label: "Blog", id: "blog" },
];
const sectionIds = navLinks.map((l) => l.id);

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState<boolean>(false);
   const [hidden, setHidden] = useState<boolean>(false); // navbar hides when scrolling down and comes back when scrolling up
   const [scrolled, setScrolled] = useState<boolean>(false); // true once the page scrolled a bit (gives the navbar its background)
   const location = useLocation();
   const isHome = location.pathname === "/";
   const active = useActiveSection(sectionIds, isHome); // which section is on screen right now (only on the home page)

   // the progress bar at the very top, scrollYProgress goes from 0 (top) to 1 (bottom of the page)
   // useSpring smooths it so it doesn't jump around
   const { scrollY, scrollYProgress } = useScroll();
   const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

   // runs every time the page scrolls, compares with the last position to know if we're going up or down
   useMotionValueEvent(scrollY, "change", (y) => {
      const previous = scrollY.getPrevious() ?? 0;
      setScrolled(y > 12);
      setHidden(y > previous && y > 240 && !menuOpen);
   });

   // close the mobile menu when the page changes or you click one of its links
   useEffect(() => {
      setMenuOpen(false);
   }, [location.key]);

   // disable scrolling when menu is open (mobile screen) and let Escape close it
   useEffect(() => {
      if (!menuOpen) return;
      lockScroll();
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
      window.addEventListener("keydown", onKey);
      return () => {
         unlockScroll(); // Cleanup when the menu closes or the navbar unmounts
         window.removeEventListener("keydown", onKey);
      };
   }, [menuOpen]);

   return (
      <>
         <motion.div className={styles.progress} style={{ scaleX: progress }} aria-hidden="true" />

         <motion.header
            className={styles.bar}
            animate={{ y: hidden ? "-130%" : "0%" }}
            transition={{ duration: 0.5, ease: easeOut }}
         >
            <nav
               className={`${styles.pill} ${scrolled || menuOpen ? styles.pillSolid : ""}`}
               aria-label="Main"
            >
               <Link to="/" className={styles.brand} aria-label={`${site.name}, home`}>
                  <LogoMark size={40} /> <span className={styles.brandName}>{site.name}</span>
               </Link>

               {/* Desktop links, the teal pill slides to whatever section you're looking at */}
               <ul role="list" className={styles.links}>
                  {navLinks.map((link) => {
                     const isActive = active === link.id;
                     return (
                        <li key={link.id}>
                           <Link
                              to={{ pathname: "/", hash: `#${link.id}` }}
                              className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                              aria-current={isActive ? "true" : undefined}
                           >
                              {isActive ? (
                                 <motion.span
                                    layoutId="nav-active"
                                    className={styles.activeBg}
                                    transition={softSpring}
                                 />
                              ) : null}
                              <span className={styles.linkText}>{link.label}</span>
                           </Link>
                        </li>
                     );
                  })}
               </ul>

               <Link
                  to={{ pathname: "/", hash: "#contact" }}
                  className={`${ui.btn} ${ui.btnPrimary} ${styles.cta}`}
               >
                  Contact
               </Link>

               {/* Mobile menu button, the 2 lines rotate into an X when it's open */}
               <button
                  type="button"
                  className={styles.menuButton}
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMenuOpen((open) => !open)}
               >
                  <motion.span
                     className={styles.burgerLine}
                     animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                     transition={openTransition}
                  />
                  <motion.span
                     className={styles.burgerLine}
                     animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                     transition={openTransition}
                  />
               </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
               {menuOpen ? (
                  <motion.div
                     id="mobile-menu"
                     className={styles.mobileMenu}
                     initial={{ opacity: 0, y: -10, scale: 0.98 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: -10, scale: 0.98 }}
                     transition={openTransition}
                  >
                     <motion.ul
                        role="list"
                        className={styles.mobileLinks}
                        initial="hidden"
                        animate="visible"
                        variants={{
                           hidden: {},
                           visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
                        }}
                     >
                        {[...navLinks, { label: "Contact", id: "contact" }].map((link) => (
                           <motion.li
                              key={link.id}
                              variants={{
                                 hidden: { opacity: 0, x: -12 },
                                 visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: easeOut } },
                              }}
                           >
                              <Link to={{ pathname: "/", hash: `#${link.id}` }} className={styles.mobileLink}>
                                 {link.label}
                              </Link>
                           </motion.li>
                        ))}
                     </motion.ul>
                     <a
                        href={site.resume}
                        target="_blank"
                        rel="noreferrer"
                        className={`${ui.btn} ${ui.btnGhost}`}
                     >
                        Open my resume
                     </a>
                  </motion.div>
               ) : null}
            </AnimatePresence>
         </motion.header>
      </>
   );
};

export default Navbar;
