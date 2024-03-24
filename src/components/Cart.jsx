import React from "react";
import "../styles/Cart.css";
import { useContext } from "react";
import { Context } from "../context/Context";

function Cart() {
  const { state, dispatch } = useContext(Context);

  function removeFromCart(item) {
    dispatch({ type: "deleteFromCart", payload: item });
  }

  function increaseQuantity(item) {
    dispatch({ type: "increaseQuantity", payload: item });
  }

  function decreaseQuantity(item) {
    dispatch({ type: "decreaseQuantity", payload: item });
  }

  return (
    <>
      <div className="cartContainer">
        <ul className="cartUl">
          {state.cart.map((item) => (
            <li className="cartLi" key={item.id}>
              <img className="cartImage" src={item.image} />
              <p className="cartP cartName">{item.name}</p>
              <p className="cartP">
                <span className="cartPrice">Product Price:{item.price}€</span>
              </p>
              <div className="quantityControls">
                <button
                  className="quantityButton"
                  onClick={() => decreaseQuantity(item)}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  className="quantityButton"
                  onClick={() => increaseQuantity(item)}
                >
                  +
                </button>
              </div>
              <button
                className="cartRemove"
                onClick={() => removeFromCart(item)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="totalInfo">
          <p className="totalPrice">
            Total Price: {state.cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}{" "}€
          </p>
        </div>
      </div>
    </>
  );
}

export default Cart;
