import { useEffect, useState } from "react";
import { getDashboardData } from "../../services/dashboardService";
import AdminLayout from "../../components/admin/AdminLayout";
import DashboardCard from "../../components/admin/DashboardCard";

function Dashboard() {

    const [dashboard, setDashboard] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalCustomers: 0,
    pendingOrders: 0,
    totalRevenue: 0,
    });

    const fetchDashboard = async () => {
  try {
    const res = await getDashboardData();

    setDashboard(res.data);

  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchDashboard();
}, []);


  return (
    <AdminLayout>

      <div className="grid md:grid-cols-4 gap-6">

        <DashboardCard
        title="Products"
        value={dashboard.totalProducts}
        color="bg-blue-600"
        />

        <DashboardCard
        title="Orders"
        value={dashboard.totalOrders}
        color="bg-green-600"
        />

        <DashboardCard
        title="Customers"
        value={dashboard.totalCustomers}
        color="bg-yellow-500"
        />

        <DashboardCard
        title="Revenue"
        value={`₹${dashboard.totalRevenue}`}
        color="bg-red-600"
        />
      </div>

    </AdminLayout>
  );
}

export default Dashboard;