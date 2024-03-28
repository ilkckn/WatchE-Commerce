// import { useContext } from "react";
// import '../styles/Modal.css'
// import ReactModal from "react-modal";
// import React from "react";
// import { Context } from "../context/Context";

// function Modal() {
//   const { state, dispatch } = useContext(Context);

//   const customStyles = {
//     content: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       gap: "3rem",
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//       fontSize: "1.5rem",
//       width: "60rem",
//       height: "30rem",
//     },
//   };

//   function closeModal() {
//     dispatch({ type: "closeModal" });
//   }

//   function deleteProductFromCart() {
//     dispatch({ type: "deleteProduct" })
//   }

//   return (
//     <>
//       <ReactModal
//         style={customStyles}
//         isOpen={state.modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Alert Modal"
//         appElement={document.getElementById("root")}
//       >
//         <div className="modalInfo">{state.modalContent}</div>
//         <div className="buttons">
//             <button onClick={() => deleteProductFromCart()} className="delete">Delete</button>
//             <button className="close" onClick={closeModal}>Close</button>
//         </div>
//       </ReactModal>
//     </>
//   );
// }

// export default Modal;
