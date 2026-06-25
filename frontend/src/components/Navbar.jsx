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

        <div className="flex gap-6 items-center">

          <Link to="/">Home</Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/admin/products">
            Admin
          </Link>

          <Link
            to="/cart"
            className="relative"
          >
            🛒 Cart

            <span className="ml-2 bg-red-600 text-white rounded-full px-2 text-sm">
              {cartItems.length}
            </span>

          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;