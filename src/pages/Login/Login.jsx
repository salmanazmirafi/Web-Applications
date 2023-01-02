import React from "react";
import "../register/register.css";

const Login = () => {
  return (
    <div className="register">
      <div className="registerContainer">
        <div className="wrapper">
          <form>
            <div className="fromGroup">
              <i class="fa-regular fa-user"></i>
              <input
                type="text"
                placeholder="Enter Your User Name"
                name="username"
              />
            </div>

            <div className="fromGroup">
              <i class="fa-solid fa-lock"></i>
              <input
                type="text"
                placeholder="Enter Your Password"
                name="password"
              />
            </div>

            <button className="btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
