import { AiOutlineRight } from "react-icons/ai";
const AboutHeader = () => {
  return (
    <div className="second-header">
      <div className="content container">
        <h3>About Us</h3>
        <span className="nav-link">
          <p>Home</p>
          <AiOutlineRight />
          <p>About Us</p>
        </span>
      </div>
    </div>
  );
};

export default AboutHeader;
