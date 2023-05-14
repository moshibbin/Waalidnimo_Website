import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { MdEmail, MdLocationPin } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { HiOutlinePhone } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hl0czss",
        "template_ueji36l",
        form.current,
        "m6F6r4EJBVk15kDuc"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form container">
      <div className="content">
        <span>
          <p>CONTACT US</p>
        </span>
        <h2>Get In Touch With Socialzy</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
          minim veniam quis nostrud exercitation ullamco
        </p>
        <div className="information">
          <div className="boxe">
            <div className="">
              <MdLocationPin className="icon" />
            </div>
            <div className="title">
              <h6>Location</h6>
              <p>Hargeisa , Somaliland</p>
            </div>
          </div>
          <div className="boxe">
            <div className="">
              <MdEmail className="icon" />
            </div>
            <div className="title">
              <h6>Email Address</h6>
              <p>Info@waalidnimo@gmail.com</p>
            </div>
          </div>
          <div className="boxe">
            <div className="">
              <HiOutlinePhone className="icon" />
            </div>
            <div className="title">
              <h6>Phone Number</h6>
              <p>+252 63 3140475 </p>
            </div>
          </div>
        </div>

        <div className="socail">
          <p>Follow Our Social Media</p>
          <div className="icons">
            <ImFacebook className="icon-cl" />
            <AiFillInstagram className="icon-cl" />
            <AiOutlineTwitter className="icon-cl" />
            <FaTelegramPlane className="icon-cl" />
          </div>
        </div>
      </div>
      {/* <div className="form-feild">
        <div className="form">
          <input type="text" className="feild" placeholder="Your Name" />
          <input type="text" className="feild" placeholder="Your Email" />
          <input type="text" className="feild" placeholder="Your Subject" />
          <textarea name="" id="" cols="30" rows="10" className=""></textarea>
          <button className="btn btn-primary">Send Message</button>
        </div>
      </div> */}
      <div className="form-feild">
        {" "}
        <form ref={form} onSubmit={sendEmail} className="form">
          <input
            type="text"
            name="user_name"
            className="feild"
            placeholder="Your Name"
          />

          <input
            type="email"
            name="user_email"
            className="feild"
            placeholder="Your Email"
          />

          <textarea name="message" cols="30" rows="10" />
          <input type="submit" value="Send" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default Form;
