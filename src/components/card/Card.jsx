import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = () => {
  return (
    <>
      <Link to="video/test" style={{ textDecoration: "none" }}>
        <div className="cardContainer">
          <img className="thamneal"
            src="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg"
            alt=""
          />
          <div className="detalis">
            <img
              className="channelImage"
              src="https://freepngimg.com/thumb/man/22654-6-man-thumb.png"
              alt=""
            />
            <div className="texts">
              <h2 className="chanelTitle">My Fast Video</h2>
              <h4>Salman Rafi</h4>
              <p>1M views . 1 day ago</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
