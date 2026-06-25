import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import { getProducts } from "../services/productService";


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
    const res = await getProducts();

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
    await removeProduct(id);
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
            showAdminButtons={true}
            onDelete={deleteProduct}
          />
        ))}

      </div>

    </div>
  );
}

export default Products;