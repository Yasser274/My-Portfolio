import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   return (
      <nav className={styles.navbar}>
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
