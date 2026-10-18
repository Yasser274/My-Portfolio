import { useEffect, useRef } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.css";
import { initSmoothScroll, destroySmoothScroll, scrollToId, scrollToTop } from "@/utils/smoothScroll";
import { easeOut } from "@/utils/animationVariants";

// when a new page shows up, jump to the #section in the URL (or to the top if there isn't one)
// (only runs once when the page mounts, clicking #links on the same page is handled down in Layout)
const ScrollOnMount = ({ hash }: { hash: string }) => {
   const hashOnMount = useRef(hash); // useRef so it keeps the first value and doesn't re run the effect
   useEffect(() => {
      const id = hashOnMount.current.slice(1); // "#work" -> "work"
      if (id) scrollToId(id, true);
      else scrollToTop(true);
   }, []);
   return null;
};

const Layout = () => {
   const location = useLocation();
   //? useOutlet instead of <Outlet /> gives us the page as an element so AnimatePresence can keep the old page around until its exit animation is done
   const outlet = useOutlet();
   const lastPath = useRef(location.pathname);

   // turn on smooth scrolling once for the whole site
   useEffect(() => {
      initSmoothScroll();
      return () => destroySmoothScroll(); // cleanup when Layout unmounts
   }, []);

   // clicking a navbar link like /#work while already on the home page, scroll smoothly to it
   useEffect(() => {
      const samePage = lastPath.current === location.pathname;
      lastPath.current = location.pathname;
      if (!samePage || !location.hash) return;
      // small wait so the mobile menu has time to close and turn scrolling back on first
      const timer = setTimeout(() => scrollToId(location.hash.slice(1)), 60);
      return () => clearTimeout(timer);
   }, [location.key, location.pathname, location.hash]);

   return (
      <div className={styles.layoutContainer}>
         {/* hidden link that only shows when you press Tab, lets keyboard users skip the navbar */}
         <a href="#main" className={styles.skipLink}>
            Skip to content
         </a>
         <Navbar></Navbar>
         {/* page transition: the old page fades out and up a bit, then the new one fades in */}
         <AnimatePresence mode="wait">
            <motion.main
               key={location.pathname}
               id="main"
               className={styles.mainContent}
               initial={{ opacity: 0, y: 12 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -8 }}
               transition={{ duration: 0.35, ease: easeOut }}
            >
               <ScrollOnMount hash={location.hash} />
               {/* Components will be placed in here */}
               {outlet}
            </motion.main>
         </AnimatePresence>
         <Footer></Footer>
      </div>
   );
};

export default Layout;
