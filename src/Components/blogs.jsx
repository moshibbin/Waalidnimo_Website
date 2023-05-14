import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiClient from "../clients";
import dayjs from "dayjs";
const Blogs = () => {
  const [allPostsData, setAllPosts] = useState();
  useEffect(() => {
    async function getPostData() {
      await apiClient
        .fetch(
          `*[_type == "post"]{
          title,
          slug,
          publishedAt,
          disc,
          mainImage{
            asset->{
            _id,
            url
          }
          
        },
        "categories":categories[]->title,
      }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error);
    }

    getPostData();
  }, []);

  return (
    <div className="blogs container">
      <p>LATEST ARTICLES</p>
      <h2>Get News with EduBlink</h2>
      <div className="blogList">
        {allPostsData &&
          allPostsData.slice(0, 3).map((blog, index) => (
            <div className="item" key={index}>
              <img src={blog.mainImage.asset.url} alt="" />
              <div className="content">
                <p className="category">{blog.categories}</p>
                <Link
                  to={`/blogs/${blog.slug.current}`}
                  key={blog.slug.current}
                  className="title"
                >
                  {" "}
                  {blog.title}
                </Link>
                <div className="details">
                  <span className="info">
                    <img src="./assets/user.png" alt="" />{" "}
                    <p>{dayjs(blog.publishedAt).format("d MMM YYYY")}</p>
                  </span>
                  <span className="info">
                    <img src="./assets/user.png" alt="" />
                    <p>Admin</p>
                  </span>
                </div>
                <p>{blog.disc}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
