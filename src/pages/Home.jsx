import React, { useRef, useEffect } from "react";
import { useState } from "react";
import "../styles/Home.css";
import image1 from "../assets/image/watch-pair.png";
import image2 from "../assets/image/watch-pair1.png";
import image3 from "../assets/image/watch-pair2.png";
import image4 from "../assets/image/watch-pair3.png";

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
    <div className="homeContainer">
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
    </div>
  );
}

export default Home;
