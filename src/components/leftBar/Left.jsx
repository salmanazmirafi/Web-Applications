import React from "react";
import "./left.css";

const Left = () => {
  return (
    <div className="left">
      <div className="leftContainer">
        <div className="leftWrapper">
          <div className="profileLeft">
            <img
              src="https://media.licdn.com/dms/image/C4E16AQERkdLQX9-uHg/profile-displaybackgroundimage-shrink_350_1400/0/1668858790764?e=1678320000&v=beta&t=zcc58X9WQcf1fD7UrSnWflUsD39864l0ZC9ihKfLJZY"
              alt=""
              className="cover"
            />
            <div className="profileImage">
              <img
                src="https://yt3.ggpht.com/ytc/AMLnZu-x6DTqatGoVgSzYX6rs4JFiJM7JVN_SvNVeQ=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
          </div>
          <div className="leftProfileInfo">
            <h6>Salman Azmi Rafi</h6>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
