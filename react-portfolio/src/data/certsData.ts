import { getImageUrl } from "@/utils/imageUtils";
import type { CertItem } from "@/types";

// glowColor = the color each card lights up with when you hover it
const certs: Omit<CertItem, "id">[] = [
   {
      certName: `AWS Solutions Architect Associate`,
      certImg: `${getImageUrl("about/myCerts/AWS_Certified_Solutions_Architect_Associate_certificate.png")}`,
      certProvider: "Amazon Web Services",
      glowColor: "rgb(238, 151, 69)",
   },
   {
      certName: `AWS Cloud Practitioner`,
      certImg: `${getImageUrl("about/myCerts/AWS_Certified Cloud_Practitioner_certificate.png")}`,
      certProvider: "Amazon Web Services",
      glowColor: "rgb(238, 151, 69)",
   },
   {
      certName: `CS50 Introduction to Computer Science`,
      certImg: `${getImageUrl("about/myCerts/CS50x_Y.png")}`,
      certProvider: "Harvard",
      glowColor: "#7fe96aff",
   },
   {
      certName: `Google Data Analytics`,
      certImg: `${getImageUrl("about/myCerts/Google_Data_Analytics_Course.png")}`,
      certProvider: "Google",
      glowColor: "rgb(240, 93, 56)",
   },
   {
      certName: `Introduction to SQL`,
      certImg: `${getImageUrl("about/myCerts/SQL_Intro_Cert.png")}`,
      certProvider: "Simplilearn",
      glowColor: "#0ea5e9",
   },
   {
      certName: `Power BI for Beginners`,
      certImg: `${getImageUrl("about/myCerts/Power_BI_Cert.png")}`,
      certProvider: "Simplilearn",
      glowColor: "#1d690dff",
   },
   {
      certName: `Google's Analytics Course`,
      certImg: `${getImageUrl("about/myCerts/Google_Analyt_Cert.png")}`,
      certProvider: "Google",
      glowColor: "#7c3aed",
   },
   {
      certName: `Digital Marketing Course`,
      certImg: `${getImageUrl("about/myCerts/HubSpot_Dtl_Mrt_Cert.png")}`,
      certProvider: "HubSpot Academy",
      glowColor: "#f43f5e",
   },
];

// ids are assigned automatically (1, 2, 3, ...) based on position
export const certsData: CertItem[] = certs.map((cert, i) => ({
   ...cert,
   id: i + 1,
}));