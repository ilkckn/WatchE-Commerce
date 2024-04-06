import React from "react";
import "../styles/About.css";
import image from "../assets/image/about-image.jpg";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <div className="aboutContainer" id="about">
        <div className="image-header">
          <img src={image} alt="" />
          <div className="about-image-info">
            <NavLink to="/" className="link1">
              Home{" "}
            </NavLink>
            <span>/ About Us / Our Story</span>
          </div>
          <div className="ourStory">
            <h1>our story</h1>
            <p>about us</p>
          </div>
        </div>

        <div className="aboutInformation">
          <div className="aboutMyWatch">
            <h1>About MyWatch</h1>
            <p>
              Fueled by technology, innovation, and unmatched global experience
              in the high-end watch market, WatchBox is the world’s leading
              platform for buying, selling, and trading pre-owned luxury
              watches. With offices in the United States, Hong Kong,
              Switzerland, Singapore, Dubai, and plans to expand beyond, we are
              the trusted destination for watch enthusiasts worldwide.
            </p>
          </div>

          <div className="whyChooseMyWatch">
            <h1>Why Choose WatchBox</h1>
            <p>
              As watch enthusiasts and experts ourselves, we are committed to
              the integrity and innovation of the luxury watch industry—which is
              why we invest in our processes, services, and team.
            </p>
          </div>

          <div className="unrivaledSelection">
            <h1>Unrivaled Selection</h1>
            <p>
              We are not a marketplace; we own every watch that we sell. This
              allows us to implement a true global quality standard, and as one
              of the largest buyers of pre-owned watches worldwide, our
              selection is ever-changing with thousands of pieces from the best
              brands available.
            </p>
          </div>

          <div className="guaranteedAuthenticity">
            <h1>Guaranteed Authenticity</h1>
            <p>
              Every one of our pre-owned watches are evaluated, authenticated,
              and brought to manufacturer operating standards without
              compromising value or provenance. Plus, each pre-owned watch we
              sell is backed by a 2-year WatchBox Global Warranty with
              additional coverage options available.
            </p>
          </div>

          <div className="superiorWatchmakingService">
            <h1>Superior Watchmaking Service</h1>
            <p>
              Our in-house team of Swiss-trained watchmakers, technicians, and
              refinishers are among the most highly regarded in the industry.
              They assess every watch before it’s presented for sale, holding
              them up to a rigorous quality control process—our team is also
              qualified to address any watch repair needs. From routine
              maintenance to water damage or rust, we provide full service with
              factory-sourced parts, offering peace of mind to thousands of
              clients worldwide.
            </p>
          </div>

          <div className="meetOurTeam">
            <h1>Meet Our Team</h1>
            <p>
              Our team of 200 associates are some of the most passionate watch
              enthusiasts in the business, maintaining a superior level of
              knowledge regarding the history, nuances of current collections,
              and pulse of the secondary marketplace. And we are here for you.
              WatchBox Client Advisors can assist with all of your watch-related
              needs – whether you are looking to buy, sell, or trade timepieces
              from your personal collection. Connect with WatchBox at your
              convenience to meet your dedicated client advisor – over the
              phone, by email, live chat, in-app communication, and of course,
              within our showrooms and buying offices around the world. We look
              forward to getting to know you.
            </p>
            <NavLink to="" className="aboutInfoLinks">Learn More</NavLink>
          </div>

          <div className="ourGlobalFootprint">
            <h1>Our Global Footprint</h1>
            <p>
              While our headquarters are located in Pennsylvania, our reach
              extends far beyond the United States. With offices in Singapore,
              Switzerland, the United Arab Emirates, and Hong Kong, we’re
              continuing to look for new areas of opportunity—our New York and
              Miami offices are coming soon.
            </p>
            <NavLink to="" className="aboutInfoLinks">Explore All Locations</NavLink>
          </div>

          <div className="joinOurTeam">
            <h1>Join Our Team</h1>
            <p>
              Are you a watch enthusiast? We’re searching for ambitious,
              forward-thinking individuals to join our dynamic team of advisors,
              watchmakers, storytellers, marketers, data scientists, and
              technologists. Partner with us as we continue to transform the
              industry.
            </p>
            <NavLink to="" className="aboutInfoLinks">Discover Careers</NavLink>
          </div>

          <div className="getInTouch">
            <h1>Get In Touch</h1>
            <p>
              Our Client Advisors are available to assist you with all of your
              watch-related needs—whether you’re looking to buy, sell, or trade
              from your personal collection. Connect with us at your convenience
              to meet a dedicated advisor over the phone, by email, live-chat,
              in the app, or at one of our showrooms and buying offices.
            </p>
            <NavLink to="/contact" className="aboutInfoLinks">Contact Us</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
