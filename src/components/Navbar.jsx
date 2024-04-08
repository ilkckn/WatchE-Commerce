import { RiShoppingCartLine } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import "../styles/Navbar.css";
import logo from "../assets/image/logo1.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(Context);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]);

  const cartItemCount = state.cart.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  return (
    <>
      <div className="container">
        <div className="logo-search">
          <div className="logo">
            <NavLink className="img" to="/">
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: "90px",
                  height: "60px",
                  backgroundColor: "transparent",
                }}
              />
            </NavLink>
          </div>
          <div className={`search-cart-container ${isOpen ? "open" : ""}`}>
            <div className="search">
              <Link className="searchLink" to="/search">
                <p>Search</p>
                <div className="searchInput"></div>
                <CiSearch className="searchIcon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="links">
          <ul className={isOpen ? "open" : ""}>
            <li>
              <NavLink className="link" to="/" smooth={true} duration={1000}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                to="/about"
                smooth={true}
                duration={600}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                to="/women"
                smooth={true}
                duration={1000}
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                to="/men"
                smooth={true}
                duration={1000}
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                to="/contact"
                smooth={true}
                duration={1000}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className={`cartBase ${isOpen ? "open" : ""}`}>
            <Link className="cart" to="/cart">
              <>
                <RiShoppingCartLine id="cart" />
                {cartItemCount > 0 && (
                  <span className="cartItemCount">{cartItemCount}</span>
                )}
              </>
            </Link>
          </div>
        </div>

        <div className="hamburgerMenu">
          <BiMenuAltRight
            className="burger"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
