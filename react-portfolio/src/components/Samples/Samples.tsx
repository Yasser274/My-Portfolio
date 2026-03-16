import { useState } from "react";
import styles from "./Samples.module.css";
import layoutStyle from "../Layout.module.css";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/animationVariants";

// 1. Import OFFICIAL Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// 2. Import Swiper modules (Added FreeMode and Thumbs)
import { Navigation, Autoplay, EffectCoverflow, FreeMode, Thumbs } from "swiper/modules";

// 3. Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode"; // Required for smooth thumbnail scrolling
import "swiper/css/thumbs"; // Required for thumbnail linking
import "swiper/css/autoplay";

import useViewAmount from "../../utils/useViewAmount";

const imgs: { url: string }[] = [
   { url: "https://i.imgur.com/Db2c2aU.png" },
   { url: "https://i.imgur.com/sxrfRQg.png" },
   { url: "https://i.imgur.com/YIxCSjI.png" },
   { url: "https://i.imgur.com/9kzLeLm.png" },
   { url: "https://i.imgur.com/LNWzF7G.jpeg" },
   { url: "https://i.imgur.com/7AtxL9z.png" },
   { url: "https://i.imgur.com/4lJXDBs.jpeg" },
];

const Samples = () => {
   // State to link the main Swiper and the thumbnail Swiper
   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
   // calling hook to check window width if it's mobile or desktop to change viewport {amount} so it triggers earlier or not
   const viewAmount = useViewAmount();

   return (
      <>
         <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewAmount }}
            id="samples"
            className={`${styles.samplesSection} ${layoutStyle.sectionPart}`}
         >
            <div className={styles.samplesCon}>
               <h2 className={styles.samplesTitle}>Samples</h2>
            </div>

            <motion.div variants={itemVariants} className={styles.swiperContainer}>
               {/* --- MAIN SWIPER (Large Images) --- */}
               <Swiper
                  modules={[Navigation, Autoplay, EffectCoverflow, Thumbs]}
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  coverflowEffect={{
                     rotate: 0,
                     stretch: 40,
                     depth: 250,
                     modifier: 1,
                     slideShadows: false,
                  }}
                  autoplay={{ delay: 3000, disableOnInteraction: true, pauseOnMouseEnter: true }}
                  breakpoints={{
                     0: { slidesPerView: 1.1 },
                     768: { slidesPerView: 1.5 },
                     1024: { slidesPerView: 2 },
                  }}
                  // To use my custom next and prev buttons
                  navigation={{
                     nextEl: `.${styles.navNext}`,
                     prevEl: `.${styles.navPrev}`,
                  }}
                  className={styles.mainSwiper}
                  style={{ paddingBottom: "20px" }}
               >
                  {imgs.map((img, index) => (
                     <SwiperSlide key={index}>
                        <div className={styles.imgWrapper}>
                           <img src={img.url} alt={`Sample ${index + 1}`} className={styles.mainImage} />
                        </div>
                     </SwiperSlide>
                  ))}

                  {/* NEXT AND PREVIOUS BUTTONs */}
                  <button className={`${styles.navBtn} ${styles.navPrev}`}>
                     <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <path d="m15 18-6-6 6-6" />
                     </svg>
                  </button>

                  <button className={`${styles.navBtn} ${styles.navNext}`}>
                     <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <path d="m9 18 6-6-6-6" />
                     </svg>
                  </button>
               </Swiper>

               {/* --- THUMBNAIL SWIPER (Small Images at the bottom) --- */}
               <Swiper
                  onSwiper={setThumbsSwiper}
                  modules={[FreeMode, Navigation, Thumbs]}
                  spaceBetween={10}
                  watchSlidesProgress={true}
                  centerInsufficientSlides={true}
                  centeredSlides={true}
                  centeredSlidesBounds={true}
                  /* ---------------------------------- */
                  breakpoints={{
                     0: { slidesPerView: 3 },
                     768: { slidesPerView: 5 },
                     1024: { slidesPerView: 6 },
                  }}
                  className={styles.thumbSwiper}
               >
                  {imgs.map((img, index) => (
                     <SwiperSlide key={`thumb-${index}`} className={styles.thumbSlide}>
                        <img
                           src={img.url}
                           alt={`Thumbnail ${index}`}
                           className={`${styles.thumbImg} curzr-hover`}
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </motion.div>
         </motion.section>
      </>
   );
};

export default Samples;
