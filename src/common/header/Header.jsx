import React from "react";
import Nav from "./Nav";
import Navbar from "./Navbar";
import Search from "./Search";

const Header = () => {
  return (
    <div>
      <Nav />
      <Search />
      <Navbar />
    </div>
  );
};

export default Header;
