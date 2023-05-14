import { AiOutlineRight } from "react-icons/ai";
const BlogHeader = () => {
  return (
    <div className="second-header">
      <div className="content container">
        <h3>Blogs</h3>
        <span className="nav-link">
          <p>Home</p>
          <AiOutlineRight />
          <p>Blogs</p>
        </span>
      </div>
    </div>
  );
};

export default BlogHeader;
