import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(null);
  const handlechange = (value) => {
    console.log();
    setMenu(value);
  };
  return (
    <div className="header-nav">
      <div className="navbar">
        <div className="content container">
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
    </div>
  );
};

export default Navbar;
