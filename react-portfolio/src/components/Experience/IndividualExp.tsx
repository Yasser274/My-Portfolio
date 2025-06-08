import styles from "./Experience.module.css";
// import { getImageUrl } from "../../utils";
import { getImageUrl } from "../../utils/imageUtils";
import { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";

interface IndividualExpProps {
   image: string;
   title: string | number; // can either be string or number
   cert?: string;
   moreInfo?: string;
   video?: string;
}

const IndividualExp: React.FC<IndividualExpProps> = ({ image, title, cert, moreInfo, video }) => {
   const moreInfoButtonRef = useRef<HTMLDivElement>(null);
   const videoButtonRef = useRef<HTMLDivElement>(null);

   const [clickedInfo, setClickedInfo] = useState<number | null>(null);
   const [stopScroll, setStopScroll] = useState<number>(0);

   const [clickedVideo, setClickedVideo] = useState<number | null>(null);

   const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
         //? event.currentTarget: This property refers to the element that the event listener (the onClick handler) is attached to

         // ? if either of these aren't null(meaning its active) deactivate it
         if (clickedInfo !== null) {
            closeMoreInfo();
         } else if (clickedVideo !== null) {
            closeVideo();
         }
      }
   };

   const showMoreInfo = () => {
      if (moreInfoButtonRef) {
         setClickedInfo(1);
         setStopScroll(1);
      }
   };
   const closeMoreInfo = () => {
      setClickedInfo(null);
      setStopScroll(0);
   };

   const showVideo = () => {
      if (videoButtonRef) {
         setClickedVideo(1);
         setStopScroll(1);
      }
   };
   const closeVideo = () => {
      setClickedVideo(null);
      setStopScroll(0)
   };
   // UseEffect for body to stop scrolling function
   useEffect(() => {
      if (stopScroll === 1) {
         document.body.style.overflowY = "hidden";
      } else {
         document.body.style.overflowY = "auto";
      }
   }, [stopScroll]);
   // ?reference to the modal root element
   const modalRoot = document.getElementById("modal-root");

   return (
      <>
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
            <div className={styles.certAndInfoCon}>
               {cert ? (
                  <a href={cert} className={styles.certBtn}>
                     <button>View Cert</button>
                  </a>
               ) : null}
               {video ? (
                  <div className={styles.certBtn} ref={videoButtonRef} onClick={showVideo}>
                     <button>Video</button>
                  </div>
               ) : null}
               {moreInfo ? (
                  <div
                     className={`${styles.moreInfoButtonDiv} curzr-hover`}
                     ref={moreInfoButtonRef}
                     onClick={showMoreInfo}
                  >
                     <img src={getImageUrl("exper/info-circle.svg")} alt="" />
                  </div>
               ) : null}
            </div>
         </div>

         {/* //? RENDER THE MODAL USING A PORTAL --- */}
         {/* //? Only if a modal should be shown AND the modal-root element exists */}

         {clickedInfo !== null && modalRoot
            ? ReactDOM.createPortal(
                 <div className={styles.fullScreenCon} onClick={handleBackgroundClick}>
                    <div className={`${styles.fullScreenCloseBtn} curzr-hover`} onClick={closeMoreInfo}>
                       <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                             {" "}
                             <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                                fill="#1C274C"
                             ></path>{" "}
                          </g>
                       </svg>
                    </div>

                    {/* HERE YOU WOULD PUT THE ACTUAL MODAL CONTENT */}
                    <div className={styles.modalContent}>
                       <h2 className={styles.modalMoreInfoTitle}>{title}</h2>
                       <p className={styles.modalMoreInfoText}>{moreInfo}</p>
                    </div>
                 </div>,
                 modalRoot // Tell the portal to render inside the #modal-root div
              )
            : null}

         {clickedVideo !== null && modalRoot
            ? ReactDOM.createPortal(
                 <div className={styles.fullScreenCon} onClick={handleBackgroundClick}>
                    <div className={`${styles.fullScreenCloseBtn} curzr-hover`} onClick={closeVideo}>
                       <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                             {" "}
                             <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                                fill="#1C274C"
                             ></path>{" "}
                          </g>
                       </svg>
                    </div>

                    <div className={styles.modalContent}>
                       <h2 className={styles.modalMoreInfoTitle}>{title}</h2>
                       <iframe src={video} width="640" height="480" allow="autoplay" allowFullScreen></iframe>
                    </div>
                 </div>,

                 modalRoot
              )
            : null}
      </>
   );
};

export default IndividualExp;
