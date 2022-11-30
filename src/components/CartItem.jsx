import React, { useCallback } from "react";
import { PlusIcon } from "./icons/PlusIcon";
import { MinusIcon } from "./icons/MinusIcon";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseItem,
  decreaseItem,
} from "../features/cart/CartSlice";

const CartItem = React.memo(({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  const onClickDecrease = useCallback(() => {
    amount === 1 ? dispatch(removeItem(id)) : dispatch(decreaseItem(id));
  }, [amount, dispatch, id]);

  return (
    <article className="cart-item">
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}円</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          削除
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseItem(id))}
        >
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => onClickDecrease()}>
          <MinusIcon />
        </button>
      </div>
    </article>
  );
});

export default CartItem;
