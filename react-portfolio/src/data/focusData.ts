import type { FocusArea } from "@/types";

// the 3 options in the hero ("I build ..."), add or change one here and the hero updates
export const focusAreas: FocusArea[] = [
   {
      id: "sharepoint",
      label: "SharePoint intranets",
      shortLabel: "SharePoint",
      phrase: "intranets on SharePoint.",
      detail:
         "At MIS I build and maintain the company's SharePoint Online intranet, used by more than 500 employees. SPFx web parts in React and TypeScript, connected to Microsoft Graph, Azure AD, a Java backend and Power Automate.",
      stack: ["SPFx", "React", "TypeScript", "Fluent UI", "Microsoft Graph", "Power Automate"],
   },
   {
      id: "fullstack",
      label: "Full-stack apps",
      shortLabel: "Full-stack",
      phrase: "full-stack web apps.",
      detail:
         "Trend Bites lets people rate restaurants by monthly community trends so smaller local places get noticed. It has sign-up and login, a PostgreSQL database, dark and light themes, and a full English and Arabic interface with RTL layout.",
      stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
   },
   {
      id: "data",
      label: "Data dashboards",
      shortLabel: "Dashboards",
      phrase: "data dashboards.",
      detail:
         "I came to development through marketing analytics. For an e-commerce dataset I combined star ratings with review text in Python to explain falling conversions, then built an interactive Power BI report on top.",
      stack: ["Power BI", "SQL", "Python", "PostgreSQL"],
   },
];
