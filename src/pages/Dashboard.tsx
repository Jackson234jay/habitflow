import { Plus } from "lucide-react";
import Layout from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const fullName = user?.user_metadata?.full_name || "";
  const firstName = fullName.split(" ")[0];
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(today);
  console.log(user);

  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        Good morning {firstName || user?.email}👋
      </h1>
      <div className="flex justify-between">
        <p className="text-neutral-content">
          {formattedDate}
          <span className="px-1">{`\u2022`}</span>You have 2 habits left for
          today.
        </p>
        <button className="btn  bg-[#C084FC] hover:bg-primary-content outline-none border-transparent flex items-center gap-2 text-white">
          <span className="">
            <Plus />
          </span>
          Add Habit
        </button>
      </div>
      <div className="py-4">
        <div className="card bg-base-100">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
