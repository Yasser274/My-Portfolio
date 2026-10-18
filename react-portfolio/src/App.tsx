import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import BlogsPage from "@/pages/BlogsPage";
import BlogPostPage from "@/pages/BlogPostPage";
import NotFoundPage from "@/pages/NotFoundPage";

function App() {
   return (
      // reducedMotion="user" means if someone turned on "reduce motion" in their phone/pc settings framer motion won't move things
      <MotionConfig reducedMotion="user">
         <Routes>
            {/*  Routes that USE the layout are nested inside (the page change animation is in Layout) */}
            <Route path="/" element={<Layout></Layout>}>
               {/* the default page will show the home page that has everything except my blogs EX: www.port.com */}
               <Route index element={<HomePage></HomePage>}></Route>
               {/* if URL has /blogs show the BlogsPage EX: www.port.com/blogs */}
               <Route path="/blogs" element={<BlogsPage></BlogsPage>}></Route>
               {/* this is for any blogs EX: /blogs/second-post */}
               <Route path="/blogs/:slug" element={<BlogPostPage></BlogPostPage>} />
               {/* any link that doesn't exist shows the not found page */}
               <Route path="*" element={<NotFoundPage></NotFoundPage>} />
            </Route>
         </Routes>
      </MotionConfig>
   );
}
const AppWrapper = () => (
   <BrowserRouter>
      <App />
   </BrowserRouter>
);

export default AppWrapper;
