import React from "react";
import "./comment.css";

const Comment = () => {
  return (
    <div className="CommentF">
      <div className="FieldItem">
        <img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="fidItem">
          <div className="FieldsDesc">
            <h6>Salman</h6>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="coIcon">
            <di className="IconComments">
              {" "}
              <span>Like</span>
              <span>Reply</span>
            </di>
            <div>
              {" "}
              <span className="timeComments">1 Min</span>
            </div>
          </div>
        </div>
      </div>
      <div className="FieldItem">
        <img
          src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="fidItem">
          <div className="FieldsDesc">
            <h6>Rahul</h6>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="coIcon">
            <div className="IconComments">
              {" "}
              <span>Like</span>
              <span>Reply</span>
            </div>
            <div>
              {" "}
              <span className="timeComments">1 Min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
