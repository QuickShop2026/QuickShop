import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    salePrice: "",
    category: "",
    stock: "",
    description: "",
    image: "",
    images: [],
    specifications: [{ key: "", value: "" }],
    highlights: [{ title: "", value: "" }],
    isFeatured: false,
  });

  <Link
  to="/admin/products"
  className="bg-blue-600 text-white px-4 py-2 rounded"
>
  View Products
</Link>

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBrands();
    fetchCategories();
  }, []);

  const fetchBrands = async () => {
    const res = await axios.get("http://localhost:5000/api/brands");
    setBrands(res.data);
  };

  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:5000/api/categories");
    setCategories(res.data);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const uploadImage = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "quickshop_products");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dgbhbps6u/image/upload",
      data
    );

    return res.data.secure_url;
  };

  const handleMainImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const imageUrl = await uploadImage(file);

    setFormData((prev) => ({
      ...prev,
      image: imageUrl,
    }));

    setLoading(false);
  };

  const handleSupportingImages = async (e) => {
    const files = Array.from(e.target.files);

    setLoading(true);

    const uploaded = [];

    for (const file of files) {
      const url = await uploadImage(file);
      uploaded.push(url);
    }

    setFormData((prev) => ({
      ...prev,
      images: uploaded,
    }));

    setLoading(false);
  };

  const addSpecification = () => {
    setFormData({
      ...formData,
      specifications: [
        ...formData.specifications,
        { key: "", value: "" },
      ],
    });
  };

  const handleSpecificationChange = (
      index,
      field,
      value
    ) => {
      const updated = [
        ...formData.specifications,
      ];

      updated[index][field] = value;

      setFormData({
        ...formData,
        specifications: updated,
      });
    };

  const addHighlight = () => {
    setFormData({
      ...formData,
      highlights: [
        ...formData.highlights,
        { title: "", value: "" },
      ],
    });
  };

const handleHighlightChange = (
  index,
  field,
  value
) => {
  const updated = [
    ...formData.highlights,
  ];

  updated[index][field] = value;

  setFormData({
    ...formData,
    highlights: updated,
  });
};

  const saveProduct = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      "http://localhost:5000/api/products/add",
      formData
    );

    alert("Product Added Successfully");

    setFormData({
      name: "",
      brand: "",
      price: "",
      salePrice: "",
      category: "",
      stock: "",
      description: "",
      image: "",
      images: [],
      specifications: [
        {
          key: "",
          value: "",
        },
      ],
      highlights: [
        {
          title: "",
          value: "",
        },
      ],
      isFeatured: false,
    });

  } catch (error) {
    console.log(error);
    alert("Error Adding Product");
  }
};
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-5">Add Product</h1>

        <form onSubmit={saveProduct} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <div className="flex gap-2">
            <select
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="flex-1 border p-3 rounded"
            >
              <option value="">Select Brand</option>
              {brands.map((brand) => (
                <option key={brand._id} value={brand.name}>
                  {brand.name}
                </option>
              ))}
            </select>

            <button
              type="button"
              className="bg-green-600 text-white px-4 rounded"
              onClick={async () => {
                const name = prompt("Enter Brand Name");
                if (!name) return;

                await axios.post(
                  "http://localhost:5000/api/brands/add",
                  { name }
                );

                fetchBrands();
              }}
            >
              +
            </button>
          </div>

          <div className="flex gap-2">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="flex-1 border p-3 rounded"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option
                  key={category._id}
                  value={category.name}
                >
                  {category.name}
                </option>
              ))}
            </select>

            <button
              type="button"
              className="bg-green-600 text-white px-4 rounded"
              onClick={async () => {
                const name = prompt("Enter Category Name");
                if (!name) return;

                await axios.post(
                  "http://localhost:5000/api/categories/add",
                  { name }
                );

                fetchCategories();
              }}
            >
              +
            </button>
          </div>

          <input type="number" name="price" placeholder="Price"
            value={formData.price} onChange={handleChange}
            className="w-full border p-3 rounded" />

          <input type="number" name="salePrice" placeholder="Sale Price"
            value={formData.salePrice} onChange={handleChange}
            className="w-full border p-3 rounded" />

          <input type="number" name="stock" placeholder="Stock"
            value={formData.stock} onChange={handleChange}
            className="w-full border p-3 rounded" />

          <input type="file" onChange={handleMainImageUpload}
            className="w-full border p-3 rounded" />

          <input type="file" multiple onChange={handleSupportingImages}
            className="w-full border p-3 rounded" />

          {loading && <p>Uploading...</p>}

          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
            />
            Featured Product
          </label>

          <h3 className="font-bold">Specifications</h3>
          {formData.specifications.map(
            (spec, index) => (
                <div
                key={index}
                className="flex gap-2"
                >
                <input
                    value={spec.key}
                    onChange={(e) =>
                    handleSpecificationChange(
                        index,
                        "key",
                        e.target.value
                    )
                    }
                    className="flex-1 border p-2 rounded"
                    placeholder="Key"
                />

                <input
                    value={spec.value}
                    onChange={(e) =>
                    handleSpecificationChange(
                        index,
                        "value",
                        e.target.value
                    )
                    }
                    className="flex-1 border p-2 rounded"
                    placeholder="Value"
                />
                </div>
            )
            )}

          <button type="button"
            onClick={addSpecification}
            className="bg-green-600 text-white px-3 py-2 rounded">
            + Add Specification
          </button>

          <h3 className="font-bold">Highlights</h3>
          {formData.highlights.map(
            (item, index) => (
                <div
                key={index}
                className="flex gap-2"
                >
                <input
                    value={item.title}
                    onChange={(e) =>
                    handleHighlightChange(
                        index,
                        "title",
                        e.target.value
                    )
                    }
                    className="flex-1 border p-2 rounded"
                    placeholder="Title"
                />

                <input
                    value={item.value}
                    onChange={(e) =>
                    handleHighlightChange(
                        index,
                        "value",
                        e.target.value
                    )
                    }
                    className="flex-1 border p-2 rounded"
                    placeholder="Value"
                />
                </div>
            )
            )}

          <button type="button"
            onClick={addHighlight}
            className="bg-green-600 text-white px-3 py-2 rounded">
            + Add Highlight
          </button>

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded"
          >
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
