export const experienceData = [
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      title: "AWS",
      cert: "https://www.credly.com/badges/58d49e29-4eff-4b3d-81b2-5016fbc1da91/public_url",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Power_BI_logo.svg/1280px-Power_BI_logo.svg.png",
      title: "Power BI",
      cert: "https://drive.google.com/file/d/1z2SqooEXTjGRw4N-nHQgUmSDv6riPBqQ/view?usp=drive_link",
      moreInfo: `I couldn't publish my Power BI dashboard because it requires a subscription. Instead, I made a video showcasing it.`,
      video: "https://drive.google.com/file/d/18EyAr6PZYIJxCqOqI_P2TxwqKhwwobJ_/preview",
      smallTitle: "Power BI Sample of My Report",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
      title: "SQL",
      cert: "https://drive.google.com/file/d/1GJMnygySUqKzEGU6BuG3uL8SAtPqOl49/view",
   },

   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1920px-React_Logo_SVG.svg.png",
      title: "React",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      title: "Node.js",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/250px-Unofficial_JavaScript_logo_2.svg.png",
      title: "JavaScript",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png",
      title: "HTML5",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/250px-Official_CSS_Logo.svg.png",
      title: "CSS",
   },

   {
      image: "https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Logo.png",
      title: "Google Analytics",
      cert: "https://drive.google.com/file/d/1ksu2xI06lx-wOJdFVE-oyXJgeiutuLAP/view",
   },
   {
      image: "https://static.wikia.nocookie.net/logopedia/images/a/a8/Tag_Manager_icon_2016.png",
      title: "Google Tag Manager",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Wordpress-Logo.svg/250px-Wordpress-Logo.svg.png",
      title: "WordPress",
   },
   {
      image: "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_ads-1024.png",
      title: "Google Ads",
   },

   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/250px-Adobe_Photoshop_CC_icon.svg.png",
      title: "Photoshop",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/250px-Adobe_Illustrator_CC_icon.svg.png",
      title: "Illustrator",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Adobe_Premiere_Pro_CC_2026_icon.svg/1280px-Adobe_Premiere_Pro_CC_2026_icon.svg.png",
      title: "Premiere Pro",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/250px-Microsoft_365_%282022%29.svg.png",
      title: "Microsoft Office",
   },
];
export const jobsExperienceData = [
   {
      jobTitle: "Intern",
      companyName: "Almosafer",
      companyLogo: "https://seera.sa/wp-content/uploads/2019/04/Almosafer-01.png",
      date: `April 2025 - July 2025`,
      points: [
         "Conducted competitive analysis and developed customer journey maps.",
         "Managed advertising budgets, scheduled ad postings.",
         "Gained expertise in market trend analysis, and targeted demographic strategies, leveraging Almosafer’s understanding of local audiences for competitive advantage.",
         "Track and analyze marketing campaigns.",
      ],
   },
   {
      jobTitle: "Web Developer & Pre-Sales Trainee",
      companyName: "MIS",
      companyLogo: "https://companieslogo.com/img/orig/7200.SR_BIG-4b38926c.png?t=1751597216",
      date: "Jan 2026 - Jul 2026",
      points: [
         "Architected and deployed a corporate intranet portal for 500+ employees using SPFx, TypeScript, and SCSS with role-based access and attendance tracking.",
         "Engineered a dynamic news and events engine powered by SharePoint REST APIs for real-time company updates.",
         "Developed custom UI components (JS/CSS), optimized mobile responsiveness, and configured GA4 conversion tracking to improve user engagement.",
         "Assisted with technical scoping, Requests for Proposals (RFPs), and case study research for enterprise software clients.",
      ],
   },
   {
      jobTitle: "Web Developer & Pre-Sales Specialist",
      companyName: "MIS",
      companyLogo: "https://companieslogo.com/img/orig/7200.SR_BIG-4b38926c.png?t=1751597216",
      date: "Jan 2026 - Jul 2026",
      points: [
         ],
   },
   // {
   //    jobTitle: "Intern",
   //    companyName: "Pfizer",
   //    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Pfizer_%282021%29.png",
   //    date: `March, 2025 - Present`,
   //    points: ["Designed agjigei gfdjgifdpgjdfipgjdifgjdfigjdfigpjdipgffjdipg", "kgogjieh ehji"],
   // },
];

export interface ExperienceItem {
   image: string;
   title: string | number;
}

export interface JobExperienceItem {
   jobTitle: string;
   companyName: string | number;
   companyLogo: string;
   date: string;
   points: string[];
}
