import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Contact from "./Contact/Contact";
import styles from "./Layout.module.css";
import Cursor from "./Effects/Cursor";
import StarsBackground from "./Effects/StarsBackground";

const Layout = () => {
   return (
      <div className={styles.layoutContainer}>
         <StarsBackground></StarsBackground>
         <Cursor></Cursor>
         <Navbar></Navbar>
         <main className={styles.mainContent}>
            {/* The Outlet component will render the specific page component */}{" "}
            {/* Components will be placed in here */}
            <Outlet></Outlet>
         </main>
         <Contact></Contact>
      </div>
   );
};

export default Layout;
