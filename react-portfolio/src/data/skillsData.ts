import type { SkillGroup } from "@/types";

// skills grouped by what they're for, each group is one card on the page
export const skillsData: SkillGroup[] = [
   {
      group: "Microsoft 365",
      items: [{ name: "SharePoint (SPFx)" }, { name: "Microsoft Graph" }, { name: "Power Automate" }, { name: "Fluent UI" }],
   },
   {
      group: "Frontend",
      items: [{ name: "TypeScript" }, { name: "React" }, { name: "JavaScript" }, { name: "HTML" }, { name: "CSS / SCSS" }],
   },
   {
      group: "Backend and data",
      items: [
         { name: "Node.js" },
         { name: "Express.js" },
         { name: "PostgreSQL" },
         { name: "SQL", cert: "https://drive.google.com/file/d/1GJMnygySUqKzEGU6BuG3uL8SAtPqOl49/view" },
         { name: "Python" },
         {
            name: "Power BI",
            cert: "https://drive.google.com/file/d/1z2SqooEXTjGRw4N-nHQgUmSDv6riPBqQ/view?usp=drive_link",
            video: "https://drive.google.com/file/d/18EyAr6PZYIJxCqOqI_P2TxwqKhwwobJ_/view",
            note: "Publishing a Power BI dashboard needs a paid plan, so the demo is a video.",
         },
      ],
   },
   {
      group: "Cloud and tools",
      items: [
         { name: "AWS", cert: "https://www.credly.com/badges/58d49e29-4eff-4b3d-81b2-5016fbc1da91/public_url" },
         { name: "Git" },
         { name: "Google Analytics" },
         { name: "Google Tag Manager" },
         { name: "WordPress" },
      ],
   },
];
