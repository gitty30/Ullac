import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-ullac">
      <div className="news-letter">
        <h1>Signup for Newsletter and get 15% discount on next order</h1>
        <form>
          <input placeholder="Your email" />
          <label>REGISTER</label>
        </form>
        <div className="social-icons">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <PinterestIcon />
          <YouTubeIcon />
          <WhatsAppIcon />
        </div>
      </div>
      <div className="footer-data">
        <div className="footer-left">
          <p>©2016 Ullac</p>
          <p>About us</p>
          <p>Blog</p>
          <p>FAQ</p>
          <p>Contact us</p>
        </div>

        <div className="footer-right">
          <p>Copyright ©2022 Ullac India.Inc.All rights reserved.Terms of l use Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
