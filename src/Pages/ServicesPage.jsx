import { useEffect } from "react";
import Benefit from "../Components/benefit";
import Footer from "../Components/footer";
import Metter2 from "../Components/metter2";
import Navbar from "../Components/navbar";
import WhatWeDo from "../Components/services";
import ServicesHeader from "../Components/services-header";

const ServicesPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div>
      <Navbar />
      <ServicesHeader />
      <WhatWeDo />
      <Benefit />
      <Metter2 />
      <Footer />
    </div>
  );
};

export default ServicesPage;
