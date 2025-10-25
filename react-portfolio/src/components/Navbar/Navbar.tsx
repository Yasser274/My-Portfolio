import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils/imageUtils";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
   const [isSticky, setIsSticky] = useState<boolean>(false);

   const [menuOpen, setMenuOpen] = useState<boolean>(false);

   const navbarRef = useRef<HTMLElement>(null); //? <is the type of it> and (null) because the component hasn’t rendered yet
   const initialNavbarBottom = useRef<number>(0); // Store initial bottom position

   // Get the current location object
   const location = useLocation();

   // Check if we are on the homepage
   const isHomePage = location.pathname === "/"; // if URL starts with / like google.com/ without google.com/search

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
         setIsSticky(scrollPosition > initialNavbarBottom.current); // ? turn isSticky to true when this condition is true
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
         <NavLink to="/" className={styles.title}>
            Portfolio
         </NavLink>
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
               {/* if we're on the home page show these other links */}
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
