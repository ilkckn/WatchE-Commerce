import React from "react";
import { useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { data } from "./data";
import "../../styles/Slider.css";

function Slider() {
  const imageContainerRef = useRef(null);

  const prev = () => (imageContainerRef.current.scrollLeft -= 450);
  const next = () => (imageContainerRef.current.scrollLeft += 450);

  return (
    <>
      <div className="collections">
        <div className="prev" onClick={prev}>
          <MdOutlineKeyboardArrowLeft className="arrow" />
        </div>
        <div className="slidePanel" ref={imageContainerRef}>
          {data.map((item) => (
            <ul key={item.id}>
              <li>
                <img src={item.image} />
                <p>{item.collection}</p>
              </li>
            </ul>
          ))}
        </div>
        <div className="next" onClick={next}>
          <MdOutlineKeyboardArrowRight className="arrow" />
        </div>
      </div>
    </>
  );
}

export default Slider;
