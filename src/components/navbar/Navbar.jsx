import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navWrapper">
          <div className="logo">
            <Link to="/">
              Net<span>work</span>
            </Link>
          </div>
          <div className="navItem">
            <div className="rightItem">
              <Link to="/">
                <i class="fa-brands fa-facebook-messenger"></i>
              </Link>
              <Link to="/messenger">
                <i class="fa-solid fa-bell"></i>
              </Link>{" "}
            </div>
            <div className="profile">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <img
                    src="https://yt3.ggpht.com/ytc/AMLnZu-x6DTqatGoVgSzYX6rs4JFiJM7JVN_SvNVeQ=s48-c-k-c0x00ffffff-no-rj"
                    alt=""
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Drake Mode</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
