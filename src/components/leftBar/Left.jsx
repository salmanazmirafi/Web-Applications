import React from "react";
import "./left.css";
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <div className="left">
      <div className="leftContainer">
        <div className="leftWrapper">
          <div className="leftIcon">
            <Link>
              {" "}
              <i className="fa-brands fa-facebook-messenger"></i> Home
            </Link>
          </div>
          <div className="leftIcon">
            <Link>
              {" "}
              <i className="fa-brands fa-facebook-messenger"></i> Home
            </Link>
          </div>
          <div className="leftIcon">
            <Link>
              {" "}
              <i className="fa-brands fa-facebook-messenger"></i> Home
            </Link>
          </div>
          <div className="leftIcon">
            <Link>
              {" "}
              <i className="fa-brands fa-facebook-messenger"></i> Home
            </Link>
          </div>
          <div className="leftIcon">
            <Link>
              {" "}
              <i className="fa-brands fa-facebook-messenger"></i> Home
            </Link>
          </div>
          <div className="leftIcon">
            <Link>
              {" "}
              <i className="fa-brands fa-facebook-messenger"></i> Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
