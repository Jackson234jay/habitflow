import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const fullName = user?.user_metadata?.full_name || "";
  const firstName = fullName.split(" ")[0];
  console.log(user);

  return (
    <div className="bg-base-300 min-h-screen">
      <div>
        <Navbar />
      </div>
      <div>Welcome {firstName || user?.email}👋</div>
    </div>
  );
};

export default Dashboard;
