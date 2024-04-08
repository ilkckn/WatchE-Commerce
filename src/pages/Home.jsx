import React, { useRef, useEffect } from "react";
import { useState } from "react";
import "../styles/Home.css";
import channelImage from "../assets/image/cnbc-logo.png";
import image1 from "../assets/image/watch-pair.png";
import image2 from "../assets/image/watch-pair1.png";
import image3 from "../assets/image/watch-pair2.png";
import image4 from "../assets/image/watch-pair3.png";
import bodyImage from "../assets/image/home-image.jpg";
import bodyImage1 from "../assets/image/home-image1.jpg";
import bodyImage2 from "../assets/image/home-image2.jpg";
import Slider from "../components/Slider/Slider";
import { NavLink } from "react-router-dom";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2, image3, image4];
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === slides.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="homeContainer" id="home">
      <div className="info">
        <h1>huge selection</h1>
        <h4>Discount prices and online exclusive offers</h4>
        <p>
          For those who know the value of time, for those who want to enjoy the
          moment and, more importantly, for those who want to live life to the
          fullest.
        </p>
        <div className="button">
          <button className="btn">shop now</button>
        </div>
      </div>
      <div className="homeImage">
        <img
          src={slides[currentSlide]}
          alt="image"
          ref={slideRef}
          style={{ transition: "transform 0.5s ease-in-out" }}
        />
      </div>

      <div className="body1">
        <div className="image">
          <img src={bodyImage} alt="body-Image" />
        </div>
        <div className="text">
          <h1>The 1916 Company</h1>
          <p>
            Join us in ushering in a new era for watch collectors. Discover our
            locations, global community, curated collections - both new and
            collectible pre-owned - and let’s talk watches.
          </p>
          <NavLink to="https://www.the1916company.com/" target="_blank">
            <button>learn more</button>
          </NavLink>
        </div>
      </div>

      <div className="body2">
        <div className="header">
          <h1>shop featured collections</h1>
          <span></span>
        </div>
        <Slider />
      </div>

      <div className="body3">
        <div className="news">
          <p>in the news</p>
        </div>
        <div className="channels">
          <span className="p1">financial times</span>
          <span className="p2">
            <img src={channelImage} />
          </span>
          <span className="p3">hyperbeast</span>
          <span className="p4">watchpro</span>
        </div>
      </div>

      <div className="body4">
        <div className="text">
          <h1>MyWatch is the world’s leading watch house.</h1>
          <p>
            We’re more than connoisseurs - we're collectors too. We would never
            tell you to buy a watch we wouldn't buy ourselves first.
          </p>
        </div>
        <div className="image">
          <img src={bodyImage1} alt="body-Image" />
        </div>
      </div>

      <div className="body5">
        <div className="texts">
          <div className="text1">
            <h1>GLOBAL INVENTORY</h1>
            <p>
              We're not a marketplace, we're the market leader. This means we
              own every watch we sell, allowing us to set superior standards
              across the globe. With offices in the United States, Hong Kong,
              Singapore, and beyond, our selection is ever-changing with
              thousands of luxury watches available at any given time.
            </p>
          </div>
          <div className="text2">
            <h1>EXPERT SERVICE</h1>
            <p>
              Our in-house team of Swiss-trained watchmakers and refinishers are
              among the best in the industry. From routine maintenance to heavy
              water damage, our team of experts provide full support with
              factory-sourced parts for first-class service to the secondary
              marketplace.
            </p>
          </div>
          <div className="text3">
            <h1>INSIDER INSIGHTS</h1>
            <p>
              Behind the scenes, there's a team of over 160 watch-lovers ready
              to share their passion with you. Ask them anything, from watch
              history to the pulse of the market. We've got a team ready around
              the world to help you find your dream watch - and they're just a
              chat, email, or phone call away.
            </p>
          </div>
        </div>
        <NavLink to="/about">
          <button>our story</button>
        </NavLink>
      </div>

      <div className="body6">
        <div className="bcg">
          <div className="bcgImage">
            <img src={bodyImage2} alt="" />
          </div>

          <div className="headers-subscribe">
            <div className="headers">
              <h1>ENDLESS DISCOVERY IN YOUR INBOX</h1>
              <p>Join our mailing list to receive insider updates on our latest collections, invites to private events, and other personalized offerings.</p>
            </div>

            <div className="subscribe">
              <form className="subscribeForm">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
