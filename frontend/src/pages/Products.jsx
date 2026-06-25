import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";


function Products() {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] =
  useState("All");

 
  useEffect(() => {
    fetchProducts();
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

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/products/${id}`
      );

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">

      <h1 className="text-3xl font-bold mb-5">
        Products
        
      </h1>

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
          <ProductCard
            key={product._id}
            product={product}
            showAdminButtons={true}
            onDelete={deleteProduct}
          />
        ))}

      </div>

    </div>
  );
}

export default Products;