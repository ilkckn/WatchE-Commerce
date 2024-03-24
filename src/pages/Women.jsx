import React, { useReducer } from "react";
import "../styles/Women.css";
import { useContext } from "react";
import { Context } from "../context/Context";

function Women() {
  const { data, dispatch } = useContext(Context);

  function addToCart(prod) {
    dispatch({ type: "addToCart", payload: prod });
  }

  return (
    <div className="womenContainer">
      {data.map((prod) => (
        <ul className="ulProduct">
          <li className="product" key={prod.id}>
            <img className="watchImage" src={prod.image} />
            <div className="productInfo">
              <p className="productName"> {prod.name} </p>
              <div className="price">Product Price: {prod.price} Euro</div>
              <button onClick={() => addToCart(prod)}>Add to Cart</button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Women;
