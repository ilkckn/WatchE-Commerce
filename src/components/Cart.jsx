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

  function calculateTotalPrice() {
    return state.cart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0)
    }
    console.log(state.cart);
  return (
    <>
      <div className="cartContainer">
        <ul className="cartUl">
          {state.cart.map((item) => (
            <li className="cartLi" key={item.id}>
              <img className="cartImage" src={item.image} alt={item.name} />
              <p className="cartP cartName">{item.name}</p>
              <p className="cartP">
                <span className="cartPrice">Product Price: {item.price}€</span>
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
        <div className="total">
          <h2 className="totalPriceHeader">cart</h2>
          <div className="totalInfo">
            <div className="totalItem">
              <ul>
                {state.cart.map((pro) => (
                  <li key={pro.id}>
                    <div className="totalImage">
                      <img src={pro.image} alt="" />
                    </div>
                    <div className="productsTotalInfo">
                      <p className="productsName">Product: {pro.name}</p>
                      <p className="productsPrice">Price: {pro.price}€ </p>
                      <p className="productsQuantity">
                        Quantity: {pro.quantity}{" "}
                      </p>
                      <p className="productsTotal">
                        Total: {pro.price * pro.quantity}€
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="totalPriceP">Total Price: {calculateTotalPrice()}€</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
