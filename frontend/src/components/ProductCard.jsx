import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({product,showAdminButtons = false,
  showUserButtons = false,onDelete,onAddToCart,})
{
    const { cartItems } = useCart();
    const isInCart = cartItems.some(
  (item) => item._id === product._id
);
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded"
      />
      <h2 className="font-bold mt-3">
        {product.name}
      </h2>

      <p className="text-gray-500">
        {product.brand}
      </p>

      <p className="text-green-600 font-bold">
        ₹{product.salePrice || product.price}
      </p>
      <p>
        Stock : {product.stock}
      </p>
      <div className="flex gap-2 mt-3">
        {showAdminButtons && (
          <>
            <Link
              to={`/admin/edit-product/${product._id}`}
              className="flex-1 bg-yellow-500 text-white py-2 rounded text-center"
            >
              Edit
            </Link>

            <button
              onClick={() => onDelete(product._id)}
              className="flex-1 bg-red-600 text-white py-2 rounded"
            >
              Delete
            </button>
          </>
        )}
        {showUserButtons && (
          <>
            <Link
              to={`/product/${product._id}`}
              className="flex-1 bg-blue-600 text-white py-2 rounded text-center"
            >
              Details
            </Link>

            {isInCart ? (
            <Link
                to="/cart"
                className="flex-1 bg-orange-500 text-white py-2 rounded text-center"
            >
                Go To Cart
            </Link>
            ) : (
            <button
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-green-600 text-white py-2 rounded"
            >
                Add To Cart
            </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCard;