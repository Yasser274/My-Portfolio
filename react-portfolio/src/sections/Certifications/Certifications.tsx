import { useEffect, useRef, useState, MouseEvent } from "react";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Certifications.module.css";
import Section from "@/components/ui/Section";
import type { CertItem } from "@/types";
import { revealContainer, revealCard, inViewOnce } from "@/utils/animationVariants";
import { lockScroll, unlockScroll } from "@/utils/smoothScroll";
import { CloseIcon } from "@/components/icons/Icons";

interface CertificationsProps {
   certs: CertItem[];
}

const Certifications = ({ certs }: CertificationsProps) => {
   const gridRef = useRef<HTMLDivElement>(null);
   const overlayRef = useRef<HTMLDivElement>(null);
   const [openCert, setOpenCert] = useState<CertItem | null>(null);

   // *THE GLOW EFFECT: every card gets the mouse position (for the colored light inside it)
   // and the overlay on top gets it too, it lights up the borders of the cards near the mouse
   const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const grid = gridRef.current;
      const overlay = overlayRef.current;
      if (!grid || !overlay) return;
      const gridRect = grid.getBoundingClientRect();
      overlay.style.setProperty("--x", `${e.clientX - gridRect.left}px`);
      overlay.style.setProperty("--y", `${e.clientY - gridRect.top}px`);
      overlay.style.setProperty("--opacity", "1");
      grid.querySelectorAll<HTMLElement>(`.${styles.card}`).forEach((card) => {
         const rect = card.getBoundingClientRect();
         card.style.setProperty("--x", `${e.clientX - rect.left}px`);
         card.style.setProperty("--y", `${e.clientY - rect.top}px`);
      });
   };
   const handleMouseLeave = () => overlayRef.current?.style.setProperty("--opacity", "0");

   // when a certificate is open stop the page from scrolling and let Escape close it
   useEffect(() => {
      if (!openCert) return;
      lockScroll();
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenCert(null);
      window.addEventListener("keydown", onKey);
      return () => {
         unlockScroll();
         window.removeEventListener("keydown", onKey);
      };
   }, [openCert]);

   const modalRoot = document.getElementById("modal-root");

   return (
      <Section id="certifications" title="Certificates" note="Hover around the cards, and open one to see the full certificate.">
         <div className={styles.wrap} ref={gridRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <motion.ul
               role="list"
               className={styles.grid}
               variants={revealContainer}
               initial="hidden"
               whileInView="visible"
               viewport={inViewOnce}
            >
               {certs.map((cert) => (
                  <motion.li key={cert.id} variants={revealCard}>
                     <button
                        type="button"
                        className={styles.card}
                        style={{ "--glow-color": cert.glowColor } as React.CSSProperties}
                        onClick={() => setOpenCert(cert)}
                        aria-label={`Open the ${cert.certName} certificate`}
                     >
                        <motion.img
                           layoutId={`cert-image-${cert.id}`}
                           src={cert.certImg}
                           alt=""
                           className={styles.thumb}
                           loading="lazy"
                        />
                        <span className={styles.info}>
                           <span className={styles.name}>{cert.certName}</span>
                           <span className={styles.provider}>{cert.certProvider}</span>
                        </span>
                     </button>
                  </motion.li>
               ))}
            </motion.ul>

            {/* the same grid again on top but only the colored borders, and only the part in a circle around the mouse shows */}
            <div ref={overlayRef} className={styles.overlay} aria-hidden="true">
               <ul role="list" className={styles.grid}>
                  {certs.map((cert) => (
                     <li key={cert.id}>
                        {/* the card content again but invisible, just so this border ends up the exact same size as the real card */}
                        <span className={styles.glowCard} style={{ "--glow-color": cert.glowColor } as React.CSSProperties}>
                           <img src={cert.certImg} alt="" className={styles.thumb} loading="lazy" />
                           <span className={styles.info}>
                              <span className={styles.name}>{cert.certName}</span>
                              <span className={styles.provider}>{cert.certProvider}</span>
                           </span>
                        </span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         {/* //? the big certificate view goes in #modal-root (a portal) so it sits on top of everything */}
         {/* the image has the same layoutId as the small one so framer motion makes it grow out of the card */}
         {modalRoot
            ? ReactDOM.createPortal(
                 <AnimatePresence>
                    {openCert ? (
                       <motion.div
                          className={styles.backdrop}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.05 } }}
                          onClick={() => setOpenCert(null)}
                          role="dialog"
                          aria-modal="true"
                          aria-label={`${openCert.certName} certificate`}
                       >
                          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                             <motion.img
                                layoutId={`cert-image-${openCert.id}`}
                                src={openCert.certImg}
                                alt={`${openCert.certName} certificate from ${openCert.certProvider}`}
                                className={styles.modalImage}
                                transition={{ type: "spring", stiffness: 200, damping: 28 }}
                             />
                             <motion.div
                                className={styles.modalBar}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                                exit={{ opacity: 0 }}
                             >
                                <div>
                                   <p className={styles.modalName}>{openCert.certName}</p>
                                   <p className={styles.provider}>{openCert.certProvider}</p>
                                </div>
                                <button
                                   type="button"
                                   className={styles.close}
                                   onClick={() => setOpenCert(null)}
                                   autoFocus
                                   aria-label="Close"
                                >
                                   <CloseIcon />
                                </button>
                             </motion.div>
                          </div>
                       </motion.div>
                    ) : null}
                 </AnimatePresence>,
                 modalRoot,
              )
            : null}
      </Section>
   );
};

export default Certifications;
