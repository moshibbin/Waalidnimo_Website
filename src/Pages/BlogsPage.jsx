import { useEffect } from "react";
import AllBlogs from "../Components/AllBlogs";
import BlogHeader from "../Components/blog-header";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";

const BlogsPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div>
      <Navbar />
      <BlogHeader />
      <AllBlogs />
      <Footer />
    </div>
  );
};

export default BlogsPage;
