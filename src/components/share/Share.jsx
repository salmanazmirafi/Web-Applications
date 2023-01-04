import React from "react";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareContainer">
        <div className="shareWrapper">
          <div className="writeShare">
            <img
              src="https://media.licdn.com/dms/image/D4E03AQEbPe4U69bN7Q/profile-displayphoto-shrink_100_100/0/1668858818640?e=1678320000&v=beta&t=fIdSFlyxhBdsL5WnXYQOnRWyLcFQRjzAzoqe30Z7JmM"
              alt=""
            />
            <input type="text" />
          </div>
        </div>
        <div className="shareOptions">
          <div className="shareItem">
            {" "}
            <img
              className="iconImage"
              src="https://img.icons8.com/fluency/512/image.png"
              alt="icon"
            />
            <span>Photo</span>
          </div>
          <div className="shareItem">
            {" "}
            <img
              src="https://img.icons8.com/fluency/512/circled-play.png"
              alt="icon"
            />
            <span>Video</span>
          </div>
          <div className="shareItem">
            {" "}
            <img
              src="https://img.icons8.com/fluency/512/event-accepted.png"
              alt="icon"
            />
            <span>Event</span>
          </div>
          <div className="shareItem">
            {" "}
            <img src="https://img.icons8.com/fluency/512/tags.png" alt="icon" />
            <span>Tag Friends</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
