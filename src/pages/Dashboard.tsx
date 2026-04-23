import { CircleCheck, Flame, Plus, Target } from "lucide-react";
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* CARD 1 */}
          <div className="card card-sm bg-base-100 shadow-sm flex-1">
            <div className="card-body">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-info/30">
                  <Target className="text-info-content" size={20} />
                </div>

                <div>
                  <h2 className="text-sm font-medium text-secondary-content">
                    Total habits
                  </h2>
                  <p className="font-bold text-2xl">6</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-sm bg-base-100 shadow-sm flex-1">
            <div className="card-body">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-success/30">
                  <CircleCheck className="text-success-content" size={20} />
                </div>

                <div>
                  <h2 className="text-sm font-medium text-secondary-content">
                    Today's Progress
                  </h2>
                  <p className="font-bold text-2xl">4/6</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="card card-sm bg-base-100 shadow-sm flex-1">
            <div className="card-body">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/30">
                  <Flame className="text-accent-content" size={20} />
                </div>

                <div>
                  <h2 className="text-sm font-medium text-secondary-content">
                    Best Streak
                  </h2>
                  <p className="font-bold text-2xl">30 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Your Habits</h1>

          <div className="flex gap-2">
            <button className="btn btn-sm bg-neutral text-neutral-content border-none">
              All
            </button>

            <button className="btn btn-ghost text-neutral-content btn-sm hover:btn-secondary">
              Morning
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
