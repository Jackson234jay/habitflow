import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const fullName = user?.user_metadata?.full_name || "";
  const firstName = fullName.split(" ")[0];
  console.log(user);

  return <div>Welcome {firstName || user?.email}</div>;
};

export default Dashboard;
