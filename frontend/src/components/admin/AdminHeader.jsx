import { useAuth } from "../../context/AuthContext";

function AdminHeader() {

  const { user } = useAuth();

  return (

    <div className="bg-white shadow h-16 px-6 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        Admin Dashboard
      </h1>

      <div className="flex items-center gap-4">

        <button className="text-xl">
          🔔
        </button>

        <div className="font-semibold">
          👋 {user?.name}
        </div>

      </div>

    </div>

  );
}

export default AdminHeader;