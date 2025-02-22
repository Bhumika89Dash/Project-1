import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css"; // Import CSS for styling
import image1 from "../assets/blogimg1.jpg"; // Import images for blog posts
import image2 from "../assets/bolgimg2.jpg";
import image3 from "../assets/blogimg3.jpg";
const blogPosts = [
  {
    id: 1,
    title: "How Crowdfunding Changes Lives",
    image: image1,
    description: "Crowdfunding has helped thousands achieve their dreams. Discover how!",
    link: "/blog/crowdfunding-impact",
  },
  {
    id: 2,
    title: "Tips for a Successful Fundraising Campaign",
    image: image2,
    description: "Learn key strategies to maximize your fundraising efforts.",
    link: "/blog/fundraising-tips",
  },
  {
    id: 3,
    title: "The Power of Community in Fundraising",
    image: image3,
    description: "Your community is your biggest strength. Here's how to engage them!",
    link: "/blog/community-support",
  },
];

const Blog = () => {
  return (
    <div id="uniqueblog" className="container blog-container">
        <br></br>
        <br></br>
      <h2 className="text-center mb-4">Latest Blogs</h2>
      <div className="row g-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-md-4">
            <div className="card blog-card">
              <img src={post.image} className="card-img-top blog-img" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <Link to={post.link} className="btn btn-primary w-100 blogs-button">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
