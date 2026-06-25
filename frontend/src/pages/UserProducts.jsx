import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function UserProducts() {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] =
  useState("All");

  

  

 const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchProducts();
     const cart =
    JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
}, []);
  

  
  

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

   const addToCart = (product) => {
  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  setCartCount(cart.length);
};

  return( 
       
    <div className="min-h-screen bg-gray-100 p-5">

       <div className="flex justify-between items-center mb-5">

      <h1 className="text-3xl font-bold">
        Products
      </h1>

      <Link
        to="/cart"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Cart ({cartCount})
      </Link>

    </div>

      <input
  type="text"
  placeholder="Search Product..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full border p-3 rounded mb-4"
  
/>

<div className="flex gap-2 mb-5">

  {[
    "All",
    "Mobiles",
    "Accessories",
    "Earbuds",
    "Chargers",
  ].map((category) => (

    <button
      key={category}
      onClick={() =>
        setSelectedCategory(category)
      }
      className={`px-4 py-2 rounded ${
        selectedCategory === category
          ? "bg-blue-600 text-white"
          : "bg-gray-200"
      }`}
    >
      {category}
    </button>

    

  ))}

</div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {products
  .filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .filter((product) =>
    selectedCategory === "All"
      ? true
      : product.category ===
        selectedCategory
  )
  .map((product) => (

          <div
            key={product._id}
            className="bg-white rounded-xl shadow p-4"
          >

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
              ₹{product.price}
            </p>

            <p>
              Stock: {product.stock}
            </p>

            <div className="flex gap-2 mt-3">

            <Link
                to={`/product/${product._id}`}
                className="flex-1 bg-blue-600 text-white py-2 rounded text-center"
            >
                Details
            </Link>

            <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-green-600 text-white py-2 rounded"
            >
                Add To Cart
            </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default UserProducts;