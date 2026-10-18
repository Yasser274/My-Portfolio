import { SVGProps } from "react";

//? the colors go in style={{}} and not fill="" because css variables like var(--color-accent) only work in style
interface FullStackIconProps extends SVGProps<SVGSVGElement> {
   primaryColor?: string;
   accentColor?: string;
}

const FullStackIcon = ({
   primaryColor = "currentColor", // falls back to the text color if nothing is passed
   accentColor = "var(--color-accent)",
   ...props
}: FullStackIconProps) => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      {/* browser */}
      <g fill="none" style={{ stroke: primaryColor }} strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
         <rect x="56" y="56" width="400" height="256" rx="24" />
         <line x1="56" y1="128" x2="456" y2="128" />
         <line x1="272" y1="172" x2="240" y2="268" />
         <line x1="256" y1="312" x2="256" y2="348" />
      </g>
      <circle cx="104" cy="92" r="10" style={{ fill: accentColor }} />
      <circle cx="144" cy="92" r="10" style={{ fill: accentColor }} />
      <circle cx="184" cy="92" r="10" style={{ fill: accentColor }} />

      {/* code brackets */}
      <g fill="none" style={{ stroke: accentColor }} strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
         <path d="M200 180l-40 40 40 40" />
         <path d="M312 180l40 40-40 40" />
      </g>

      {/* database */}
      <ellipse cx="256" cy="380" rx="120" ry="28" style={{ fill: accentColor }} />
      <g fill="none" style={{ stroke: primaryColor }} strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
         <ellipse cx="256" cy="380" rx="120" ry="28" />
         <path d="M136 380v64c0 15.5 53.7 28 120 28s120-12.5 120-28v-64" />
         <path d="M136 412c0 15.5 53.7 28 120 28s120-12.5 120-28" />
      </g>
   </svg>
);

export default FullStackIcon;
