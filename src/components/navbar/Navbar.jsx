import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { MdExplore } from "react-icons/md";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navWrapper">
          <div className="logo">
            <Link>Network</Link>
          </div>
          <div className="navItem">
            <div className="rightItem">
              {" "}
              <ul className="list">
                <li className="item">
                  <Link>
                    <i class="fa-solid fa-house"></i>
                  </Link>
                  <Link>
                    <i class="fa-solid fa-paper-plane"></i>
                  </Link>{" "}
                  <Link>
                    <MdExplore />
                  </Link>
                  <Link>
                    <BsFillSuitHeartFill />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="profile">
              <img
                src="https://yt3.ggpht.com/ytc/AMLnZu-x6DTqatGoVgSzYX6rs4JFiJM7JVN_SvNVeQ=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
