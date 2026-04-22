import { useState } from "react";
import { NavLink } from "react-router";
import {
  Bell,
  ChartNoAxesColumn,
  CheckCircle,
  LayoutGrid,
  Menu,
  Settings,
  X,
} from "lucide-react";
import ThemeController from "./ThemeController";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("dashboard");

  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <div
        className={`
    fixed md:static top-0 left-0 h-screen w-64 bg-base-100 shadow-sm z-50
    border-r border-r-neutral 
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
      >
        <div className="p-6 flex items-center font-semibold text-lg gap-3  bg-base-100">
          <span className="w-8 h-8 rounded-xl text-xl font-bold shadow-lg shadow-primary flex bg-primary-content text-white items-center justify-center">
            H
          </span>
          HabitFlow
        </div>

        <nav className="p-4  space-y-3">
          <NavLink
            to={"/dashboard"}
            onClick={() => setSelectedItem("dashboard")}
            className={({ isActive }) =>
              `w-full flex text-md items-center gap-3 px-4 py-2 rounded transition-colors ${
                isActive
                  ? "bg-primary text-primary-content font-semibold"
                  : "hover:bg-base-200"
              }`
            }
          >
            <LayoutGrid className="w-5 h-5" />
            Dashboard
          </NavLink>
          <NavLink
            to={"/habits"}
            onClick={() => setSelectedItem("habits")}
            className={({ isActive }) =>
              `w-full text-md flex items-center gap-3 px-4 py-2 rounded transition-colors ${
                isActive
                  ? "bg-primary text-primary-content font-semibold"
                  : "hover:bg-base-200"
              }`
            }
          >
            <CheckCircle className="w-5 h-5" />
            Habits
          </NavLink>
          <NavLink
            to={"/analytics"}
            onClick={() => setSelectedItem("analytics")}
            className={({ isActive }) =>
              `w-full text-md flex items-center gap-3 px-4 py-2 rounded transition-colors ${
                isActive
                  ? "bg-primary text-primary-content font-semibold"
                  : "hover:bg-base-200"
              }`
            }
          >
            <ChartNoAxesColumn className="w-5 h-5" />
            Analytics
          </NavLink>
          <NavLink
            to={"/settings"}
            onClick={() => setSelectedItem("settings")}
            className={({ isActive }) =>
              `w-full flex text-md items-center gap-3 px-4 py-2 rounded transition-colors ${
                isActive
                  ? "bg-primary text-primary-content font-semibold"
                  : "hover:bg-base-200"
              }`
            }
          >
            <Settings className="w-5 h-5" />
            Settings
          </NavLink>
        </nav>
      </div>

      {/* RIGHT SIDE (TOPBAR + CONTENT) */}
      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}
        <div className="flex items-center justify-between p-4 border-b border-b-neutral bg-base-200">
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu />
          </button>
          <div>
            <ThemeController />
          </div>
        </div>

        {/* PAGE CONTENT */}
        <main className="p-6 bg-base-300 flex-1">{children}</main>
      </div>

      {/* OVERLAY (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;
