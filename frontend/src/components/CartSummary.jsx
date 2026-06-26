import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


function CartSummary() {

  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (

    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="text-2xl font-bold mb-5">
        Order Summary
      </h2>

      <div className="flex justify-between mb-3">
        <span>Items</span>
        <span>{cartItems.length}</span>
      </div>

      <div className="flex justify-between mb-3">
        <span>Delivery</span>
        <span className="text-green-600">
          Free
        </span>
      </div>

      <hr className="my-4"/>

      <div className="flex justify-between font-bold text-xl">

        <span>Total</span>

        <span className="text-green-600">
          ₹{totalAmount}
        </span>

      </div>

      <Link to="/checkout">
        <button
          className="mt-5 w-full bg-green-600 text-white py-3 rounded-lg"
        >
          Proceed To Checkout
        </button>
      </Link>

    </div>

  );
}

export default CartSummary;