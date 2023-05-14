import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Forms = () => {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className=" navbar">
      <div className=" container-nav   ">
        <div className="menumobile   ">
          <div className="logo ">
            <img src="/assets/logo.png" alt="logo!" />
          </div>
          <div className="menuicon  ">
            {!menu ? (
              <AiOutlineMenu
                className="icon"
                onClick={() => handlechange(10)}
              />
            ) : (
              <RxCross1 className="icon" onClick={() => handlechange(null)} />
            )}
          </div>
        </div>
        <div className={!menu ? "menu hidden   " : "menu  "}>
          <ul className=" ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">What We Do</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
          <button className="btn btn-primary ">nala soo Xidhidh </button>
        </div>
      </div>
    </div>
  );
};

export default Forms;
