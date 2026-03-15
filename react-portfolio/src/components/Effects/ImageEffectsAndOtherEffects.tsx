import { useRef,useEffect,RefObject } from 'react'; // A React tool to "grab" and control HTML elements (like the <div> and <img> in this case).
import styles from './ImageEffects.module.css'; 

interface ImageEffectsProps {
  src: string;
  alt?: string; // Optional you won't get an error if you don't add it in the App.tsx
}



