import React,{useState} from "react";
import Archie from "./reso/Archie.jpg";
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
    const res= await axios.post('http://localhost:3001/api/v1/login',{
      email:input.email,
      password:input.password
    })
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
        <div className="page-info">
          <h2>
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
