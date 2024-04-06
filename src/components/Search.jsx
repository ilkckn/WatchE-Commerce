import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import "../styles/Search.css";
import { Context } from "../context/Context";

function Search() {
  const { handleChange, search, data, data1, dispatch } = useContext(Context);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

  function filterProducts(searchTerm) {
    const allProducts = [...data, ...data1];
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  function handleSearchChange(event) {
    handleChange(event);
    const searchTerm = event.target.value;
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
      setAlertMessage("");
    } else {
      filterProducts(searchTerm);
      setAlertMessage("");
    }
  }

  function addToCart(product) {
    dispatch({ type: "addToCart", payload: product });
  }

  return (
    <>
      <div className="searchContainer">
        <div className="headerSearchBarContainer">
          <div className="header-searchBar">
            <h1>searching for?</h1>
            <div className="searchBarContainer">
              <form aria-disabled>
                <div className="searchBar">
                  <input
                    type="text"
                    value={search}
                    name="search"
                    placeholder="Search..."
                    onChange={handleSearchChange}
                  />
                  <CiSearch className="searchBarIcon" />
                </div>
              </form>
              {alertMessage && <p className="alertMessage">{alertMessage}</p>}
            </div>
          </div>
        </div>
        <div className="searchedProductsContainer">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <div className="filteredProductImage">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="filteredProductName">{product.name}</div>
              <div className="filteredProductPrice">
                Product Price: {product.price} €
              </div>
              <div className="filteredProductButton">
                <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
