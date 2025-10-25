import styles from "./App.module.css";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import BlogsPage from "./Pages/BlogsPage";
import BlogPostPage from "./Pages/BlogPostPage";
import { AnimatePresence } from "framer-motion";

function App() {
   const location = useLocation(); // Get the current location

   return (
      <div className={styles.App}>
            <AnimatePresence mode="wait">
               {" "}
               {/* Wrap the Routes with this Animate */}
               <Routes location={location} key={location.pathname}>
                  {/* 👇 Routes that USE the layout are nested inside */}
                  <Route path="/" element={<Layout></Layout>}>
                     {/* the default page will show the home page that has everything except my blogs EX: www.port.com */}
                     <Route index element={<HomePage></HomePage>}></Route>
                     {/* if URL has /blog show the BlogsPage EX: www.port.com/blog */}
                     <Route path="/blogs" element={<BlogsPage></BlogsPage>}></Route>
                     {/* this is for any blogs EX: /blogs/second-post */}
                     <Route path="/blogs/:slug" element={<BlogPostPage></BlogPostPage>} />
                  </Route>
               </Routes>
            </AnimatePresence>
      </div>
   );
}
const AppWrapper = () => (
   <BrowserRouter>
      <App />
   </BrowserRouter>
);

export default AppWrapper;
