// Use import.meta.glob to find all assets matching the pattern.
// The key will be the relative path (e.g., '../assets/contact/github-ICO.svg')
// The value will be a function to dynamically import the module.
// Use { eager: true } to import them directly and get the URL string.

/* //?import.meta.glob This tells Vite to find all files (**) recursively within the ../assets/ directory
// ? eager: true  This imports all the found modules immediately, rather than creating dynamic import functions
// ? import: 'default': When Vite processes assets like images, the default export is typically the resolved URL string. */

const IMAGE_URLS = import.meta.glob("../assets/**", { eager: true, import: "default" });

export const getImageUrl = (path: string): string => {
   // Construct the expected key for the IMAGE_URLS object
   // It needs to be relative *from this file* (imageUtils.ts)
   const relativePath = `../assets/${path}`;

   // Check if the path exists in our imported modules
   if (IMAGE_URLS[relativePath]) {
      // The value associated with the key is the resolved URL string
      return IMAGE_URLS[relativePath] as string;
   } else {
      console.warn(`Image not found for path: ${path} (Resolved to: ${relativePath})`);
      // Fallback or error handling: Return a placeholder, an empty string, or throw an error
      return "/placeholder.png"; // Or '' or throw new Error(...)
   }
};
