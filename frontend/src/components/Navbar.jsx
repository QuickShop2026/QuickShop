import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          QuickShop
        </Link>

        <div className="relative flex-1 max-w-2xl mx-10">

            <span className="absolute left-3 top-3 text-gray-400">
                🔍
            </span>

            <input
                type="text"
                placeholder="Search mobiles, accessories..."
                className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            </div>

        <div className="flex gap-6 items-center">

          <Link
            to="/"
            className="hover:text-blue-600 transition font-medium"
            >
            Home
            </Link>

          <button className="text-xl">
            👤
          </button>

          <Link to="/products"
          className="hover:text-blue-600 transition font-medium"
          >
            Products
          </Link>

          <Link
                to="/cart"
                className="relative flex items-center gap-2"
                >
                🛒 Cart

                <span
                    className="
                    absolute
                    -top-2
                    -right-3
                    bg-red-600
                    text-white
                    rounded-full
                    min-w-[20px]
                    h-5
                    px-1
                    flex
                    items-center
                    justify-center
                    text-xs
                    font-bold
                    "
                    >
                        {cartItems.length}
                </span>
            </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;