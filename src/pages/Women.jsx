
import "../styles/Women.css";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";


function Women() {
  const { data, dispatch } = useContext(Context);
  const [addedToCart, setAddedToCart] = useState(false);
  const [filter, setFilter] = useState("");

  function addToCart(prod) {
    dispatch({ type: "addToCart", payload: prod });
    setAddedToCart(prevState => ({ ...prevState, [prod.id]: true}));
  }

  function handleFilterClick(filterName) {
    setFilter(filterName);
  }


  return (
    <div className="womenContainer" id="women">
      
      <div className="productTypesContainer">
        <p className="filter">filter</p>
        <div className="sportProducts">
          <NavLink to="#"><p onClick={() => handleFilterClick("sport")}>sport watches</p></NavLink>
        </div>
        <div className="classicProducts">
          <NavLink to="#"><p onClick={() => handleFilterClick("classic")}>classic watches</p></NavLink>
        </div>
        <div className="appleProducts">
          <NavLink to="#"><p onClick={() => handleFilterClick("apple")}>apple watches</p></NavLink>
        </div>
        <div className="diamondProducts">
          <NavLink to="#"><p onClick={() => handleFilterClick("diamond")}>diamond watches</p></NavLink>
        </div>
        <div className="leatherStrapProducts">
          <NavLink to="#"><p onClick={() => handleFilterClick("leather")}>leather strap watches</p></NavLink>
        </div>
        <div className="metalStrapProducts">
          <NavLink to="#"><p onClick={() => handleFilterClick("metal")}>metal strap watches</p></NavLink>
        </div>
      </div>

      <div className="productBox">
        {data
          .filter((prod) => {
            if (filter) {
              return prod.product.includes(filter);
            }
            return true; 
          })
          .map((prod) => (
            <ul className="ulProduct" key={prod.id}>
              <li className="product">
                <div className="imageFrame">
                  <img className="watchImage" src={prod.image} alt={prod.name} />
                </div>
                <div className="productInfo">
                  <p className="productName"> {prod.name} </p>
                  <div className="price">Product Price: {prod.price} Euro</div>
                  <div className="buttonContainer">
                    <button
                      onClick={() => addToCart(prod)}
                      disabled={addedToCart[prod.id]}
                      className={addedToCart[prod.id] ? "disabled" : ""}
                    >
                      {addedToCart[prod.id] ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
}

export default Women;
