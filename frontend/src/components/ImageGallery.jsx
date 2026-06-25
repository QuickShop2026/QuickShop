import { useState, useEffect } from "react";

function ImageGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  return (
    <div>

      {/* Main Image */}

      <div className="w-full h-[550px] border rounded-xl overflow-hidden bg-white flex items-center justify-center">

        <img
          src={selectedImage}
          alt={product.name}
          className="max-w-full max-h-full object-contain transition-all duration-300"
        />

      </div>

      {/* Thumbnails */}

      <div className="flex gap-3 mt-4 flex-wrap">

        {/* Main Image */}

        <img
          src={product.image}
          alt=""
          onMouseEnter={() => setSelectedImage(product.image)}
          onClick={() => setSelectedImage(product.image)}
          className={`w-20 h-20 object-cover rounded-lg border cursor-pointer transition-all duration-200 hover:scale-105 ${
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
            alt=""
            onMouseEnter={() => setSelectedImage(img)}
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 object-cover rounded-lg border cursor-pointer transition-all duration-200 hover:scale-105 ${
              selectedImage === img
                ? "border-blue-600 border-4"
                : "border-gray-300"
            }`}
          />

        ))}

      </div>

    </div>
  );
}

export default ImageGallery;