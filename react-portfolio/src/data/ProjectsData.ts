import { getImageUrl } from "../utils/imageUtils";

export interface ProjectDescription {
   text: string;
   isBold?: boolean;
}
export interface ProjectsDataTypes {
   projectName: string;
   projectImg: string;
   projectDesc: ProjectDescription[];
   projectTags: string[];
   projectLinkSite: string;
   projectLinkSource: string;
}

export const projectsData: ProjectsDataTypes[] = [
   {
      projectName: "E-Shop Hub",
      projectImg: `${getImageUrl("about/Frontend-e-commerce.png")}`,
      projectDesc: [
         {
            text: "A responsive front-end e-commerce website built with HTML, CSS, and JavaScript. Features a dynamic product catalog, shopping cart functionality, and a sleek user interface. Integrated Google Analytics and Google Tag Manager to track user interactions, including 'add to cart' and 'view product' events, for enhanced marketing insights and performance analysis.",
         },
      ],
      projectTags: ["JavaScript", "HTML", "CSS", "Google Analytics", "Google Tag Manager"],
      projectLinkSite: "https://store-project.pages.dev/",
      projectLinkSource: "https://github.com/Yasser274/Store-Project",
   },
   {
      projectName: "Trend Bites (FullStack Web App)",
      projectImg: `${getImageUrl("about/Trend_Bites_01.png")}`,
      projectDesc: [
         {
            text: "Trend Bites empowers users to discover, rate, and explore community-driven feedback on restaurants through dynamic monthly trend insights—highlighting the freshest and most talked-about dining spots. Unlike static platforms like Google Maps, Trend Bites surfaces rising gems by spotlighting real-time shifts in popularity, giving small and local eateries a powerful opportunity to shine and helping food lovers uncover exciting new experiences.",
         },
         {
            text: "Built as a full-stack application, Trend Bites showcases modern web development practices including:",
            isBold: true,
         },
         {
            text: "- User authentication (secure sign-up/login)",
         },
         {
            text: "- Robust database management for storing reviews, ratings, and trend analytics",
         },
         {
            text: "- Responsive UI design that works seamlessly across devices",
         },
         {
            text: "Enhanced User Experience Features:",
            isBold: true,
         },
         {
            text: "- 🌓 Dual Theme Support: Users can toggle between sleek dark mode and clean light mode for comfortable viewing day or night.",
         },
         {
            text: "- 🌍 Bilingual Interface: Fully supports both English and Arabic, with right-to-left (RTL) layout adaptation for Arabic to ensure an intuitive, localized experience.",
         },
      ],
      projectTags: ["JavaScript", "HTML", "CSS", "React", "PostgreSQL", "ExpressJS"],
      projectLinkSite: "https://youtu.be/08h7WsgUVcY",
      projectLinkSource: "https://github.com/Yasser274/Fullstack-Project-React",
   },
];
