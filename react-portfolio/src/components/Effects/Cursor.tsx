import { useRef, useEffect } from "react";
import styles from "./ImageEffects.module.css";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null); // Big circle (follower)
  const innerCursorRef = useRef<HTMLDivElement | null>(null); // Small circle (leader)

  useEffect(() => {
    if (!cursorRef.current || !innerCursorRef.current) {
      console.log("Cursor refs not initialized"); // Debug log
      return;
    }

    class CustomCursor {
      outerCursor: HTMLDivElement;
      innerCursor: HTMLDivElement;
      position = { x: 0, y: 0 };
      innerPosition = { x: 0, y: 0 };
      cursorSize = 20;
      innerSize = 8;

      constructor(outerElement: HTMLDivElement, innerElement: HTMLDivElement) {
        this.outerCursor = outerElement;
        this.innerCursor = innerElement;
        this.init();
      }

      init() {
        Object.assign(this.outerCursor.style, {
          position: "fixed",
          zIndex: "2147483647",
          width: `${this.cursorSize}px`,
          height: `${this.cursorSize}px`,
          backgroundColor: "transparent",
          border: "1.50px solid #FFFFFF",
          borderRadius: "50%",
          transition: "border 0.2s ease,scale 2s ease",
          userSelect: "none",
          pointerEvents: "none",
          willChange: "transform",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.75)",
          display: "block", // Ensure visibility
          opacity: "1", // Ensure it's not hidden

        });

        Object.assign(this.innerCursor.style, {
          position: "fixed",
          zIndex: "2147483647",
          width: `${this.innerSize}px`,
          height: `${this.innerSize}px`,
          backgroundColor: "#FFFFFF",
          border: "1.25px solid #000000",
          borderRadius: "50%",
          userSelect: "none",
          pointerEvents: "none",
          willChange: "transform",
          display: "block", // Ensure visibility
          opacity: "1", // Ensure it's not hidden

        });

        this.outerCursor.removeAttribute("hidden");
        this.innerCursor.removeAttribute("hidden");
        document.body.style.cursor = "none";
        console.log("Cursor initialized"); // Debug log
      }

      move(event: MouseEvent) {
        const x = event.pageX - window.scrollX;
        const y = event.pageY - window.scrollY;

        this.innerPosition.x = x - this.innerSize / 2;
        this.innerPosition.y = y - this.innerSize / 2;

        const lerp = (start: number, end: number, t: number) => start + (end - start) * t;
        const speed = 0.15;

        this.position.x = lerp(this.position.x, x - this.cursorSize / 2, speed);
        this.position.y = lerp(this.position.y, y - this.cursorSize / 2, speed);

        this.updatePosition();

        const target = event.target instanceof HTMLElement ? event.target : null;
        if (
          target &&
          (target.tagName === "BUTTON" ||
            target.tagName === "A"  ||
            target.onclick !== null ||
            target.closest("a") ||
            target.classList.contains("curzr-hover"))
        ) {
          this.hover();
        } else {
          this.hoverout();
        }
      }

      updatePosition() {
        this.outerCursor.style.transform = `translate3d(${this.position.x}px, ${this.position.y}px, 0)`;
        this.innerCursor.style.transform = `translate3d(${this.innerPosition.x}px, ${this.innerPosition.y}px, 0)`;
      }

      hover() {
        this.outerCursor.style.border = "10px solid #FFFFFF";
      }

      hoverout() {
        this.outerCursor.style.border = "1.25px solid #687296";
      }

      click() {
        this.outerCursor.style.transition = "transform 0.1s ease-out"; // Smooth scale transition
        this.outerCursor.style.transform = `translate3d(${this.position.x}px, ${this.position.y}px, 0) scale(0.75)`;
        setTimeout(() => {
          this.outerCursor.style.transition = "border 0.2s ease"; // Reset to only border transition
          this.updatePosition();// Return to normal size smoothly
        }, 100);
      }

      remove() {
        this.outerCursor.style.display = "none";
        this.innerCursor.style.display = "none";
        document.body.style.cursor = "auto";
      }
    }

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      cursorRef.current.style.display = "none";
      innerCursorRef.current.style.display = "none";
      console.log("Mobile device detected, cursor hidden"); // Debug log
      return;
    }

    const cursor = new CustomCursor(cursorRef.current, innerCursorRef.current);

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => cursor.move(e));
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", () => cursor.click());

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", () => cursor.click());
      cursor.remove();
      console.log("Cursor cleaned up"); // Debug log
    };
  }, []);

  return (
    <>
      <div className={styles.curzr} ref={cursorRef}></div>
      <div className={styles.curzr} ref={innerCursorRef}></div>
    </>
  );
};

export default Cursor;