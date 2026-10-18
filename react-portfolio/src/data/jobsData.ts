import type { JobItem } from "@/types";

// newest job first, it shows on the page in this same order
export const jobsData: JobItem[] = [
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
      jobTitle: "Marketing Intern",
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
   // {
   //    jobTitle: "Intern",
   //    companyName: "Pfizer",
   //    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Pfizer_%282021%29.png",
   //    date: `March, 2025 - Present`,
   //    points: ["Designed agjigei gfdjgifdpgjdfipgjdifgjdfigjdfigpjdipgffjdipg", "kgogjieh ehji"],
   // },
];
