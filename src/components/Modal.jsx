import { useContext } from "react";
import ReactModal from "react-modal";
import React from "react";
import { Context } from "../context/Context";

function Modal() {
  const { state, dispatch } = useContext(Context);

  function closeModal() {
    dispatch({ type: "closeModal" });
  }
  
  return (
    <>
      <ReactModal
        isOpen={state.modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Alert Modal"
        appElement={document.getElementById("root")}
      >
        <div>{state.modalContent}</div>
        <button onClick={closeModal}>Close</button>
      </ReactModal>
    </>
  );
}

export default Modal;