import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import "../styles/Navbar.css";
import logo from "../assets/image/logo.png";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";

function Navbar() {
  const { state, dispatch } = useContext(Context);
  const cartItemCount = state.cart.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
  return (
    <>
      <div className="container">
        <div className="logo">
          <NavLink className="img" to="/">
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "150px",
                height: "40px",
                backgroundColor: "transparent",
              }}
            />
          </NavLink>
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/women">
                Women
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/men">
                Men
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="cartBase">
            <Link className="cart" to="/cart">
              {
                <>
                  <RiShoppingCartLine id="cart" />
                  {cartItemCount > 0 && (
                    <span className="cartItemCount">{cartItemCount}</span>
                  )}
                </>
              }
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
