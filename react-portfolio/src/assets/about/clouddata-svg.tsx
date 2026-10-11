import { SVGProps } from "react";

interface CloudDataIconProps extends SVGProps<SVGSVGElement> {
   primaryColor?: string;
   accentColor?: string;
}

const CloudData_Icon = ({
   primaryColor = "#000000",
   accentColor = "#6f99b6",
   ...props
}: CloudDataIconProps) => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      {/* chart bars */}
      <rect x="184" y="344" width="36" height="96" rx="8" fill={accentColor} />
      <rect x="238" y="296" width="36" height="144" rx="8" fill={accentColor} />
      <rect x="292" y="248" width="36" height="192" rx="8" fill={accentColor} />

      <g fill="none" stroke={primaryColor} strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
         {/* cloud, open at the bottom for the bars */}
         <path d="M152 336h-24a72 72 0 0 1-8-143.6A112 112 0 0 1 336 160a88 88 0 0 1 48 176h-24" />
         <line x1="144" y1="440" x2="368" y2="440" />
      </g>
   </svg>
);

export default CloudData_Icon;