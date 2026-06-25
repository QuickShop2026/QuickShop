import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="bg-white p-4 rounded-xl shadow flex gap-4">

      <img
        src={item.image}
        alt={item.name}
        className="w-28 h-28 object-cover rounded"
      />

      <div className="flex-1">

        <h2 className="font-bold text-lg">
          {item.name}
        </h2>

        <p className="text-gray-500">
          {item.brand}
        </p>

        <p className="text-green-600 font-bold mt-2">
          ₹{item.price}
        </p>

        <div className="flex items-center gap-3 mt-3">

          <button
            onClick={() =>
              decreaseQuantity(item._id)
            }
            className="w-8 h-8 rounded-full bg-gray-200"
          >
            -
          </button>

          <span className="font-bold">
            {item.quantity}
          </span>

          <button
            onClick={() =>
              increaseQuantity(item._id)
            }
            className="w-8 h-8 rounded-full bg-blue-600 text-white"
          >
            +
          </button>

        </div>

        <p className="mt-3 font-semibold">
          Subtotal :
          <span className="text-green-600 ml-2">
            ₹{item.price * item.quantity}
          </span>
        </p>

        <button
          onClick={() =>
            removeFromCart(item._id)
          }
          className="mt-3 bg-red-600 text-white px-4 py-2 rounded"
        >
          Remove
        </button>

      </div>

    </div>
  );
}

export default CartItem;