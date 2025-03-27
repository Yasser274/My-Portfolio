import { useRef,useEffect,RefObject } from 'react'; // A React tool to "grab" and control HTML elements (like the <div> and <img> in this case).
import styles from './ImageEffects.module.css'; 

interface ImageEffectsProps {
  src: string;
  alt?: string; // Optional you won't get an error if you don't add it in the App.tsx
}

export const ImageEffects: React.FC<ImageEffectsProps> = ({ src, alt }) => {
  const wrapperRef = useRef<HTMLDivElement>(null); // Initially, they’re null because the elements don’t exist until the component is rendered
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current || !imgRef.current) return; // If the <div> or <img> isn’t ready, stop (safety check).

    const rect = wrapperRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxTilt = 15; // Max tilt angle in degrees
    const tiltX = ((centerY - mouseY) / centerY) * maxTilt; // Vertical tilt
    const tiltY = ((mouseX - centerX) / centerX) * maxTilt; // Horizontal tilt

    imgRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    // Add this HTML when adding it in App.tsx
    <div
      className={styles.imageEffectsWrapper} // Updated class name
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={styles.imageEffects} // Updated class name
        src={src}
        alt={alt}
        ref={imgRef}
      />
    </div>
  );
};

//? that's a function that takes a Ref and a style(string)
export const SectionAppearFadeEffect = (
  ref: RefObject<HTMLElement | null>,
  style: string
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.2 } // Trigger when 10% of section is visible
    );

    if (ref.current) { // if the ref mounts(or renders in DOM)
      observer.observe(ref.current);
    }

    // Cleanup observer on unmount (effect re-runs due to changes in the dependency array (EX: when a count changes from 1 to 2 clean up the first one))
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, style]); // Dependencies ensure effect re-runs if ref or style changes
};
