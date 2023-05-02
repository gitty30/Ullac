import React, { useState } from "react";
import Archie from "./reso/lisa_login.jpeg";
import axios from "axios";
import "./Signup.css";
import { useNavigate } from "react-router";
const Singup = () => {
  const history = useNavigate();
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confpass: "",
  });
  const handle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const sendData = async () => {
    const res = await axios
      .post(`${process.env.REACT_APP_BACKEND_API}/api/v1/signup`, {
        firstname: input.firstname,
        lastname: input.lastname,
        email: input.email,
        password: input.password,
      })
      .catch((err) => errorButton(err));
    console.log(res);
    const data = await res.data;
    console.log(data.firstname);
    return data;
  };
  const errorButton = (error) => {
    console.log(error);
    console.log(error.response.data);
    const msg = error.response.data.msg;
    // console.log(msg);
    const err = JSON.stringify({ msg });
    console.log(err);
    alert(err);
  };
  const sendR = (e) => {
    console.log("hii");
    e.preventDefault();
    sendData().then(() => history("/login"));
  };
  return (
    <div className="login-outline">
      <div className="login-box">
        <div className="login-details">
          <div className="heading-1">
            <b>
              <h2>Welcome to Ullac</h2>
            </b>
            <p>Please signup to Ullac with your email address</p>
          </div>
          {/* <form style={{display:"flex", flexDirection:"column",justifyContent:"center"}}> */}
          <div className="name-pass">
            <input
              placeholder="First name"
              name="firstname"
              value={input.firstname}
              onChange={handle}
            ></input>
            <input
              placeholder="Last name"
              name="lastname"
              value={input.lastname}
              onChange={handle}
            ></input>
            <input
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={handle}
            ></input>
            <input
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handle}
            ></input>
            <input
              placeholder="Confirm password"
              name="confpass"
              value={input.confpass}
              onChange={handle}
            ></input>
            <a
              href="#"
              style={{ textAlign: "right", textDecoration: "underline" }}
            >
              {" "}
              Forgot Password?
            </a>
            <div className="redirect">
              <button type="submit" onClick={sendR}>
                Log in
              </button>

              <p>
                Don't have an account?<a href="#"> Signup for free</a>
              </p>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
      <div
        className="login-image"
        id="signup-img"
        style={{
          backgroundImage: "url(" + Archie + ")",
          minWidth: "30%",
          minHeight: "50%",
          backgroundSize: "cover",
        }}
      >
       
      </div>
    </div>
  );
};

export default Singup;
