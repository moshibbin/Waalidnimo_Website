import { FaLinkedin } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiTwotoneMail,
} from "react-icons/ai";
import { BsCaretRightFill, BsFacebook, BsTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="content container">
          <div className="items">
            <div className="item">
              <div className="logo">
                <img src="/assets/logowhite.png" />
              </div>
              <p className="about-footer">
                Waalidnimo, waa akadamiyad loogu talagalay wacyi gelinta iyo
                barista waalidka barbaarinta tolmoon ee ubadka
              </p>
              <div className="contact-info">
                <div>
                  <MdLocationPin />
                  <p>Hargeisa,Somaliland</p>
                </div>
                <div>
                  <AiTwotoneMail />
                  <p>Info@waalidnimo.com</p>
                </div>
                <div>
                  <BsTelephoneFill />
                  <p>+252 63 7381632</p>
                </div>
              </div>
            </div>
            <div className="item">
              <ul>
                <p>Pages</p>
                <li>
                  <a href="/"> Home</a>
                </li>
                <li>
                  <a href="/about"> About</a>
                </li>
                <li>
                  <a href="/services">What we do </a>
                </li>
                <li>
                  <a href="/blogs"> Blogs </a>
                </li>
                <li>
                  <a href="/contact"> Contact us </a>
                </li>
              </ul>
            </div>
            <div className="item">
              <ul>
                <p>Blogs</p>
                <li>
                  <a href="#"> Email Marketing</a>
                </li>
                <li>
                  <a href="#"> Campaigns</a>
                </li>
                <li>
                  <a href="#"> Branding</a>
                </li>
                <li>
                  <a href="#"> Offline</a>
                </li>
              </ul>
            </div>
            <div className="item">
              <ul>
                <p>Social Media </p>
                {/* <li>
                  <a href="#"> Email Marketing</a>
                </li>
                <li>
                  <a href="#"> Campaigns</a>
                </li>
                <li>
                  <a href="#"> Branding</a>
                </li>
                <li>
                  <a href="#"> Offline</a>
                </li> */}
                <div className="icons icon-in-footer ">
                  <a href="#" className="icon-sc">
                    <BsFacebook />
                  </a>
                  <a href="#" className="icon-sc">
                    <AiFillInstagram />
                  </a>
                  <a href="#" className="icon-sc">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="#" className="icon-sc">
                    <FaLinkedin />
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <hr />
          <div className="buttom">
            <p className="container">
              Copyright © 2023. Waalidnimo. All rights reserved. Desing By{" "}
              <span className="me"> Mo Shibbiin</span>
            </p>

            {/* <div className="icons container">
              <BsFacebook />
              <AiFillInstagram />
              <AiFillTwitterCircle />
              <FaLinkedin />
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
