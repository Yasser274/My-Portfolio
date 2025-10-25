import fs from "fs";
import path from "path";
import matter from "gray-matter"; // parse frontmatter from files (YAML i wrote in my posts)
import { marked } from "marked"; // this is what reads md(markdown) files and convert it to HTML

// *FOR NPM RUN BUILD so that this script runs first
// *       "prebuild": "node src/scripts/build-post.js", in npm any script that starts with pre(like prebuild) will automatically run before the script named <scriptname>(build).

const postsDir = path.join(process.cwd(), "src/posts"); // like E:\Portfolio Website\ + \src\posts process.cwd will get the current directory (where you are running the command from)
const publicDir = path.join(process.cwd(), "public/blog-content"); // after running script "npm run build" it will read what's inside src/Posts and put it inside public
// ensure the output directory exists if it doesn't create a new dir called publicDir
if (!fs.existsSync(publicDir)) {
   fs.mkdirSync(publicDir, { recursive: true });
}

const allPostsData = [];

// read all markdown files
const fileNames = fs.readdirSync(postsDir);

fileNames.forEach((fileName) => {
   // if extension of the file currently being read ends with .md
   if (path.extname(fileName) === ".md") {
      const filePath = path.join(postsDir, fileName); // EX: E:\Portfolio Website\react-portfolio\src\posts + my-first-post.md
      const fileContents = fs.readFileSync(filePath, "utf-8");

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Add metadata to our manifest list but not content
      allPostsData.push({ ...data }); // the ...data is spread meaning it will go through every element inside the array(EX [title,slug]) since it's inside {} meaning add another object

      // convert markdown to HTML
      const htmlContent = marked(content);

      // Create a JSON file for each individual post's content
      const postJson = {
         ...data,
         content: htmlContent,
      };

      // Creates a new file (or overwrites an existing one).
      // The file path is constructed by joining the publicDir with the post's slug (e.g., 'public/posts/first-post.json'). (`${data.slug}.json` will be the path to the file)
      // The content written to the file is the 'postJson' object converted into a JSON string.
      fs.writeFileSync(path.join(publicDir, `${data.slug}.json`), JSON.stringify(postJson));
   }
});

// Sort posts by date (from newest to oldest)
allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));

// Create a master JSON file for the blog index page(main Blogs Page)
fs.writeFileSync(path.join(process.cwd(), "public/posts.json"), JSON.stringify(allPostsData));
// this will create posts.json file in public folder and it's content will be allPostsData converted to json form

console.log("Posts created successfully");
