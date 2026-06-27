import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import OrderDetails from "./pages/OrderDetails";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import EditProduct from "./pages/EditProduct";
import UserProducts from "./pages/UserProducts";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import Dashboard from "./pages/admin/Dashboard";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/my-orders" element={<MyOrders />}/>
        <Route path="/order/:id" element={<OrderDetails />}/>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<UserProducts />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/edit-product/:id" element={<EditProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        
      </Routes>
    </>
  );
}

export default App;