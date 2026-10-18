import { Transition, Variants } from "framer-motion";

// *All the animation settings live here so every part of the site moves the same way

// same curve as --ease-out in theme.css (starts fast and slows down softly at the end)
export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

// soft spring for hover lifts and sliding pills (lower stiffness = slower, higher damping = less bounce)
export const softSpring: Transition = { type: "spring", stiffness: 220, damping: 28, mass: 0.9 };

// for things that open and close when you click them (jobs, menus)
export const openTransition: Transition = { duration: 0.5, ease: easeOut };

/* ===== Scroll reveals (things appearing when you scroll to them) ===== */
// the parent, makes its children show up one after another instead of all at once
export const revealContainer: Variants = {
   hidden: {},
   visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
// a child, slides up a little and fades in
//? no blur here on purpose, animating blur (filter) is heavy for the browser and makes scrolling stutter
export const revealUp: Variants = {
   hidden: { opacity: 0, y: 24 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut } },
};
// cards in a grid, same idea but starts a bit smaller
export const revealCard: Variants = {
   hidden: { opacity: 0, y: 32, scale: 0.98 },
   visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: easeOut } },
};

/* ===== Hero animation when the page first loads ===== */
export const heroContainer: Variants = {
   hidden: {},
   visible: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};
// each line of the headline slides up from behind a mask (the parent has overflow: hidden)
export const heroLine: Variants = {
   hidden: { y: "110%" },
   visible: { y: "0%", transition: { duration: 1.1, ease: easeOut } },
};
export const heroFade: Variants = {
   hidden: { opacity: 0, y: 14 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut } },
};

// when to start a scroll reveal: once only, when 15% of it is visible, and a bit before it fully enters the screen
export const inViewOnce = { once: true, amount: 0.15, margin: "0px 0px -8% 0px" } as const;
