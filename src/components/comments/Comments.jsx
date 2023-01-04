import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./comment.css";

const Comments = () => {
  const [emojiOpen, setEmoji] = useState(false);
  return (
    <div className="comments">
      <div className="coWrite">
        <div className="input">
          <img
            className="profileImage"
            src="https://media.licdn.com/dms/image/D4E03AQEbPe4U69bN7Q/profile-displayphoto-shrink_100_100/0/1668858818640?e=1678320000&v=beta&t=fIdSFlyxhBdsL5WnXYQOnRWyLcFQRjzAzoqe30Z7JmM"
            alt=""
          />{" "}
          <div className="commentItem">
            <input type="text" placeholder="Writing comment......" />
            <img
              className="Emoji"
              src="https://cdn-icons-png.flaticon.com/512/3404/3404134.png"
              onClick={() => {
                setEmoji(!emojiOpen);
              }}
              alt=""
            />
            <div className="emojiSetting">
              {" "}
              {emojiOpen ? <EmojiPicker /> : ""}
            </div>
          </div>
        </div>
        <button>
          <i className="fa-sharp fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default Comments;
