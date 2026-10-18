import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./PostList.module.css";
import type { BlogPostMeta } from "@/types";
import { formatPostDate } from "@/hooks/usePosts";
import useSpotlight from "@/hooks/useSpotlight";
import { revealContainer, revealCard, inViewOnce, softSpring } from "@/utils/animationVariants";

interface PostListProps {
   posts: BlogPostMeta[];
   loading: boolean;
   failed: boolean;
}

const PostCard = ({ post }: { post: BlogPostMeta }) => {
   const onSpotlightMove = useSpotlight();
   return (
      <motion.li variants={revealCard} whileHover={{ y: -6, transition: softSpring }}>
         <Link to={`/blogs/${post.slug}`} className={styles.card} onMouseMove={onSpotlightMove}>
            {post.coverImage ? (
               <span className={styles.imageWrap}>
                  <img src={post.coverImage} alt="" className={styles.image} loading="lazy" />
               </span>
            ) : null}
            <span className={styles.body}>
               <time dateTime={post.date} className={styles.date}>
                  {formatPostDate(post.date)}
               </time>
               <span className={styles.title}>{post.title}</span>
               <span className={styles.excerpt}>{post.excerpt}</span>
               <span className={styles.read}>Read post</span>
            </span>
         </Link>
      </motion.li>
   );
};

// the grid of post cards, used on the home page (latest 3) and on the blog page (all of them)
const PostList = ({ posts, loading, failed }: PostListProps) => {
   if (loading) return <p className={styles.status}>Loading posts…</p>;
   if (failed) return <p className={styles.status}>Posts couldn't load. Refresh the page to try again.</p>;
   if (posts.length === 0) return <p className={styles.status}>No posts yet.</p>;

   return (
      <motion.ol
         role="list"
         className={styles.grid}
         variants={revealContainer}
         initial="hidden"
         whileInView="visible"
         viewport={inViewOnce}
      >
         {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
         ))}
      </motion.ol>
   );
};

export default PostList;
