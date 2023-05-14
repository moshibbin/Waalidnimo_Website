import Navbar from "./navbar";
import SingleBlogHeader from "./singleblog-header";
import { AiFillClockCircle } from "react-icons/ai";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { HiOutlinePhone } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import Footer from "./footer";
import apiclient from "../clients";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
const Singleblog = () => {
  const image = "/assets/blog.jpg";
  const Bloglist = [
    {
      id: 1,
      cetg: "Family",
      title: "Four Ways to Keep Your Workout Routine Fresh",
      date: "oct 10 ,2023",
      body: "Lorem ipsum dolor sit amet cons tetur adipisicing sed",
      img: "/assets/blog.jpg",
    },
    {
      id: 2,
      cetg: "Family",
      title: "Four Ways to Keep Your Workout Routine Fresh",
      date: "oct 10 ,2023",
      body: "Lorem ipsum dolor sit amet cons tetur adipisicing sed",
      img: "/assets/blog.jpg",
    },
    {
      id: 3,
      cetg: "Family",
      title: "Four Ways to Keep Your Workout Routine Fresh",
      date: "oct 10 ,2023",
      body: "Lorem ipsum dolor sit amet cons tetur adipisicing sed",
      img: "/assets/blog.jpg",
    },
  ];
  const { id } = useParams();
  const blog = Bloglist.filter((blog) => blog.id == id);
  const [allpost, setAllpost] = useState();

  useEffect(() => {
    apiclient
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
      .then((data) => setAllpost(data))
      .catch(console.error);
  });
  console.log(allpost);
  return (
    <div>
      <Navbar />

      <div className="singleblog container">
        <div className="post">
          <h6>{blog[0].title}</h6>
          <img src={blog[0].img} alt="" />
          <p>{blog[0].body}</p>

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
        <div className="leftside">
          <h6>Recent Posts</h6>
          {allpost &&
            allpost.map((post, index) => (
              <article key={index}>
                <div className="date">
                  <AiFillClockCircle />
                  <p>{dayjs(post.publishedAt).format("d MMM YYYY")}</p>
                </div>
                <Link
                  to={`/blogs/${post.slug.current}`}
                  key={post.slug.current}
                  className="title"
                >
                  {" "}
                  <h6 className="title">{post.title}</h6>
                </Link>
              </article>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Singleblog;
