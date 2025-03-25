import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

interface IndividualExpProps {
   image: string;
   title: string | number; // can either be string or number
}

const IndividualExp: React.FC<IndividualExpProps> = ({ image, title }) => {
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
      </div>
   );
};

export default IndividualExp;
