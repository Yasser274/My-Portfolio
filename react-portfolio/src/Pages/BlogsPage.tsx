import { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import { Link } from "react-router-dom";
import AnimatedPage from "../components/Effects/AnimatedPage";

export interface BlogsListType {
   title: string;
   slug: string;
   date: string;
   excerpt: string;
   coverImage?: string;
}

const BlogsPage = () => {
   // Store total blogs array
   const [blogsList, setBlogsList] = useState<BlogsListType[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   //  effect runs only once
   useEffect(() => {
      // fetching the manifest file that my build script created.
      fetch("/posts.json")
         .then((respond) => respond.json())
         .then((data) => {
            // take the data from fetching the json and store it in the blogsList state (which will cause a re render since i changed the state)
            setBlogsList(data);
            // when finished switch loading to false
            setLoading(false);
         })
         .catch((error) => {
            console.error("Failed to fetch posts:", error);
            setLoading(false);
         });
   }, []);

   //  if loading is true (means it's loading)
   if (loading) {
      return (
         <div className={styles.loadingCon}>
            <div className={styles.blogBlur}></div>
            <div className={styles.blogBlur2}></div>
            <p className={styles.loadingBlogs}>Loading posts...</p>
         </div>
      );
   }

   return (
      // when this appears(mount) animate it
      <div className={styles.blogSecCon}>
         <AnimatedPage>
            <section className={styles.blogSection}>
               <div className={styles.blogBlur}></div>
               <div className={styles.blogBlur2}></div>
               <h1 className={styles.pageTitle}>My Blogs</h1>
               <div className={styles.blogsGrid}>
                  {blogsList.map((blog) => (
                     <Link to={`/blogs/${blog.slug}`} key={blog.slug} className={styles.blogLink}>
                        <article className={styles.blogCard}>
                           {blog.coverImage && (
                              <img
                                 src={blog.coverImage}
                                 alt={`Cover for ${blog.title}`}
                                 className={styles.cardImage}
                              />
                           )}
                           <div className={styles.cardContent}>
                              <h2 className={styles.cardTitle}>{blog.title}</h2>
                              <p className={styles.cardExcerpt}>{blog.excerpt}</p>
                              <small className={styles.cardDate}>
                                 {new Date(blog.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                 })}
                              </small>
                           </div>
                        </article>
                     </Link>
                  ))}
               </div>
            </section>
         </AnimatedPage>
      </div>
   );
};

export default BlogsPage;
