import styles from "./Experience.module.css";
// import { getImageUrl } from "../../utils";

interface IndividualExpProps {
   image: string;
   title: string | number; // can either be string or number
   cert?: string;
}

const IndividualExp: React.FC<IndividualExpProps> = ({ image, title, cert }) => {
   return (
      <div className={styles.individualExp}>
         <div className={styles.expItemCon}>
            <img
               src={image}
               alt={typeof title === "string" ? title : title.toString()}
               className={styles.individualExpImage}
            />
         </div>
         {/* Alt type of title if it's string use it if not convert it to string */}
         <h3 className={styles.individualExpTitle}>{title}</h3>
         {/* If cert exists in that array object make a button and link to the link that's in the object if it doesn't don't do anything (null) */}
         {cert ? (
            <a href={cert} className={styles.certBtn}>
               <button>View Cert</button>
            </a>
         ) : null}
      </div>
   );
};

export default IndividualExp;
