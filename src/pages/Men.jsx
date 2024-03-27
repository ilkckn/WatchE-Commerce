import { RiArrowDownSLine } from "react-icons/ri";
import "../styles/Men.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";

function Men() {
  const { data1, dispatch } = useContext(Context);

  function addToCart(prod) {
    dispatch({ type: "addToCart", payload: prod });
  }

  return (
    <div className="menContainer">
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
      <div className="productBox1">
        {data1.map((prod) => (
          <ul className="ulProduct1" key={prod.id}>
            <li className="product1">
              <div className="imageFrame1">
                <img className="watchImage1" src={prod.image} />
              </div>
              <div className="productInfo1">
                <p className="productName1"> {prod.name} </p>
                <div className="price1">Product Price: {prod.price} Euro</div>
                <button onClick={() => addToCart(prod)}>Add to Cart</button>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Men;
