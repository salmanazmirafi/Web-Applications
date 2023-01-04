import React, { useState } from "react";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import "./post.css";

const Post = ({ posts }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  return (
    <div className="post">
      <div className="postContainer">
        <div className="user">
          <div className="userInfo">
            <img src={posts.profilePic} alt="" />
            <div className="details">
              {" "}
              <Link
                to={`/profile/${posts.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{posts.name}</span>
              </Link>
              <span className="date">{posts.time} ago</span>
            </div>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div className="content">
          <p>{posts.desc}</p>
          <img src={posts.img} alt="" />
        </div>

        <div className="info">
          <div className="item">
            <i className="fa-regular fa-heart"></i>
            <span> {posts.like} Likes</span>
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <i className="fa-solid fa-comment"></i>
            <span>{posts.comment} Comments</span>
          </div>
          <div className="item">
            <i className="fa-solid fa-share"></i>
            <span>{posts.share} Share</span>
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
