import React from "react";
import "./left.css";
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <div className="left">
      <div class="home-left">
        <div class="group">
          <h4 class="mini-headign">Group</h4>
          <label>
            <img src="images/gg.png" alt="group01" />
            <span>Graphic design</span>
          </label>

          <label>
            <img src="images/gg2.png" alt="group02" />
            <span>website design</span>
          </label>

          <label>
            <img src="images/gg3.png" alt="group03" />
            <span>ZED.zahidul</span>
          </label>

          <button class="see-more-btn">
            See more <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>

        <div class="games">
          <h4 class="mini-headign">Games</h4>
          <label>
            <img src="images/game.png" alt="game01" />
            <span>Facebook games</span>
          </label>
          <label>
            <img src="images/game2.png" alt="game02" />
            <span>Free Play Games</span>
          </label>
          <button class="see-more-btn">
            See more <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>

        <div class="explore">
          <h4 class="mini-headign">Explore</h4>

          <a href="#">
            <i class="fa-solid fa-user-group"></i> Group
          </a>
          <a href="#">
            <i class="fa-solid fa-star"></i> Favorites
          </a>
          <a href="#">
            <i class="fa-solid fa-bookmark"></i> Saves
          </a>
          <a href="#">
            <i class="fa-solid fa-clock"></i> Events
          </a>
          <a href="#">
            <i class="fa-solid fa-flag"></i> Pages
          </a>

          <div>
            <label class="darkTheme">
              {" "}
              <span></span>
            </label>{" "}
            Apply Dark Theme
          </div>

          <button class="see-more-btn">
            See more <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
