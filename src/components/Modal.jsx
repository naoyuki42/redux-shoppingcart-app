import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/ModalSlice";
import { clearCart } from "../features/cart/CartSlice";

const Modal = React.memo(() => {
  const dispatch = useDispatch();

  const onClickOK = () => {
    dispatch(closeModal());
    dispatch(clearCart());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>買い物かごを全て空にしますか？</h4>
        <div className="btn-container">
          <button className="btn confirm-btn" onClick={() => onClickOK()}>
            OK
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            キャンセル
          </button>
        </div>
      </div>
    </aside>
  );
});

export default Modal;
