import { useEffect } from "react";
import About from "../Components/about";
import Benefit from "../Components/benefit";
import Blogs from "../Components/blogs";
import Community from "../Components/community";
import Footer from "../Components/footer";
import Hero from "../Components/hero";
import Metter from "../Components/metter";
import Navbar from "../Components/navbar";
import Patners from "../Components/patners";
import WhatWeDo from "../Components/services";
import Team from "../Components/team";
import Testomonials from "../Components/testomianls";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div>
      {/* Navbar */}
      <div className="navbar-menu">
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <WhatWeDo />
      <About />
      <Team />
      <Benefit />
      <Metter />
      <Community />
      <Patners />
      <Testomonials />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
