import styles from "./Samples.module.css";
import { SectionAppearFadeEffect } from "../Effects/ImageEffectsAndOtherEffects";
import React, { useRef, useState, useEffect } from "react";

const imgs: { url: string }[] = [
   {
      url: "https://i.imgur.com/OoYFuRY.png",
   },
   {
      url: "https://i.imgur.com/qpPjYBz.png",
   },
   {
      url: "https://i.imgur.com/YIxCSjI.png",
   },
   {
      url: "https://i.imgur.com/9kzLeLm.png",
   },
   {
      url: "https://i.imgur.com/LNWzF7G.jpeg",
   },
   {
      url: "https://i.imgur.com/7AtxL9z.png",
   },
   {
      url: "https://i.imgur.com/4lJXDBs.jpeg",
   },
];

const Samples = () => {
   const sectionRef = useRef<HTMLElement>(null);
   SectionAppearFadeEffect(sectionRef, styles.visible);
   // to go through images index
   const [currentIndex, setCurrentIndex] = useState<number>(0);
   // for full sizing one image inside the slide when clicked
   const [clickedImg, setClickedImg] = useState<number | null>(null);
   const [stopScroll, setStopScroll] = useState<number>(0);

   const leftArrowRef = useRef<SVGSVGElement>(null);
   const rightArrowRef = useRef<SVGSVGElement>(null);

   const handleGoToPrevious = () => {
      if (leftArrowRef) {
         // if it's rendered
         const isFirstSlide = currentIndex === 0; //? if the slide shows the first image (index 0)
         const newIndex = isFirstSlide ? imgs.length - 1 : currentIndex - 1; //? if it's the first image then equal newIndex to the last img slide of the array object if it's not reduce currentIndex by 1 meaning go back
         setCurrentIndex(newIndex);
      }
   };
   const handleGoToNext = () => {
      if (rightArrowRef) {
         const isLastSlide = currentIndex === imgs.length - 1; //? is currentIndex on the last slide
         const newIndex = isLastSlide ? 0 : currentIndex + 1; //? if true make newIndex = 0 meaning go back to the first img if not increase by 1 go to the next img
         setCurrentIndex(newIndex);
      }
   };

   const showFullscreenImage = (index: number) => {
      setClickedImg(index); // ? set the state to the index of the clicked image
      setStopScroll(1);
   };

   const closeFullScreenImg = () => {
      setClickedImg(null);
      setStopScroll(0);
   };

   const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
         //? event.currentTarget: This property refers to the element that the event listener (the onClick handler) is attached to
         closeFullScreenImg();
      }
   };

   // UseEffect for body to stop scrolling function
   useEffect(() => {
      if (stopScroll === 1) {
         document.body.style.overflowY = "hidden";
      } else {
         document.body.style.overflowY = "auto";
      }
   }, [stopScroll]);

   return (
      <>
         <section id="samples" className={styles.samplesSection} ref={sectionRef}>
            <div className={styles.samplesCon}>
               <h2 className={styles.samplesTitle}>Samples</h2>
            </div>
            {/* Added a wrapper for arrows + slider */}
            <div className={styles.sliderArea}>
               <div className={styles.imgSliderLeftArrow}>
                  <svg
                     onClick={handleGoToPrevious}
                     ref={leftArrowRef}
                     height="200px"
                     width="200px"
                     version="1.1"
                     id="_x32_"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink" // Changed xmlns:xlink to camelCase
                     viewBox="0 0 512 512"
                     xmlSpace="preserve" // Changed xml:space to camelCase
                     fill="#000000"
                  >
                     <g>
                        <path
                           className="st0" // Changed class to className
                           d="M154.52,265.848l90.964,69.014c2.329,1.766,4.674,2.702,6.78,2.702c2.148,0,4.022-0.974,5.276-2.741 c1.199-1.688,1.807-3.99,1.807-6.844v-26.424c0-6.952,5.656-12.608,12.607-12.608h75.036c8.705,0,15.788-7.085,15.788-15.788 v-34.313c0-8.703-7.083-15.788-15.788-15.788h-75.036c-6.951,0-12.607-5.656-12.607-12.608v-26.425 c0-7.065-3.659-9.584-7.082-9.584c-2.106,0-4.451,0.936-6.78,2.702l-90.964,69.014c-3.416,2.59-5.297,6.087-5.297,9.849 C149.223,259.762,151.103,263.259,154.52,265.848z"
                        />
                        <path
                           className="st0" // Changed class to className
                           d="M256,0C114.842,0,0.002,114.84,0.002,256S114.842,512,256,512c141.158,0,255.998-114.84,255.998-256 S397.158,0,256,0z M256,66.785c104.334,0,189.216,84.879,189.216,189.215S360.334,445.215,256,445.215S66.783,360.336,66.783,256 S151.667,66.785,256,66.785z"
                        />
                     </g>
                     <style>{`.st0 { fill: #000000; }`}</style> {/* Moved style inside SVG */}
                  </svg>
               </div>

               {/* Image Slider Content */}
               <div className={styles.imgSliderCon}>
                  {/* This div now acts as a "track" holding all slides */}
                  <div
                     className={styles.imgSliderTrack}
                     style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                     {imgs.map((img: { url: string }, index: number) => {
                        return (
                           <div
                              onClick={() => {
                                 showFullscreenImage(index);
                              }}
                              key={index}
                              className={styles.imgSlide}
                              style={{ backgroundImage: `url(${img.url})` }}
                              aria-hidden={index !== currentIndex} // Accessibility hint
                              role="group" // For grouping slides
                              aria-roledescription="slide"
                              aria-label={`Slide ${index + 1} of ${imgs.length}`}
                           ></div>
                        );
                     })}
                  </div>
               </div>

               {/* Right arrow */}
               <div className={styles.imgSliderRightArrow}>
                  <svg
                     onClick={handleGoToNext}
                     ref={rightArrowRef}
                     height="200px"
                     width="200px"
                     version="1.1"
                     id="_x32_"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 512 512"
                     xmlSpace="preserve"
                     fill="#000000"
                  >
                     <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                     <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                     <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                           {" "}
                           <path
                              className="st0"
                              d="M165.013,288.946h75.034c6.953,0,12.609,5.656,12.609,12.608v26.424c0,7.065,3.659,9.585,7.082,9.585 c2.106,0,4.451-0.936,6.78-2.702l90.964-69.014c3.416-2.589,5.297-6.087,5.297-9.844c0-3.762-1.881-7.259-5.297-9.849 l-90.964-69.014c-2.329-1.766-4.674-2.702-6.78-2.702c-3.424,0-7.082,2.519-7.082,9.584v26.425c0,6.952-5.656,12.608-12.609,12.608 h-75.034c-8.707,0-15.79,7.085-15.79,15.788v34.313C149.223,281.862,156.305,288.946,165.013,288.946z"
                           ></path>{" "}
                           <path
                              className="st0"
                              d="M256,0C114.842,0,0.002,114.84,0.002,256S114.842,512,256,512c141.158,0,255.998-114.84,255.998-256 S397.158,0,256,0z M256,66.785c104.334,0,189.216,84.879,189.216,189.215S360.334,445.215,256,445.215S66.783,360.336,66.783,256 S151.667,66.785,256,66.785z"
                           ></path>{" "}
                        </g>{" "}
                     </g>
                     <style> {`.st0{fill:rgb(228, 228, 228);}`}</style>
                  </svg>
               </div>
               <div className={styles.imgSliderDotsCon}>
                  <ul>
                     {imgs.map((_, index) => {
                        //? _ for the first value which is the values inside the imgs is not needed that's why
                        return (
                           <li key={index} className={styles.imgSliderDot}>
                              <svg
                                 onClick={() => setCurrentIndex(index)} // ? If you write onClick={setCurrentIndex(index)} without the arrow function, you’re not passing a function—you’re immediately calling setCurrentIndex(index) as soon as the component renders
                                 viewBox="0 0 24 24" 
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 stroke="#000000"
                                 className={index === currentIndex ? styles.activeDot : ""} // Highlight active dot
                              >
                                 <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                 <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                 ></g>
                                 <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                       d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                                       fill="#efefef"
                                    ></path>{" "}
                                 </g>
                              </svg>
                           </li>
                        );
                     })}
                  </ul>
               </div>
            </div>
         </section>
         {/* --- Render Fullscreen Modal OUTSIDE the section --- */}

         {clickedImg !== null ? ( //? if doesn't equal null(meaning an image was clicked) render this div if does equal null don't do anything
            <div className={styles.fullScreenCon} onClick={handleBackgroundClick}>
               <div className={styles.fullScreenCloseBtn} onClick={closeFullScreenImg}>
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

               <img src={imgs[clickedImg].url} alt="Fullscreen" />
            </div>
         ) : null}
      </>
   );
};

export default Samples;
