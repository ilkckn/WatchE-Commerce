import React from "react";
import "../styles/Footer.css";
import { CiInstagram } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footerContainer">

        <div className="footerContain">

          <div className="footerInfoContain">

            <div className="footerInfo">

              <div className="follow-us">
                <h2>follow us</h2>
                <div className="followIcons">
                  <NavLink className="followUsLinks" to="https://www.instagram.com/" target="_blank"><CiInstagram/></NavLink>
                  <p className="mediaName">Instagram</p>
                  <NavLink className="followUsLinks" to="https://www.youtube.com/" target="_blank"><SiYoutubeshorts /></NavLink>
                  <p className="mediaName">Youtube</p>
                  <NavLink className="followUsLinks" to="https://twitter.com/?lang=en" target="_blank"><RiTwitterXFill /></NavLink>
                  <p className="mediaName">Twitter</p>
                  <NavLink className="followUsLinks" to="https://www.facebook.com/" target="_blank"><FaSquareFacebook /></NavLink>
                  <p className="mediaName">Facebook</p>
                </div>
              </div>

              <div className="footerSupport">
                <h2>support</h2>
                <NavLink to="/contact" className="supportLink">
                  <p>Contact Us</p>
                </NavLink>
                <p>FAQ</p>
                <p>Return Policy</p>
                <p>Terms & Conditions</p>
              </div>

              <div className="footerAboutUs">
                <h2>about us</h2>
                <NavLink to="/about" className="footerAboutUsLink">
                  <p>Our Story</p>
                </NavLink>
                <p>About the Shop</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>

              <div className="footerGetInTouch">
                <h2>get in touch</h2>
                <p>Advertise</p>
                <p>Press Releases</p>
                <p>Image Licensing</p>
                <p>General Inquires</p>
              </div>
            </div>
            
          </div>

        </div>

        <div className="footerRights">
          <NavLink to="/"><h1>MyWatch</h1></NavLink>
          <p>Copyright © 2024–2025, MyWatch Inc. All Rights Reserved.</p>
        </div>

      </div>
    </>
  );
}

export default Footer;
