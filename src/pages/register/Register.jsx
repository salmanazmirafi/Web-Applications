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
                placeholder="Enter Your Full Name"
                name="fullName"
              />
            </div>
            <div className="fromGroup">
              <i class="fa-regular fa-user"></i>
              <input
                type="text"
                placeholder="Enter Your User Name"
                name="username"
              />
            </div>
            <div className="fromGroup">
              <i class="fa-regular fa-envelope"></i>
              <input type="email" placeholder="Enter Your Email" name="email" />
            </div>
            <div className="fromGroup">
              <i class="fa-solid fa-lock"></i>
              <input
                type="text"
                placeholder="Enter Your Password"
                name="password"
              />
            </div>
            <div className="genderGroup">
              <label htmlFor="gender">Gender</label>
              Male : <input type="radio" name="gender" id="male" />
              Female : <input type="radio" name="gender" id="female" />
              Other : <input type="radio" name="gender" id="other" />
            </div>
            <button className="btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
