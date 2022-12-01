import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/ModalSlice";

const CartContainer = React.memo(() => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <section className="cart">
      <header>
        <h2>買い物かご</h2>
      </header>
      {amount < 1 ? (
        <p className="empty-cart">何も入ってません…</p>
      ) : (
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
      )}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            合計：<span>{total}円</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          全削除
        </button>
      </footer>
    </section>
  );
});

export default CartContainer;
