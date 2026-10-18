import { Link } from "react-router-dom";
import styles from "./Blog.module.css";
import ui from "@/styles/ui.module.css";
import Section from "@/components/ui/Section";
import PostList from "@/components/ui/PostList";
import usePosts from "@/hooks/usePosts";

const LATEST_COUNT = 3; // how many posts show on the home page

const Writing = () => {
   const { posts, loading, failed } = usePosts();

   return (
      <Section id="blog" title="Blog" note="Write-ups of my projects and what I learned building them." alt>
         <PostList posts={posts.slice(0, LATEST_COUNT)} loading={loading} failed={failed} />
         {posts.length > 0 ? (
            <Link to="/blogs" className={`${ui.btn} ${ui.btnGhost} ${styles.all}`}>
               See all posts
            </Link>
         ) : null}
      </Section>
   );
};

export default Writing;
