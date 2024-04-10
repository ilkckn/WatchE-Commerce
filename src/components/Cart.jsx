import React from "react";
import "../styles/Cart.css";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { HiMiniTrash } from "react-icons/hi2";
import { TbTrashOff } from "react-icons/tb";
import { FaPaypal } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiReturnArrow } from "react-icons/gi";
import { AiOutlineSecurityScan } from "react-icons/ai";
// import Modal from "./Modal";

function Cart() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(state.cart))
  },[state.cart])

  function removeFromCart(item) {
    dispatch({
      type: "openModal",
      payload: "Are you sure you want to delete the product?",
    });
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
      0
    );
  }

  return (
    <>
      <div className="cartContainer">
        {/* <Modal /> */}
        {state.cart.length > 0 ? (
          <>
            <div className="total">
              <div className="totalInfo">
                <div className="totalItem">
                  <h2 className="totalPriceHeader">your order</h2>
                  <ul>
                    {state.cart.map((pro) => (
                      <li key={pro.id}>
                        <div className="productsTotalInfo">
                          <div className="image-info">
                            <div className="totalImage">
                              <img src={pro.image} alt="" />
                            </div>
                            <div className="name-price-quantity-buttons">
                              <p className="productsName">
                                Product: {pro.name}
                              </p>
                              <p className="productsQuantity">
                                Quantity: {pro.quantity}
                              </p>
                              <p className="productsPrice">
                                Price: {pro.price}€{" "}
                              </p>
                            </div>
                          </div>
                          <div className="quantityControls">
                            <div className="inc-dec-button">
                              <button
                                className="quantityButton"
                                onClick={() => decreaseQuantity(pro)}
                              >
                                -
                              </button>
                              <span className="quantity">{pro.quantity}</span>
                              <button
                                className="quantityButton"
                                onClick={() => increaseQuantity(pro)}
                              >
                                +
                              </button>
                            </div>
                            <button
                              className="cartRemove"
                              onClick={() => removeFromCart(pro)}
                            >
                              <HiMiniTrash />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="totalAmount-shipping">
              <div className="part1">
                <div className="orderTotal">
                  <p>Order Subtotal</p>
                  <p className="totalPriceP">{calculateTotalPrice()} €</p>
                </div>
                <div className="shipping">
                  <p>
                    Shipping <span>"standard"</span>
                  </p>
                  <span>free</span>
                </div>
                <div className="VAT">
                  <p>vat</p>
                  <span>included</span>
                </div>
              </div>
              <div className="part2">
                <div className="orderTotal2">
                  <p>order total</p>
                  <span>{calculateTotalPrice()} €</span>
                </div>
                {/* {!state.modalIsOpen && } */}
                <div className="goToCheckOut">
                  <button>go to check out</button>
                </div>
                <p className="or">or</p>
                <div className="paypal">
                  <button>
                    <FaPaypal />
                    paypal
                  </button>
                </div>
              </div>
              <div className="part3">
                <div className="freeShippingInfo">
                  <span>
                    <LiaShippingFastSolid />
                  </span>
                  <p>Free shipping for logged-in users</p>
                </div>
                <div className="freeReturns">
                  <span>
                    <GiReturnArrow />
                  </span>
                  <p>Free returns for 30 days</p>
                </div>
                <div className="security">
                  <span>
                    <AiOutlineSecurityScan />
                  </span>
                  <p>Secure checkout</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="emptyCartMessage">
            <TbTrashOff className="emptyIcon" />
            <span>Your cart is empty</span>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
