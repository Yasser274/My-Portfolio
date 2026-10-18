import { Link } from "react-router-dom";
import styles from "./Blog.module.css";
import layout from "@/styles/section.module.css";

const NotFoundPage = () => {
   return (
      <div className={`${layout.container} ${styles.page}`}>
         <h1 className={styles.pageTitle}>Page not found</h1>
         <p className={styles.pageLead}>
            This address doesn't match any page. <Link to="/">Go to the home page</Link>
         </p>
      </div>
   );
};

export default NotFoundPage;
