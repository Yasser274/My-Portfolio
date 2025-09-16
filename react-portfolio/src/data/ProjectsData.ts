import { getImageUrl } from "../utils/imageUtils";

export const projectsData = [
   {
      projectName: "E-Shop Hub",
      projectImg: `${getImageUrl("about/Frontend-e-commerce.png")}`,
      projectDesc:
         "A responsive front-end e-commerce website built with HTML, CSS, and JavaScript. Features a dynamic product catalog, shopping cart functionality, and a sleek user interface. Integrated Google Analytics and Google Tag Manager to track user interactions, including 'add to cart' and 'view product' events, for enhanced marketing insights and performance analysis.",
      projectTags: ["JavaScript", "HTML", "CSS", "Google Analytics", "Google Tag Manager"],
      projectLinkSite: "https://store-project.pages.dev/",
      projectLinkSource: "https://github.com/Yasser274/Store-Project",
   },
   {
      projectName: "Trend Bites (FullStack Web App)",
      projectImg: `${getImageUrl("about/Trend-Bites.png")}`,
      projectDesc: `It enables users to discover, rate, and view community feedback on restaurants based on monthly trends, helping users find fresh and trending dining options.
Unlike Google Maps, Trend Bites focuses on dynamic, monthly trends, enabling small restaurants to rise quickly in popularity and helping users discover new dining experiences. This project showcases full-stack development, user authentication, database management, and responsive UI design, creating an engaging, community-driven platform for restaurant ratings.`,
      projectTags: ["JavaScript", "HTML", "CSS", "React", "PostgreSQL", "ExpressJS"],
      projectLinkSite: "https://youtu.be/kpDFoljGSl8",
      projectLinkSource: "https://github.com/Yasser274/Fullstack-Project-React",
   },
];
