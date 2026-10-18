import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Blog.module.css";
import layout from "@/styles/section.module.css";
import type { BlogPost } from "@/types";
import { formatPostDate } from "@/hooks/usePosts";

const BlogPostPage = () => {
   const [post, setPost] = useState<BlogPost | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const { slug } = useParams(); // get what's after /blogs/(slug) in the URL EX: (/blogs/first-post)

   useEffect(() => {
      setLoading(true); // Reset loading state on slug change
      // fetch from public folder the matching post content in the URL (slug)
      fetch(`/blog-content/${slug}.json`)
         .then((response) => {
            if (!response.ok) throw new Error(`No post called ${slug}`);
            return response.json();
         })
         .then((data: BlogPost) => setPost(data))
         .catch(() => setPost(null))
         .finally(() => setLoading(false));
   }, [slug]); // when slug changes re run this effect

   // show the post title in the browser tab
   useEffect(() => {
      if (post) document.title = `${post.title} | Yasser Alsuwaid`;
      return () => {
         document.title = "Yasser Alsuwaid, Web Developer";
      };
   }, [post]);

   if (loading) {
      return (
         <div className={`${layout.container} ${styles.page}`}>
            <p className={styles.status}>Loading post…</p>
         </div>
      );
   }

   if (!post) {
      return (
         <div className={`${layout.container} ${styles.page}`}>
            <h1 className={styles.pageTitle}>Post not found</h1>
            <p className={styles.pageLead}>
               The link may be old or mistyped. <Link to="/blogs">See all posts</Link>
            </p>
         </div>
      );
   }

   return (
      <div className={`${layout.container} ${styles.page}`}>
         <article className={styles.article}>
            <Link to="/blogs" className={styles.back}>
               All posts
            </Link>
            <header className={styles.postHeader}>
               <h1 className={styles.postTitle}>{post.title}</h1>
               <p className={styles.postLead}>{post.excerpt}</p>
               <time dateTime={post.date} className={styles.postDate}>
                  {formatPostDate(post.date)}
               </time>
            </header>
            {post.coverImage ? <img src={post.coverImage} alt="" className={styles.cover} /> : null}
            {/* dangerouslySetInnerHTML to render the HTML from Markdown (only my own posts, built at deploy time) */}
            <div className={styles.prose} dangerouslySetInnerHTML={{ __html: post.content }} />
         </article>
      </div>
   );
};

export default BlogPostPage;
