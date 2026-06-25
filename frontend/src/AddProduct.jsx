import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveProduct = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/products/add",
        form
      );

      alert("Product Added");

      setForm({
        name: "",
        price: "",
        category: "",
        stock: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-5 rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        Add Product
      </h2>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Product Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Price"
        name="price"
        value={form.price}
        onChange={handleChange}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Category"
        name="category"
        value={form.category}
        onChange={handleChange}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Stock"
        name="stock"
        value={form.stock}
        onChange={handleChange}
      />

      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
      />

      <button
        onClick={saveProduct}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save Product
      </button>
    </div>
  );
}

export default AddProduct;