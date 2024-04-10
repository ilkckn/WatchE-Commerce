import React, { createContext, useState, useReducer } from "react";
import { data } from "../womenData";
import { data1 } from "../menData";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const initialState = {
  cart: JSON.parse(localStorage.getItem("items")) || [],
  modelIsOpen: false,
  modalContent: "",
  filter: "", 
};

export const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      const { id } = action.payload;
      const existingItem = state.cart.find(item => item.id === id);
      const updatedCart = existingItem
        ? state.cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...state.cart, { ...action.payload, quantity: 1 }];
      return { ...state, cart: updatedCart };

    case "deleteFromCart":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };

    case "increaseQuantity":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "decreaseQuantity":
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0),
      };

    case "openModal": {
      return {
        ...state,
        modalIsOpen: true,
        modalContent: action.payload,
      };
    }
    case "closeModal": {
      return {
        ...state,
        modalIsOpen: false,
      };
    }

    case "deleteProduct": {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      }
    }

    case "setFilter": { 
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
};

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (search.length > 0) {
      setSearch("");
    } else {
      alert("Please type the word you want to search!");
    }
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleFilterClick(filterName) {
    dispatch({ type: "setFilter", payload: filterName }); 
  }

  return (
    <Context.Provider
      value={{
        data,
        data1,
        state,
        search,
        dispatch,
        handleChange,
        handleSubmit,
        handleFilterClick,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
