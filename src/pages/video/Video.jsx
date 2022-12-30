import React from "react";
import "./video.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../../components/comments/Comments";
import Card from "../../components/card/Card";

const Video = () => {
  return (
    <div className="videoContainer">
      <div className="videoContent">
        <div className="videoWrapper">
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/zysLAtoBMV0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h2 className="title">Test Video</h2>
        <div className="Details">
          <p>7,948,154 views • Jun 22, 2022</p>
          <div className="DetalisButton">
            <button>
              <ThumbUpOutlinedIcon /> 123
            </button>{" "}
            <button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </button>
            <button>
              <ReplyOutlinedIcon /> Share
            </button>
            <button>
              <AddTaskOutlinedIcon /> Save
            </button>
          </div>
        </div>
        <hr className="HerLine"/>
        <div className="Channel">
          <div className="ChannelInfo">
            <img src="https://yt3.ggpht.com/lrq_GZddGmqxA_VLQUJtwKxksYNiVrqLt6L0GxMUMZwuT_ZX_5-4re80g0M4sd-lGcntkqQMag=s48-c-k-c0x00ffffff-no-rj" alt="" />
            <div className="channelDetails">
              <h2>Sheikh Anam</h2>
              <span>200K subscribers</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </p>
            </div>
          </div>
          <button className="subscribe">SUBSCRIBE</button>
        </div>
        <hr className="HerLine"/>
        <Comments/>
      </div>
      <div className="recommendation">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default Video;
