import { Badge } from "@material-ui/core";
import { Language, Notifications, Settings } from "@material-ui/icons";
import React from "react";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className="logo">Albi</span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <Badge badgeContent={9} color="primary">
              <Notifications className="bage" color="black"/>
            </Badge>
            <span className="topIconBadge"></span>
          </div>
          <div className="topBarIconContainer">
          <Badge badgeContent={4} color="primary">
              <Language className="bage" color="black"/>
            </Badge>
          </div>
          <div className="topBarIconContainer">
          <Settings className="bage"/>
          </div>
          <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300" className="topAvatar" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
