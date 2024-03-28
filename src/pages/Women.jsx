
import "../styles/Women.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";

function Women() {
  const { data, dispatch } = useContext(Context);

  function addToCart(prod) {
    dispatch({ type: "addToCart", payload: prod });
  }

  return (
    <div className="womenContainer">
      <div className="productTypesContainer">
        <p className="filter">filter</p>
        <div className="sportProducts">
          <NavLink to="#"><p>sport watches</p></NavLink>
        </div>
        <div className="classicProducts">
          <NavLink to="#"><p>classic watches</p></NavLink>
        </div>
        <div className="appleProducts">
          <NavLink to="#"><p>apple watches</p></NavLink>
        </div>
        <div className="diamondProducts">
          <NavLink to="#"><p>diamond watches</p></NavLink>
        </div>
        <div className="leatherStrapProducts">
          <NavLink to="#"><p>leather strap watches</p></NavLink>
        </div>
        <div className="metalStrapProducts">
          <NavLink to="#"><p>metal strap watches</p></NavLink>
        </div>
      </div>
      <div className="productBox">
        {data.map((prod) => (
          <ul className="ulProduct" key={prod.id}>
            <li className="product">
              <div className="imageFrame">
                <img className="watchImage" src={prod.image} />
              </div>
              <div className="productInfo">
                <p className="productName"> {prod.name} </p>
                <div className="price">Product Price: {prod.price} Euro</div>
                <button onClick={() => addToCart(prod)}>Add to Cart</button>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Women;
