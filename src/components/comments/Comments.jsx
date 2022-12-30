import React from "react";
import "./coment.css";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="commentContainers">
      <div className="newComment">
        <img
          src="https://yt3.ggpht.com/lrq_GZddGmqxA_VLQUJtwKxksYNiVrqLt6L0GxMUMZwuT_ZX_5-4re80g0M4sd-lGcntkqQMag=s48-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <input placeholder="Add a comment..." />
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      
    </div>
  );
};

export default Comments;
