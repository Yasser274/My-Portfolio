import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
   to: number;
   suffix?: string; // something after the number EX: "+" for 500+
   duration?: number;
}

// counts from 0 up to the number when you scroll to it
const CountUp = ({ to, suffix = "", duration = 1.6 }: CountUpProps) => {
   const ref = useRef<HTMLSpanElement>(null);
   const inView = useInView(ref, { once: true, amount: 0.6 });
   const reduceMotion = useReducedMotion();

   useEffect(() => {
      const el = ref.current;
      if (!el || !inView) return;
      if (reduceMotion) {
         el.textContent = `${to}${suffix}`;
         return;
      }
      const controls = animate(0, to, {
         duration,
         ease: [0.22, 1, 0.36, 1],
         onUpdate: (v) => {
            el.textContent = `${Math.round(v)}${suffix}`;
         },
      });
      return () => controls.stop();
   }, [inView, to, suffix, duration, reduceMotion]);

   return <span ref={ref}>0{suffix}</span>;
};

export default CountUp;
