import React,{useState} from "react";
import Archie from "./reso/lisa_login.jpeg";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import "./Login.css";

const Login = () => {
  const history=useNavigate();
  const[input,setInput]=useState({
    email:"",
    password:""
  });
  const handleChange=(e)=>{
   setInput({...input,[e.target.name]:e.target.value});
  }
  const getReq=async()=>{
    console.log(process.env.REACT_APP_BACKEND_API);
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/api/v1/login`,
      {
        email: input.email,
        password: input.password,
      }
    );
    const data=await res.data;

    console.log(data);
    return data;
  }
  const sendR=(e)=>{
    e.preventDefault();
      getReq().then(()=>history('/'));
  }
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
            <input placeholder="Email" value={input.email} name="email" onChange={handleChange}></input>
            <input placeholder="Password" value={input.password} name="password" onChange={handleChange}></input>
            <a
              href="#"
              style={{ textAlign: "right", textDecoration: "underline" }}
            >
              {" "}
              Forgot Password?
            </a>
            <div className="redirect">
              <button onClick={sendR}>Log in</button>
              <p>
                Don't have an account?<Link to="/signup"> Signup for free</Link>
              </p>
            </div>
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
        
      </div>
    </div>
  );
};

export default Login;
