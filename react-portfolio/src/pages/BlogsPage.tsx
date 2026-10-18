import styles from "./Blog.module.css";
import layout from "@/styles/section.module.css";
import PostList from "@/components/ui/PostList";
import usePosts from "@/hooks/usePosts";

const BlogsPage = () => {
   // posts.json is the manifest file my build script created
   const { posts, loading, failed } = usePosts();

   return (
      <div className={`${layout.container} ${styles.page}`}>
         <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Blog</h1>
            <p className={styles.pageLead}>Notes on projects and what I learned building them.</p>
         </header>
         <PostList posts={posts} loading={loading} failed={failed} />
      </div>
   );
};

export default BlogsPage;
