import React from "react";
import Post from "../post/Post";
import { post } from "../post/postData";
import Share from "../share/Share";
import "./middl.css";

const Midd = () => {
  return (
    <div className="midd">
      <Share />
      {post.map((posts) => (
        <Post posts={posts} key={posts._id} />
      ))}
    </div>
  );
};

export default Midd;
