import { useEffect, useState } from "react";
import type { BlogPostMeta } from "@/types";

// gets the list of posts from public/posts.json (the file scripts/build-posts.js makes)
// the Writing section and the blog page both use this so i don't write the fetch twice
export const usePosts = () => {
   const [posts, setPosts] = useState<BlogPostMeta[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [failed, setFailed] = useState<boolean>(false);

   useEffect(() => {
      fetch("/posts.json")
         .then((response) => {
            if (!response.ok) throw new Error(`posts.json returned ${response.status}`);
            return response.json();
         })
         .then((data: BlogPostMeta[]) => setPosts(data))
         .catch((error) => {
            console.error("Failed to fetch posts:", error);
            setFailed(true);
         })
         .finally(() => setLoading(false));
   }, []);

   return { posts, loading, failed };
};

// turns the date into words EX: "2025-10-22" -> "October 22, 2025"
export const formatPostDate = (date: string) =>
   new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default usePosts;
