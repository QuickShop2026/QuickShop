import { useState } from "react";
import CartSummary from "../components/CartSummary";
import { useAuth } from "../context/AuthContext";

function Checkout() {
  const { user } = useAuth();

  const [address, setAddress] = useState({
    fullName: user?.name || "",
    mobile: user?.mobile || "",
    email: user?.email || "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = () => {
    const {
      fullName,
      mobile,
      email,
      address: fullAddress,
      city,
      state,
      pincode,
    } = address;

    if (
      !fullName ||
      !mobile ||
      !email ||
      !fullAddress ||
      !city ||
      !state ||
      !pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    console.log(address);

    alert("Address Saved Successfully");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">

      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Address Form */}

        <div className="bg-white p-5 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-5">
            Delivery Address
          </h2>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={address.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={address.mobile}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={address.email}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <textarea
            name="address"
            placeholder="Full Address"
            value={address.address}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
            rows="4"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            value={address.state}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={address.pincode}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <button
            onClick={handleCheckout}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Continue To Payment
          </button>

        </div>

        {/* Order Summary */}

        <div>
          <CartSummary />
        </div>

      </div>

    </div>
  );
}

export default Checkout;