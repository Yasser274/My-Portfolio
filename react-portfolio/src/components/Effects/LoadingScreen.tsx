import { useRef, useState, useEffect } from "react";
import style from "./ImageEffects.module.css";

const LoadingScreen = () => {
   const [loading, setLoading] = useState<number | null>(0);

   const loadingRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (loading === 0) {
         document.body.style.overflow = "hidden";
         document.documentElement.style.overflow = "hidden"; //? document.documentElement refers to the <html> element
         document.documentElement.classList.add("loading-active");
         document.body.classList.add("loading-active");
         console.log("Loading: Scroll disabled");
         const timer = setTimeout(() => {
            setLoading(1);
         }, 2000);

         // Cleanup timeout if component unmounts
         return () => {
            clearTimeout(timer);
         };
      } else if (loading === 1) {
         document.body.style.overflow = "auto";
         document.documentElement.style.overflow = "auto";
         document.documentElement.classList.remove("loading-active");
         document.body.classList.remove("loading-active");
         console.log("Loading complete: Scroll enabled");
      }
   }, [loading]);

   return (
      <div
         className={`${style.loadingScreen} ${
            loading === 0 ? style.loadingScreenVisible : style.loadingScreenHidden
         }`}
         ref={loadingRef}
      ></div>
   );
};

export default LoadingScreen;
