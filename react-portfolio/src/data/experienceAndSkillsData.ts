export interface ExperienceItem {
   image: string;
   title: string | number;
   cert?: string;
   moreInfo?: string;
   video?: string;
   smallTitle?: string;
}

export interface JobExperienceItem {
   jobTitle: string;
   companyName: string | number;
   companyLogo: string;
   date: string;
   points: string[];
}

export const experienceData: ExperienceItem[] = [
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      title: "TypeScript",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      title: "React",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Microsoft_Office_SharePoint_%282019%E2%80%932025%29.svg",
      title: "SharePoint (SPFx)",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
      title: "JavaScript",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      title: "Node.js",
   },
   {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      title: "Express.js",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      title: "PostgreSQL",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
      title: "SQL",
      cert: "https://drive.google.com/file/d/1GJMnygySUqKzEGU6BuG3uL8SAtPqOl49/view",
   },
   {
      image: "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/Graph%20API%20logo.png",
      title: "Microsoft Graph",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Microsoft_Power_Automate.svg",
      title: "Power Automate",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      title: "AWS",
      cert: "https://www.credly.com/badges/58d49e29-4eff-4b3d-81b2-5016fbc1da91/public_url",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      title: "Python",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
      title: "Power BI",
      cert: "https://drive.google.com/file/d/1z2SqooEXTjGRw4N-nHQgUmSDv6riPBqQ/view?usp=drive_link",
      moreInfo: `I couldn't publish my Power BI dashboard because it requires a subscription. Instead, I made a video showcasing it.`,
      video: "https://drive.google.com/file/d/18EyAr6PZYIJxCqOqI_P2TxwqKhwwobJ_/preview",
      smallTitle: "Power BI Sample of My Report",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      title: "HTML5",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      title: "CSS",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      title: "Git",
   },
   {
      image: "https://images.icon-icons.com/2699/PNG/512/google_analytics_image_logo_icon_168152.png",
      title: "Google Analytics",
      cert: "",
   },
   {
      image: "https://images.seeklogo.com/logo-png/33/2/google-tag-manager-logo-png_seeklogo-337292.png",
      title: "Google Tag Manager",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
      title: "WordPress",
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
         "Developed custom UI components with JavaScript and CSS and improved mobile responsiveness on the company website.",
         "Implemented GA4 and conversion tracking on lead forms for monthly demand reporting.",
         "Started development of the company's SharePoint intranet portal using SPFx, TypeScript and SCSS.",
         "Supported RFPs, change requests and case study writing for enterprise software clients.",
      ],
   },
   {
      jobTitle: "Web Developer & Pre-Sales Specialist",
      companyName: "MIS",
      companyLogo: "https://companieslogo.com/img/orig/7200.SR_BIG-4b38926c.png?t=1751597216",
      date: "Jul 2026 - Present",
      points: [
         "Build and maintain the company's SharePoint Online intranet for 500+ employees using SPFx, React, TypeScript, Fluent UI and SCSS modules.",
         "Developed an attendance module that retrieves BioStar access-control data through a Java Servlet API and Microsoft Graph, with role-based views for employees, managers and HR.",
         "Built a news and events engine on the SharePoint REST API and automated internal processes with Power Automate.",
         "Built a SharePoint portal for an external client.",
         "Scope technical requirements for RFPs and change requests, turning client needs into solution designs.",
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
