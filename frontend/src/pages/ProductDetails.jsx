import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [selectedImage, setSelectedImage] =
  useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );

      setProduct(res.data);
      setProduct(res.data);

        setSelectedImage(
        res.data.image
        );
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

    alert("Added To Cart");
  };

  if (!product) {
    return <h1 className="p-5">Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">

      <div className="bg-white p-6 rounded-xl shadow">

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT SIDE */}

          <div>

            {/* Main Preview Image */}

            <div className="w-full h-[550px] overflow-hidden rounded-xl border bg-white flex items-center justify-center">

              <img
                src={selectedImage}
                alt={product.name}
                className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-125 cursor-zoom-in"
              />

            </div>

            {/* Thumbnails */}

            <div className="flex gap-3 mt-4 flex-wrap">

              {/* Main Image Thumbnail */}

              <img
                src={product.image}
                alt={product.name}
                onMouseEnter={() => setSelectedImage(product.image)}
                onClick={() => setSelectedImage(product.image)}
                className={`w-24 h-24 object-cover rounded border cursor-pointer transition-all duration-200 hover:scale-105 ${
                  selectedImage === product.image
                    ? "border-blue-600 border-4"
                    : "border-gray-300"
                }`}
              />

              {/* Supporting Images */}

              {product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Image ${index + 1}`}
                  onMouseEnter={() => setSelectedImage(img)}
                  onClick={() => setSelectedImage(img)}
                  className={`w-24 h-24 object-cover rounded border cursor-pointer transition-all duration-200 hover:scale-105 ${
                    selectedImage === img
                      ? "border-blue-600 border-4"
                      : "border-gray-300"
                  }`}
                />
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <h1 className="text-4xl font-bold">
              {product.name}
            </h1>

            <p className="text-gray-500 mt-2">
              {product.brand}
            </p>

            <div className="mt-4">

              <span className="text-gray-400 line-through text-xl mr-3">
                ₹{product.price}
              </span>

              <span className="text-green-600 text-3xl font-bold">
                ₹{product.salePrice || product.price}
              </span>

            </div>

            <p className="mt-3">
              Stock Available :
              <span className="font-bold ml-2">
                {product.stock}
              </span>
            </p>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() => addToCart(product)}
                className="bg-green-600 text-white px-6 py-3 rounded"
              >
                Add To Cart
              </button>

              <button
                className="bg-orange-500 text-white px-6 py-3 rounded"
              >
                Buy Now
              </button>

              

            </div>
            {/* SPECIFICATIONS */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Specifications
          </h2>

          <table className="w-full border">

            <tbody>

              {product.specifications?.map(
                (spec, index) => (
                  <tr
                    key={index}
                    className="border"
                  >
                    <td className="p-3 font-semibold border">
                      {spec.key}
                    </td>

                    <td className="p-3 border">
                      {spec.value}
                    </td>
                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

        {/* HIGHLIGHTS */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Highlights
          </h2>

          <ul className="list-disc pl-6">

            {product.highlights?.map(
              (item, index) => (
                <li key={index}>
                  <strong>
                    {item.title}
                  </strong>{" "}
                  {item.value}
                </li>
              )
            )}

          </ul>

        </div>

        {/* DESCRIPTION */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-4">
            Description
          </h2>

          <p className="leading-7">
            {product.description}
          </p>

        </div>


          </div>

        </div>

        
      </div>

    </div>
  );
}

export default ProductDetails;