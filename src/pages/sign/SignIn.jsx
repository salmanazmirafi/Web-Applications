import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sign.css";

const SignIn = () => {
  const [isSign, setSign] = useState(false);
  return (
    <div className="singContainer">
      <div className="singWrapper">
        <h3>Sing {isSign ? "In" : "Up"}</h3>
        <h4>to continue to Youtube</h4>
        {isSign ? (
          <>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Sign in</button>
          </>
        ) : (
          <>
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Sign up</button>
          </>
        )}
        <h3>or</h3>
        <p>
          {isSign ? "Crate a New Account" : "You have already Account"}
          <span
            onClick={() => setSign(!isSign)}
            style={{
              textDecoration: "underline",
              color: "#3ea6ff",
              cursor: "pointer",
              paddingLeft: 5,
            }}
          >
            {isSign ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
      <div className="more">
        English (USA)
        <Link
          style={{
            paddingLeft: 3,
            color: "#3ea6ff",
          }}
        >
          Help
        </Link>
        <Link
          style={{
            paddingLeft: 5,
            color: "#3ea6ff",
          }}
        >
          Privacy
        </Link>
        <Link
          style={{
            paddingLeft: 5,
            color: "#3ea6ff",
          }}
        >
          Terms
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
