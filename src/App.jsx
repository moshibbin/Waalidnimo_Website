import { useEffect, useState } from "react";
import "./App.css";
import AboutPage from "./Pages/AboutPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import Home from "./Pages/Home";
import ServicesPage from "./Pages/ServicesPage";
import { Routes, Route } from "react-router-dom";
import Testomonials from "./Components/testomianls";
import SingleBlog from "./Components/singleblog";
import SingleBlogs from "./Pages/SingleBlog";
import Forms from "./form";
import Singleblog from "./Components/singleblog";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<SingleBlogs />} />
        <Route path="/blog/:id" element={<Singleblog />} />
      </Routes>
      {/* <Forms /> */}
    </div>
  );
}

export default App;
