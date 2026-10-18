import Lenis from "lenis";

//? Lenis makes the page scroll smoothly (it eases the scroll instead of jumping) so all the scroll animations feel smoother too
// it only gets created once and the other files use the functions below to talk to it
let lenis: Lenis | null = null;


export const initSmoothScroll = () => {
   if (lenis) return lenis;
   lenis = new Lenis({
      lerp: 0.09, // lower = smoother/slower, higher = snappier (between 0 and 1)
      wheelMultiplier: 1,
      autoRaf: true, // lenis runs its own animation loop so we don't need to write one
      anchors: true, // normal <a href="#id"> links also scroll smoothly
      respectReducedMotion: true, // if the user turned on reduce motion in their OS, scroll normally
   });
   return lenis;
};

export const destroySmoothScroll = () => {
   lenis?.destroy();
   lenis = null;
};

// scroll to a section by its id EX: scrollToId("work")
// immediate = jump there with no animation (used right after changing pages)
export const scrollToId = (id: string, immediate = false) => {
   const target = document.getElementById(id);
   if (!target) return;
   if (lenis) {
      //? no offset needed, lenis already uses scroll-padding-top from global.css so the navbar doesn't cover the title
      lenis.scrollTo(target, { immediate, duration: 1.2 });
   } else {
      target.scrollIntoView({ behavior: immediate ? "instant" : "smooth" });
   }
};

export const scrollToTop = (immediate = false) => {
   if (lenis) lenis.scrollTo(0, { immediate });
   else window.scrollTo({ top: 0, behavior: immediate ? "instant" : "smooth" });
};

// stop the page from scrolling behind menus and popups and turn it back on after
export const lockScroll = () => {
   lenis?.stop();
   document.body.style.overflow = "hidden";
};
export const unlockScroll = () => {
   lenis?.start();
   document.body.style.overflow = "";
};
