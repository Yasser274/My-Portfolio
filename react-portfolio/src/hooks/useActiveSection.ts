import { useEffect, useState } from "react";

// tells me which section is in the middle of the screen right now (so the navbar can highlight it)
//? IntersectionObserver is a browser thing that tells you when an element comes into view, better than checking on every scroll
export const useActiveSection = (ids: string[], enabled: boolean) => {
   const [active, setActive] = useState<string | null>(null);

   useEffect(() => {
      if (!enabled) {
         setActive(null);
         return;
      }
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) setActive(entry.target.id);
            });
         },
         // only counts a section as active when it crosses a thin line in the middle of the screen
         { rootMargin: "-45% 0px -50% 0px" },
      );
      // wait a bit for the page transition to finish, otherwise the sections aren't on the page yet
      const timer = setTimeout(() => {
         ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
         });
      }, 400);
      return () => {
         clearTimeout(timer);
         observer.disconnect();
      };
      // ids never changes, turning it into a string stops the effect from running again on every render
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [ids.join(","), enabled]);

   return active;
};

export default useActiveSection;
