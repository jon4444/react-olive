import React, { useState } from "react";
import "./LoginSignup.css";

import account from "../assets/account.png";
import email from "../assets/email.png";
import padlock from "../assets/padlock.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? 
          <div></div>
         : 
          <div className="input">
            <img src={account} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        }

        <div className="input">
          <img src={email} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={padlock} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action==="Sign Up"?<div></div>: <div className="forgot-password">
        Forgot Password? <span>Click here</span>
      </div>}
      
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Signup
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
