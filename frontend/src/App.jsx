import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import EditProduct from "./pages/EditProduct";
import UserProducts from "./pages/UserProducts";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/products"
        element={<UserProducts />}
      />

      <Route
        path="/admin/add-product"
        element={<AddProduct />}
      />

      <Route
        path="/admin/products"
        element={<Products />}
      />

      <Route
        path="/admin/edit-product/:id"
        element={<EditProduct />}
      />

      <Route
        path="/cart"
        element={<Cart />}
      />

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />
    </Routes>
  );
}

export default App;