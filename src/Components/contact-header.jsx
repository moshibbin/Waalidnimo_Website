import { AiOutlineRight } from "react-icons/ai";
const ContentHeader = () => {
  return (
    <div className="second-header">
      <div className="content container">
        <h3>Contact Us</h3>
        <span className="nav-link">
          <p>Home</p>
          <AiOutlineRight />
          <p>Contact Us</p>
        </span>
      </div>
    </div>
  );
};

export default ContentHeader;
