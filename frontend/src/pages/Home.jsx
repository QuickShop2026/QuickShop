import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Choice Mobiles
      </h1>

      <Link
        to="/admin/add-product"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Product
      </Link>
    </div>
  );
}

export default Home;