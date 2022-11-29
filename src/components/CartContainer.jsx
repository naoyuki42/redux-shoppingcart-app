import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = React.memo(() => {
  const { amount, cartItems, total } = useSelector((state) => state.cart);
  const clearCart = useCallback(() => {}, []);
  return (
    <section className="cart">
      <header>
        <h2>買い物かご</h2>
      </header>
      {amount < 1 ? (
        <p className="empty-cart">何も入ってません…</p>
      ) : (
        <>
          <div>
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div className="cart-total">
              <h4>
                合計：<span>{total}円</span>
              </h4>
            </div>
            <button className="btn clear-btn" onClick={clearCart()}>
              全削除
            </button>
          </footer>
        </>
      )}
    </section>
  );
});

export default CartContainer;
