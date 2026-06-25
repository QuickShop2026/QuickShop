import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import { getProducts } from "../services/productService";
import { useCart } from "../context/CartContext";

function UserProducts() {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { cartItems,addToCart,} = useCart();

  useEffect(() => { fetchProducts();}, []);
 
 const fetchProducts = async () => {
  try {
    const res = await getProducts();

    setProducts(res.data);
  } catch (error) {
    console.log(error);
  }
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
        Cart ({cartItems.length})
      </Link>

    </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

<CategoryFilter
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>

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
        <ProductCard
          key={product._id}
          product={product}
          showUserButtons={true}
          onAddToCart={addToCart}
        />
      ))}

      </div>

    </div>
  );
}

export default UserProducts;