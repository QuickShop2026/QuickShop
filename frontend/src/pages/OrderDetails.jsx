import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../services/orderService";

function OrderDetails() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await getOrderById(id);
        setOrder(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrder();
  }, [id]);

  if (!order) {
    return (
      <h2 className="text-center mt-10">
        Loading...
      </h2>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Order Details
      </h1>

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="font-bold">
          Order ID
        </h2>

        <p className="text-gray-500 mb-5">
          {order._id}
        </p>

        <div className="mb-6">

          <h2 className="font-bold mb-2">
            Shipping Address
          </h2>

          <p>{order.shippingAddress.fullName}</p>
          <p>{order.shippingAddress.mobile}</p>
          <p>{order.shippingAddress.email}</p>
          <p>{order.shippingAddress.address}</p>
          <p>
            {order.shippingAddress.city},
            {" "}
            {order.shippingAddress.state}
          </p>
          <p>{order.shippingAddress.pincode}</p>

        </div>

        <div>

          <h2 className="font-bold mb-3">
            Products
          </h2>

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
             

        </div>

        <div className="mt-6 flex justify-between">

          <div>

            <p>
              Payment :
              {" "}
              {order.paymentMethod}
            </p>

            <p>
              Payment Status :
              {" "}
              {order.paymentStatus}
            </p>

            <p>
              Order Status :
              {" "}
              {order.orderStatus}
            </p>

          </div>

          <h2 className="text-2xl font-bold text-green-600">
            ₹{order.totalAmount}
          </h2>

        </div>

      </div>

    </div>
  );
}

export default OrderDetails;