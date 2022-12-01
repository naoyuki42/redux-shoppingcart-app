import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateAmountTotal } from "./features/cart/CartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isVisible } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateAmountTotal());
  }, [cartItems, dispatch]);

  return (
    <main>
      {isVisible && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
