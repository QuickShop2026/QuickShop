import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

function Cart() {

  const { cartItems } = useCart();

  return (

    <div className="min-h-screen bg-gray-100 p-5">

      <h1 className="text-3xl font-bold mb-5">
        Cart
      </h1>

      {cartItems.length === 0 ? (

        <h2>Your Cart Is Empty</h2>

      ) : (

        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 space-y-4">

            {cartItems.map((item) => (

              <CartItem
                key={item._id}
                item={item}
              />

            ))}

          </div>

          <CartSummary />

        </div>

      )}

    </div>

  );
}

export default Cart;