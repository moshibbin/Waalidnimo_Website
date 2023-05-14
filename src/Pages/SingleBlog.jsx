import Navbar from "../Components/navbar";
import SingleBlog from "../Components/singleblog";
import { AiFillClockCircle } from "react-icons/ai";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { HiOutlinePhone } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import Footer from "../Components/footer";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import apiclient from "../clients";
import BlockContent from "@sanity/block-content-to-react";
import { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import dayjs from "dayjs";
// const builder = imageUrlBuilder(apiclient);
// function urlFor(source) {
//   return builder.image(source);
// }
const SingleBlogs = () => {
  const image = "/assets/blog.jpg";
  const [postData, setPostData] = useState(null);
  const [allpost, setAllpost] = useState(null);
  const { slug } = useParams();

  // const blogs = Bloglist.filter((blog) => blog.id == id);
  useEffect(() => {
    window.scroll(0, 0);
    function getPost() {
      apiclient
        .fetch(
          `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "slug":slug.current
       }`,
          { slug }
        )
        .then((data) => setPostData(data[0]))
        .catch(console.error);
    }

    function getAllpost() {
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
    }
    getAllpost();
    getPost();
  }, [slug]);

  // console.log(allpost);

  if (!postData) return <div>Loading...</div>;
  return (
    <div>
      <Navbar />

      <div className="singleblog container">
        <div className="post">
          <h6>{postData.title}</h6>
          <img src={postData.mainImage.asset.url} alt="" />
          {/* <p>{blogs[0].body}</p> */}
          <div>
            {" "}
            <BlockContent
              blocks={postData.body}
              projectId={"uc6ppj8d"}
              dataset={"production"}
            />
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

export default SingleBlogs;
