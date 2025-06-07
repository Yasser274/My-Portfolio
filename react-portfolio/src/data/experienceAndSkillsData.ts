export const experienceData = [
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/512px-Microsoft_365_%282022%29.svg.png",
      title: "Microsoft Office",
   },
   {
      image: "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_ads-1024.png",
      title: "Google Ads",
   },
   {
      image: "https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Logo.png",
      title: "Google Analytics",
      cert: "https://drive.google.com/file/d/1ksu2xI06lx-wOJdFVE-oyXJgeiutuLAP/view",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
      title: "HTML5",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      title: "CSS",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      title: "JavaScript",
   },
   {
      image: "https://static.wikia.nocookie.net/logopedia/images/a/a8/Tag_Manager_icon_2016.png",
      title: "Google Tag Manager",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
      title: "SQL",
      cert: "https://drive.google.com/file/d/1GJMnygySUqKzEGU6BuG3uL8SAtPqOl49/view",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/600px-New_Power_BI_Logo.svg.png?20210102182532",
      title: "Power Bi",
      cert: "https://drive.google.com/file/d/1z2SqooEXTjGRw4N-nHQgUmSDv6riPBqQ/view?usp=drive_link",
      moreInfo: `I couldn't publish my Power BI dashboard because it requires a subscription. Instead, I made a video showcasing it.`
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/512px-WordPress_blue_logo.svg.png",
      title: "WordPress",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",
      title: "Photoshop",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png",
      title: "Premiere Pro",
   },
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png",
      title: "Illustrator",
   },
];
export const jobsExperienceData = [
   {
      jobTitle: "",
      companyName: "",
      companyLogo: "",
      date: ``,
      points: ["", ""],
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
