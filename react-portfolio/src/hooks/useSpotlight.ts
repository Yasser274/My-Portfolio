import { MouseEvent, useCallback } from "react";

// gives the element --x and --y (where the mouse is inside it) so the css can put a glow there
// how to use: <div onMouseMove={onSpotlightMove}> and in the css radial-gradient(... at var(--x) var(--y), ...)
//? useCallback keeps the same function between renders instead of making a new one every time
export const useSpotlight = () => {
   return useCallback((e: MouseEvent<HTMLElement>) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--y", `${e.clientY - rect.top}px`);
   }, []);
};

export default useSpotlight;
