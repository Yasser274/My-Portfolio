import { useState, useEffect } from "react";
import styles from "./Blog.module.css";
import { useParams } from "react-router-dom";
import type { BlogsListType } from "./BlogsPage";
import AnimatedPage from "../components/Effects/AnimatedPage";

interface BlogContentType extends BlogsListType {
   // add to BlogsListType content type as well that's what extends is for
   content: string;
}

const BlogPostPage = () => {
   const [post, setPost] = useState<BlogContentType | null>(null); // either type string[](array of string) or null
   const [loading, setLoading] = useState<boolean>(true);
   const { slug } = useParams(); // get what's after /blogs/(slug) in the URL EX: (/blogs/first-post)
   console.log(slug);

   useEffect(() => {
      setLoading(true); // Reset loading state on slug change
      // fetch from public folder the matching post content in the URL (slug)
      fetch(`/blog-content/${slug}.json`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPost(data);
            setLoading(false);
         })
         .catch(() => {
            setLoading(false);
         });
   }, [slug]); // when slug changes re run this effect since it includes setting states it will re render what's on the page

   console.log(post);

   if (loading) {
      return (
         <div className={styles.loadingCon}>
            <div className={styles.glow1}></div>
            <div className={styles.glow2}></div>
            <p className={styles.loadingText}>Loading post...</p>
         </div>
      );
   }

   return (
      <div className={styles.blogSecCon}>
         <AnimatedPage>
            <section className={styles.blogPostContainer}>
               <div className={styles.glow1}></div>
               <div className={styles.glow2}></div>

               <article className={styles.blogContentCon}>
                  <div className={styles.postHeader}>
                     {post?.coverImage ? (
                        <img
                           src={post?.coverImage}
                           alt={`Blog image of ${post?.title}`}
                           className={styles.postMainImg}
                        />
                     ) : null}
                     <h1 className={styles.postTitle}>{post?.title}</h1>
                     <p className={styles.postSub}>{post?.excerpt}</p>
                     <div className={styles.postMeta}>
                        {post?.date && (
                           <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString("en-US", {
                                 year: "numeric",
                                 month: "long",
                                 day: "numeric",
                              })}
                           </time>
                        )}
                     </div>
                  </div>
                  {/* dangerouslySetInnerHTML to render the HTML from Markdown */}
                  {/* if post is null(because of post? meaning it might be null) ?? means if it's null use "" instead */}
                  <div
                     className={styles.postBody}
                     dangerouslySetInnerHTML={{ __html: post?.content ?? "" }}
                  />
               </article>
            </section>
         </AnimatedPage>
      </div>
   );
};

export default BlogPostPage;
