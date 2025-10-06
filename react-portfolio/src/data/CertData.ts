import { getImageUrl } from "../utils/imageUtils";

export const CertData = [
   {
      id: 1,
      certName: `Google's Analytics Course`,
      certImg: `${getImageUrl("about/myCerts/Google_Analyt_Cert.png")}`,
      certProvider: "Google",
      glowColor: "#7c3aed",
   },
   {
      id: 2,
      certName: `Digital Marketing Course`,
      certImg: `${getImageUrl("about/myCerts/HubSpot_Dtl_Mrt_Cert.png")}`,
      certProvider: "HubSpot Academy",
      glowColor: "#f43f5e",
   },
   {
      id: 3,
      certName: `Introduction to SQL`,
      certImg: `${getImageUrl("about/myCerts/SQL_Intro_Cert.png")}`,
      certProvider: "Simplilearn",
      glowColor: "#0ea5e9",
   },
   {
      id: 4,
      certName: `Power BI for Beginners`,
      certImg: `${getImageUrl("about/myCerts/Power_BI_Cert.png")}`,
      certProvider: "Simplilearn",
      glowColor: "#1d690dff",
   },
   {
      id: 5,
      certName: `CS50 Introduction to Computer Science`,
      certImg: `${getImageUrl("about/myCerts/CS50x_Y.png")}`,
      certProvider: "Harvard",
      glowColor: "#7fe96aff",
   },
];
