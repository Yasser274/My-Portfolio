import React, { useEffect, useRef } from "react";

import styles from "./GlowingCards.module.css"; // We will create this file next

// - Individual Card Component ---
export interface GlowingCardProps {
   children: React.ReactNode;
   className?: string;
   glowColor?: string;
}

export const GlowingCard = ({ children, className, glowColor = "#3b82f6" }: GlowingCardProps) => {
   // This is a simple wrapper. The real magic happens in the container.
   return (
      <div
         className={`${styles.card} ${className || ""}`}
         style={{ "--glow-color": glowColor } as React.CSSProperties}
      >
         {children}
      </div>
   );
};

// - The Main Container Component ---
export interface GlowingCardsProps {
   children: React.ReactNode;
   className?: string;
}

export const GlowingCards = ({ children, className }: GlowingCardsProps) => {
   const containerRef = useRef<HTMLDivElement>(null);
   const overlayRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const container = containerRef.current;
      const overlay = overlayRef.current;
      if (!container || !overlay) return;

      const handleMouseMove = (e: MouseEvent) => {
         const containerRect = container.getBoundingClientRect();

         // For overlay (relative to container)
         const overlayX = e.clientX - containerRect.left;
         const overlayY = e.clientY - containerRect.top;
         overlay.style.setProperty("--x", `${overlayX}px`);
         overlay.style.setProperty("--y", `${overlayY}px`);
         overlay.style.setProperty("--opacity", "1");

         // For each individual card (relative to each card's own position)
         const cards = container.querySelectorAll(`.${styles.card}`);
         cards.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            const cardX = e.clientX - cardRect.left;
            const cardY = e.clientY - cardRect.top;
            (card as HTMLElement).style.setProperty("--x", `${cardX}px`);
            (card as HTMLElement).style.setProperty("--y", `${cardY}px`);
         });
      };

      const handleMouseLeave = () => {
         overlay.style.setProperty("--opacity", "0");
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
         container.removeEventListener("mousemove", handleMouseMove);
         container.removeEventListener("mouseleave", handleMouseLeave);
      };
   }, []);
   return (
      <div ref={containerRef} className={`${styles.container} ${className || ""}`}>
         <div className={styles.cardGrid}>{children}</div>

         <div ref={overlayRef} className={styles.overlay}>
            <div className={styles.cardGrid}>
               {React.Children.map(children, (child) => {
                  // for every child passed in GlowingCards render this
                  if (React.isValidElement<GlowingCardProps>(child) && child.type === GlowingCard) {
                     return React.cloneElement(child as React.ReactElement<any>, {
                        className: `${child.props.className || ""} ${styles.glowCard}`,
                     });
                  }
                  return child;
               })}
            </div>
         </div>
      </div>
   );
};
