import React from "react";
import "./navbar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <div className="navBarWrapper">
        <div className="search">
          <input type="search" placeholder="Search" />
          <SearchOutlinedIcon />
        </div>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <button>
            {" "}
            <AccountCircleOutlinedIcon />
            SIGN IN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
