import Layout from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const fullName = user?.user_metadata?.full_name || "";
  const firstName = fullName.split(" ")[0];
  console.log(user);

  return (
    <Layout>
      <h1 className="text-xl font-bold">
        Welcome {firstName || user?.email}👋
      </h1>
    </Layout>
  );
};

export default Dashboard;
