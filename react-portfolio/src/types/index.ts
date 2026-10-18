// *All the types (shapes of my data) in one place so the data files and components always match

/* ===== My info (name, contact, links) ===== */
export interface SiteInfo {
   name: string;
   role: string;
   location: string;
   email: string;
   github: string;
   linkedin: string;
   resume: string;
}

/* ===== Hero options (the "I build ..." part you can click to change) ===== */
export interface FocusArea {
   id: string;
   label: string; // the text on the button
   shortLabel: string; // shorter button text for phones so all 3 fit
   phrase: string; // finishes the sentence EX: "I build" + "intranets on SharePoint."
   detail: string; // the paragraph under the headline
   stack: string[];
}

/* ===== Skills ===== */
export interface SkillItem {
   name: string;
   cert?: string; // link to the certificate (? means it's optional)
   video?: string; // link to a demo video if there is one
   note?: string; // shows when you hover the skill (tooltip)
}
export interface SkillGroup {
   group: string;
   items: SkillItem[];
}

/* ===== Jobs ===== */
export interface JobItem {
   jobTitle: string;
   companyName: string;
   companyLogo?: string;
   date: string;
   points: string[]; // an array of strings
}

/* ===== Projects ===== */
export interface ProjectDescription {
   text: string;
   isBold?: boolean;
}
export interface ProjectLink {
   text: string;
   url: string;
}
export interface ProjectItem {
   projectName: string;
   projectImg: string;
   projectDesc: ProjectDescription[];
   projectTags: string[];
   projectLinks: ProjectLink[];
}

/* ===== Certifications ===== */
export interface CertItem {
   id: number;
   certName: string;
   certImg: string;
   certProvider: string;
   glowColor: string; // the color the card glows when you hover it
}

/* ===== Blog ===== */
// the info at the top of each .md post (frontmatter), this is what posts.json has
export interface BlogPostMeta {
   title: string;
   slug: string;
   date: string;
   excerpt: string;
   coverImage?: string;
}
// one full post = the info above + content (the markdown turned into HTML), extends means it adds to BlogPostMeta
export interface BlogPost extends BlogPostMeta {
   content: string;
}
