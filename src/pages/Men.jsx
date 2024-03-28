
import "../styles/Men.css";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";

function Men() {
  const { data1, dispatch } = useContext(Context);
  const [addedToCart, setAddedToCart] = useState(false);
  const [ filter, setFilter ] = useState("");

  function addToCart(prod) {
    dispatch({ type: "addToCart", payload: prod });
    setAddedToCart(prevState => ({ ...prevState, [prod.id]: true}));
  }

  function handleFilterClick(filterName) {
    setFilter(filterName)
  }

  return (
    <div className="menContainer">

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

      <div className="productBox1">
        {data1
          .filter(prod => {
            if (filter && prod.product !== filter) return false;
            return true;
          })
          .map((prod) => (
            <ul className="ulProduct1" key={prod.id}>
              <li className="product1">
                <div className="imageFrame1">
                  <img className="watchImage1" src={prod.image} alt={prod.name} />
                </div>
                <div className="productInfo1">
                  <p className="productName1"> {prod.name} </p>
                  <div className="price1">Product Price: {prod.price} Euro</div>
                  <div className="buttonContainer">
                    <button
                      onClick={() => addToCart(prod)}
                      disabled={addedToCart[prod.id]}
                      className={addedToCart[prod.id] ? 'disabled' : ''}
                    >
                      {addedToCart[prod.id] ? 'Added to Cart' : 'Add to Cart'}
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

export default Men;
