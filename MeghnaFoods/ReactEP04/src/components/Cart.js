import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemLists from "./ItemLists";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-white font-bold text-2xl max-md:font-extrabold max-md:text-6xl max-md:ml-64">Cart</h1>
      <div className="w-6/12 m-auto text-white">
        <button
          className="p-2 m-2 bg-red-950 text-white rounded-lg max-md:font-bold max-md:text-4xl max-md:w-52 max-md:h-20 max-md:ml-40 max-md:my-10"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="text-white max-md:font-extrabold max-md:text-4xl max-md:ml-40">Cart is empty. Add Items to the cart</h1>
        )}
        <ItemLists items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
