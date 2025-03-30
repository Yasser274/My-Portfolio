import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils/imageUtils";

const Navbar = () => {
   const [isSticky, setIsSticky] = useState<boolean>(false);

   const [menuOpen, setMenuOpen] = useState<boolean>(false);

   const navbarRef = useRef<HTMLElement>(null); //? <is the type of it> and (null) because the component hasn’t rendered yet
   const initialNavbarBottom = useRef<number>(0); // Store initial bottom position

   useEffect(() => {
      //? if navbarRef is rendered that's why .current
      if (navbarRef.current) {
         // Get the navbar's absolute top position and height
         const navbarTop = navbarRef.current?.getBoundingClientRect().top + window.scrollY;
         const navbarHeight = navbarRef.current.offsetHeight;
         initialNavbarBottom.current = navbarTop + navbarHeight + 75; // Bottom edge of navbar
      }
      const handleScroll = () => {
         const scrollPosition = window.scrollY;
         // Only set sticky when scrolled past the initial bottom position
         setIsSticky(scrollPosition > initialNavbarBottom.current );// ? turn isSticky to true when this condition is true
      };
      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Cleanup listener on component unmount (like when switching to another page and it doesn't have it)
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []); // Empty dependency array means it runs once on mount

   return (
      <nav ref={navbarRef} className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
         <a href="/" className={styles.title}>
            Portfolio
         </a>
         <div className={styles.menu}>
            <img
               src={menuOpen ? getImageUrl("nav/CloseNavIcon.png") : getImageUrl("nav/NavIcon.png")} //? the ? means if the menuOpen is false get the close png if not get the NavIcon
               alt="menu-button"
               className={styles.menuBtn}
               onClick={() => setMenuOpen(!menuOpen)} //? opposite of whatever menuOpen is (if it's false change it to true vica versa)
            />
            {/* //?if menuOpen is false it won't open if it's true it will */}
            <ul
               className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
               onClick={() => setMenuOpen(false)} // ? when clicking any of the items inside it will close itself
            >
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
                  <a href="#contact">Contact</a>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
