import { createContext, useContext, useEffect, useState } from "react";
const CartContext = createContext();  

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(cart);
  }, []);

  const clearCart = () => {
  setCartItems([]);
  localStorage.removeItem("cart");
};

 const addToCart = (product) => {
  const existingProduct = cartItems.find(
    (item) => item._id === product._id
  );

  let updatedCart;

  if (existingProduct) {
    updatedCart = cartItems.map((item) =>
      item._id === product._id
        ? {
            ...item,
            quantity: (item.quantity || 1) + 1,
          }
        : item
    );
  } else {
    updatedCart = [
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ];
  }

  setCartItems(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );
};


const increaseQuantity = (id) => {
  const updatedCart = cartItems.map((item) =>
    item._id === id
      ? {
          ...item,
          quantity: (item.quantity || 1) + 1,
        }
      : item
  );

  setCartItems(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );
};

const decreaseQuantity = (id) => {
  const updatedCart = cartItems
    .map((item) =>
      item._id === id
        ? {
            ...item,
            quantity: (item.quantity || 1) - 1,
          }
        : item
    )
    .filter((item) => item.quantity > 0);

  setCartItems(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );
};

  const removeFromCart = (id) => {
  const updatedCart = cartItems.filter(
    (item) => item._id !== id
  );

  setCartItems(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );
};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);