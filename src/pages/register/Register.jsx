import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="registerContainer">
        <div className="wrapper">
          <form>
            <div className="fromGroup">
              <i class="fa-regular fa-user"></i>
              <input
                type="text"
                placeholder="Enter Full Name"
                name="fullName"
              />
            </div>
            <div className="fromGroup">
              <i class="fa-regular fa-user"></i>
              <input type="text" placeholder="Enter Username" name="username" />
            </div>
            <div className="fromGroup">
              <i class="fa-regular fa-envelope"></i>
              <input type="email" placeholder="Enter Your Email" name="email" />
            </div>
            <div className="fromGroup">
              <i class="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
              />
            </div>
            <div className="fromGroup">
              <i class="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Conform Password"
                name="password"
              />
            </div>

            <div className="genderGroup custom_gender">
              <div className="male">
                <label htmlFor="male"> Male </label>
                <input type="radio" name="gender" id="male" />
              </div>
              <div className="ffemal">
                {" "}
                <label htmlFor="female"> Female </label>
                <input type="radio" name="gender" id="female" />
              </div>
              <div className="others">
                <label htmlFor="other"> Other </label>
                <input type="radio" name="gender" id="other" />
              </div>
            </div>
            <button className="btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
