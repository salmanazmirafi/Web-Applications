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
              <Link to="/messenger">
                <i className="fa-brands fa-facebook-messenger"></i>
              </Link>
              <Link to="/notification">
                <i className="fa-solid fa-bell"></i>
              </Link>{" "}
            </div>
            <div className="profile">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <img
                    src="https://media.licdn.com/dms/image/D4E03AQEbPe4U69bN7Q/profile-displayphoto-shrink_100_100/0/1668858818640?e=1678320000&v=beta&t=fIdSFlyxhBdsL5WnXYQOnRWyLcFQRjzAzoqe30Z7JmM"
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
