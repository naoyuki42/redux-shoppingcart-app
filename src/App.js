import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateAmountTotal } from "./features/cart/CartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateAmountTotal());
  }, [cartItems, dispatch]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
