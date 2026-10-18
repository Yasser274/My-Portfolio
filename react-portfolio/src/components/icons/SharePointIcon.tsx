import { SVGProps } from "react";

//? the colors go in style={{}} and not fill="" because css variables like var(--color-accent) only work in style
interface SharePointIconProps extends SVGProps<SVGSVGElement> {
   primaryColor?: string;
   accentColor?: string;
}

const SharePointIcon = ({
   primaryColor = "currentColor", // falls back to the text color if nothing is passed
   accentColor = "var(--color-accent)",
   ...props
}: SharePointIconProps) => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <g fill="none" style={{ stroke: primaryColor }} strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
         <rect x="56" y="72" width="400" height="368" rx="32" />
         <line x1="56" y1="152" x2="456" y2="152" />
         <line x1="152" y1="152" x2="152" y2="440" />
      </g>

      {/* header */}
      <circle cx="104" cy="112" r="12" style={{ fill: accentColor }} />
      <line x1="184" y1="112" x2="296" y2="112" style={{ stroke: accentColor }} strokeWidth="16" strokeLinecap="round" />

      {/* side nav */}
      <circle cx="104" cy="208" r="12" style={{ fill: accentColor }} />
      <circle cx="104" cy="256" r="12" style={{ fill: accentColor }} />
      <circle cx="104" cy="304" r="12" style={{ fill: accentColor }} />

      {/* content */}
      <rect x="192" y="192" width="224" height="88" rx="12" style={{ fill: accentColor }} />
      <rect x="192" y="312" width="96" height="88" rx="12" style={{ fill: accentColor }} opacity="0.5" />
      <rect x="320" y="312" width="96" height="88" rx="12" style={{ fill: accentColor }} opacity="0.5" />
   </svg>
);

export default SharePointIcon;
