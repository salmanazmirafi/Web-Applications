import React from "react";
import { Link } from "react-router-dom";
import "./manu.css";
import logo from "../../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Manu = () => {
  return (
    <div className="containers">
      <div className="wrappers">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="youtubeLogo">
            <img src={logo} alt="Youtube" />
            YouTube
          </div>
        </Link>
        {/* List Youtube */}
        <div className="item">
          <HomeIcon />
          Home
        </div>
        <div className="item">
          <ExploreOutlinedIcon />
          Explore
        </div>
        <div className="item">
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </div>
        <div className="item">
          <VideoLibraryOutlinedIcon />
          Library
        </div>
        <div className="item">
          <HistoryOutlinedIcon />
          History
        </div>
        <hr />
        {/* Sign Section  */}
        <div className="login">
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </button>
          </Link>
        </div>
        {/* Sign Section  */}
        <hr />
        <h3 className="title">BEST OF YOUTUBE</h3>
        <div className="item">
          <LibraryMusicOutlinedIcon />
          Music
        </div>
        <div className="item">
          <SportsBasketballOutlinedIcon />
          Sports
        </div>
        <div className="item">
          <SportsEsportsOutlinedIcon />
          Gaming
        </div>
        <div className="item">
          <MovieOutlinedIcon />
          Movies
        </div>
        <div className="item">
          <ArticleOutlinedIcon />
          News
        </div>
        <div className="item">
          <LiveTvOutlinedIcon />
          Live
        </div>
        <hr />
        <div className="item">
          <SettingsOutlinedIcon />
          Setting
        </div>
        <div className="item">
          <FlagOutlinedIcon />
          Report
        </div>
        <div className="item">
          <HelpOutlineOutlinedIcon />
          Help
        </div>
        <div className="item">
          <SettingsBrightnessOutlinedIcon />
          Mode
        </div>
        <div className="para">
          <p className="about">About Press Copyright Contact us Crators Advrtise Developer</p>
          <p className="terms">
            Terms Privacy Policy & Safety How You Tube works Test new features
          </p>
          <p className="copy">© 2022 Salman Azmi Rafi</p>
        </div>
      </div>
    </div>
  );
};

export default Manu;
