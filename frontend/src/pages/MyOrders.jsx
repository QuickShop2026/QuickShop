import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getMyOrders } from "../services/orderService";
import { Link } from "react-router-dom";

function MyOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await getMyOrders(user._id);
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        
        📦 My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-10 text-center">
          <h2 className="text-xl font-semibold">
            No Orders Found
          </h2>
        </div>
      )  : (
         orders.map((order) => (
            <Link
            key={order._id}
            to={`/order/${order._id}`}
            >
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition">

                <div className="flex justify-between">

                <div>
                    <p className="text-gray-500">
                    Order ID
                    </p>

                    <h2 className="font-bold">
                    {order._id}
                    </h2>
                </div>

                <div>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    {order.orderStatus}
                    </span>
                </div>

                </div>

                <hr className="my-5" />

                {order.items.map((item) => (
                <div
                    key={item._id}
                    className="flex items-center justify-between py-3"
                >

                    <div className="flex items-center gap-4">

                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg border"
                    />

                    <div>
                        <h3 className="font-semibold">
                        {item.name}
                        </h3>

                        <p className="text-gray-500">
                        Qty : {item.quantity}
                        </p>
                    </div>

                    </div>

                    <h3 className="font-bold text-green-600">
                    ₹{item.price}
                    </h3>

                </div>
                ))}

                <hr className="my-5" />

                <div className="flex justify-between">

                <div>
                    <p>
                    Payment :
                    <span className="font-semibold ml-2">
                        {order.paymentMethod}
                    </span>
                    </p>

                    <p>
                    Status :
                    <span className="font-semibold ml-2">
                        {order.paymentStatus}
                    </span>
                    </p>
                </div>

                <div className="text-right">
                    <h2 className="text-2xl font-bold text-green-600">
                    ₹{order.totalAmount}
                    </h2>
                </div>

                </div>

            </div>
            </Link>
        ))
        )}
      
    </div>
    
    
  );
}

export default MyOrders;