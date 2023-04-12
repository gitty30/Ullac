import React from "react";
import Archie from "./reso/Archie.jpg";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-outline">
      <div className="login-box">
        <div className="login-details">
          <div className="heading-1">
            <b>
              <h2>Hello! Welcome back.</h2>
            </b>
            <p>Please login to Ullac with your email address</p>
          </div>
          <div className="name-pass">
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>
            <a
              href="#"
              style={{ textAlign: "right", textDecoration: "underline" }}
            >
              {" "}
              Forgot Password?
            </a>
          </div>
          <div className="redirect">
            <button>Log in</button>
            <p>
              Don't have an account?<a href="#"> Signup for free</a>
            </p>
          </div>
        </div>
      </div>
      <div
        className="login-image"
        style={{
          backgroundImage: "url(" + Archie + ")",
          minWidth: "30%",
          minHeight: "50%",
          backgroundSize: "cover",
        }}
      >
        <div className="page-info">
          <h2 >
            Lorem ipsum dolor sit amet conse ctetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </h2>
          <h3>Archie Chandel</h3>
          <h5>Founder</h5>
        </div>
      </div>
    </div>
  );
};

export default Login;