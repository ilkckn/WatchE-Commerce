import React, { createContext, useReducer } from "react";
import { data } from "../womenData";
import { data1 } from "../menData";
import ReactModal from "react-modal";
import Modal from "../components/Modal";

const initialState = {
  cart: [],
  modelIsOpen: false,
  modalContent: ""
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

    default:
      return state;
  }
};

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ data, data1, state, dispatch }}>
      {children}
      <Modal />
    </Context.Provider>
  );
}

export default ContextProvider;
