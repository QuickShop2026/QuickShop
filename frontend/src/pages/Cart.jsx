import { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(cart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cartItems];

    updatedCart.splice(index, 1);

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-5">

      <h1 className="text-3xl font-bold mb-5">
        Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2>Your Cart Is Empty</h2>
      ) : (
        <>
          <div className="space-y-4">

            {cartItems.map((item, index) => (

              <div
                key={index}
                className="bg-white p-4 rounded shadow flex gap-4"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />

                <div className="flex-1">

                  <h2 className="font-bold">
                    {item.name}
                  </h2>

                  <p>{item.brand}</p>

                  <p className="text-green-600 font-bold">
                    ₹{item.price}
                  </p>

                  <button
                    onClick={() =>
                      removeItem(index)
                    }
                    className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="mt-6 bg-white p-4 rounded shadow">

            <h2 className="text-xl font-bold">
              Total: ₹{totalAmount}
            </h2>

            <button
              className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
            >
              Checkout
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;