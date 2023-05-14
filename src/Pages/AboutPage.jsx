import { useEffect } from "react";
import About from "../Components/about";
import AboutHeader from "../Components/about-header";
import About2 from "../Components/about2";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";
import Patners from "../Components/patners";
import RahmaAbout from "../Components/rahma";
import Services2 from "../Components/services2";
import Team from "../Components/team";
import Testomonials from "../Components/testomianls";

const AboutPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <About2 />
      <Services2 />
      <RahmaAbout />
      <Team />
      <Patners />
      <Testomonials />
      <Footer />
    </div>
  );
};

export default AboutPage;
