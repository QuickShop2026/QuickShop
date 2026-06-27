import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: "📊",
    path: "/admin/dashboard",
  },
  {
    title: "Products",
    icon: "📦",
    path: "/admin/products",
  },
  {
    title: "Categories",
    icon: "📂",
    path: "/admin/categories",
  },
  {
    title: "Brands",
    icon: "🏷️",
    path: "/admin/brands",
  },
  {
    title: "Orders",
    icon: "📋",
    path: "/admin/orders",
  },
  {
    title: "Customers",
    icon: "👥",
    path: "/admin/customers",
  },
  {
    title: "Inventory",
    icon: "📦",
    path: "/admin/inventory",
  },
  {
    title: "Reports",
    icon: "📈",
    path: "/admin/reports",
  },
  {
    title: "Settings",
    icon: "⚙️",
    path: "/admin/settings",
  },
];

function AdminSidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white">

      <div className="text-2xl font-bold p-6 border-b border-slate-700">
        🛍️ QuickShop ERP
      </div>

      <div className="mt-4">

        {menuItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-4 transition ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </NavLink>

        ))}

      </div>

    </div>
  );
}

export default AdminSidebar;