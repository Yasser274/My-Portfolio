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
   projectLinks: ProjectLink[];
}
export interface ProjectLink {
   text: string;
   url: string;
}

export const projectsData: ProjectsDataTypes[] = [
   {
      projectName: "Trend Bites (FullStack Web App)",
      projectImg: `${getImageUrl("about/Trend_Bites_01.png")}`,
      projectDesc: [
         {
            text: "A full-stack app for discovering and rating restaurants based on monthly community trends, helping smaller local spots get noticed.",
         },
         {
            text: "Built as a full-stack application, Trend Bites showcases modern web development practices including:",
            isBold: true,
         },
         {
            text: "- User authentication with secure sign-up and login",
         },
         {
            text: "- PostgreSQL database for reviews, ratings and trend data",
         },
         {
            text: "- Bilingual English/Arabic interface with full RTL layout support",
         },
         {
            text: "- Dark and light themes, responsive across devices",
         },
      ],
      projectTags: ["JavaScript", "TypeScript", "React", "PostgreSQL", "ExpressJS"],
      projectLinks: [
         { text: "Watch Demo", url: "https://youtu.be/08h7WsgUVcY" },
         { text: "Github Repo", url: "https://github.com/Yasser274/Fullstack-Project-React" },
      ],
   },

   {
      projectName: "E-commerce Sales & Sentiment Analysis",
      projectImg: `${getImageUrl("about/00-main_dashboard.png")}`,
      projectDesc: [
         {
            text: "Analyzed an e-commerce dataset to diagnose low conversion rates, poor customer reviews, and weak ROI from marketing campaigns; used a Python script to combine star ratings and review text into a sentiment column (positive / negative / mixed negative / etc).",
         },
         {
            text: "Performed demographic and campaign analysis to identify underperforming products, the customer segments most likely to purchase, and opportunities to improve targeting and product strategy.",
         },
      ],
      projectTags: ["Python", "PostgreSQL", "Power BI","SQL"],
      projectLinks: [
         {
            text: "Watch Demo",
            url: "https://drive.google.com/file/d/1ZTuawZ738NjPxoM9dL6n51qb7M0mO07k/view?usp=drive_link",
         },
         { text: "Github Repo", url: "https://github.com/Yasser274/Retail-Marketing-Analytics" },
      ],
   },
   {
      projectName: "E-Shop Hub",
      projectImg: `${getImageUrl("about/Frontend-e-commerce.png")}`,
      projectDesc: [
         {
            text: "A responsive front-end e-commerce website built with HTML, CSS, and JavaScript. Features a dynamic product catalog, shopping cart functionality, and a sleek user interface. Integrated Google Analytics and Google Tag Manager to track user interactions, including 'add to cart' and 'view product' events, for enhanced marketing insights and performance analysis.",
         },
      ],
      projectTags: ["JavaScript", "HTML", "CSS", "Google Analytics", "Google Tag Manager"],
      projectLinks: [
         { text: "Website Link", url: "https://store-project.pages.dev/" },
         { text: "Github Repo", url: "https://github.com/Yasser274/Store-Project" },
      ],
   },
];
