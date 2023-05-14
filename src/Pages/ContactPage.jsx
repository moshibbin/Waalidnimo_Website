import { useEffect } from "react";
import ContentHeader from "../Components/contact-header";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Navbar from "../Components/navbar";

const ContactPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div>
      <Navbar />
      <ContentHeader />
      <Form />
      <Footer />
    </div>
  );
};

export default ContactPage;
