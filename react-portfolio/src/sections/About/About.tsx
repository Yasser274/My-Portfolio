import { motion } from "framer-motion";
import styles from "./About.module.css";
import ui from "@/styles/ui.module.css";
import Section from "@/components/ui/Section";
import useSpotlight from "@/hooks/useSpotlight";
import { revealContainer, revealUp, revealCard, inViewOnce, softSpring } from "@/utils/animationVariants";
import { site } from "@/data/siteData";
import { FileIcon } from "@/components/icons/Icons";
// Vector components
import SharePointIcon from "@/components/icons/SharePointIcon";
import FullStackIcon from "@/components/icons/FullStackIcon";
import CloudDataIcon from "@/components/icons/CloudDataIcon";

// icon colors, using the theme.css colors so they change with the theme
const ICON_PRIMARY = "var(--color-text)";
const ICON_ACCENT = "var(--color-accent)";

const aboutCards = [
   {
      icon: <SharePointIcon width={44} height={44} primaryColor={ICON_PRIMARY} accentColor={ICON_ACCENT} />,
      title: "Microsoft 365 & SharePoint",
      p: "SPFx web parts in React, TypeScript and Fluent UI, connected to Microsoft Graph, Azure AD and Power Automate.",
   },
   {
      icon: <FullStackIcon width={44} height={44} primaryColor={ICON_PRIMARY} accentColor={ICON_ACCENT} />,
      title: "Full-stack web",
      p: "Responsive apps with React, Node.js, Express and PostgreSQL, from authentication to database design.",
   },
   {
      icon: <CloudDataIcon width={44} height={44} primaryColor={ICON_PRIMARY} accentColor={ICON_ACCENT} />,
      title: "Cloud & data",
      p: "AWS Certified Cloud Practitioner preparing for Solutions Architect Associate, with SQL, Python and Power BI.",
   },
];

const About = () => {
   const onSpotlightMove = useSpotlight();

   return (
      <Section id="about" title="About me" note="From marketing analytics to building the tools a whole company uses every day.">
         <div className={styles.about}>
            <motion.div
               className={styles.text}
               variants={revealContainer}
               initial="hidden"
               whileInView="visible"
               viewport={inViewOnce}
            >
               <motion.p variants={revealUp}>
                  I'm a web developer at MIS in Riyadh. Most of my day goes into the company's SharePoint Online
                  intranet: building web parts, wiring them to Microsoft Graph and our backend APIs, and automating
                  the processes around them. I also scope technical requirements when clients send RFPs and change
                  requests.
               </motion.p>
               <motion.p variants={revealUp}>
                  I started out in marketing, interning at Almosafer on campaigns and market analysis. Data work pulled
                  me toward code: SQL, Python and Power BI first, then JavaScript, React and full-stack apps.
               </motion.p>
               <motion.div variants={revealUp}>
                  <a href={site.resume} target="_blank" rel="noreferrer" className={`${ui.btn} ${ui.btnGhost}`}>
                     <FileIcon /> Read my resume
                  </a>
               </motion.div>
            </motion.div>

            <motion.ul
               role="list"
               className={styles.cards}
               variants={revealContainer}
               initial="hidden"
               whileInView="visible"
               viewport={inViewOnce}
            >
               {aboutCards.map((card) => (
                  <motion.li
                     key={card.title}
                     className={`${ui.card} ${styles.card}`}
                     variants={revealCard}
                     whileHover={{ y: -4, transition: softSpring }}
                     onMouseMove={onSpotlightMove}
                  >
                     <span className={styles.iconBox}>{card.icon}</span>
                     <div>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardText}>{card.p}</p>
                     </div>
                  </motion.li>
               ))}
            </motion.ul>
         </div>
      </Section>
   );
};

export default About;
